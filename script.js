:root{
  --bg0:#070812;
  --bg1:#0b0f22;
  --bg2:#201040;
  --ink:#eef1ff;
  --muted:#c9cbffcc;
  --stroke:#ffffff20;
  --shadow:#00000070;

  --gold1:#f7e7a8;
  --gold2:#d7b85a;
  --paper:#f3efe6;
  --paper2:#e9e1d0;
}

*{box-sizing:border-box}
html,body{height:100%}

body{
  margin:0;
  font-family: ui-sans-serif, system-ui, -apple-system, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  color:var(--ink);
  background:
    radial-gradient(1200px 800px at 20% 12%, #a78bfa22, transparent 60%),
    radial-gradient(900px 650px at 90% 25%, #60a5fa1f, transparent 58%),
    radial-gradient(700px 500px at 70% 85%, #ffd36a15, transparent 55%),
    linear-gradient(160deg, var(--bg0), var(--bg1) 40%, var(--bg2));
  overflow-x:hidden;
}

.app{
  width:min(980px, 92vw);
  margin: 0 auto;
  padding: 28px 16px 22px;
  position:relative;
}

.top{ margin-bottom:18px; }

.titleRow{
  display:flex;
  gap:14px;
  align-items:center;
  justify-content:center;
}

.moon{
  width:56px;
  height:56px;
  border-radius:999px;
  background:
    radial-gradient(circle at 35% 35%, #ffffff80, #ffffff18 60%, transparent 62%),
    radial-gradient(circle at 60% 55%, #ffd36a33, transparent 60%);
  box-shadow:
    0 0 24px #ffffff22,
    0 0 44px #a78bfa22;
  position:relative;
}
.moon::after{
  content:"";
  position:absolute;
  inset:10px 8px 10px 22px;
  border-radius:999px;
  background: linear-gradient(180deg, #00000055, #00000010);
  opacity:.55;
  filter: blur(1px);
}

h1{
  margin:0;
  font-size:40px;
  letter-spacing:.8px;
  text-shadow: 0 0 18px #ffffff30, 0 0 55px #a78bfa1f;
}
.sub{ margin:8px 0 0; color:var(--muted); }
.tiny{opacity:.75; font-size:12px}

/* Panels (smooth fade) */
.panel{
  border:1px solid var(--stroke);
  background: linear-gradient(180deg, #ffffff10, #ffffff06);
  border-radius:22px;
  padding:22px;
  backdrop-filter: blur(12px);
  box-shadow: 0 20px 60px var(--shadow);
  transition: opacity .35s ease, transform .35s ease;
  opacity:1;
  transform: translateY(0);
}
.panel.isHidden{
  opacity:0;
  transform: translateY(10px);
  pointer-events:none;
  position:absolute;
  left:-99999px;
  top:auto;
}

.panelTitle{ margin:0 0 14px; font-size:18px; color:#ffffffdd; }

/* Topics */
.topics{
  display:grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap:12px;
}
@media (max-width: 860px){ .topics{ grid-template-columns: repeat(2, 1fr); } }

.topicCard{
  position:relative;
  display:flex;
  gap:12px;
  align-items:center;
  text-align:left;
  padding:14px;
  border-radius:16px;
  border:1px solid #ffffff26;
  background: linear-gradient(180deg, #0f1532aa, #0b1025aa);
  cursor:pointer;
  overflow:hidden;
  transition: transform .14s ease, box-shadow .14s ease, border-color .14s ease;
}
.topicCard:hover{
  transform: translateY(-2px);
  border-color:#ffffff44;
  box-shadow: 0 0 0 5px #ffffff0d, 0 18px 50px #00000066;
}
.topicEmoji{
  font-size:22px;
  width:42px;
  height:42px;
  border-radius:14px;
  display:flex;
  align-items:center;
  justify-content:center;
  background: linear-gradient(180deg, #ffffff10, #ffffff08);
  border:1px solid #ffffff1f;
  box-shadow: 0 0 18px #a78bfa22;
}
.topicTitle{
  font-weight:700;
  font-size:15px;
  color: #d8c9ff;
  text-shadow: 0 0 10px #a78bfa55;
}
.topicDesc{ color:var(--muted); font-size:13px; margin-top:2px; }
.topicGlow{
  position:absolute;
  inset:-40%;
  background: radial-gradient(circle at 30% 40%, #a78bfa33, transparent 55%),
              radial-gradient(circle at 70% 70%, #60a5fa22, transparent 55%);
  filter: blur(10px);
  opacity:.55;
  transform: rotate(10deg);
  pointer-events:none;
}

/* Card header */
.panelHead{ display:flex; flex-direction:column; gap:8px; margin-bottom:12px; }
.crumb{ display:flex; align-items:center; gap:10px; color:var(--muted); }
.dotSep{opacity:.6}
.hint{ color:#ffffffcc; }
.linkBtn{
  border:none; background:none; color:#ffffffcc; cursor:pointer; padding:0;
  text-decoration: underline; text-underline-offset: 3px;
}
.linkBtn:hover{ color:#ffffff; }

/* Cards */
.cards{
  display:grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap:14px;
  margin-top:12px;
}
@media (max-width: 860px){ .cards{ grid-template-columns: repeat(2, 1fr); } }

.cardBtn{
  border:none;
  background:none;
  padding:0;
  cursor:pointer;
  perspective: 1000px;
}
.cardBtn.dim{ opacity:.45; filter: saturate(.7) blur(.1px); transform: scale(.99); transition: .2s ease; }
.cardBtn.chosen{ opacity:1; filter:none; transform: scale(1.02); }

.card3d{
  position:relative;
  width:100%;
  height:200px;
  transform-style: preserve-3d;
  transition: transform .85s cubic-bezier(.2,.8,.2,1);
}
.card3d.flip{ transform: rotateY(180deg); }

.tarot{
  position:absolute;
  inset:0;
  border-radius:18px;
  backface-visibility: hidden;
  overflow:hidden;
  box-shadow: 0 14px 40px #00000066;
  border:1px solid #ffffff22;
}
.tarot.back{
  background:
    radial-gradient(120px 90px at 30% 25%, #ffd36a18, transparent 72%),
    radial-gradient(160px 110px at 70% 75%, #a78bfa1e, transparent 70%),
    linear-gradient(180deg, #0d1430dd, #070b18dd);
}
.tarot.front{
  transform: rotateY(180deg);
  background:
    radial-gradient(180px 120px at 40% 30%, #ffffff88, transparent 65%),
    linear-gradient(180deg, #ffffff55, #ffffff15);
}

.foilFrame{
  position:absolute;
  inset:10px;
  border-radius:14px;
  padding:2px;
  background: linear-gradient(120deg, var(--gold1), var(--gold2), #fff1b8, var(--gold2));
  filter: drop-shadow(0 0 12px #ffd36a1a);
}
.foilFrame::after{
  content:"";
  position:absolute;
  inset:2px;
  border-radius:12px;
  border:1px solid #00000018;
}

.shine{
  position:absolute;
  inset:-40%;
  background: linear-gradient(120deg, transparent 30%, #ffffff20 50%, transparent 70%);
  transform: translateX(-60%) rotate(12deg);
  opacity:.6;
  filter: blur(1px);
  animation: sweep 4.6s ease-in-out infinite;
  pointer-events:none;
}
.cardBtn:hover .card3d{ transform: rotateX(6deg) rotateY(-6deg); }

@keyframes sweep{
  0%{ transform: translateX(-70%) rotate(12deg); }
  55%{ transform: translateX(20%) rotate(12deg); }
  100%{ transform: translateX(70%) rotate(12deg); }
}

.backPattern{
  position:absolute;
  inset:0;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  gap:12px;
  padding:16px;
}
.patternRing{
  width:86px; height:86px; border-radius:999px;
  border:1px solid #ffffff33;
  box-shadow: 0 0 26px #a78bfa22, inset 0 0 22px #ffffff10;
  position:relative;
}
.patternRing::before{
  content:""; position:absolute; inset:14px; border-radius:999px;
  border:1px dashed #ffffff33; opacity:.8;
}
.patternStars{ color:#ffffffbb; font-size:14px; letter-spacing:4px; text-shadow: 0 0 14px #ffffff22; }
.patternMark{
  font-weight:800; letter-spacing:3px; color:#ffffffcc; opacity:.85;
  border:1px solid #ffffff22; padding:6px 10px; border-radius:999px; background:#ffffff10;
}

.paper{
  position:absolute;
  inset:14px;
  border-radius:14px;
  background:
    radial-gradient(220px 160px at 30% 30%, #ffffff80, transparent 70%),
    radial-gradient(300px 220px at 70% 80%, #d7b85a25, transparent 70%),
    linear-gradient(180deg, var(--paper), var(--paper2));
  box-shadow: inset 0 0 0 1px #00000010, inset 0 0 30px #00000008;
  overflow:hidden;
}
.frontSigil{
  position:absolute;
  top:18px; left:18px;
  width:44px; height:44px; border-radius:14px;
  display:flex; align-items:center; justify-content:center;
  color:#1b1630;
  background: linear-gradient(120deg, #fff7d1, #f0dd9e);
  border:1px solid #00000012;
  box-shadow: 0 0 0 3px #ffffff55, 0 0 18px #ffd36a22;
  font-size:18px;
}
.frontTitle{
  position:absolute;
  left:18px; right:18px; top:82px;
  text-align:center;
  font-weight:800;
  letter-spacing:2px;
  color:#1b1630;
  text-transform: uppercase;
}
.frontSub{
  position:absolute;
  left:18px; right:18px; top:110px;
  text-align:center;
  color:#2a2245cc;
  font-size:12px;
  letter-spacing:2px;
  text-transform: uppercase;
}

/* Result */
.resultCard{
  border-radius:20px;
  border:1px solid #ffffff26;
  background: linear-gradient(180deg, #0f1532aa, #0b1025aa);
  padding:18px;
  box-shadow: 0 18px 55px #00000066;
  overflow:hidden;
  position:relative;
}
.resultCard::before{
  content:"";
  position:absolute;
  inset:-40%;
  background:
    radial-gradient(circle at 35% 35%, #a78bfa22, transparent 60%),
    radial-gradient(circle at 70% 70%, #ffd36a18, transparent 55%);
  filter: blur(16px);
  opacity:.8;
  pointer-events:none;
}
.resultTop{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  position:relative;
  z-index:1;
}
.pill{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:8px 12px;
  border-radius:999px;
  border:1px solid #ffffff2b;
  background:#ffffff0c;
  color:#ffffffdd;
}
.sigil{
  width:44px; height:44px; border-radius:16px;
  display:flex; align-items:center; justify-content:center;
  border:1px solid #ffffff2b;
  background: linear-gradient(180deg, #ffffff12, #ffffff08);
  box-shadow: 0 0 18px #a78bfa22;
  font-size:18px; color:#ffffffdd;
}
.resultName{
  margin:14px 0 8px;
  font-size:30px;
  text-shadow: 0 0 18px #ffffff2c;
  position:relative;
  z-index:1;
}
.resultText{
  margin:0;
  color:#c9cbffcc;
  line-height:1.7;
  white-space:pre-line;
  position:relative;
  z-index:1;
}
.actionBox{
  margin-top:14px;
  padding:12px;
  border-radius:14px;
  border:1px solid #ffffff22;
  background: linear-gradient(180deg, #ffffff10, #ffffff06);
  position:relative;
  z-index:1;
}
.actionTitle{
  font-size:12px;
  color:#ffffffcc;
  letter-spacing:2px;
  text-transform: uppercase;
  margin-bottom:6px;
}
.tags{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-top:12px;
  position:relative;
  z-index:1;
}
.tag{
  font-size:12px;
  padding:7px 10px;
  border-radius:999px;
  border:1px solid #ffffff22;
  background:#ffffff0b;
  color:#ffffffdd;
}
.actions{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin-top:14px;
  position:relative;
  z-index:1;
}
.btn{
  border:none;
  border-radius:14px;
  padding:11px 14px;
  cursor:pointer;
  color:#0b0f22;
  font-weight:800;
  background: linear-gradient(120deg, #fff1b8, #d7b85a);
  box-shadow: 0 14px 35px #00000055, 0 0 24px #ffd36a1a;
  transition: transform .12s ease, box-shadow .12s ease;
}
.btn:hover{
  transform: translateY(-1px);
  box-shadow: 0 18px 45px #00000066, 0 0 34px #ffd36a22;
}
.btn.ghost{
  background: #ffffff0f;
  color:#ffffffee;
  border:1px solid #ffffff26;
  box-shadow: 0 14px 35px #00000055;
}
.foot{ text-align:center; margin-top:14px; color:#ffffff90; }

/* Overlay (IMPORTANT: hidden = display:none so it NEVER blocks clicks) */
.overlay{
  display:flex;
  position: fixed;
  inset: 0;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  gap:14px;
  background:
    radial-gradient(900px 600px at 50% 40%, #a78bfa22, transparent 65%),
    linear-gradient(180deg, #050612cc, #050612ee);
  backdrop-filter: blur(10px);
  z-index: 9999;
  opacity: 1;
  transition: opacity .25s ease;
}
.overlay.isHidden{
  display:none;
  opacity:0;
  pointer-events:none;
}

/* Sparkles */
.sparkles{
  position:relative;
  width: 240px;
  height: 150px;
  filter: drop-shadow(0 0 18px #ffffff22) drop-shadow(0 0 30px #a78bfa22);
}
.sparkles span{
  position:absolute;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: #ffffffcc;
  opacity: 0;
  animation: twinkle 1.05s infinite ease-in-out;
}

.sparkles span:nth-child(1){ left:10%; top:20%; animation-delay: .05s; transform: scale(1.2);}
.sparkles span:nth-child(2){ left:25%; top:55%; animation-delay: .22s; transform: scale(.9);}
.sparkles span:nth-child(3){ left:40%; top:30%; animation-delay: .38s; transform: scale(1.6);}
.sparkles span:nth-child(4){ left:55%; top:65%; animation-delay: .14s; transform: scale(1.1);}
.sparkles span:nth-child(5){ left:70%; top:25%; animation-delay: .46s; transform: scale(.8);}
.sparkles span:nth-child(6){ left:82%; top:55%; animation-delay: .30s; transform: scale(1.4);}
.sparkles span:nth-child(7){ left:18%; top:78%; animation-delay: .58s; transform: scale(1.0);}
.sparkles span:nth-child(8){ left:33%; top:10%; animation-delay: .67s; transform: scale(.7);}
.sparkles span:nth-child(9){ left:48%; top:85%; animation-delay: .41s; transform: scale(1.3);}
.sparkles span:nth-child(10){ left:62%; top:12%; animation-delay: .74s; transform: scale(1.0);}
.sparkles span:nth-child(11){ left:76%; top:80%; animation-delay: .12s; transform: scale(.9);}
.sparkles span:nth-child(12){ left:90%; top:35%; animation-delay: .63s; transform: scale(1.5);}
.sparkles span:nth-child(13){ left:6%; top:44%; animation-delay: .33s; transform: scale(.9);}
.sparkles span:nth-child(14){ left:58%; top:38%; animation-delay: .49s; transform: scale(1.2);}
.sparkles span:nth-child(15){ left:44%; top:52%; animation-delay: .18s; transform: scale(.8);}
.sparkles span:nth-child(16){ left:84%; top:14%; animation-delay: .56s; transform: scale(1.1);}

@keyframes twinkle{
  0%{ opacity:0; transform: scale(.6); }
  35%{ opacity:1; transform: scale(1.7); }
  70%{ opacity:.18; transform: scale(.9); }
  100%{ opacity:0; transform: scale(.6); }
}

.loadingText{
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffffcc;
  text-shadow: 0 0 18px #ffffff22;
}

/* floating star particles canvas */
#starCanvas{
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;            /* 패널/카드보다 뒤 */
  pointer-events: none;  /* 클릭 절대 안 막음 */
  opacity: 0.65;
}

/* app이 별 위에 오도록 */
.app{ position: relative; z-index: 1; }

/* ===== Start Popup (cloud) ===== */
.startPopup{
  position: fixed;
  inset: 0;
  z-index: 9000;              /* overlay(9999)보단 아래, 패널보단 위 */
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(900px 600px at 50% 40%, #a78bfa1a, transparent 65%),
              rgba(3, 4, 12, 0.72);
  backdrop-filter: blur(10px);
  cursor: pointer;
}

.startPopup.isHidden{
  display: none;              /* ✅ 사라지면 클릭 완전 통과 */
}

.cloudPopup{
  position: relative;
  width: min(640px, 90vw);
  padding: 34px 22px 28px;
  border-radius: 999px;       /* 구름 베이스 */
  border: 1px solid #ffffff22;
  background: linear-gradient(180deg, #ffffff14, #ffffff08);
  box-shadow: 0 30px 90px #00000080;
  overflow: hidden;
  transform: translateY(0);
  animation: floaty 3.8s ease-in-out infinite;
}

@keyframes floaty{
  0%{ transform: translateY(0); }
  50%{ transform: translateY(-6px); }
  100%{ transform: translateY(0); }
}

/* 구름 뭉게뭉게 모양(겹친 원들) */
.cloudBg{
  position: absolute;
  inset: -30%;
  background:
    radial-gradient(140px 90px at 20% 55%, #ffffff22, transparent 70%),
    radial-gradient(170px 110px at 38% 40%, #ffffff20, transparent 72%),
    radial-gradient(190px 120px at 56% 55%, #ffffff18, transparent 72%),
    radial-gradient(160px 105px at 74% 42%, #ffffff18, transparent 72%),
    radial-gradient(150px 95px at 86% 60%, #ffffff16, transparent 72%),
    radial-gradient(220px 150px at 55% 70%, #a78bfa18, transparent 72%),
    radial-gradient(240px 160px at 45% 35%, #60a5fa12, transparent 74%);
  filter: blur(10px);
  opacity: .95;
  pointer-events: none;
}

.cloudText{
  position: relative;
  z-index: 1;
  text-align: center;   /* ✅ 가운데 정렬 */
  font-size: 30px;
  line-height: 1.2;
  color: #ffffffee;
  font-family: "Brush Script MT","Snell Roundhand","Apple Chancery","Segoe Script",cursive; /* ✅ 필기체 */
  text-shadow: 0 0 14px #ffffff22, 0 0 40px #a78bfa22;
  padding: 4px 10px;
}

.cloudHint{
  position: relative;
  z-index: 1;
  margin-top: 10px;
  text-align: center;
  font-size: 13px;
  color: #c9cbffcc;
  letter-spacing: 1px;
}
