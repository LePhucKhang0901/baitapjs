/**
 * Inputs: dữ liệu nhập từ form
 * + số USD nhập vào
 * 
 * Steps:
 * B1: Tạo hàm và gắn hàm vào sự kiện click
 * B2: Xây dựng chi tiết hàm
 *   + Dom tới form và lấy dữ liệu (value) từ form (3 ELE)
 *   + Tính số tiền VND bằng cách lấy số USD người dùng nhập vào nhân với tỉ giá 23500
 * 
 * Outputs: Kết quả hiển thị sau click
 * result
 * 
 */
function doiTien(){
    let USD = document.getElementById("inputMoney").value;
    if(USD >= 0){
    let VND = USD * 23500;
}else if(
    document.getElementById("txtVND").innerHTML = "Vui lòng nhập lại số USD muốn đổi, số USD không được nhỏ hơn 0"
)
    document.getElementById("txtVND").innerHTML = VND + " VND";
}document.getElementById("btnCalcMoney").onclick = doiTien;