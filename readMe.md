1. cach chay :
    thay ip vao file client_/utils/axios.js

cd api : npx nodemon server.js
cd client : npm start

----
test chat bot (server):
tao 2 file chứa nội dung cần test (test.txt, test_02.txt)
cd model
python ai_chat_02.py


ket qua test:
chat_history_is Human: tôi bị đau răng
AI: Bạn cần gặp bác sĩ chuyên khoa Răng - Hàm - Mặt. Bác sĩ phụ trách là bác sĩ XuanBao01 với mức giá 250 đơn vị tiền tệ. Bạn có muốn biết thêm thông tin gì không? Chúc bạn sớm khỏe lại!
Human: tôi là sinh viên, có được giảm giá không ?
AI: Có, sinh viên sẽ được giảm giá 30%. Bạn có thể yên tâm khi đến khám. Chúc bạn khỏe mạnh!
Human: giảm bao nhiêu cơ ?
AI: Xin lỗi về sự chậm trễ, bạn sẽ được giảm giá 30%. Chúc bạn sớm khỏe lại!
(data lấy realtime từ supabase)