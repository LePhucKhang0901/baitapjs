/**
 * Inputs: dữ liệu nhập từ form
 * + số 1
 * + số 2
 * + số 3
 * + số 4
 * + số 5
 * 
 * Steps:
 * B1: Tạo hàm và gắn hàm vào sự kiện click
 * B2: Xây dựng chi tiết hàm
 *   + Dom tới form và lấy dữ liệu (value) từ form (3 ELE)
 *   + Tính trung bình 5 số bằng cách lấy tổng 5 số chia 5
 * 
 * Outputs: Kết quả hiển thị sau click
 * result
 * 
 */
function tinhTrungBinh(){
    let a = document.getElementById("inputNumber1").value;
    let b = document.getElementById("inputNumber2").value;
    let c = document.getElementById("inputNumber3").value;
    let d = document.getElementById("inputNumber4").value;
    let e = document.getElementById("inputNumber5").value;
    
    dtb = (Number(a) + Number(b) + Number(c) + Number(d) + Number(e))/5;
    document.getElementById("txtKetQua").innerHTML = "Giá trị trung bình là: " + dtb;
}document.getElementById("btnTB").onclick = tinhTrungBinh;