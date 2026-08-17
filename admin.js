const PASSWORD='change-me'; // CHANGE THIS before publishing
const $=id=>document.getElementById(id);
let library=JSON.parse(localStorage.getItem('radioLibrary')||'[]');
function render(){
 const q=($('search').value||'').toLowerCase();
 $('library').innerHTML=library.filter(x=>x.name.toLowerCase().includes(q)).map((x,i)=>`<div class="library-item"><span>🎵 ${escapeHtml(x.name)}<br><small>${Math.round(x.size/1024)} KB</small></span><button onclick="playLocal(${i})">Play</button><button class="danger" onclick="removeTrack(${i})">Remove</button></div>`).join('')||'<p class="hint">No local tracks added.</p>';
}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
window.playLocal=i=>{ $('localPlayer').src=library[i].data; $('localPlayer').play(); };
window.removeTrack=i=>{library.splice(i,1);localStorage.setItem('radioLibrary',JSON.stringify(library));render()};
$('loginBtn').onclick=()=>{if($('password').value===PASSWORD){$('login').hidden=true;$('dashboard').hidden=false;load();}else $('loginMsg').textContent='Incorrect password.'};
$('logoutBtn').onclick=()=>location.reload();
$('addFiles').onclick=async()=>{for(const f of $('files').files){if(f.size>8*1024*1024){alert(f.name+' is over the 8MB browser-demo limit.');continue}library.push({name:f.name,size:f.size,data:await toDataUrl(f)})}localStorage.setItem('radioLibrary',JSON.stringify(library));render()};
$('search').oninput=render;
$('saveStream').onclick=()=>{let c=JSON.parse(localStorage.getItem('radioConfig')||'{}');c.streamUrl=$('streamUrl').value.trim();localStorage.setItem('radioConfig',JSON.stringify(c));$('status').textContent='Stream saved.'};
$('saveStation').onclick=()=>{let c=JSON.parse(localStorage.getItem('radioConfig')||'{}');c.stationName=$('stationName').value.trim()||"UK's Biggest Seasonal Hits";localStorage.setItem('radioConfig',JSON.stringify(c));$('status').textContent='Station settings saved.'};
function toDataUrl(f){return new Promise(r=>{const a=new FileReader();a.onload=()=>r(a.result);a.readAsDataURL(f)})}
function load(){const c=JSON.parse(localStorage.getItem('radioConfig')||'{}');$('streamUrl').value=c.streamUrl||'';$('stationName').value=c.stationName||"UK's Biggest Seasonal Hits";render()}
