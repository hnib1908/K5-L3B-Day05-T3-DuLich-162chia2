'use strict';
const {Booking,flights,passengers}=TravelDemo;
const booking=new Booking();
let view='change', message='Bạn muốn đổi chuyến nhưng giữ quyền đổi miễn phí? Theo chính sách, đổi chuyến sẽ dùng lần đổi duy nhất. Tôi chưa đổi vé. Bạn có thể xem phương án, giữ nguyên hoặc nhờ nhân viên kiểm tra.';
const $=s=>document.querySelector(s);
const logEntries=[];
const source='<details class="source"><summary>Căn cứ · Chính sách Bay Mẫu / dữ liệu dựng T3</summary><p>Chuyến BM 213 bị hủy do bão. Đổi miễn phí một lần trong 48 giờ hoặc hoàn toàn bộ; không bồi thường tiền mặt. Giữ chỗ 20 phút chưa đổi vé. Yêu cầu hoàn đã gửi không thể hủy. Fixture không có số tiền vé, giờ đến, chênh lệch giá hoặc mốc bắt đầu chính xác của quyền 48 giờ; demo không tự điền các thông tin này.</p></details>';
function log(text){logEntries.unshift(new Date().toLocaleTimeString('vi-VN')+': '+text);$('#log').replaceChildren(...logEntries.map(t=>{const li=document.createElement('li');li.textContent=t;return li;}));}
function say(text){message=text;render();}
function supportHtml(kind){
 const status=booking.support[kind];
 return '<div class="support" role="status"><strong>Hỗ trợ: '+(status==='none'?'Chưa gửi hồ sơ':status==='sent'?'Đã gửi hồ sơ · đang chờ nhân viên':'Nhân viên đã nhận · mô phỏng')+'</strong><p class="small">'+(status==='none'?'Chỉ chuyển thông tin cần thiết của đặt chỗ và vấn đề cần kiểm tra.':'Hồ sơ TRV-7Q2K: 2 hành khách, yêu cầu, kết quả thao tác và bước xác nhận. Mục tiêu nhận trong 5 phút; sau 15 phút chưa nhận thì chuyển trưởng ca (quy tắc đề xuất, chưa có hỗ trợ thật).')+'</p><button id="'+kind+'-support" class="secondary" '+(status!=='none'?'disabled':'')+'>Nhờ nhân viên kiểm tra</button></div>';
}
function bindSupport(kind){$('#'+kind+'-support').onclick=()=>{if(booking.requestSupport(kind)){log('Đã gửi hồ sơ '+(kind==='refund'?'hoàn':'đổi')+'; chưa có nhân viên nhận (mô phỏng).');render();}};}
function holdText(){
 if(!booking.holdUntil)return 'Chưa giữ chỗ. Cần giữ chỗ trước xác nhận đổi.';
 const seconds=Math.max(0,Math.ceil((booking.holdUntil-Date.now())/1000));
 return 'Đã giữ 2 chỗ · còn '+String(Math.floor(seconds/60)).padStart(2,'0')+':'+String(seconds%60).padStart(2,'0')+' · chưa đổi vé, chưa dùng quyền.';
}
function render(){
 document.querySelectorAll('[data-view]').forEach(b=>{b.classList.toggle('active',b.dataset.view===view);b.setAttribute('aria-current',b.dataset.view===view?'page':'false');});
 $('.status').textContent=booking.changed?'● Đã đổi · mô phỏng':booking.refund==='pending'?'● Yêu cầu hoàn đã tiếp nhận':booking.refund==='unknown'?'● Kết quả hoàn chưa rõ':'● Chuyến gốc đã hủy do bão';
 $('#ticket-detail').innerHTML=booking.changed?'<strong>'+booking.changedFlight.time+' · '+booking.changedFlight.id+'</strong><span>'+booking.changedFlight.date+' · Đã đổi cho cả hai</span><span>Lần đổi miễn phí đã sử dụng</span>':'<strong>19:00 · BM 213</strong><span>12/11/2026 · ĐÃ HỦY DO BÃO</span><span>Một lần đổi miễn phí trong 48 giờ hoặc hoàn toàn bộ</span>';
 const box=$('#workspace');
 if(view==='refund'){
  const locked=booking.blocked();
  box.innerHTML='<div class="eyebrow">02 / HOÀN VÉ · K3</div><h2 id="view-title">Kiểm tra trước khi gửi hoàn</h2><p class="intro">“Hoàn vé ngay” chưa xác nhận rõ hành khách và hậu quả.</p><div class="panel"><div class="panel-head"><h3>TRV-7Q2K · 2 hành khách</h3><span class="tag warn">Cần khách duyệt</span></div><p>'+passengers.join('<br>')+'</p><div class="money-row total" data-mark="1"><span>Quyền hoàn</span><span>Toàn bộ</span></div><p class="small">Số tiền cụ thể, nơi nhận và thời gian trả: chưa có trong fixture. Nếu cần xác minh trước khi quyết định, hãy nhờ nhân viên.</p><div class="alert"><strong>Gửi rồi không thể hủy yêu cầu.</strong><br>Yêu cầu được tiếp nhận chưa có nghĩa tiền đã trả. Không có khoản khấu trừ được dựng thêm.</div>'+
  (booking.changed?'<div class="alert">Đặt chỗ đã đổi trong demo. Không áp dụng lại phương án hoàn của vé cũ; cần nhân viên kiểm tra.</div>':'')+
  (booking.refund==='unknown'?'<div class="alert" role="status"><strong>Xin lỗi, hệ thống đã gửi trước khi xác nhận đủ.</strong><br>Kết quả chưa rõ. Nếu đã gửi thành công, không thể hủy. Trạng thái vé và tiền chưa xác minh. Hệ thống đã tự tạo hồ sơ hỗ trợ và khóa gửi lại.</div>':'')+
  (booking.refund==='pending'?'<div class="alert success" role="status">Yêu cầu MOCK-RF-001 đã được tiếp nhận cho cả hai hành khách · mô phỏng. Không thể hủy. Tiền chưa được xác nhận đã trả.</div>':'')+
  '<label class="check" data-mark="2"><input id="refund-ack" type="checkbox" '+(booking.refundAck?'checked ':'')+(locked?'disabled':'')+'><span>Tôi xác nhận gửi hoàn cho cả hai hành khách TRV-7Q2K theo quyền hoàn toàn bộ và hiểu yêu cầu đã gửi không thể hủy.</span></label><div class="actions"><button id="send-refund" class="primary" '+(!booking.canRefund()?'disabled':'')+'>Xác nhận gửi yêu cầu hoàn · mô phỏng</button><button id="refund-back" class="secondary">Quay lại, chưa gửi thêm</button></div><p class="small">'+(locked?'Khóa gửi: đã có giao dịch hoặc kết quả chưa rõ; tránh gửi trùng.':'Chưa xác nhận thì không gửi. Thay đổi phạm vi hành khách cần kiểm tra riêng với nhân viên.')+'</p>'+source+'<div data-mark="3">'+supportHtml('refund')+'</div></div>';
  $('#refund-ack').onchange=e=>{booking.refundAck=e.target.checked;render();};
  $('#send-refund').onclick=()=>{if(booking.sendRefund()){log('Khách xác nhận cả hai hành khách, hoàn toàn bộ, không thể hủy; tiếp nhận MOCK-RF-001 (mô phỏng).');render();}};
  $('#refund-back').onclick=()=>{booking.refundAck=false;view='change';render();};
  bindSupport('refund');
 }else{
  const f=booking.selected,blocked=booking.blocked();
  box.innerHTML='<div class="eyebrow">01 / TRA CỨU VÀ ĐỔI CHUYẾN · K5</div><h2 id="view-title">Cùng đến nơi, rõ quyền lợi</h2><p class="intro">Đổi cho cả hai hành khách. Không tự tách trẻ nhỏ sang chuyến khác.</p><div class="chat" role="status"><strong>Trợ lý AI · mô phỏng</strong><p id="assistant-message"></p></div><div class="panel"><div class="panel-head"><h3>HAN → SGN · chuyến thay thế</h3><span class="tag">Tra cứu tự động</span></div>'+
  flights.map(item=>'<div class="flight"><div><strong>'+item.time+' · '+item.id+'</strong><div class="small">'+item.date+' · còn '+item.seats+' chỗ</div></div><button class="secondary select-flight" data-flight="'+item.id+'" '+(blocked||item.seats<2?'disabled':'')+'>'+(item.seats<2?'Không đủ 2 chỗ':f?.id===item.id?'Đang chọn':'Chọn chuyến')+'</button></div>').join('')+
  '<p class="small">BM 217 chỉ còn 1 chỗ, không phù hợp cho cả hai. Không có dữ liệu giờ đến hoặc chênh lệch giá để tự cam kết.</p><div class="actions"><button class="secondary" id="ambiguous" '+(blocked?'disabled':'')+'>Ca lạ: khách nói “Ừ đổi đi”</button></div>'+source+'</div><div class="panel"><div class="panel-head"><h3>Kiểm tra phương án</h3><span class="tag warn">Đổi cần khách duyệt</span></div><p>'+(f?'<strong>'+f.id+' · '+f.date+' · '+f.time+'</strong><br>'+passengers.join(' · '):'Chưa chọn chuyến. Chọn rõ một phương án phía trên.')+'</p><table data-mark="1"><thead><tr><th>Quyền lợi</th><th>Trước đổi</th><th>Sau đổi</th></tr></thead><tbody><tr><td>Lần đổi miễn phí</td><td>1 lần trong 48 giờ</td><td>Đã sử dụng lần này</td></tr><tr><td>Giữ quyền cho tương lai</td><td>Nếu chưa dùng, còn trong hạn</td><td>Không còn lần này</td></tr></tbody></table><div class="alert">Không có căn cứ cho phương án đổi mà vẫn giữ quyền. Nhân viên không được giả lập cấp ngoại lệ để vượt chính sách.</div>'+
  '<div class="actions"><button class="secondary" id="hold" '+(!f||blocked?'disabled':'')+'>Giữ 2 chỗ trong 20 phút</button><button class="secondary" id="release" '+(!booking.holdUntil?'disabled':'')+'>Bỏ giữ chỗ</button></div><p class="small" id="hold-status" role="status">'+holdText()+'</p><p class="small">Giữ chỗ không kéo dài thời hạn quyền 48 giờ. Demo giả định quyền còn hiệu lực tại thời điểm fixture; trước giao dịch thật phải xác minh lại.</p>'+
  '<label class="check"><input id="use-right" type="checkbox" '+(booking.useRight?'checked ':'')+(blocked?'disabled':'')+'><span>Tôi thay đổi yêu cầu: đồng ý dùng lần đổi miễn phí hiện tại, không giữ lần này cho tương lai.</span></label>'+
  '<label class="check" data-mark="2"><input id="change-ack" type="checkbox" '+(booking.changeAck?'checked ':'')+(!f||!booking.holdUntil||!booking.useRight||blocked?'disabled':'')+'><span>Tôi xác nhận đổi cả Nguyễn Minh An và Nguyễn Gia Bình sang '+(f?f.id+' · '+f.date+' · '+f.time:'chuyến chưa chọn')+' và sử dụng lần đổi miễn phí duy nhất.</span></label>'+
  '<div class="actions"><button id="execute-change" class="primary" '+(!booking.canChange()?'disabled':'')+'>Xác nhận đổi cho 2 hành khách · mô phỏng</button><button id="keep" class="secondary">Giữ nguyên, chọn lại</button></div>'+
  (blocked?'<div class="alert" role="status">'+(booking.changed?'Đã đổi thành công trong mô phỏng; quyền đã sử dụng. Không có nút hoàn tác hoặc khôi phục quyền.':'Đang có yêu cầu hoàn hoặc kết quả chưa rõ. Không tạo thêm giao dịch đổi.')+'</div>':'<p class="small">Chỉ mở xác nhận đổi khi đã chọn chuyến, còn giữ chỗ, đồng ý dùng quyền và xác nhận đúng phương án.</p>')+
  '<div data-mark="3">'+supportHtml('change')+'</div></div>';
  $('#assistant-message').textContent=message;
  document.querySelectorAll('.select-flight').forEach(b=>b.onclick=()=>{if(booking.select(b.dataset.flight)){log('Chọn '+b.dataset.flight+' cho cả hai; chưa đổi, chưa dùng quyền.');say('Bạn chọn '+b.dataset.flight+'. Hãy kiểm tra ngày giờ, giữ chỗ và xác nhận rõ việc sử dụng quyền đổi.');}});
  $('#ambiguous').onclick=()=>{if(booking.ambiguous()){log('Khách nói “Ừ đổi đi”: chặn đổi, xóa lựa chọn và xác nhận cũ.');say('Bạn muốn BM 201 lúc 07:00 hay BM 205 lúc 09:30 ngày 13/11, cho cả hai hành khách phải không? Tôi chưa đổi vé. Vui lòng chọn rõ chuyến và xác nhận việc dùng lần đổi miễn phí.');}};
  $('#hold').onclick=()=>{if(booking.hold()){log('Giữ 2 chỗ '+booking.selected.id+' trong 20 phút; chưa đổi vé.');render();}};
  $('#release').onclick=()=>{booking.release();log('Đã bỏ giữ chỗ; xác nhận đổi cũ không còn hiệu lực.');render();};
  $('#use-right').onchange=e=>{booking.consent(e.target.checked);render();};
  $('#change-ack').onchange=e=>{booking.changeAck=e.target.checked;render();};
  $('#execute-change').onclick=()=>{if(booking.change()){log('Đã đổi cả hai sang '+booking.changedFlight.id+'; lần đổi miễn phí đã sử dụng (mô phỏng).');say('Đã đổi trong demo. Lần đổi miễn phí đã sử dụng; không hứa khôi phục quyền.');}};
  $('#keep').onclick=()=>{if(!blocked){booking.ambiguous();log('Giữ nguyên đặt chỗ, bỏ giữ chỗ và xác nhận cũ.');say('Chưa đổi vé và chưa dùng quyền. Thời hạn chính sách vẫn tiếp tục trôi.');}else{say('Đã có giao dịch; không thể dùng nút này để hoàn tác. Hãy nhờ nhân viên kiểm tra.');}};
  bindSupport('change');
 }
}
document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>{booking.refundAck=false;booking.changeAck=false;view=b.dataset.view;render();});
$('#uncertain').onclick=()=>{if(booking.injectUnknown()){view='refund';log('Tiêm lỗi K3: kết quả chưa rõ; tự gửi hồ sơ hỗ trợ và chặn giao dịch trùng.');render();}else{log('Không tiêm giao dịch mới khi đã có giao dịch. Đặt lại để thử ca độc lập.');}};
$('#expire').onclick=()=>{if(booking.holdUntil){booking.expire(booking.holdUntil);log('Hết 20 phút: tự nhả chỗ, xóa xác nhận đổi; cần giữ lại trước khi đổi.');render();}};
$('#receive').onclick=()=>{let received=false;for(const kind of ['refund','change'])if(booking.receiveSupport(kind))received=true;if(received){log('Nhân viên đã nhận hồ sơ · mô phỏng; không cấp ngoại lệ hoặc đổi/hoàn thay khách.');render();}};
$('#reset').onclick=()=>{booking.reset();view='change';logEntries.length=0;message='Demo đã đặt lại. Chuyến gốc bị hủy; chưa đổi, chưa hoàn, chưa dùng quyền.';log('Đặt lại toàn bộ trạng thái và xác nhận.');render();};
setInterval(()=>{if(booking.expire()){log('Hết hạn giữ chỗ: tự nhả, xác nhận cũ vô hiệu.');render();}else if($('#hold-status'))$('#hold-status').textContent=holdText();},1000);
render();
