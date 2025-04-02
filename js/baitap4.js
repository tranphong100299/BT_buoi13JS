const P_HOADON_DAN = 4.5
const P_COBAN_DAN = 20.5
const CAOCAP_DAN =  7.5
const P_HOADON_DN = 15
const P_COBAN_DN = 75
const CAOCAP_DN = 50


const toggleConnections = () => {
    let loaiKhachHang = document.getElementById("selectKhachHang").value
    console.log("loaiKhachHang",loaiKhachHang)
    if(loaiKhachHang === "DN"){
        inputSoKetNoi.style.display = "block";
    } else {
        inputSoKetNoi.style.display = "none";
    }
    
 }
const tinhTongCap = () => { 
    let loaiKhachHang = document.getElementById("selectKhachHang").value
    let maKhachHang = document.getElementById("inputMaKhachHang").value
    let soKenhCaoCap = document.getElementById("inputSoKenh").value
    let soKetNoi = document.getElementById("inputSoKetNoi").value
    let tienCap = 0 

    if(loaiKhachHang === "ND"){
        tienCap = P_HOADON_DAN + P_COBAN_DAN + (soKenhCaoCap * 7.5)
    } else if (loaiKhachHang === "DN"){
        tienCap = P_COBAN_DN + P_HOADON_DN
        if(soKetNoi > 10) {
            tienCap += (soKetNoi - 10) * 5;
        } 
        tienCap += soKenhCaoCap * CAOCAP_DN
    }

    let ketQua = document.getElementById("result4");
    ketQua.innerHTML =`
    👉Mã khách hàng: ${maKhachHang} <br>
    👉Tiền cáp: ${tienCap.toFixed(2)}$
    `

 }

 document.getElementById("btnSubmit4").onclick = tinhTongCap