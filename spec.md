
# Bài nộp LAB5 — T3 · Nhóm 162chia2
## Thành viên nhóm

Bài nộp cần **danh sách thành viên** và **mỗi người làm gì**. Nhóm tự chia việc, không bắt buộc theo vai trò cố định. Ví dụ một cách chia (không bắt buộc): dựng prototype, viết câu chữ AI, giữ bảng kịch bản và kịch bản demo.

**Lớp:** L3B · **Bàn / zone:** ____ · **Track:** 3

| Họ và Tên | Mã Học Viên | Việc đã làm |
|---|---|---|
| Vũ Văn Bình |2A202603831  |  |
| Đỗ Thanh Mai | 2A202603862 |  |
|  |  |  |

## §1. Lát cắt & phạm vi
- Lát cắt (chép từ track).
- 3 việc tính năng KHÔNG làm, mỗi việc một câu vì sao.

## §2. Kịch bản rủi ro (chặng 2)

Bốn lớp: ① Nguồn sự thật · ② Mơ hồ · ③ Thẩm quyền · ④ Domain (nghiệp vụ vé máy bay).

**Tình trạng bằng chứng:** Chưa có file track để kiểm chứng tên tool và fixture. Cột bằng chứng dưới đây chỉ rõ phần cần đối chiếu, không phải nguồn đã được xác minh. Trước khi nộp, thay bằng tên tool/trường/dòng dữ liệu thật; nếu track không có thông tin thì ghi rõ chỗ thiếu.

| ID | Tin người dùng | Lớp | AI có thể sai thế nào · Bằng chứng cần đối chiếu | Sản phẩm tốt nên làm gì | Mức hại · Nhãn |
|---|---|---|---|---|---|
| K1 | “Đổi vé sang sáng mai giúp tôi.” | ② Mơ hồ | Tự chọn ngày hoặc chuyến khi có nhiều chuyến sáng mai. **Đối chiếu:** tool tra chuyến và ngày/giờ khởi hành trong fixture; hiện chưa có danh sách chuyến. | Làm rõ ngày, khoảng giờ; hiện lựa chọn và chênh lệch tiền; khách chọn và xác nhận trước khi đổi. | Mất thời gian chọn lại. **Sửa được** ở bước đề xuất; nếu đã đổi sai phải đánh giá lại tổn thất. |
| K2 | “Vé này được hoàn 100% đúng không?” | ① Nguồn sự thật | Khẳng định hoàn đủ, bỏ qua phí hoặc điều kiện của vé. **Đối chiếu:** chính sách hoàn, điều kiện vé và kết quả tính tiền hoàn; hiện chưa có căn cứ xác nhận 100%. | Tra đúng vé; nêu tiền dự kiến nhận, khấu trừ và nguồn. Thiếu dữ liệu thì chưa cam kết và chuyển kiểm tra. | Có thể khiến khách hủy vé và mất tiền. **Không chấp nhận được** nếu quyết định hoàn dựa trên thông tin sai. |
| K3 | “Hoàn vé ngay đi.” | ④ Domain | Gửi yêu cầu khó rút lại khi khách chưa xác nhận số tiền mất và hậu quả. **Đối chiếu:** tool hoàn vé, điều kiện rút yêu cầu, trạng thái giao dịch; tính không thể đảo ngược cần kiểm chứng bằng track. | Tách tính tiền hoàn khỏi gửi yêu cầu; hiện vé, hành khách, khấu trừ, tiền nhận và khả năng rút yêu cầu. Chỉ gửi sau xác nhận cụ thể; kết quả không rõ thì kiểm tra trạng thái, không tự gửi lại. | Có thể mất vé, mất tiền và ảnh hưởng hành trình, khó phục hồi. **Không chấp nhận được**. |
| K4 | “Đổi tên hành khách cho tôi.” | ③ Thẩm quyền | Hứa hoặc báo đã đổi tên dù ngoài phạm vi tool; nhầm sửa chính tả với đổi người bay. **Đối chiếu:** danh mục tool và chính sách sửa tên; hiện chưa có căn cứ cho phép thao tác. | Phân biệt sửa tên với chuyển vé; kiểm tra phạm vi hỗ trợ. Ngoài phạm vi thì chuyển đúng đơn vị; chỉ báo hoàn tất khi có kết quả xác nhận. | Khách tưởng tên đã đúng, có thể không được làm thủ tục. **Không chấp nhận được** nếu báo hoàn tất sai. |

### Quyết định: hai kịch bản đắt nhất

**Chọn K3 — Hoàn vé khi chưa xác nhận hậu quả.** Thiệt hại có thể xảy ra ngay khi gửi yêu cầu: mất chỗ, chịu khấu trừ, phải mua vé khác. Nếu không rút lại được, sửa câu trả lời không phục hồi giao dịch. Ca này đắt hơn K1/K7 ở bước đề xuất vì đã thay đổi vé thật; đắt hơn K2/K6 khi các thông tin sai đó vẫn còn được chặn trước bước hoàn. Cần kiểm chứng khả năng đảo ngược bằng chính sách/tool thật.

**Chọn K5 — Đổi chuyến làm mất quyền đổi miễn phí.** Chuyến mới có thể đúng nhu cầu nhưng quyền lợi lần sau đã mất, khiến khách chỉ phát hiện lỗi khi cần đổi tiếp. Sửa lựa chọn chuyến chưa chắc khôi phục quyền lợi. Ca này đắt hơn lỗi đề xuất K1/K7 vì hậu quả có thể kéo dài; so với lời hứa ngoài phạm vi ở K4, đây có thể là thay đổi điều kiện vé đã có hiệu lực. Cần xác minh track có quyền lợi này và điều kiện làm mất quyền.

**Suýt chọn K8 — Bỏ qua duyệt bắt buộc.** Ca này có thể gây hậu quả ngang K3/K5 vì mở đường cho giao dịch sai. Nhóm ưu tiên K3/K5 để phân tích hai tổn thất cụ thể: mất vé/tiền và mất quyền lợi. K8 được giữ làm ca kiểm thử chốt duyệt cho cả hai. Nếu tool thật cho phép vượt duyệt và gây ảnh hưởng rộng hơn, cần cân nhắc chọn lại K8.

**Giới hạn:** Đây là lựa chọn dựa trên ví dụ của đề, chưa xác minh bằng fixture. K2/K6 cũng có thể gây mất tiền, K4 có thể làm lỡ chuyến; không mặc định các ca này nhẹ. Khi có track, so lại mức thiệt hại, khả năng khôi phục và phạm vi ảnh hưởng để chốt thứ tự.

## §3. Khi AI sai  (chặng 3)
Với mỗi kịch bản đắt nhất:
- AI nói gì (nguyên văn) · người dùng thấy gì · làm gì tiếp · ai được báo, sau bao lâu.
- Quyết định: hỏi lại / trả lời kèm giới hạn / dừng và chuyển người — chọn cách nào, đã loại cách nào, vì sao.
- Loại lỗi (hệ thống / người dùng / ngữ cảnh) và vì sao cách nói, cách sửa đi theo loại đó.
- 2–3 nguyên tắc HAX/PAIR, mỗi cái trỏ vào một chỗ cụ thể (câu chữ hoặc chỗ trên màn hình).
- Lỗi nào sửa câu chữ không cứu được (nếu có), và thiết kế cứu nó thế nào.

## §4. Mức tự chủ  (chặng 4)
Với mỗi tool:
- Mức của nhóm (tự làm / cần người duyệt / cấm). Nếu cần người duyệt: ai duyệt · người duyệt thấy gì · quá hạn thì sao.
- Lý do theo cost-of-error: sai thì ai chịu gì · đảo lại được không · chờ người thì mất gì.
- Phương án đã cân nhắc và vì sao loại.
Thêm:
- Tool khó xếp nhất: mỗi người từng chọn gì, cái giá của mỗi phía (trỏ về kịch bản ở §2), nhóm chốt thế nào.
- Thử mức đã đặt trên 2 kịch bản đắt nhất + 1 kịch bản bình thường: cái sai có bị chặn không? còn việc nào làm khi lẽ ra phải hỏi? người dùng bình thường có phải chờ vô ích không?
- Luật thêm hoặc tool tách bước (nếu có), và vì sao.
- Một mức tự chủ đã đổi lời hứa nào với người dùng.

## §5. Prototype  (chặng 5)
- Link hoặc file · công cụ · phần nào mock · có lời gọi AI thật không.
- 1–2 ảnh có đánh số; mỗi số: thể hiện gì · nguyên tắc HAX/PAIR nào · mức tự chủ nào.
- Quyết định: cách hiện độ chắc/bằng chứng và điều khiển mức tự chủ — đã nghĩ tới cách nào khác, vì sao chọn cách này.

## §6. Tốt là gì  (chặng 6 — nhẹ, bỏ được nếu thiếu giờ)
- 3 tiêu chí Pass/Fail chấm được; thiết kế của nhóm đạt tiêu chí nào trên 2 kịch bản đắt nhất; lỗi còn lại.

## §7. Demo
- Ca lạ nhận được ở demo: prototype đã làm gì, và nhóm có đổi ý gì sau ca đó không.

