// 분야·컨셉 선택지와 규칙 기반 네이밍 코멘트(AI 아님). 서버로 아무것도 보내지 않는다.
export const FIELDS = [
  { k: 'app', ko: '앱·소프트웨어·웹서비스', en: 'App / software / web service', ja: 'アプリ・ソフト・Webサービス', cls: '9 · 42 · 35', words: ['app', '앱', 'soft', 'tech', '테크', 'cloud', '클라우드', 'web', '웹'] },
  { k: 'food', ko: '카페·음식·식음료', en: 'Cafe / food / drink', ja: 'カフェ・飲食', cls: '43 · 30 · 29 · 32', words: ['coffee', '커피', 'cafe', '카페', 'food', '푸드', 'kitchen', '키친', 'tea', '티', 'bakery', '베이커리'] },
  { k: 'fashion', ko: '의류·패션·잡화', en: 'Clothing / fashion / goods', ja: '衣料・ファッション', cls: '25 · 18 · 35', words: ['fashion', '패션', 'wear', '웨어', 'cloth', '의류', 'style', '스타일'] },
  { k: 'beauty', ko: '화장품·뷰티·미용', en: 'Cosmetics / beauty', ja: '化粧品・美容', cls: '3 · 44 · 35', words: ['beauty', '뷰티', 'cosmetic', '코스메틱', 'skin', '스킨', 'hair', '헤어', 'nail', '네일'] },
  { k: 'edu', ko: '교육·강의·콘텐츠', en: 'Education / courses / content', ja: '教育・講座・コンテンツ', cls: '41 · 9 · 16', words: ['edu', '에듀', 'academy', '아카데미', 'school', '스쿨', '학원', 'class', '클래스', 'lab', '랩'] },
  { k: 'media', ko: '디자인·미디어·창작', en: 'Design / media / creative', ja: 'デザイン・メディア・創作', cls: '35 · 41 · 42 · 16', words: ['design', '디자인', 'studio', '스튜디오', 'media', '미디어', 'film', '필름', 'music', '뮤직', 'art', '아트'] },
  { k: 'shop', ko: '쇼핑몰·유통·판매', en: 'Shop / retail', ja: 'ショップ・小売', cls: '35', words: ['shop', '샵', 'mall', '몰', 'store', '스토어', 'market', '마켓', 'mart', '마트'] },
  { k: 'health', ko: '건강·의료·운동', en: 'Health / medical / fitness', ja: '健康・医療・運動', cls: '44 · 5 · 41 · 28', words: ['health', '헬스', 'fit', '핏', 'clinic', '클리닉', 'care', '케어', 'med', '메디', 'yoga', '요가'] },
  { k: 'goods', ko: '제품·생활용품 제조', en: 'Products / household goods', ja: '製品・生活用品', cls: '상품에 따라 1~34', words: [] },
  { k: 'other', ko: '기타', en: 'Other', ja: 'その他', cls: '', words: [] }
];
export const CONCEPTS = [
  { k: 'trust', ko: '믿음직', en: 'Trustworthy', ja: '信頼感' },
  { k: 'friendly', ko: '친근·따뜻', en: 'Friendly / warm', ja: '親しみ・温かさ' },
  { k: 'premium', ko: '고급·세련', en: 'Premium / refined', ja: '高級・洗練' },
  { k: 'witty', ko: '재치·유머', en: 'Witty / playful', ja: 'ウィット・遊び心' },
  { k: 'future', ko: '미래적·기술', en: 'Futuristic / tech', ja: '未来的・テック' },
  { k: 'nature', ko: '자연·편안', en: 'Natural / calm', ja: '自然・安らぎ' }
];

const MSG = {
  ko: {
    title: '네이밍 코멘트', rule: '규칙 기반 자동 코멘트이며 AI 평가나 법률 판단이 아닙니다. 참고만 하세요.',
    verdict: [
      '첫 관문은 무난해 보여요.',
      '고쳐 볼 점이 조금 있어요.',
      '걸리는 점이 여럿이에요. 다른 후보와 함께 비교해 보길 권해요.'
    ],
    short: (n) => `${n}음절로 짧아서 기억하고 말하기 좋아요.`, mid: (n) => `${n}음절이에요. 무난하지만 더 짧으면 기억에 오래 남아요.`, long: (n) => `${n}음절로 긴 편이에요. 간판·앱 아이콘·검색창에서 불리하니 줄여 볼 수 있어요.`,
    cluster: '자음이 4개 이상 이어지는 곳이 있어 발음이 어려울 수 있어요.', digit: '숫자나 하이픈이 들어 있으면 말로 전할 때 철자를 다시 물어보게 돼요.',
    lookalike: 'L/R, F/P, B/V처럼 한국어 화자가 구분하기 어려운 소리가 있어, 말로 전할 때 헷갈릴 수 있어요.',
    romanDiff: '한글 이름은 영어권에서 어떻게 읽힐지 확인이 필요해요(예: ㅓ eo, ㅡ eu). 영어 표기 제안 중 읽기 쉬운 쪽을 골라 보세요.',
    comOk: '.com이 비어 있어요. 글로벌 이름으로 쓰기에 유리해요.', comNo: '.com이 이미 사용 중이에요. 변형 제안을 보거나 다른 확장자와 함께 쓸 계획을 세워 보세요.', tgOk: (t) => `.${t}를 살 수 있어요.`, tgNo: (t) => `.${t}는 이미 사용 중이에요. 다른 확장자를 골라 보세요.`, comTakenWarn: '다만 .com을 다른 곳이 쓰고 있어, 이름이 비슷하면 방문자가 그쪽으로 잘못 갈 수 있어요. 그곳이 같은 분야인지 확인하세요.', noLatin: '영문 이름이 없어서 도메인은 아직 판단하지 못했어요.',
    hard: '단단한', soft: '부드러운', mixed: '중간', soundIs: (s) => `소리 느낌은 ${s} 편이에요.`,
    fit: (c) => `'${c}' 컨셉과 소리 느낌이 잘 맞아요.`, nofit: (c, want) => `'${c}' 컨셉에는 ${want} 소리가 더 어울리는데, 이 이름은 결이 달라요. 의도한 대조라면 괜찮아요.`,
    wantHard: '단단한(ㄱ·ㄷ·ㅂ, K·T·B)', wantSoft: '부드러운(ㅁ·ㄴ·ㄹ, M·N·L)', premiumFit: '짧고 담백해서 고급스러운 인상에 잘 맞아요.', premiumNo: '고급·세련 컨셉에는 보통 짧고 군더더기 없는 이름이 어울려요. 줄이거나 글자를 덜어 보세요.',
    wittyFit: '글자나 소리가 반복돼서 재치 있는 인상을 줘요.', wittyNo: '재치·유머 컨셉이면 말장난, 소리 반복, 뜻이 겹치는 단어 조합을 시도해 보세요.',
    describe: (w) => `이름에 분야를 그대로 설명하는 말('${w}')이 들어 있어요. 이런 이름은 상표로 인정받기 어려울 수 있어요(식별력). 살짝 비틀어 보세요.`,
    cls: (c) => `이 분야는 보통 상품·서비스 분류 ${c}류를 확인해요. 상표 검색에서 같은 류에 같은 이름이나 비슷한 이름이 있는지 보세요.`,
    starNoTm: '별점은 위 항목(도메인·이름·컨셉)만 본 점수예요. 상표 확인 카드에서 본 결과를 표시하면 반영돼요.', starTm: '별점에는 도메인·이름·컨셉과 내가 표시한 상표 확인 결과가 반영됐어요.',
    next1: '후보를 3~5개로 늘려 같은 방식으로 비교해 보세요.', next2: '소리 내어 읽고, 주변 사람에게 불러 주고 받아 적게 해 보세요. 철자를 틀리면 이름이 어려운 거예요.', next3: '마음에 드는 이름은 상표 확인 링크에서 직접 확인하고, 중요한 사업이면 변리사 검토를 받으세요.'
  },
  en: {
    title: 'Naming comments', rule: 'Rule-based automatic comments, not an AI or legal assessment. For reference only.',
    verdict: ['Looks fine for a first gate.', 'A few things to look at.', 'Several concerns. Compare with other candidates.'],
    short: (n) => `${n} syllable(s): short and easy to remember and say.`, mid: (n) => `${n} syllables. Fine, but shorter sticks better.`, long: (n) => `${n} syllables: on the long side for signs, app icons and search boxes. Consider trimming.`,
    cluster: 'There is a run of 4+ consonants that may be hard to pronounce.', digit: 'Digits or hyphens make people ask how it is spelled when told aloud.',
    lookalike: 'Sounds like L/R, F/P, B/V are easy to confuse for Korean speakers when said aloud.',
    romanDiff: 'Check how English speakers will read a Korean name (e.g. ㅓ eo, ㅡ eu). Pick the easiest of the spelling suggestions.',
    comOk: '.com is free. Good for a global name.', comNo: '.com is taken. See the variations or plan to use another extension.', tgOk: (t) => `You can get .${t}.`, tgNo: (t) => `.${t} is taken. Pick another extension.`, comTakenWarn: 'However, someone else owns the .com, so visitors may land there by mistake if the names are close. Check whether that site is in your field.', noLatin: 'No Latin-letter name yet, so domains are not judged.',
    hard: 'hard', soft: 'soft', mixed: 'mixed', soundIs: (s) => `The sound feels ${s}.`,
    fit: (c) => `The sound fits the "${c}" concept.`, nofit: (c, want) => `"${c}" usually suits ${want} sounds, but this name differs. Fine if intentional contrast.`,
    wantHard: 'hard (K·T·B)', wantSoft: 'soft (M·N·L)', premiumFit: 'Short and clean, which suits a premium feel.', premiumNo: 'Premium usually suits short, uncluttered names. Try trimming.',
    wittyFit: 'Repeated letters or sounds give a playful feel.', wittyNo: 'For witty, try wordplay, repeated sounds or combined meanings.',
    describe: (w) => `The name contains a word that directly describes the field ("${w}"). Such names can be hard to register as trademarks (distinctiveness). Twist it a little.`,
    cls: (c) => `This field usually involves Nice class ${c}. In trademark searches, look for identical or similar names in the same class.`,
    starNoTm: 'Stars reflect only the items above (domain, name, concept). Mark your trademark findings in the cards to include them.', starTm: 'Stars include domain, name, concept and the trademark findings you marked.',
    next1: 'Widen to 3–5 candidates and compare them the same way.', next2: 'Say it aloud and have people write it down. If they misspell it, the name is hard.', next3: 'Verify favorites via the trademark links, and consult an IP professional for serious business.'
  },
  ja: {
    title: 'ネーミングコメント', rule: 'ルールベースの自動コメントで、AIや法的判断ではありません。参考程度に。',
    verdict: ['最初の関門は無難そうです。', '見直すと良い点が少しあります。', '気になる点が複数あります。他の候補と比べてみてください。'],
    short: (n) => `${n}音節で短く、覚えやすく言いやすいです。`, mid: (n) => `${n}音節。無難ですが、より短いほうが記憶に残ります。`, long: (n) => `${n}音節と長めです。看板・アプリアイコン・検索欄では不利なので短縮を検討してください。`,
    cluster: '子音が4つ以上続く箇所があり、発音しにくいかもしれません。', digit: '数字やハイフンがあると、口頭で伝える時に綴りを聞き返されます。',
    lookalike: 'L/R、F/P、B/Vなど聞き分けにくい音があり、口頭で伝えると混同しやすいです。',
    romanDiff: '韓国語の名前は英語圏でどう読まれるか確認が必要です（例：ㅓ eo、ㅡ eu）。英語表記案から読みやすいものを選んでください。',
    comOk: '.com が空いています。グローバル名に有利です。', comNo: '.com は使用中です。別案や他の拡張子の利用を検討してください。', tgOk: (t) => `.${t} を取得できます。`, tgNo: (t) => `.${t} は使用中です。別の拡張子を選んでください。`, comTakenWarn: 'ただし.comは他者が使用中で、名前が近いと訪問者が誤ってそちらへ行く可能性があります。同じ分野か確認してください。', noLatin: '英字の名前がないため、ドメインは未判定です。',
    hard: '硬い', soft: '柔らかい', mixed: '中間', soundIs: (s) => `音の印象は${s}ほうです。`,
    fit: (c) => `「${c}」のコンセプトと音の印象が合っています。`, nofit: (c, want) => `「${c}」には${want}音が合いやすいですが、この名前は異なります。意図的な対比なら問題ありません。`,
    wantHard: '硬い（K・T・B）', wantSoft: '柔らかい（M・N・L）', premiumFit: '短くすっきりしていて高級感に合います。', premiumNo: '高級感には短く無駄のない名前が合います。短縮を検討してください。',
    wittyFit: '文字や音の繰り返しで遊び心があります。', wittyNo: 'ウィットなら、言葉遊び、音の繰り返し、意味の重なる組み合わせを試してください。',
    describe: (w) => `名前に分野をそのまま説明する語（「${w}」）が含まれています。商標として認められにくい場合があります（識別力）。少しひねってみてください。`,
    cls: (c) => `この分野では通常、区分${c}を確認します。商標検索で同じ区分に同一・類似の名前がないか見てください。`,
    starNoTm: '星は上の項目（ドメイン・名前・コンセプト）のみの評価です。商標カードで確認結果を選ぶと反映されます。', starTm: '星にはドメイン・名前・コンセプトと、選択した商標確認結果が反映されています。',
    next1: '候補を3〜5個に増やして、同じ方法で比べてみてください。', next2: '声に出し、周りの人に聞いて書き取ってもらいましょう。綴りを間違えるなら難しい名前です。', next3: '気に入った名前は商標リンクでご自身で確認し、大事な事業なら弁理士に相談してください。'
  }
};

const isHangul = (s) => /[가-힣]/.test(s);
function syllables(name, latin) {
  if (isHangul(name)) return [...name].filter((c) => /[가-힣]/.test(c)).length;
  const l = (latin || name).toLowerCase(); const g = l.match(/[aeiouy]+/g);
  return Math.max(1, g ? g.length : 1);
}
function hardness(latin) {
  const l = (latin || '').toLowerCase().replace(/[^a-z]/g, ''); if (l.length < 2) return null;
  const hard = (l.match(/[kgtdbpxzcq]/g) || []).length, soft = (l.match(/[mnlrswhyjfv]/g) || []).length;
  if (hard + soft === 0) return null; const r = hard / (hard + soft);
  return r >= 0.55 ? 'hard' : r <= 0.35 ? 'soft' : 'mixed';
}

/** ctx: { name, latin, domains, field, concepts[], lang, romanCount } → { items:[{tone,text}], verdict } */
export function buildComment(ctx) {
  const m = MSG[ctx.lang] || MSG.ko; const items = []; const add = (tone, text) => items.push({ tone, text });
  const lowName = ctx.name.toLowerCase();
  const n = syllables(ctx.name, ctx.latin);
  if (n <= 3) add('good', m.short(n)); else if (n === 4) add('info', m.mid(n)); else add('warn', m.long(n));
  const lat = (ctx.latin || '').toLowerCase();
  if (/[^aeiou0-9\s-]{4,}/.test(lat)) add('warn', m.cluster);
  if (/[0-9-]/.test(ctx.name)) add('warn', m.digit);
  if (lat && ((/l/.test(lat) && /r/.test(lat)) || /f/.test(lat) && /p/.test(lat) || (/b/.test(lat) && /v/.test(lat)))) add('info', m.lookalike);
  if (isHangul(ctx.name) && ctx.romanCount > 1) add('info', m.romanDiff);
  const d = ctx.domains || {};
  const tg = ctx.target || 'com';
  if (!lat) add('info', m.noLatin);
  else if (tg === 'com') { if (d.com === 'free') add('good', m.comOk); else if (d.com === 'taken') add('warn', m.comNo); }
  else if (d[tg] === 'free') { add('good', m.tgOk(tg)); if (d.com === 'taken') add('info', m.comTakenWarn); }
  else if (d[tg] === 'taken') add('warn', m.tgNo(tg));
  const h = hardness(lat);
  if (h) add('info', m.soundIs(m[h]));
  (ctx.concepts || []).forEach((k) => {
    const c = CONCEPTS.find((x) => x.k === k); if (!c) return; const label = c[ctx.lang] || c.ko;
    if (k === 'trust' || k === 'future') { if (h) add(h === 'soft' ? 'info' : 'good', h === 'soft' ? m.nofit(label, m.wantHard) : m.fit(label)); }
    else if (k === 'friendly' || k === 'nature') { if (h) add(h === 'hard' ? 'info' : 'good', h === 'hard' ? m.nofit(label, m.wantSoft) : m.fit(label)); }
    else if (k === 'premium') add(n <= 3 && (lat.length || ctx.name.length) <= 9 ? 'good' : 'info', n <= 3 && (lat.length || ctx.name.length) <= 9 ? m.premiumFit : m.premiumNo);
    else if (k === 'witty') add(/(.{2,})\1/.test(lowName.replace(/\s/g, '')) || /(.)\1/.test(lowName) ? 'good' : 'info', /(.{2,})\1/.test(lowName.replace(/\s/g, '')) || /(.)\1/.test(lowName) ? m.wittyFit : m.wittyNo);
  });
  const f = FIELDS.find((x) => x.k === ctx.field);
  if (f) {
    const hit = f.words.find((w) => lowName.includes(w)); if (hit) add('warn', m.describe(hit));
    if (f.cls) add('info', m.cls(f.cls));
  }
  const warns = items.filter((i) => i.tone === 'warn').length;
  const tmv = Object.values(ctx.tm || {}).map(Number);
  const same = tmv.filter((v) => v === 3).length, similar = tmv.filter((v) => v === 2).length;
  const tmPenalty = Math.min(3, same * 2 + similar);
  const stars = Math.max(1, Math.min(5, 5 - warns - tmPenalty));
  const starNote = (tmv.length === 0 || tmv.every((v) => v === 0)) ? m.starNoTm : m.starTm;
  const verdict = m.verdict[warns === 0 ? 0 : warns <= 2 ? 1 : 2];
  add('info', m.next1); add('info', m.next2); add('info', m.next3);
  return { title: m.title, rule: m.rule, verdict, items, stars, starNote };
}
