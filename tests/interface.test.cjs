'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
function setup(){
 const fixed=new Map(),dynamic=new Map();let flightButtons=[];
 const make=(attrs='')=>({disabled:/\bdisabled\b/.test(attrs),checked:/\bchecked\b/.test(attrs),dataset:{},classList:{toggle(){}},setAttribute(){},textContent:'',replaceChildren(){}});
 for(const id of ['log','ticket-detail','uncertain','expire','receive','reset'])fixed.set('#'+id,make());
 fixed.set('.status',make());
 const nav=['change','refund'].map(v=>({...make(),dataset:{view:v}}));
 const workspace=make();
 Object.defineProperty(workspace,'innerHTML',{get(){return this.html||'';},set(html){
  this.html=html;dynamic.clear();flightButtons=[];
  for(const m of html.matchAll(/<(?:button|input|p|div)[^>]*>/g)){
   const tag=m[0],id=tag.match(/\bid="([^"]+)"/)?.[1],f=tag.match(/\bdata-flight="([^"]+)"/)?.[1];
   const el=make(tag);if(id)dynamic.set('#'+id,el);if(f){el.dataset.flight=f;flightButtons.push(el);}
  }
 }});
 fixed.set('#workspace',workspace);
 const document={querySelector:s=>fixed.get(s)||dynamic.get(s)||null,querySelectorAll:s=>s==='[data-view]'?nav:s==='.select-flight'?flightButtons:[],createElement:()=>make()};
 const context=vm.createContext({document,console,Date,setInterval(){},TravelDemo:require('../booking.js')});
 vm.runInContext(fs.readFileSync(path.join(__dirname,'../script.js'),'utf8'),context);
 return {find:s=>document.querySelector(s),html:()=>workspace.innerHTML,nav:v=>nav.find(n=>n.dataset.view===v).onclick(),click:s=>{const el=document.querySelector(s);assert.ok(el,s);assert.equal(el.disabled,false,s+' disabled');el.onclick();},tick:s=>{const el=document.querySelector(s);assert.ok(el,s);assert.equal(el.disabled,false);el.onchange({target:{checked:true}});},choose:id=>{const el=flightButtons.find(b=>b.dataset.flight===id);assert.equal(el.disabled,false);el.onclick();}};
}
test('K5 interface: ambiguity asks, separate consent and confirmation, then uses right',()=>{
 const ui=setup();assert.match(ui.html(),/Không đủ 2 chỗ/);assert.equal(ui.find('#execute-change').disabled,true);
 ui.click('#ambiguous');assert.match(ui.find('#assistant-message').textContent,/07:00.*09:30/);
 ui.choose('BM 201');ui.click('#hold');assert.match(ui.html(),/còn (20:00|19:59)/);
 assert.equal(ui.find('#execute-change').disabled,true);
 ui.tick('#use-right');ui.tick('#change-ack');ui.click('#execute-change');
 assert.match(ui.find('#ticket-detail').innerHTML,/BM 201/);assert.match(ui.find('#ticket-detail').innerHTML,/đã sử dụng/);
 assert.equal(ui.find('#execute-change').disabled,true);
});
test('K3 interface: full refund, confirmation required, pending is not money paid',()=>{
 const ui=setup();ui.nav('refund');assert.match(ui.html(),/Toàn bộ/);assert.match(ui.html(),/không thể hủy/);
 assert.doesNotMatch(ui.html(),/600\.000|1\.800\.000/);assert.equal(ui.find('#send-refund').disabled,true);
 ui.tick('#refund-ack');ui.click('#send-refund');assert.match(ui.html(),/Tiền chưa được xác nhận đã trả/);
 assert.equal(ui.find('#send-refund').disabled,true);ui.nav('change');assert.equal(ui.find('#execute-change').disabled,true);
});
test('UI error: automatically sent support differs from received, no repeat',()=>{
 const ui=setup();ui.click('#uncertain');assert.match(ui.html(),/Đã gửi hồ sơ · đang chờ nhân viên/);
 assert.equal(ui.find('#send-refund').disabled,true);ui.click('#receive');
 assert.match(ui.html(),/Nhân viên đã nhận · mô phỏng/);
});
test('UI expires hold and clears consent tied to old selection',()=>{
 const ui=setup();ui.choose('BM 201');ui.click('#hold');ui.tick('#use-right');ui.tick('#change-ack');
 ui.click('#expire');assert.equal(ui.find('#execute-change').disabled,true);assert.equal(ui.find('#change-ack').checked,false);
 ui.click('#hold');ui.tick('#change-ack');ui.choose('BM 205');assert.equal(ui.find('#execute-change').disabled,true);
 assert.equal(ui.find('#change-ack').checked,false);
});
