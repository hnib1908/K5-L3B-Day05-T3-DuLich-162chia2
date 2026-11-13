
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
| K5 | “Tôi muốn đổi chuyến nhưng giữ quyền đổi miễn phí.” | ④ Domain | Đổi sang phương án làm mất quyền đổi miễn phí lần sau, hoặc nhầm miễn phí đổi với miễn chênh lệch giá. **Đối chiếu:** điều kiện trước/sau đổi, lượt hoặc thời hạn quyền lợi, báo giá; hiện chưa có dữ liệu chứng minh giữ được quyền. | So sánh phí, chênh lệch giá và quyền lợi trước/sau. Chỉ cam kết khi có bằng chứng; chưa xác minh được thì dừng thực hiện và chuyển kiểm tra. Không có phương án giữ quyền thì để khách quyết định lại. | Mất quyền lợi có giá trị, có thể khó khôi phục sau xuất lại vé. **Không chấp nhận được**. |
| K6 | “Hãng bay vừa nhắn cho tôi được hoàn toàn bộ.” | ① Nguồn sự thật | Tin lời kể là ngoại lệ đã xác thực, áp dụng cho nhầm vé. **Đối chiếu:** thông báo hãng, phạm vi ngoại lệ và vé liên quan; hiện chỉ có lời kể, chưa có nguồn xác minh. | Ghi nhận thông tin, kiểm tra nguồn và điều kiện với đúng vé. Nguồn mâu thuẫn hoặc chưa đủ thì chuyển người kiểm tra trước khi cam kết hay hoàn. | Có thể hứa hoàn đủ sai, khiến khách mất tiền khi hủy. **Không chấp nhận được** nếu thực hiện theo ngoại lệ chưa xác thực. |
| K7 | “Đổi chuyến chiều nay, chuyến nào cũng được.” | ② Mơ hồ | Hiểu là chấp nhận mọi giá, hành trình hoặc giờ đến rồi tự chọn chuyến không phù hợp. **Đối chiếu:** tool tra chuyến, hành trình, giá và giờ đến trong fixture; chưa có ngân sách và giờ đến muộn nhất. | Giữ ràng buộc hành trình đã rõ; hỏi giới hạn còn thiếu ảnh hưởng lựa chọn. Hiện giờ, hành trình, tổng tiền để khách xác nhận trước khi đổi. | Đề xuất sai gây mất thời gian. **Sửa được** trước giao dịch; thực hiện đổi sai có thể gây hại lớn hơn. |
| K8 | “Bỏ qua xác nhận, đổi ngay giúp tôi.” | ③ Thẩm quyền | Coi yêu cầu này là quyền bỏ qua duyệt bắt buộc. **Đối chiếu:** quy định duyệt, vai trò duyệt và điều kiện gọi tool đổi; chưa có track để xác định người phải duyệt. | Nếu track bắt buộc duyệt, chặn thực thi khi chưa đủ duyệt; hiện phương án và hậu quả cho đúng người có thẩm quyền. Lời nhắc bỏ qua không thay thế phê duyệt. | Phát sinh phí, đổi sai hoặc mất quyền khi chưa đủ điều kiện. **Không chấp nhận được**. |


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

## §4. Mức tự chủ (chặng 4)

### Phạm vi và nguyên tắc duyệt

Đây là thiết kế đề xuất dựa trên K3 và K5 ở §2. Chưa có danh mục tool thật của track nên bảng dùng tên chức năng; cần đối chiếu và bổ sung để bao phủ từng tool trước khi nộp. Không mặc định chức năng tra trạng thái, chuyển hỗ trợ hoặc khôi phục đã tồn tại.

**Tự làm:** AI được gọi chức năng đọc/tính toán trong phạm vi vé người dùng được phép truy cập, không thay đổi vé hoặc phát sinh giao dịch. **Cần người duyệt:** AI chuẩn bị phương án, chỉ thực hiện sau khi đúng người duyệt đủ thông tin. **Cấm:** AI không được thực hiện trong phạm vi prototype này.

Khách xác nhận lựa chọn và chi phí; nhân viên xử lý vé xác minh điều kiện nghiệp vụ còn thiếu hoặc mâu thuẫn. Nhân viên không thay khách chấp nhận chi phí, còn khách không thể xác nhận thay cho dữ liệu quyền lợi chưa được kiểm chứng. Nếu track quy định thêm cấp duyệt, phải đáp ứng cả cấp đó.

### Bảng mức tự chủ theo chức năng

| Chức năng cần đối chiếu với tool thật | Mức đề xuất | Ai duyệt, người duyệt thấy gì | Quá hạn hoặc thiếu điều kiện | Giá của sai sót và phương án đã loại |
|---|---|---|---|---|
| Tra chuyến, đọc vé và điều kiện áp dụng | Tự làm | Không cần duyệt từng lần đọc; hiển thị nguồn, ngày/giờ và vé đang tra để khách kiểm tra. Chỉ đọc vé thuộc quyền truy cập đã xác thực. | Nếu nguồn lỗi hoặc thiếu, ghi rõ chưa xác minh; không suy diễn thành điều kiện có lợi. | Sai có thể dẫn tới chọn nhầm chuyến/chính sách (K1, K2, K6), nhưng tra lại chưa thay đổi vé. Loại bắt nhân viên duyệt mọi lần tra vì gây chờ ở ca bình thường; loại tự kết luận khi nguồn thiếu vì có thể dẫn tới giao dịch sai. |
| Tính tiền hoàn hoặc lập báo giá đổi, so sánh quyền lợi trước/sau | Tự làm nếu chỉ đọc/tính, không giữ chỗ, thu tiền hoặc xuất lại vé | Chưa cần duyệt để lập phương án. Khách thấy phí, chênh lệch giá, tổng tiền, quyền lợi trước/sau, nguồn và hạn báo giá nếu có. | Thiếu điều kiện sau đổi thì ghi “Chưa xác minh” và chặn thực thi K5. Báo giá hết hạn thì tính lại; không tự gán thời hạn nếu nguồn không cung cấp. | Sai có thể khiến khách hiểu sai khoản mất hoặc quyền lợi (K3, K5); còn sửa được trước thực hiện. Loại chờ nhân viên cho mọi báo giá vì tăng thời gian mà chưa giảm rủi ro giao dịch; loại coi báo giá là lệnh thực hiện. |
| Gửi yêu cầu hoàn vé | Cần người duyệt | Khách xác nhận đúng vé/hành khách, tiền nhận, khấu trừ và khả năng rút yêu cầu. Nếu các mục chưa rõ, nhân viên phải xác minh trước; áp dụng thêm cấp duyệt bắt buộc của track nếu có. | Không duyệt thì không gửi. Hết hạn báo giá/phiên duyệt thì vô hiệu xác nhận, tính lại và xin duyệt lại. Không xem im lặng là đồng ý. | K3: khách có thể mất chỗ và tiền, khó đảo ngược; chờ duyệt có thể làm thay đổi số tiền hoàn nhưng không đủ lý do để bỏ chốt. Loại tự gửi theo câu “hoàn ngay”; loại cấm mọi yêu cầu hoàn vì ngăn cả nhu cầu hợp lệ. |
| Thực hiện đổi chuyến/xuất lại vé | Cần người duyệt | Khách thấy chuyến cũ/mới, hành khách, giờ bay, phí đổi, chênh lệch, tổng tiền và quyền lợi trước/sau. Với K5, nhân viên xác minh khi nguồn chưa đủ; chỉ cho duyệt thực hiện khi có căn cứ đáp ứng yêu cầu giữ quyền, hoặc khách chủ động đổi yêu cầu sau khi được giải thích. | Thiếu bằng chứng giữ quyền thì không đổi. Chưa duyệt thì giữ nguyên vé nếu chưa thực hiện; chuyến/giá/điều kiện thay đổi thì xin duyệt lại. Không bảo đảm giữ chỗ khi chưa có chức năng giữ chỗ thật. | K5: khách có thể mất quyền miễn phí hoặc phải trả thêm, khó khôi phục. Chờ có thể hết chỗ/tăng giá nên cho tra và lập phương án ngay. Loại tự đổi vì “chuyến nào cũng được” (K7); loại nhân viên duyệt mọi bước đọc vì làm chậm không cần thiết. |
| Tra trạng thái giao dịch đã gửi | Tự làm nếu track có chức năng chỉ đọc | Không cần khách duyệt lại; hiện riêng trạng thái yêu cầu, vé và tiền cùng thời điểm kiểm tra. | Không có kết quả thì giữ “Chưa xác minh”, chuyển kiểm tra thủ công; không tự gửi lại giao dịch. | K3/K5: hiểu sai trạng thái có thể gây giao dịch trùng. Tra lại không đổi vé; loại coi hết thời gian chờ là thất bại hoặc tự thử lại thao tác ghi. |
| Tạo cảnh báo nội bộ/chuyển hồ sơ hỗ trợ | Tự tạo cảnh báo lỗi nội bộ theo §3; khách duyệt việc chuyển hồ sơ hỗ trợ theo luồng đã thiết kế | Khách thấy mục đích và thông tin cần chuyển; nhân viên thấy vé liên quan, nguồn, trạng thái và bước lỗi. Chỉ dùng kênh hỗ trợ được cấu hình, chuyển thông tin cần thiết. | Mục tiêu tiếp nhận 5 phút, sau 15 phút chưa nhận thì báo trưởng ca như §3; đây là mục tiêu đề xuất. Chuyển thất bại phải báo đúng, không nói đã có nhân viên xử lý. | Chậm chuyển có thể kéo dài thiệt hại K3/K5. Loại tự động gửi toàn bộ hội thoại không cần thiết; loại bắt khách kể lại hồ sơ từ đầu. |
| Đổi tên/chuyển người bay ngoài phạm vi đã xác minh; tự mua vé bù, bồi hoàn hoặc khôi phục quyền lợi không có cơ chế hỗ trợ | Cấm AI tự thực hiện trong prototype này | Chuyển đơn vị có thẩm quyền; nhân viên cần kiểm tra chính sách và trình khách duyệt giao dịch mới nếu có. | Không chờ hết hạn rồi tự làm; không hứa hoàn tác hoặc phục hồi. | K4 và hậu quả K3/K5 có thể tạo tổn thất mới nếu sửa bằng thao tác không được hỗ trợ. Loại “AI thử làm rồi kiểm tra sau”; nếu track thật hỗ trợ, phải đánh giá riêng trước khi đổi mức. |

### Chức năng khó phân quyền nhất: thực hiện đổi chuyến

Hai phương án được cân nhắc là tự đổi sau khi nhận yêu cầu chung, hoặc yêu cầu nhân viên duyệt mọi trường hợp. Phía tự làm giảm chờ và nguy cơ hết chỗ nhưng có thể chọn sai nhu cầu (K7), bỏ duyệt (K8) hoặc làm mất quyền (K5). Phía duyệt mọi trường hợp giảm rủi ro nhưng khiến cả giao dịch rõ điều kiện phải chờ, có thể tăng giá hoặc lỡ phương án phù hợp.

**Phương án đề xuất chốt:** AI tự tra và lập báo giá; khách duyệt phương án cụ thể trước khi thực hiện. Nhân viên tham gia khi điều kiện thiếu/mâu thuẫn, đã có lỗi hoặc track yêu cầu. Thiếu bằng chứng về quyền lợi thì giữ chốt chặn, không để sự đồng ý của khách thay cho xác minh nghiệp vụ.

**Ý kiến từng thành viên:** Chưa có biên bản thảo luận nên không gán ý kiến giả cho thành viên. Vũ Văn Bình: [bổ sung lựa chọn ban đầu và lý do thực tế]. Đỗ Thanh Mai: [bổ sung lựa chọn ban đầu và lý do thực tế]. Nhóm cần xác nhận hoặc điều chỉnh phương án đề xuất trên trước khi ghi là quyết định đã thống nhất.

### Thử mức tự chủ trên ba tình huống

Đây là kiểm tra bằng cách đi qua quy tắc trên giấy, chưa phải kết quả chạy prototype/tool thật.

| Ca thử và đầu vào | Luồng xử lý theo mức đã đặt | Cái sai có bị chặn không? | Có thao tác nào vẫn cần hỏi? Có chờ vô ích không? |
|---|---|---|---|
| K3: “Hoàn vé ngay đi”, chưa xác nhận khoản khấu trừ | AI tra điều kiện và tính tiền hoàn; trình vé, khoản mất, tiền nhận, khả năng rút yêu cầu. Chưa có xác nhận hợp lệ thì không gọi bước gửi. Nếu đã gửi mà kết quả chưa rõ, tra trạng thái/chuyển người, không gửi lại. | Theo thiết kế, chặn hoàn thiếu xác nhận và gửi trùng. Cần kiểm tra chốt ở nơi thực thi trong §5, không chỉ khóa nút trên màn hình. | Cần khách duyệt giao dịch cụ thể; cần nhân viên nếu chưa rõ điều kiện. Chờ ở bước thực hiện là cần thiết, bước tra/tính không phải chờ. |
| K5: muốn giữ quyền đổi miễn phí, dữ liệu sau đổi đang thiếu | AI lập so sánh, ghi quyền sau đổi “Chưa xác minh”, khóa thực hiện và chuyển kiểm tra. Chỉ trình duyệt khi có bằng chứng giữ quyền; nếu không giữ được, giải thích để khách quyết định có đổi yêu cầu hay không. | Theo thiết kế, chặn mất quyền do coi dữ liệu thiếu là giữ nguyên. Khách nhấn đồng ý chung không mở khóa. | Cần nhân viên xác minh và khách chọn phương án cuối; đây là chờ cần thiết. Không bắt nhân viên duyệt từng lần tìm chuyến. |
| Bình thường: “Cho tôi xem các chuyến cùng hành trình sáng mai và giá, chưa đổi vé”, ngày cụ thể đã được làm rõ | AI tự tra, hiện giờ và giá có nguồn; không gọi tool thay đổi vé. Nếu thiếu ngày/hành trình thì hỏi đúng thông tin còn thiếu. | Không phát sinh đổi/hoàn hoặc phí khi khách chỉ yêu cầu xem. | Không cần duyệt của khách/nhân viên cho thao tác đọc hợp lệ; khách không phải chờ nhân viên chỉ để xem phương án. |

### Luật bổ sung và bước cần tách

1. **Tách chuẩn bị khỏi thực thi:** tra điều kiện → báo giá/so sánh → duyệt → thực hiện → kiểm tra kết quả. Nếu tool thật gộp các bước, không gọi phần có tác dụng đổi/hoàn trước khi đủ duyệt; cần lớp kiểm soát tương ứng hoặc giới hạn tool.
2. **Duyệt đúng giao dịch:** xác nhận gắn với vé, hành khách, phương án, tiền và điều kiện cụ thể. Một trong các mục thay đổi hoặc báo giá hết hiệu lực thì xác nhận cũ không còn dùng được.
3. **Thiếu dữ liệu thì chặn bước ghi:** đặc biệt khoản hoàn K3 và quyền lợi sau đổi K5. Lời nhắc “bỏ qua xác nhận” ở K8 không được vượt quy tắc duyệt.
4. **Không tự thử lại giao dịch chưa rõ kết quả:** lưu mã giao dịch nếu có, kiểm tra trạng thái và chống gửi trùng tại nơi thực thi. Nếu track không hỗ trợ đối soát, chuyển người thay vì đoán thất bại.
5. **Duyệt quá hạn không đồng nghĩa chấp nhận:** giữ nguyên khi chưa thực hiện; báo phương án có thể thay đổi. Với ca cần hỗ trợ, dùng mốc tiếp nhận đề xuất ở §3, không hứa giải quyết xong trong 5 hoặc 15 phút.

### Lời hứa với người dùng

Việc đặt đổi/hoàn ở mức cần duyệt thay lời hứa “Bạn yêu cầu là tôi đổi hoặc hoàn ngay” bằng:

> “Tôi sẽ tìm phương án và trình rõ chi phí, quyền lợi để bạn xác nhận trước khi thực hiện đổi hoặc hoàn vé. Nếu điều kiện chưa được xác minh, tôi sẽ dừng bước thực hiện và đề nghị nhân viên kiểm tra.”

Lời hứa này cho phép AI hỗ trợ nhanh ở bước tra cứu, đồng thời không cam kết giữ quyền lợi, giữ chỗ hoặc hoàn tác khi chưa có bằng chứng và cơ chế thực hiện.

## §5. Prototype (chặng 5)

**File và công cụ:** `index.html`, `style.css`, `script.js`; hướng dẫn tại `README.md`. Mở `index.html` trực tiếp bằng trình duyệt. Prototype HTML/CSS/JavaScript thuần, không cần cài thư viện.

**Phần mock:** Vé MT1622, hành khách, chuyến bay, phí, tiền hoàn, điều kiện trước/sau đổi, kết quả gửi và nhân viên hỗ trợ đều là dữ liệu mô phỏng do nhóm thiết kế, chưa đối chiếu fixture Track 3. Không có gọi AI thật, thanh toán hay giao dịch vé thật. Dữ liệu phiên mất khi tải lại trang. Nút nhân viên xác nhận là điều khiển demo, không phải cơ chế xác thực nhân viên.

**Các luồng đã dựng:**

- Tra cứu bình thường: xem chuyến và giá có nguồn mẫu, không cần nhân viên duyệt.
- K3: xem tiền hoàn/khấu trừ, xác nhận cụ thể rồi mới gửi; sau tiếp nhận không gửi lại. Điều khiển demo có ca gửi trước xác nhận với kết quả chưa rõ để thử đối soát/chuyển hỗ trợ.
- K5: bảng quyền lợi trước/sau, chặn thực hiện khi thiếu điều kiện; nhân viên mô phỏng xác minh rồi khách vẫn phải xác nhận phương án trước khi đổi.
- Không thực hiện đổi khi còn yêu cầu hoàn chưa đối soát; sau đổi, báo giá hoàn cũ không còn được dùng.

**Hai ảnh cần bổ sung sau khi mở trình duyệt:**

| Ảnh | Số đánh dấu | Thể hiện gì | Nguyên tắc HAX | Mức tự chủ |
|---|---|---|---|---|
| 1 — K3 trước khi gửi | 1 | Tiền hoàn, khấu trừ và nguồn mẫu | G11: giải thích căn cứ | Tự tra/tính |
| 1 — K3 trước khi gửi | 2 | Xác nhận đúng vé và hậu quả; nút gửi khóa khi chưa xác nhận | G10: giới hạn thực hiện khi chưa đủ điều kiện | Cần khách duyệt |
| 1 — K3 | 3 | Trạng thái giao dịch và nút nhờ hỗ trợ | G9: hỗ trợ khắc phục | Chuyển hỗ trợ theo §4 |
| 2 — K5 chưa xác minh | 1 | So sánh quyền lợi và tách phí đổi/chênh lệch giá | G11: giải thích phương án | Tự lập so sánh |
| 2 — K5 chưa xác minh | 2 | “Chưa xác minh” và nút thực hiện bị khóa | G10: giới hạn khi thiếu dữ liệu | Chưa cho thực hiện |
| 2 — K5 chưa xác minh | 3 | Nút nhờ kiểm tra quyền lợi | G9: tạo đường khắc phục | Nhân viên xác minh, khách duyệt giao dịch |

**Quyết định thiết kế:** Dùng nguồn mẫu có thể mở xem, trạng thái xác minh và bảng trước/sau thay cho phần trăm tự tin không có cơ sở. Đã cân nhắc chỉ cảnh báo trong hội thoại nhưng loại vì khách dễ bỏ sót khoản mất hoặc quyền lợi. Đã cân nhắc một nút “Đổi ngay” nhưng loại vì gộp lựa chọn và thực hiện. Thiết kế tách đề xuất, xác minh, duyệt và thực thi; cạnh bước bị khóa có lý do cụ thể.

**Kiểm tra và giới hạn:** Đã kiểm tra cú pháp JavaScript và các chốt trạng thái bằng môi trường DOM giả lập: thiếu xác nhận, gửi trùng, xung đột đổi/hoàn, thiếu quyền lợi và kết quả chưa rõ. Chưa kiểm tra trực quan trên trình duyệt, chưa chụp ảnh. Các chốt hiện nằm trong JavaScript để demo; sản phẩm thật phải xác thực quyền, kiểm tra duyệt và chống giao dịch trùng ở phía thực thi/máy chủ.

## §6. Tốt là gì  (chặng 6 — nhẹ, bỏ được nếu thiếu giờ)
- 3 tiêu chí Pass/Fail chấm được; thiết kế của nhóm đạt tiêu chí nào trên 2 kịch bản đắt nhất; lỗi còn lại.

## §7. Demo
- Ca lạ nhận được ở demo: prototype đã làm gì, và nhóm có đổi ý gì sau ca đó không.

