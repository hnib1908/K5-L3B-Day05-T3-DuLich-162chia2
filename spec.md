
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

## §3. Khi AI sai (chặng 3)

Phần này tiếp tục hai ca K3 và K5 đã chọn ở §2. Lời thoại và màn hình là thiết kế đề xuất, chưa phải hành vi của prototype đã chạy. Chưa có file track nên chưa khẳng định tool có thể hoàn tác, tra trạng thái hoặc khôi phục quyền lợi. Các mốc thời gian dưới đây là mục tiêu vận hành để thử nghiệm, cần xác nhận năng lực hỗ trợ trước khi cam kết với khách.

### K3 — Đã gửi yêu cầu hoàn khi khách chưa xác nhận hậu quả

**Tình huống lỗi:** Khách nói “Hoàn vé ngay đi”; hệ thống đã gửi yêu cầu nhưng chưa trình bày khoản khấu trừ và lấy xác nhận giao dịch cụ thể. Khi phát hiện, hệ thống phải phân biệt yêu cầu đã được tiếp nhận với vé đã hoàn; không suy ra trạng thái từ việc gọi tool.

**AI nói gì — nguyên văn khi đã xác minh yêu cầu được tiếp nhận:**

> “Xin lỗi, hệ thống đã gửi yêu cầu hoàn vé trước khi bạn xác nhận số tiền nhận lại và khoản khấu trừ. Yêu cầu đã được tiếp nhận; điều này chưa xác nhận vé đã hoàn hoặc tiền đã được trả. Tôi chưa xác minh được khả năng rút yêu cầu. Tôi sẽ không gửi thêm yêu cầu hoàn. Bạn có thể chọn ‘Nhờ hỗ trợ kiểm tra’ để chuyển ca này cho nhân viên.”

Nếu chưa xác minh được kết quả gửi, thay câu về tiếp nhận bằng: **“Tôi chưa xác minh được yêu cầu hoàn đã được tiếp nhận hay chưa.”** Chỉ đổi thông báo sang “đã chuyển hỗ trợ” khi hệ thống thực sự ghi nhận chuyển thành công.

**Người dùng thấy gì:** Thẻ cảnh báo gắn đúng vé/hành khách; trạng thái lấy từ nguồn giao dịch, thời điểm kiểm tra gần nhất và mã yêu cầu nếu có. Hiển thị riêng trạng thái yêu cầu, trạng thái vé và trạng thái tiền hoàn. Khoản tiền chưa xác minh ghi “Chưa xác minh”, không tự điền số. Nút “Hoàn vé” bị khóa khi đang kiểm tra yêu cầu cũ; có nút “Nhờ hỗ trợ kiểm tra”. Không hiện nút “Hoàn tác” nếu chưa có cơ chế thực hiện thật.

**Làm gì tiếp; ai được báo, sau bao lâu:**

1. Ngay khi phát hiện, ngăn yêu cầu hoàn trùng cho cùng giao dịch; kiểm tra trạng thái bằng chức năng đọc nếu track có. Nếu không có, giữ trạng thái chưa xác minh và chuyển kiểm tra thủ công.
2. Tạo cảnh báo nội bộ ngay cho nhân viên xử lý vé/hoàn tiền qua cơ chế đã được triển khai. Khi khách chọn chuyển hỗ trợ, đính kèm vé liên quan, thời điểm gửi, kết quả tool, bước xác nhận bị thiếu và thông tin tiền đã xác minh. Prototype chỉ mô phỏng việc này nếu chưa có kết nối.
3. Mục tiêu: nhân viên tiếp nhận trong 5 phút; sau 15 phút chưa có người nhận thì chuyển trưởng ca. Màn hình cập nhật tình trạng tiếp nhận; không hứa hoàn tiền hoặc khôi phục vé trong các mốc này. Nếu không kết nối được hỗ trợ, báo rõ chuyển chưa thành công và đưa kênh liên hệ thực tế đã được cấu hình.
4. Nhân viên kiểm tra còn rút yêu cầu được không, chi phí và tác động hành trình; trình phương án để khách quyết định. Không tự mua vé khác hoặc tạo giao dịch bù trừ.

**Quyết định:** Chọn **dừng thao tác ghi và chuyển người** vì giao dịch có thể đã ảnh hưởng vé/tiền. Loại “chỉ hỏi lại” vì xác nhận sau không sửa được việc đã gửi trước. Loại “chỉ trả lời kèm giới hạn rồi tiếp tục” vì lời cảnh báo không giải quyết được trạng thái giao dịch. Nếu lỗi được phát hiện trước khi gửi, quay về màn hình tiền hoàn và lấy xác nhận; không cần xử lý như một giao dịch đã xảy ra.

**Loại lỗi:** Lỗi **hệ thống**: thiếu chốt xác nhận và/hoặc điều phối tool sai. Câu “hoàn ngay” của khách không phải nguyên nhân để đổ lỗi cho khách. Vì vậy lời thoại nhận trách nhiệm, phân biệt trạng thái đã biết/chưa biết; cách sửa tập trung vào chặn gửi trùng, đối soát và phục hồi bằng nghiệp vụ thật.

**Áp dụng HAX:**

- [G9 — Support efficient correction](https://www.microsoft.com/en-us/haxtoolkit/guideline/support-efficient-correction/): nút “Nhờ hỗ trợ kiểm tra” giữ nguyên hồ sơ giao dịch để khách không phải kể lại. Chỉ cung cấp thao tác rút yêu cầu khi nghiệp vụ thực sự hỗ trợ.
- [G10 — Scope services when in doubt](https://www.microsoft.com/en-us/haxtoolkit/guideline/scope-services-when-in-doubt/): khi kết quả gửi chưa rõ, khóa gửi tiếp và giới hạn hệ thống ở kiểm tra trạng thái/chuyển hỗ trợ.
- [G11 — Make clear why the system did what it did](https://www.microsoft.com/en-us/haxtoolkit/guideline/make-clear-why-the-system-did-what-it-did/): cạnh nút bị khóa ghi “Đang kiểm tra yêu cầu trước để tránh gửi trùng”; hiển thị trạng thái và thời điểm kiểm tra làm căn cứ.

**Câu chữ không cứu được gì; thiết kế cần làm gì:** Xin lỗi không lấy lại chỗ hoặc tiền đã mất. Cần tách bước báo giá và thực thi, ràng buộc xác nhận vào đúng vé/số tiền/điều kiện còn hiệu lực ở phía thực thi, chống thực hiện trùng và lưu dấu vết giao dịch. Khi kết quả không rõ, kiểm tra trước khi thử lại. Khôi phục chỉ được thực hiện khi chính sách và tool cho phép; không hứa “hoàn tác” vô điều kiện.

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

