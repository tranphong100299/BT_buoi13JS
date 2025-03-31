const THUE_O_60 = 0.05
const THUE_60_120 = 0.1
const THUE_120_210 = 0.15
const THUE_210_384 = 0.2
const THUE_384_624 = 0.25
const THUE_624_960 = 0.3
const THUE_TREN_960 = 0.35


const tinhTongThue = () => { 
    let hoTen = document.getElementById("inputHoTen2").value
    let tongThuNhapNam = document.getElementById("inputTongThuNhap").value
    let soNguoiPhuThuoc = document.getElementById("inputNguoiPhuThuoc").value
    let tienThue = 0
    let thuNhapChiuThue = tongThuNhapNam - 4000000 - (soNguoiPhuThuoc * 1600000)

    if(thuNhapChiuThue > 0 && thuNhapChiuThue <= 60000000 ){
        tienThue =  thuNhapChiuThue * THUE_O_60
    } else if(thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000){
        tienThue = thuNhapChiuThue * THUE_60_120
    } else if(thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000){
        tienThue =  thuNhapChiuThue * THUE_120_210
    } else if(thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000){
        tienThue = thuNhapChiuThue * THUE_210_384
    } else if(thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000){
        tienThue = thuNhapChiuThue * THUE_384_624
    } else if(thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000){
        tienThue = thuNhapChiuThue * THUE_624_960
    } else if(thuNhapChiuThue > 960000000){
        tienThue = thuNhapChiuThue * THUE_TREN_960
    } else if(thuNhapChiuThue <= 0){
        tienThue = 0
        alert ("Không phải nộp thuế")
    }
    
    let ketQua = document.getElementById("result3");
    ketQua.innerHTML = `
    👉Họ tên: ${hoTen} <br>
    👉Tiền thuế thu nhập cá nhân: ${tienThue.toLocaleString()} VND
    `
 }

    document.getElementById("btnSubmit3").onclick = tinhTongThue


