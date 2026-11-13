# Mây Travel — LAB5 T3

Mở index.html bằng trình duyệt. Không cần cài đặt, backend hoặc API key.
Dữ liệu theo [track T3](https://github.com/VinUni-AI20k/K5-L3-Day05-AI-Product-UX-Autonomy/blob/main/tracks/t3-travel.md): TRV-7Q2K, hai hành khách, BM 213 hủy do bão.
Có hai màn hình chức năng: đổi/tra chuyến và hoàn vé.

## Thử demo

1. Xem ba chuyến. BM 217 chỉ còn một chỗ, không cho chọn cho cả hai.
2. Bấm ca “Ừ đổi đi”: AI hỏi chuyến cụ thể, chưa thực hiện giao dịch.
3. Chọn BM 201 hoặc BM 205, giữ hai chỗ 20 phút. Giữ chưa đổi vé hoặc dùng quyền.
4. K5: chưa đồng ý sử dụng quyền thì không đổi. Tick đồng ý dùng quyền, tick xác nhận phương án, rồi đổi. Quyền đã dùng, không có ngoại lệ giữ quyền.
5. Đặt lại. K3: vào hoàn vé; chưa tick thì không gửi. Hiện hoàn toàn bộ và không thể hủy yêu cầu; không dựng số tiền. Xác nhận cả hai rồi gửi; tiền chưa được báo đã trả, không gửi trùng.
6. Đặt lại, tiêm lỗi K3: kết quả chưa rõ, tự gửi hồ sơ, chặn gửi lại và chặn đổi. Chỉ hiện nhân viên đã nhận sau khi bấm điều khiển nhận hồ sơ.
7. Thử hết hạn giữ chỗ: điều khiển giả lập hết 20 phút làm vô hiệu xác nhận đổi. Thử đổi lựa chọn cũng cần giữ chỗ/xác nhận lại.

## Giới hạn

Tất cả giao dịch, giữ chỗ, nhân viên và đồng hồ là mô phỏng; không có AI thật. Tải lại trang mất dữ liệu.
Fixture không có số tiền, giờ đến, chênh lệch giá và mốc quyền 48 giờ chính xác, nên không bịa các thông tin đó.
Demo giả định quyền còn hiệu lực ở thời điểm fixture. Sản phẩm thật cần kiểm tra dữ liệu hiện thời và xác nhận tại máy chủ.
Các nút tiêm lỗi, hết hạn và nhân viên nhận chỉ phục vụ trình bày. Mục tiêu hỗ trợ 5/15 phút do nhóm đề xuất.
Kiểm thử logic: node --test tests/booking.test.cjs
