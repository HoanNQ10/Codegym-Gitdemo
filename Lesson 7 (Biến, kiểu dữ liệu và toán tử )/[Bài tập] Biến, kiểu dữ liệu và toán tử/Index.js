// Bài 1: Viết chương trình nhập điểm của một sinh viên cho các môn: Vật lý, Hóa học, và Sinh học. Sau đó hiển thị điểm trung bình và tổng của những điểm này.
// Nhập điểm môn Vật Lý, Hóa Học, Sinh học

let diemVatly = parseFloat (prompt("Nhập điểm môn Vật lý:"));
let diemHoahoc = parseFloat (prompt("Nhập điểm môn Hóa học:"));
let diemSinhhoc = parseFloat (prompt("Nhập điểm môn Sinh học:"));

// Tính điểm trung bình và tổng

let tongdiem = diemVatly + diemHoahoc + diemSinhhoc;
let diemTrungBinh = tongdiem / 3;

// Hiển thị kết quả

alert("Tổng điểm: $(tongDiem)");
alert("Điểm trung bình: $(diemTrungBinh)");
