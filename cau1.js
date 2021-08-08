
function findSentence(paragraph, searchString) {
    const firstIndex = paragraph.search(searchString);
    if (firstIndex === -1) {
        return null
    }
    let startIndex = firstIndex;
    while (startIndex >= 0 && paragraph[startIndex] !== ".") {
        startIndex--;
    }

    startIndex = startIndex < 0 ? startIndex + 1 : startIndex + 2;

    let endIndex = firstIndex;
    while (endIndex < paragraph.length && paragraph[endIndex] !== ".") {
        endIndex++;
    }

    return paragraph.substring(startIndex, endIndex + 1);
}


// Test

let paragraph = `Ngày 6/8, Bộ Y tế đã họp, quyết định đưa thuốc remdesivir vào điều trị, dùng 
cho những bệnh nhân Covid-19 thể trung bình và nặng.
10.000 lọ thuốc remdesivir phân bổ cho TP HCM nằm trong số 50.000 lọ về
Việt Nam đêm 5/8. Dự kiến trong tuần tới nhận thêm 100.000 lọ và trong 
tháng 8 sẽ có tổng cộng 500.000 lọ. Đây là số thuốc do tập đoàn Vingroup 
tặng Bộ Y tế để phục vụ điều trị khẩn cấp Covid-19.
Remdesivir là thuốc kháng virus, được Cơ quan Quản lý Thực phẩm và 
Dược phẩm Mỹ (FDA) phê duyệt khẩn cấp tháng 10/2020 để điều trị bệnh 
nhân Covid-19.
Remdesivir có tác dụng rút ngắn thời gian hồi phục và giảm tỷ lệ tử vong ở
bệnh nhân diễn tiến nặng. Thuốc đã được 50 quốc gia như Mỹ, EU, Australia, 
Nhật Bản, Singapore, Ấn Độ... đưa vào phác đồ điều trị từ tháng 5/2020, là 
một trong những loại thuốc đặc trị khó tiếp cận hàng đầu thế giới.`;

let searchString = `bệnh nhân Covid-19`;
findSentence(paragraph, searchString);

searchString = `Remdesivir`;
findSentence(paragraph, searchString);

// Test