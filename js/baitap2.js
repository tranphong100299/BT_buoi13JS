const KW_50DAU = 500
const KW_50KE = 650
const KW_100KE = 850
const KW_150KE = 1100
const KW_CONLAI = 1300

const tinhTongTien = () => {
    let hoTen = document.getElementById("inputHoTen").value
    let soKw = document.getElementById("inputSoKw").value
    let tienTheoKw = 0
    if(soKw > 0 && soKw <= 50){
        tienTheoKw = soKw * KW_50DAU
    } else if(soKw > 50 && soKw <= 100){
        tienTheoKw = soKw * KW_50KE
    } else if(soKw > 100 && soKw <= 200){
        tienTheoKw = soKw * KW_100KE
    } else if(soKw > 200 && soKw <= 350){
        tienTheoKw = soKw * KW_150KE
    } else {
        tienTheoKw = soKw * KW_CONLAI
    }

    let ketQua = document.getElementById("result2");
    ketQua.innerHTML =`
    👉 Họ tên: ${hoTen} <br>
    👉 Tiền điện: ${tienTheoKw.toLocaleString()} VND
    ` 
 }

 document.getElementById("btnSubmit2").onclick = tinhTongTien

