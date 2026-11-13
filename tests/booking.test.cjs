'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const {Booking}=require('../booking.js');
function ready(){const b=new Booking();b.select('BM 201');b.hold(1000);b.consent(true);b.changeAck=true;return b;}
test('khong tach hai hanh khach vao chuyen chi con mot cho',()=>{const b=new Booking();assert.equal(b.select('BM 217'),false);assert.equal(b.selected,null);});
test('khong doi khi yeu cau mo ho hoac chua dong y dung quyen',()=>{const b=new Booking();b.select('BM 201');b.hold(1000);b.changeAck=true;assert.equal(b.change(2000),false);b.consent(true);b.changeAck=true;b.ambiguous();assert.equal(b.change(2000),false);assert.equal(b.selected,null);assert.equal(b.holdUntil,0);});
test('doi dung sau xac nhan va khong doi/hoan lan hai',()=>{const b=ready();assert.equal(b.change(2000),true);assert.equal(b.changedFlight.id,'BM 201');assert.equal(b.change(2001),false);b.refundAck=true;assert.equal(b.sendRefund(),false);});
test('doi lua chon vo hieu giu cho va xac nhan cu',()=>{const b=ready();b.select('BM 205');assert.equal(b.change(2000),false);assert.equal(b.changeAck,false);assert.equal(b.holdUntil,0);});
test('giu cho het han tai dung moc 20 phut thi khong doi',()=>{const b=ready();assert.equal(b.change(1201000),false);assert.equal(b.changeAck,false);assert.equal(b.holdUntil,0);});
test('bo giu cho va rut dong y quyen deu chan doi',()=>{const b=ready();b.release();assert.equal(b.change(2000),false);b.hold(3000);b.changeAck=true;b.consent(false);assert.equal(b.change(4000),false);});
test('hoan can xac nhan, khong gui trung hay doi sau hoan',()=>{const b=new Booking();assert.equal(b.sendRefund(),false);b.refundAck=true;assert.equal(b.sendRefund(),true);b.refundAck=true;assert.equal(b.sendRefund(),false);assert.equal(b.select('BM 201'),false);assert.equal(b.hold(1000),false);});
test('ket qua hoan chua ro tu chuyen ho tro, khong nham da nhan',()=>{const b=ready();assert.equal(b.injectUnknown(),true);assert.equal(b.support.refund,'sent');assert.equal(b.change(2000),false);b.refundAck=true;assert.equal(b.sendRefund(),false);assert.equal(b.receiveSupport('refund'),true);assert.equal(b.support.refund,'received');assert.equal(b.injectUnknown(),false);});
test('ho tro khong cap ngoai le giu quyen va khong tu giao dich',()=>{const b=new Booking();assert.equal(b.requestSupport('change'),true);assert.equal(b.requestSupport('change'),false);b.receiveSupport('change');assert.equal(b.useRight,false);assert.equal(b.changed,false);});
test('dat lai xoa giao dich, giu cho, xac nhan va ho tro',()=>{const b=ready();b.injectUnknown();b.reset();assert.equal(b.refund,'idle');assert.equal(b.support.refund,'none');assert.equal(b.holdUntil,0);assert.equal(b.useRight,false);assert.equal(b.selected,null);});
