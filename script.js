/* =========================
   DATA
========================= */
const TOPICS = [
  { id: "waiting", emoji: "💔", title: "기다림", desc: "그 사람에게 연락이 올까?" },
  { id: "longing", emoji: "🌙", title: "미련", desc: "지금 그 사람의 마음은?" },
  { id: "begin",   emoji: "🌱", title: "새로운 시작", desc: "이 선택이 맞을까?" },
  { id: "courage", emoji: "🔥", title: "용기", desc: "지금 밀어붙여도 될까?" },
  { id: "self",    emoji: "🪞", title: "나 자신", desc: "나는 어떤 사람일까?" },
  { id: "fate",    emoji: "💫", title: "운명의 흐름", desc: "나의 앞으로의 운명은?" },
];

const RESULTS = {
  waiting: [
    { name:"The Quiet Signal", text:"연결은 완전히 끊기지 않았어요.\n다만 지금은 ‘너무 큰 움직임’보다 ‘작은 신호’가 맞는 시간이에요.", action:"부담 없는 한 문장만. 질문보단 안부로 시작해요.", tags:["타이밍","가벼운 신호","여지"] },
    { name:"The Returning Tide", text:"잠깐 멀어졌던 흐름이 다시 돌아올 가능성이 보여요.\n하지만 파도는 ‘강요’가 아니라 ‘여유’에 반응해요.", action:"기다림을 ‘비워두기’로 바꿔봐요. 네 일상부터 채우기.", tags:["회복","여유","재연결"] },
    { name:"The Pause", text:"지금은 ‘움직임’보다 ‘멈춤’이 더 큰 선택이에요.\n멈춘다고 끝이 아니고, 멈춰야 다시 시작할 힘이 생겨요.", action:"오늘은 먼저 연락하지 않기로 ‘하루만’ 정해보기.", tags:["멈춤","회복","재정비"] },
    { name:"The Lantern", text:"기다림은 때로 ‘상대’보다 ‘내 마음’을 비추는 시간이에요.\n연락이 오지 않아도, 너는 충분히 앞으로 갈 수 있어요.", action:"‘연락을 기다리는 시간’을 10%만 줄여봐요.", tags:["자기중심","회복","빛"] },
  ],
  longing: [
    { name:"The Hidden Heart", text:"마음은 남아있어요.\n다만 표현 방식이 서툴거나, 자존심이 감정을 덮고 있을 수 있어요.", action:"추측하기 전에, 내 기준을 한 문장으로 정해요.", tags:["잔여감정","자존심","거리"] },
    { name:"The Half Truth", text:"‘끝’도 ‘시작’도 선택하지 못한 상태예요.\n확실하지 않은 마음은 종종 시간을 끌어요.", action:"확실함이 필요하다면 ‘최소 조건’을 적어보기.", tags:["애매함","유예","선택"] },
    { name:"The Night Mirror", text:"그 사람의 마음보다, 네 마음이 더 크게 울리는 밤이에요.\n미련은 ‘사람’이 아니라 ‘기억’에 붙어있을 때가 많아요.", action:"좋은 점 3개 + 힘든 점 3개를 균형 있게 적기.", tags:["기억","균형","현실"] },
  ],
  begin: [
    { name:"The Open Path", text:"이 선택은 길을 열어요.\n움직이기 시작하면 풍경이 바뀝니다.", action:"오늘 할 수 있는 ‘첫 단계’ 하나만.", tags:["시작","전개","흐름"] },
    { name:"The New Seed", text:"지금은 씨앗 단계예요.\n결과를 빨리 확인하려 하면 불안해져요.", action:"결정 기준을 ‘3개월 뒤의 나’에게 맞춰보기.", tags:["성장","인내","기준"] },
    { name:"The Second Door", text:"겉으로 보이는 선택 말고, 두 번째 문이 있어요.\n‘A냐 B냐’보다 ‘C’를 찾아야 할 때.", action:"선택지를 3개 이상으로 넓혀서 적어보기.", tags:["대안","확장","시야"] },
  ],
  courage: [
    { name:"The Bold Spark", text:"움직여도 괜찮아요.\n‘강하게’가 아니라 ‘분명하게’가 포인트.", action:"원하는 걸 한 문장으로 정리하고 전달해요.", tags:["분명함","진심","한문장"] },
    { name:"The Gentle Push", text:"밀어붙이되, 부드럽게.\n힘이 아니라 방향이 중요해요.", action:"직진 대신 ‘선택지 제안’으로 접근해요.", tags:["부드러움","제안","방향"] },
  ],
  self: [
    { name:"The True Name", text:"너는 사랑을 ‘진심’으로 하는 사람이에요.\n그래서 진심이 상처로 돌아올 때 더 아파요.", action:"진심은 지키되, 속도만 조절해보기.", tags:["진심","깊이","속도"] },
    { name:"The Inner Light", text:"너는 누군가를 밝게 만들 줄 알아요.\n하지만 과하면 소진될 수 있어요.", action:"오늘 내 에너지 점수(1~10) 매겨보기.", tags:["빛","소진","균형"] },
  ],
  fate: [
    { name:"The Turning Wheel", text:"흐름이 돌고 있어요.\n지금은 한 번의 선택이 방향을 바꾸는 구간.", action:"작은 선택 1개를 ‘원하는 삶’ 쪽으로 옮기기.", tags:["전환","선택","방향"] },
    { name:"The Rising Moon", text:"천천히 올라가는 운이에요.\n안정적인 상승을 믿어도 좋아요.", action:"작게 꾸준히 할 수 있는 루틴 하나 만들기.", tags:["상승","꾸준함","루틴"] },
  ],
};

/* =========================
   DOM
========================= */
const topicPanel = document.getElementById("topicPanel");
const cardPanel = document.getElementById("cardPanel");
const resultPanel = document.getElementById("resultPanel");

const topicsEl = document.getElementById("topics");
const cardsEl = document.getElementById("cards");

const topicLabelEl = document.getElementById("topicLabel");

const resultTopicPill = document.getElementById("resultTopicPill");
const resultNameEl = document.getElementById("resultName");
const resultTextEl = document.getElementById("resultText");
const resultActionEl = document.getElementById("resultAction");
const resultTagsEl = document.getElementById("resultTags");
const resultSigil = document.getElementById("resultSigil");

const backToTopicsBtn = document.getElementById("backToTopics");
const againBtn = document.getElementById("againBtn");
const changeTopicBtn = document.getElementById("changeTopicBtn");

const overlay = document.getElementById("overlay");
// ===== Start popup dismiss (one click) =====
const startPopup = document.getElementById("startPopup");

if (startPopup) {
  startPopup.addEventListener("click", () => {
    startPopup.classList.add("isHidden");
  }, { once: true });
}

/* =========================
   Overlay helpers
========================= */
function showOverlay(){ overlay.classList.remove("isHidden"); }
function hideOverlay(){ overlay.classList.add("isHidden"); }
function wait(ms){ return new Promise(r => setTimeout(r, ms)); }

// IMPORTANT: start hidden so it never blocks clicks
hideOverlay();

/* =========================
   AUDIO (external mp3)
========================= */
const bgm = document.getElementById("bgm");
window.addEventListener("pointerdown", () => {
  if(!bgm) return;
  bgm.volume = 0.22;
  bgm.load?.();
  bgm.play().catch(()=>{});
}, { once:true });

/* Shuffle SFX (no file) */
let audioCtx = null;
function ensureSfx(){
  if(audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}
function playShuffle(){
  ensureSfx();
  if(audioCtx.state === "suspended") audioCtx.resume();

  const ctx = audioCtx;
  const duration = 0.18;
  const now = ctx.currentTime;

  const bufferSize = Math.floor(ctx.sampleRate * duration);
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for(let i=0;i<bufferSize;i++) data[i] = (Math.random()*2-1) * 0.5;

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const band = ctx.createBiquadFilter();
  band.type = "bandpass";
  band.frequency.value = 1100;
  band.Q.value = 0.9;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.12, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  noise.connect(band);
  band.connect(gain);
  gain.connect(ctx.destination);
  noise.start(now);

  const ping = ctx.createOscillator();
  const pingGain = ctx.createGain();
  ping.type = "sine";
  ping.frequency.setValueAtTime(880, now);
  ping.frequency.exponentialRampToValueAtTime(1320, now + 0.07);
  pingGain.gain.setValueAtTime(0.0001, now);
  pingGain.gain.exponentialRampToValueAtTime(0.05, now + 0.01);
  pingGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.11);
  ping.connect(pingGain);
  pingGain.connect(ctx.destination);
  ping.start(now);
  ping.stop(now + 0.12);
}

/* =========================
   UI logic
========================= */
let currentTopic = null;
let locked = false;

renderTopics();

function renderTopics(){
  topicsEl.innerHTML = "";
  TOPICS.forEach(t => {
    const btn = document.createElement("button");
    btn.className = "topicCard";
    btn.type = "button";
    btn.innerHTML = `
      <div class="topicEmoji">${t.emoji}</div>
      <div class="topicText">
        <div class="topicTitle">${t.title}</div>
        <div class="topicDesc">${t.desc}</div>
      </div>
      <div class="topicGlow" aria-hidden="true"></div>
    `;
    btn.addEventListener("click", () => chooseTopic(t.id));
    topicsEl.appendChild(btn);
  });
}

async function chooseTopic(id){
  currentTopic = id;
  const t = TOPICS.find(x => x.id === id);
  topicLabelEl.textContent = `${t.emoji} ${t.title} — ${t.desc}`;

  playShuffle();
  showOverlay();
  await wait(1000);

  showPanel(cardPanel);
  hidePanel(topicPanel);
  hidePanel(resultPanel);

  renderCards();
  hideOverlay();
}

function renderCards(){
  locked = false;
  cardsEl.innerHTML = "";
  for(let i=0;i<4;i++){
    const btn = document.createElement("button");
    btn.className = "cardBtn";
    btn.type = "button";
    btn.innerHTML = `
      <div class="card3d">
        <div class="tarot back">
          <div class="foilFrame"></div>
          <div class="backPattern">
            <div class="patternRing"></div>
            <div class="patternStars">✦ ✧ ✦</div>
            <div class="patternMark">MM</div>
          </div>
          <div class="shine"></div>
        </div>

        <div class="tarot front">
          <div class="foilFrame"></div>
          <div class="paper">
            <div class="frontSigil">${sigilForTopic(currentTopic)}</div>
            <div class="frontTitle">MOON MESSAGE</div>
            <div class="frontSub">tarot note</div>
          </div>
          <div class="shine"></div>
        </div>
      </div>
    `;
    btn.addEventListener("click", () => pickCard(btn));
    cardsEl.appendChild(btn);
  }
}

async function pickCard(btn){
  if(locked) return;
  locked = true;

  [...cardsEl.children].forEach(b => b.classList.add("dim"));
  btn.classList.remove("dim");
  btn.classList.add("chosen");

  btn.querySelector(".card3d").classList.add("flip");

  await wait(600);
  playShuffle();
  showOverlay();
  await wait(1000);

  const arr = RESULTS[currentTopic] || [];
  const picked = arr[Math.floor(Math.random() * arr.length)];
  showResult(picked);

  hideOverlay();
}

function showResult(picked){
  const t = TOPICS.find(x => x.id === currentTopic);

  resultTopicPill.textContent = `${t.emoji} ${t.title}`;
  resultNameEl.textContent = picked.name;
  resultTextEl.textContent = picked.text;
  resultActionEl.textContent = picked.action;

  resultTagsEl.innerHTML = "";
  (picked.tags || []).forEach(tag => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    resultTagsEl.appendChild(span);
  });

  resultSigil.textContent = sigilForTopic(currentTopic);

  showPanel(resultPanel);
  hidePanel(cardPanel);
}

backToTopicsBtn.addEventListener("click", async () => {
  currentTopic = null;
  playShuffle();
  showOverlay();
  await wait(700);

  hidePanel(cardPanel);
  hidePanel(resultPanel);
  showPanel(topicPanel);

  hideOverlay();
});

againBtn.addEventListener("click", async () => {
  playShuffle();
  showOverlay();
  await wait(700);

  hidePanel(resultPanel);
  showPanel(cardPanel);
  renderCards();

  hideOverlay();
});

changeTopicBtn.addEventListener("click", async () => {
  currentTopic = null;
  playShuffle();
  showOverlay();
  await wait(700);

  hidePanel(resultPanel);
  hidePanel(cardPanel);
  showPanel(topicPanel);

  hideOverlay();
});

function showPanel(el){ el.classList.remove("isHidden"); }
function hidePanel(el){ el.classList.add("isHidden"); }

function sigilForTopic(id){
  switch(id){
    case "waiting": return "☾";
    case "longing": return "✧";
    case "begin": return "❀";
    case "courage": return "✦";
    case "self": return "⟡";
    case "fate": return "✴";
    default: return "☾";
  }
}

// ===== Star particles (floating night sky) =====
const starCanvas = document.getElementById("starCanvas");
const sctx = starCanvas.getContext("2d");

let stars = [];
let rafId = null;

function resizeStars(){
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  starCanvas.width = Math.floor(window.innerWidth * dpr);
  starCanvas.height = Math.floor(window.innerHeight * dpr);
  starCanvas.style.width = window.innerWidth + "px";
  starCanvas.style.height = window.innerHeight + "px";
  sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function makeStars(count = 90){
  stars = Array.from({length: count}, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 1.6 + 0.3,
    vx: (Math.random() * 0.18 + 0.03) * (Math.random() < 0.5 ? -1 : 1),
    vy: (Math.random() * 0.12 + 0.02) * (Math.random() < 0.5 ? -1 : 1),
    a: Math.random() * 0.6 + 0.15,            // alpha
    tw: Math.random() * 0.02 + 0.008,         // twinkle speed
    phase: Math.random() * Math.PI * 2
  }));
}

function drawStars(){
  sctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for(const st of stars){
    st.x += st.vx;
    st.y += st.vy;

    // wrap-around edges
    if(st.x < -10) st.x = window.innerWidth + 10;
    if(st.x > window.innerWidth + 10) st.x = -10;
    if(st.y < -10) st.y = window.innerHeight + 10;
    if(st.y > window.innerHeight + 10) st.y = -10;

    st.phase += st.tw;
    const alpha = st.a * (0.65 + 0.35 * Math.sin(st.phase)); // gentle twinkle

    sctx.globalAlpha = Math.max(0, Math.min(1, alpha));
    sctx.beginPath();
    sctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
    sctx.fillStyle = "#ffffff";
    sctx.fill();
  }

  sctx.globalAlpha = 1;
  rafId = requestAnimationFrame(drawStars);
}

function startStars(){
  cancelAnimationFrame(rafId);
  resizeStars();
  makeStars(Math.min(120, Math.floor(window.innerWidth / 10)));
  drawStars();
}

window.addEventListener("resize", () => {
  // resize 할 때 다시 맞추기
  startStars();
});

startStars();
