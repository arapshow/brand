// 도메인 조회 중계: RDAP(공개·무료·키 없음)로 등록 여부만 확인한다. 입력한 이름은 저장·기록하지 않는다.
// RDAP 서버를 직접 확인한 확장자만 쓴다(.co·.io는 공개 RDAP가 불안정해 '없음'을 '사용 가능'으로 잘못 알릴 수 있어 뺌).
const ALLOWED = ['com', 'net', 'org', 'kr'];
const SERVER = {
  com: 'https://rdap.verisign.com/com/v1/domain/',
  net: 'https://rdap.verisign.com/net/v1/domain/',
  org: 'https://rdap.publicinterestregistry.org/rdap/domain/',
  kr: 'https://rdap.nic.or.kr/domain/'
};
const NAME_RE = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/;

async function check(name, tld) {
  const url = `${SERVER[tld]}${name}.${tld}`;
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), 7000);
  try {
    const r = await fetch(url, { signal: ctl.signal, redirect: 'follow', headers: { accept: 'application/rdap+json' } });
    if (r.status === 404) return 'free';
    if (r.status === 200) return 'taken';
    return 'unknown';
  } catch { return 'unknown'; } finally { clearTimeout(t); }
}

export async function onRequestGet({ request }) {
  const q = new URL(request.url).searchParams;
  const names = [...new Set((q.get('names') || '').toLowerCase().split(',').map((s) => s.trim()).filter((s) => NAME_RE.test(s)))].slice(0, 12);
  const tlds = (q.get('tlds') || ALLOWED.join(',')).split(',').filter((t) => ALLOWED.includes(t)).slice(0, 4);
  const jobs = [];
  for (const n of names) for (const t of tlds) jobs.push([n, t]);
  const out = {};
  for (let i = 0; i < jobs.length; i += 6) {
    const chunk = jobs.slice(i, i + 6);
    const res = await Promise.all(chunk.map(([n, t]) => check(n, t)));
    chunk.forEach(([n, t], k) => { (out[n] ||= {})[t] = res[k]; });
  }
  return new Response(JSON.stringify(out), { headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
}
