# Mây Travel — Prototype LAB5 T3

Mở `index.html` bằng trình duyệt. Không cần cài thư viện, backend hoặc khóa API. Ba file giao diện dùng đường dẫn tương đối nên chạy được trực tiếp bằng file HTML.

## Phạm vi mô phỏng

Dữ liệu chuyến, vé, tiền, điều kiện, nhân viên và trạng thái giao dịch đều là mẫu do nhóm thiết kế, chưa đối chiếu Track 3. Không có gọi AI thật, thanh toán, gửi thông báo hoặc đổi/hoàn vé thật. Không lưu dữ liệu sau khi tải lại trang. Chốt thực thi hiện chỉ là kiểm soát trong JavaScript phục vụ demo, không thay thế xác thực/phân quyền và kiểm soát giao dịch phía máy chủ.

## Kịch bản demo

1. Ca bình thường: mở Tìm chuyến bay, xem ba chuyến và nguồn mẫu. Không cần người duyệt.
2. K3 phòng ngừa: vào Hoàn vé; nút gửi bị khóa. Đọc số tiền và hậu quả, đánh dấu xác nhận rồi gửi. Kết quả chỉ là yêu cầu được tiếp nhận, không phải đã trả tiền. Không thể gửi lần hai hoặc thực hiện đổi khi còn yêu cầu hoàn.
3. K3 sau lỗi: đặt lại; mở Điều khiển demo và giả lập kết quả gửi chưa rõ. Nút gửi bị khóa, trạng thái chưa xác minh; chọn hỗ trợ. Không có nút hoàn tác không được hỗ trợ.
4. K5: đặt lại; vào Đổi chuyến. Quyền sau đổi chưa xác minh nên bị chặn. Nhờ kiểm tra, rồi bấm nút demo nhân viên xác nhận. Tiếp tục bị chặn cho đến khi khách xác nhận đúng phương án và 200.000 đ. Sau đổi, báo giá hoàn cũ bị chặn.
5. Đặt lại xóa giao dịch và xác nhận để thử ca độc lập. Nút nhân viên chỉ để thuyết trình, không phải xác thực quyền nhân viên thật.

## Hai ảnh cần chụp để nộp

- K3 trước gửi: đánh số tiền hoàn/khấu trừ, xác nhận, trạng thái/nút hỗ trợ. Gắn với HAX G11/G10/G9 và mức cần duyệt ở §4.
- K5 chưa xác minh: đánh số bảng trước/sau, nút thực hiện bị khóa/lý do và nút kiểm tra quyền lợi. Gắn với HAX G11/G10/G9.

Ảnh cần chụp từ trình duyệt và đánh số sau khi nhóm chạy thử. Không ghi đã có ảnh hoặc đã kiểm thử trình duyệt nếu chưa thực hiện.