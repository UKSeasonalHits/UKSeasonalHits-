const cfg=JSON.parse(localStorage.getItem('radioConfig')||'{}');
const audio=document.getElementById('radioPlayer');
if(cfg.streamUrl) audio.src=cfg.streamUrl;
if(cfg.stationName) document.querySelector('.brand').textContent='📻 '+cfg.stationName.toUpperCase();
document.getElementById('nowTitle').textContent=cfg.streamUrl?'Live Stream':'Radio stream';
document.getElementById('publicNow').textContent=cfg.streamUrl?'Live stream connected.':'No stream connected yet.';