// 브랜드 네이밍 리서치 — 화면 로직. 입력한 이름은 서버에 저장하지 않고, 도메인 조회만 /api/domain으로 중계한다.
const T = {
  ko: { title: '브랜드 네이밍 리서치', sub: '이름을 짓기 전에, 먼저 가볍게 살펴보세요.', ph: '브랜드 이름 (한글·영문·일문)', go: '조사 시작',
    hint: '초기 아이디어 단계용 참고 조사입니다. 정식 조사는 아래 링크에서 직접 하세요.', pdfTitle: '브랜드 네이밍 브리핑',
    h_domain: '도메인', h_tm: '상표 확인', tmNote: '같은 이름이 있는지, 소리·뜻이 비슷한 이름이 같은 분야에 있는지 보세요. 보신 뒤 체크해 두면 PDF에 담깁니다.',
    tip1: '같은 철자뿐 아니라 발음·뜻이 비슷한 이름도 거절 사유가 됩니다.', tip2: '내 상품·서비스와 같은 분야(니스 분류)에서 겹치는지가 핵심입니다.', tip3: "등록된 것뿐 아니라 '출원 중'인 것도 확인하세요.",
    h_en: '영어 표기 제안', enNote: '국어 로마자 표기법 기반의 기계 변환입니다. 뜻 번역은 하지 않습니다.', h_var: '.com 변형 제안', varBtn: '변형 도메인 조회',
    h_idea: '발상 도우미 링크', h_logo: '심볼 + 로고 시안', logoNote: '발상용 시안입니다. 기존 로고와 비슷하지 않은지는 따로 확인하세요.', shuffle: '다시 섞기',
    h_memo: '메모', memoPh: '이 이름을 고른 이유, 확인할 것…', pdf: '브리핑 PDF 인쇄 / 저장',
    disc: '이 결과는 참고용이며 법률 자문이 아닙니다. 등록 가능성은 공식 검색과 전문가(변리사) 검토로 확인하세요. 입력한 이름은 서버에 저장하지 않습니다.',
    free: '가능', taken: '사용 중', unknown: '확인 불가', checking: '조회 중…', comOk: '.com 사용 가능', comNo: '.com은 이미 사용 중이에요', domainNeedsLatin: '영문 이름이 있어야 도메인을 조회할 수 있어요. 아래 영어 표기 제안을 눌러 보세요.',
    open: '열기', copyOpen: '복사 후 열기', st0: '미확인', st1: '깨끗해 보임', st2: '비슷한 것 있음', st3: '같은 것 있음', copied: '이름을 복사했어요. 검색창에 붙여넣으세요.',
    varNote: '.com이 안 될 때 써 볼 만한 변형입니다.', varNoteOk: '.com이 가능해도 참고용 변형을 드려요.', pickToUse: '누르면 이 이름으로 다시 조사',
    sKR: '한국 · KIPRIS', sKRd: '특허청 상표 검색', sJP: '일본 · J-PlatPat', sJPd: '일본 특허청 상표 검색', sEU: '유럽 · TMview', sEUd: 'EU와 70여 기관 통합', sEU2: '유럽 · EUIPO eSearch', sEU2d: 'EU 상표청 검색', sUS: '미국 · USPTO', sUSd: '미국 상표 검색', sWI: '세계 · WIPO', sWId: '국제 상표 DB',
    dateLabel: '조사일', nameLabel: '조사 이름', saved: 'SVG를 저장했어요.', memoPdf: '메모' },
  en: { title: 'Brand Naming Research', sub: 'Take a light look before you name it.', ph: 'Brand name (Korean · English · Japanese)', go: 'Start',
    hint: 'A rough early-stage check. Do the formal search yourself with the links below.', pdfTitle: 'Brand Naming Brief',
    h_domain: 'Domains', h_tm: 'Trademarks', tmNote: 'Look for identical names, and similar-sounding or similar-meaning names in your field. Tick your findings and they go into the PDF.',
    tip1: 'Similar sound or meaning can be grounds for refusal, not just identical spelling.', tip2: 'What matters is overlap in your own class of goods/services (Nice class).', tip3: "Check pending applications too, not only registered marks.",
    h_en: 'English spellings', enNote: 'Mechanical romanization (Revised Romanization). Meaning is not translated.', h_var: '.com variations', varBtn: 'Check variations',
    h_idea: 'Idea-hunting links', h_logo: 'Symbol + logo drafts', logoNote: 'Drafts for inspiration. Check separately that they do not resemble existing logos.', shuffle: 'Shuffle',
    h_memo: 'Notes', memoPh: 'Why this name, what to verify…', pdf: 'Print / save brief as PDF',
    disc: 'For reference only, not legal advice. Confirm registrability with official searches and an IP professional. The name you enter is not stored on a server.',
    free: 'free', taken: 'taken', unknown: 'unknown', checking: 'checking…', comOk: '.com is available', comNo: '.com is already taken', domainNeedsLatin: 'A Latin-letter name is needed to check domains. Try the English spellings below.',
    open: 'Open', copyOpen: 'Copy & open', st0: 'Not checked', st1: 'Looks clear', st2: 'Similar found', st3: 'Identical found', copied: 'Name copied. Paste it into the search box.',
    varNote: 'Variations to try when .com is taken.', varNoteOk: 'Variations for reference, even if .com is free.', pickToUse: 'Click to research this name',
    sKR: 'Korea · KIPRIS', sKRd: 'KIPO trademark search', sJP: 'Japan · J-PlatPat', sJPd: 'JPO trademark search', sEU: 'Europe · TMview', sEUd: 'EU + 70 offices', sEU2: 'Europe · EUIPO eSearch', sEU2d: 'EU trade mark office', sUS: 'USA · USPTO', sUSd: 'US trademark search', sWI: 'World · WIPO', sWId: 'Global Brand Database',
    dateLabel: 'Date', nameLabel: 'Name', saved: 'SVG saved.', memoPdf: 'Notes' },
  ja: { title: 'ブランド・ネーミング・リサーチ', sub: '名前を決める前に、まず軽く調べてみましょう。', ph: 'ブランド名（韓国語・英語・日本語）', go: '調べる',
    hint: '初期アイデア段階の参考調査です。正式な調査は下のリンクでご自身で行ってください。', pdfTitle: 'ブランド・ネーミング・ブリーフ',
    h_domain: 'ドメイン', h_tm: '商標チェック', tmNote: '同じ名前、音や意味が似た名前が同じ分野にないか確認してください。チェックした内容はPDFに入ります。',
    tip1: '綴りが同じでなくても、音・意味が似ていると拒絶理由になります。', tip2: '自分の商品・サービスと同じ区分（ニース分類）で重なるかが重要です。', tip3: '登録済みだけでなく「出願中」も確認しましょう。',
    h_en: '英語表記の提案', enNote: '韓国語ローマ字表記による機械変換です。意味の翻訳はしません。', h_var: '.com の別案', varBtn: '別案のドメインを調べる',
    h_idea: '発想のヒントリンク', h_logo: 'シンボル + ロゴ案', logoNote: '発想用の案です。既存のロゴに似ていないか別途確認してください。', shuffle: 'シャッフル',
    h_memo: 'メモ', memoPh: 'この名前を選んだ理由、確認すること…', pdf: 'ブリーフをPDFで印刷／保存',
    disc: '参考情報であり法的助言ではありません。登録可能性は公式検索と専門家（弁理士）の確認でご確認ください。入力した名前はサーバーに保存されません。',
    free: '取得可', taken: '使用中', unknown: '不明', checking: '確認中…', comOk: '.com は取得できます', comNo: '.com はすでに使われています', domainNeedsLatin: 'ドメイン確認には英字の名前が必要です。下の英語表記案を押してみてください。',
    open: '開く', copyOpen: 'コピーして開く', st0: '未確認', st1: '問題なさそう', st2: '類似あり', st3: '同一あり', copied: '名前をコピーしました。検索欄に貼り付けてください。',
    varNote: '.com が取れないときに試したい別案です。', varNoteOk: '.com が取れても参考の別案です。', pickToUse: '押すとこの名前で調べ直します',
    sKR: '韓国 · KIPRIS', sKRd: '韓国特許庁の商標検索', sJP: '日本 · J-PlatPat', sJPd: '特許庁の商標検索', sEU: '欧州 · TMview', sEUd: 'EUと70余りの機関', sEU2: '欧州 · EUIPO eSearch', sEU2d: 'EU知的財産庁', sUS: '米国 · USPTO', sUSd: '米国商標検索', sWI: '世界 · WIPO', sWId: '国際ブランドDB',
    dateLabel: '調査日', nameLabel: '調査名', saved: 'SVGを保存しました。', memoPdf: 'メモ' }
};
let lang = 'ko';
try { lang = localStorage.getItem('brandLang') || (/^ja/i.test(navigator.language) ? 'ja' : /^ko/i.test(navigator.language) ? 'ko' : 'en'); } catch {}
const t = (k) => (T[lang] && T[lang][k]) || T.ko[k] || k;
const $ = (s) => document.querySelector(s);
const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((n) => { n.textContent = t(n.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach((n) => { n.placeholder = t(n.dataset.i18nPh); });
  document.querySelectorAll('.lang button').forEach((b) => b.classList.toggle('on', b.dataset.lang === lang));
  document.title = t('title') + ' · brand.arapshow.net';
  if (state.name) render(false);
}

// ---- 한글 → 로마자 (국어 로마자 표기법, 기본형) ----
const INI = ['g','kk','n','d','tt','r','m','b','pp','s','ss','','j','jj','ch','k','t','p','h'];
const MED = ['a','ae','ya','yae','eo','e','yeo','ye','o','wa','wae','oe','yo','u','wo','we','wi','yu','eu','ui','i'];
const FIN = ['','k','k','k','n','n','n','t','l','k','m','l','l','l','p','l','m','p','p','t','t','ng','t','t','k','t','p','t'];
const FIN_LINK = { 1:'g',2:'kk',4:'n',7:'d',8:'r',16:'m',17:'b',19:'s',20:'ss',22:'j',23:'ch',24:'k',25:'t',26:'p' };
function roman(s) {
  const chars = [...s]; let out = '';
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i].charCodeAt(0);
    if (c < 0xac00 || c > 0xd7a3) { if (/[a-zA-Z0-9]/.test(chars[i])) out += chars[i].toLowerCase(); continue; }
    const n = c - 0xac00; const ini = Math.floor(n / 588), med = Math.floor((n % 588) / 28), fin = n % 28;
    let nextIni = -1;
    if (chars[i + 1]) { const d = chars[i + 1].charCodeAt(0); if (d >= 0xac00 && d <= 0xd7a3) nextIni = Math.floor((d - 0xac00) / 588); }
    let myIni = INI[ini];
    if (i > 0 && state.linked && state.linked.has(i)) myIni = state.linked.get(i);
    let tail = FIN[fin];
    if (fin && nextIni === 11 && FIN_LINK[fin]) { tail = ''; (state.linked ||= new Map()).set(i + 1, FIN_LINK[fin]); }
    out += myIni + MED[med] + tail;
  }
  return out;
}
function romanVariants(s) {
  state.linked = new Map(); const a = roman(s);
  const b = a.replace(/eo/g, 'o').replace(/eu/g, 'u');
  const c = a.replace(/(kk|tt|pp|jj)/g, (m) => m[0]);
  const d = b.replace(/(kk|tt|pp|jj)/g, (m) => m[0]);
  return [...new Set([a, b, c, d])].filter((x) => x && x.length >= 2).slice(0, 4);
}

// ---- .com 변형 ----
function variants(base) {
  const b = base.toLowerCase().replace(/[^a-z0-9]/g, ''); if (b.length < 2) return [];
  const list = [];
  ['get', 'try', 'my', 'go', 'the', 'use'].forEach((p) => list.push(p + b));
  ['hq', 'lab', 'app', 'ly', 'hub', 'co', 'now'].forEach((x) => list.push(b + x));
  if (/er$/.test(b)) list.push(b.slice(0, -2) + 'r');
  if (b.length >= 5) list.push(b[0] + b.slice(1).replace(/[aeiou]/g, ''));
  list.push(b + 'x', b + b.slice(-1));
  return [...new Set(list)].filter((x) => x !== b && /^[a-z0-9]{3,30}$/.test(x)).slice(0, 12);
}

// ---- 상태 ----
const state = { name: '', latin: '', domains: {}, tm: {}, seed: 1 };
const TLDS = ['com', 'net', 'org', 'kr'];
const HAS_HANGUL = (s) => /[가-힣]/.test(s);
const IS_LATIN = (s) => /^[a-z0-9-]+$/.test(s);

async function fetchDomains(names, tlds) {
  const r = await fetch(`/api/domain?names=${encodeURIComponent(names.join(','))}&tlds=${tlds.join(',')}`);
  if (!r.ok) throw new Error('domain');
  return r.json();
}
function stars(n) { const w = $('#domainStars'); w.textContent = ''; if (n == null) return; w.append('★'.repeat(n)); const i = el('i', null, '★'.repeat(5 - n)); w.append(i); w.title = `${n}/5`; }
function score(d) {
  if (!d) return null; const f = (k) => d[k] === 'free';
  if (Object.values(d).every((v) => v === 'unknown')) return null;
  return Math.max(1, (f('com') ? 3 : 0) + (f('net') ? 1 : 0) + ((f('org') || f('kr')) ? 1 : 0));
}
function chip(label, status, extra) { const c = el('span', 'chip ' + status, label); if (extra) c.title = extra; return c; }

async function renderDomains() {
  const box = $('#domainChips'); box.textContent = ''; stars(null);
  if (!state.latin) { $('#domainNote').textContent = t('domainNeedsLatin'); return; }
  $('#domainNote').textContent = '';
  TLDS.forEach((x) => box.append(chip(`${state.latin}.${x} · ${t('checking')}`, 'loading')));
  try {
    const data = await fetchDomains([state.latin], TLDS); const d = data[state.latin] || {}; state.domains = d; box.textContent = '';
    TLDS.forEach((x) => box.append(chip(`${state.latin}.${x} · ${t(d[x] || 'unknown')}`, d[x] || 'unknown')));
    stars(score(d)); $('#domainNote').textContent = d.com === 'free' ? t('comOk') : d.com === 'taken' ? t('comNo') : '';
  } catch { box.textContent = ''; $('#domainNote').textContent = t('unknown'); }
}

function renderEn() {
  const sec = $('#sec-en'); const box = $('#enChips'); box.textContent = '';
  if (!HAS_HANGUL(state.name)) { sec.hidden = true; return; }
  sec.hidden = false;
  romanVariants(state.name).forEach((v) => { const b = el('button', 'chip', v); b.type = 'button'; b.title = t('pickToUse'); b.addEventListener('click', () => { $('#q').value = v; start(v); }); box.append(b); });
}

async function renderVariants() {
  const box = $('#varChips'); box.textContent = ''; const btn = $('#varBtn');
  const vs = variants(state.latin); state.vars = vs;
  btn.hidden = !vs.length; $('#varNote').textContent = vs.length ? (state.domains.com === 'free' ? t('varNoteOk') : t('varNote')) : t('domainNeedsLatin');
  vs.forEach((v) => { const b = el('button', 'chip', v + '.com'); b.type = 'button'; b.dataset.v = v; b.title = t('pickToUse'); b.addEventListener('click', () => { $('#q').value = v; start(v); }); box.append(b); });
}
async function checkVariants() {
  const vs = state.vars || []; if (!vs.length) return; const btn = $('#varBtn'); btn.disabled = true;
  try { const data = await fetchDomains(vs, ['com']); document.querySelectorAll('#varChips .chip').forEach((c) => { const s = (data[c.dataset.v] || {}).com || 'unknown'; c.className = 'chip ' + s; c.textContent = `${c.dataset.v}.com · ${t(s)}`; }); } catch {}
  btn.disabled = false;
}

const SITES = (q) => {
  const e = encodeURIComponent(q);
  return [
    { k: 'KR', url: 'https://www.kipris.or.kr/khome/main.do', copy: true },
    { k: 'JP', url: 'https://www.j-platpat.inpit.go.jp/t0100', copy: true },
    { k: 'EU', url: `https://www.tmdn.org/tmview/#/tmview/results?page=1&pageSize=30&criteria=F&basicSearch=${e}` },
    { k: 'EU2', url: `https://euipo.europa.eu/eSearch/#basic/1+1+1+1/100+100+100+100/${e}` },
    { k: 'US', url: 'https://tmsearch.uspto.gov/search/search-information', copy: true },
    { k: 'WI', url: `https://branddb.wipo.int/en/quicksearch?by=brandName&v=${e}&rows=30&sort=score%20desc&start=0` }
  ];
};
function renderTm() {
  const box = $('#tmList'); box.textContent = '';
  SITES(state.name).forEach((s) => {
    const c = el('div', 'tmc'); c.append(el('b', null, t('s' + s.k)), el('small', null, t('s' + s.k + 'd')));
    const row = el('div', 'row'); const a = el('a', null, s.copy ? t('copyOpen') : t('open')); a.href = s.url; a.target = '_blank'; a.rel = 'noopener';
    a.addEventListener('click', () => { if (s.copy) { try { navigator.clipboard.writeText(state.name); } catch {} toast(t('copied')); } });
    const sel = el('select'); sel.setAttribute('aria-label', t('s' + s.k));
    [0, 1, 2, 3].forEach((i) => { const o = el('option', null, t('st' + i)); o.value = i; sel.append(o); });
    sel.value = state.tm[s.k] || 0; sel.addEventListener('change', () => { state.tm[s.k] = sel.value; });
    row.append(a, sel); c.append(row); box.append(c);
  });
}
function renderIdea() {
  const e = encodeURIComponent(state.name); const box = $('#ideaLinks'); box.textContent = '';
  const L = [['Google', `https://www.google.com/search?q=%22${e}%22`], ['Google 이미지', `https://www.google.com/search?tbm=isch&q=%22${e}%22`], ['Naver', `https://search.naver.com/search.naver?query=${e}`], ['Instagram', `https://www.instagram.com/explore/search/keyword/?q=${e}`], ['YouTube', `https://www.youtube.com/results?search_query=${e}`], ['Wiktionary', `https://en.wiktionary.org/wiki/${e}`], ['Thesaurus', `https://www.thesaurus.com/browse/${e}`], ['Namechk', `https://namechk.com/`], ['App Store', `https://apps.apple.com/search?term=${e}`]];
  L.forEach(([n, u]) => { const a = el('a', 'chip', n); a.href = u; a.target = '_blank'; a.rel = 'noopener'; box.append(a); });
}

// ---- 로고 시안(브라우저 안에서 SVG 생성) ----
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
const PAL = [['#1f4d43', '#f6f1e7', '#d9a441'], ['#14213d', '#fca311', '#ffffff'], ['#7a1f2b', '#f4e9d8', '#c9a227'], ['#0b3954', '#bfd7ea', '#ff6663'], ['#2b2d42', '#edf2f4', '#ef233c'], ['#3d405b', '#f4f1de', '#e07a5f'], ['#005f73', '#e9d8a6', '#ee9b00'], ['#222222', '#ffffff', '#00a878'], ['#4a2c6d', '#f3e9ff', '#ffb347']];
const FONTS_LAT = ['Jost', 'Space Grotesk', 'DM Serif Display'];
function fontFor(name, r) {
  if (HAS_HANGUL(name)) return ['Noto Serif KR', 'Black Han Sans', 'IBM Plex Sans KR'][Math.floor(r() * 3)];
  if (/[぀-ヿ一-鿿]/.test(name)) return ['Noto Sans JP'][0];
  return FONTS_LAT[Math.floor(r() * FONTS_LAT.length)];
}
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function logoSvg(name, i, seed) {
  const r = rng(seed * 97 + i * 31 + 7); const [c1, c2, c3] = PAL[Math.floor(r() * PAL.length)]; const font = fontFor(name, r);
  const ch = esc([...name][0] || '?'); const up = IS_LATIN(name.toLowerCase().replace(/\s/g, '')) && r() < 0.5; const word = esc(up ? name.toUpperCase() : name);
  const shape = Math.floor(r() * 5); const layout = Math.floor(r() * 3); const fs = word.length > 8 ? 30 : 38; const ls = up ? 4 : 0;
  const sym = (cx, cy, s) => {
    const m = `<text x="${cx}" y="${cy + s * 0.18}" text-anchor="middle" font-family="'${font}'" font-weight="700" font-size="${s * 0.62}" fill="${c2}">${ch}</text>`;
    const sh = [`<circle cx="${cx}" cy="${cy}" r="${s / 2}" fill="${c1}"/>`, `<rect x="${cx - s / 2}" y="${cy - s / 2}" width="${s}" height="${s}" rx="${s * 0.14}" fill="${c1}"/>`, `<rect x="${cx - s / 2}" y="${cy - s / 2}" width="${s}" height="${s}" rx="${s / 2}" ry="${s / 2}" transform="rotate(45 ${cx} ${cy})" fill="${c1}"/>`, `<path d="M${cx} ${cy - s / 2}L${cx + s / 2} ${cy + s / 2}H${cx - s / 2}Z" fill="${c1}"/>`, `<path d="M${cx - s / 2} ${cy + s / 2}V${cy - s / 8}A${s / 2} ${s / 2} 0 0 1 ${cx + s / 2} ${cy - s / 8}V${cy + s / 2}Z" fill="${c1}"/>`][shape];
    const dot = `<circle cx="${cx + s * 0.42}" cy="${cy - s * 0.42}" r="${s * 0.09}" fill="${c3}"/>`;
    return sh + (shape === 3 ? `<text x="${cx}" y="${cy + s * 0.42}" text-anchor="middle" font-family="'${font}'" font-weight="700" font-size="${s * 0.46}" fill="${c2}">${ch}</text>` : m) + dot;
  };
  let body = '';
  const txt = (x, y, anc, size) => `<text x="${x}" y="${y}" text-anchor="${anc}" font-family="'${font}'" font-weight="700" font-size="${size}" letter-spacing="${ls}" fill="${c1}">${word}</text>`;
  if (layout === 0) body = sym(46, 60, 52) + txt(86, 72, 'start', fs);
  else if (layout === 1) body = sym(160, 44, 50) + txt(160, 112, 'middle', fs) + `<rect x="130" y="124" width="60" height="3" fill="${c3}"/>`;
  else body = `<rect x="14" y="18" width="292" height="84" rx="12" fill="${c1}"/>` + `<text x="160" y="72" text-anchor="middle" font-family="'${font}'" font-weight="700" font-size="${fs}" letter-spacing="${ls}" fill="${c2}">${word}</text><circle cx="${290 - 0}" cy="30" r="6" fill="${c3}"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 140" role="img" aria-label="${esc(name)}"><rect width="320" height="140" fill="${layout === 2 ? c2 : '#ffffff'}"/>${body}</svg>`;
}
function renderLogos() {
  const box = $('#logos'); box.textContent = '';
  for (let i = 0; i < 6; i++) {
    const w = el('div', 'logo'); w.innerHTML = logoSvg(state.name, i, state.seed);
    const b = el('button', 'no-print', 'SVG'); b.type = 'button';
    b.addEventListener('click', () => { const blob = new Blob([w.querySelector('svg').outerHTML], { type: 'image/svg+xml' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${state.latin || 'brand'}-logo-${i + 1}.svg`; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); toast(t('saved')); });
    w.append(b); box.append(w);
  }
}

function toast(m) { const e = $('#toast'); e.textContent = m; e.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => e.classList.remove('on'), 2200); }

function render(fetchNow) {
  $('#result').hidden = false;
  $('#pdfMeta').textContent = `${t('nameLabel')}: ${state.name} · ${t('dateLabel')}: ${new Date().toLocaleDateString(lang === 'ja' ? 'ja-JP' : lang === 'en' ? 'en-US' : 'ko-KR')}`;
  renderEn(); renderTm(); renderIdea(); renderLogos(); renderVariants();
  if (fetchNow) renderDomains();
}
function start(raw) {
  const name = (raw || '').trim().replace(/\s+/g, ' '); if (!name) return;
  state.name = name; state.tm = {}; state.seed = 1;
  const compact = name.toLowerCase().replace(/[\s_]/g, '');
  state.latin = IS_LATIN(compact) && !HAS_HANGUL(name) ? compact : '';
  if (!state.latin && HAS_HANGUL(name)) { state.linked = new Map(); const v = romanVariants(name)[0]; state.latin = IS_LATIN(v || '') ? v : ''; }
  render(true);
  $('#result').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', () => {});
$('#form').addEventListener('submit', (e) => { e.preventDefault(); start($('#q').value); });
$('#varBtn').addEventListener('click', checkVariants);
$('#shuffle').addEventListener('click', () => { state.seed = (state.seed % 997) + 1; renderLogos(); });
$('#pdf').addEventListener('click', () => {
  const memo = $('#memo'); memo.rows = Math.max(3, (memo.value.match(/\n/g) || []).length + 2);
  window.print();
});
document.querySelectorAll('.lang button').forEach((b) => b.addEventListener('click', () => { lang = b.dataset.lang; try { localStorage.setItem('brandLang', lang); } catch {} applyLang(); }));
applyLang();
const pre = new URLSearchParams(location.search).get('q'); if (pre) { $('#q').value = pre; start(pre); }
