'use strict';
(function(root){
 const flights = [
  {id:'BM 217',date:'12/11/2026',time:'21:00',seats:1},
  {id:'BM 201',date:'13/11/2026',time:'07:00',seats:9},
  {id:'BM 205',date:'13/11/2026',time:'09:30',seats:4}
 ];
 const passengers = ['Nguyễn Minh An (34 tuổi)','Nguyễn Gia Bình (5 tuổi)'];
 class Booking {
  constructor(){this.reset();}
  reset(){this.selected=null;this.holdUntil=0;this.useRight=false;this.changeAck=false;this.refundAck=false;this.refund='idle';this.changed=false;this.changedFlight=null;this.support={refund:'none',change:'none'};}
  blocked(){return this.changed||this.refund!=='idle';}
  expire(now=Date.now()){if(this.holdUntil&&now>=this.holdUntil){this.holdUntil=0;this.changeAck=false;return true;}return false;}
  select(id){if(this.blocked())return false;const f=flights.find(f=>f.id===id);if(!f||f.seats<passengers.length)return false;this.selected=f;this.holdUntil=0;this.changeAck=false;this.refundAck=false;return true;}
  hold(now=Date.now()){if(this.blocked()||!this.selected||this.selected.seats<2)return false;this.holdUntil=now+20*60*1000;this.changeAck=false;return true;}
  release(){this.holdUntil=0;this.changeAck=false;}
  ambiguous(){if(this.blocked())return false;this.selected=null;this.release();this.useRight=false;return true;}
  consent(value){this.useRight=!!value;this.changeAck=false;}
  canChange(now=Date.now()){this.expire(now);return !!(!this.blocked()&&this.selected&&this.selected.seats>=2&&this.holdUntil>now&&this.useRight&&this.changeAck);}
  change(now=Date.now()){if(!this.canChange(now))return false;this.changed=true;this.changedFlight=this.selected;this.release();this.refundAck=false;return true;}
  canRefund(){return !this.blocked()&&this.refundAck;}
  sendRefund(){if(!this.canRefund())return false;this.refund='pending';this.refundAck=false;this.release();this.useRight=false;return true;}
  injectUnknown(){if(this.blocked())return false;this.refund='unknown';this.refundAck=false;this.release();this.support.refund='sent';return true;}
  requestSupport(kind){if(!Object.hasOwn(this.support,kind)||this.support[kind]!=='none')return false;this.support[kind]='sent';return true;}
  receiveSupport(kind){if(this.support[kind]!=='sent')return false;this.support[kind]='received';return true;}
 }
 const api={Booking,flights,passengers};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.TravelDemo=api;
})(typeof globalThis!=='undefined'?globalThis:this);
