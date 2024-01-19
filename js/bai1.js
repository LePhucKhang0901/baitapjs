/**
 * Inputs: dữ liệu nhập từ form
 * + số ngày làm
 * 
 * Steps:
 * B1: Tạo hàm và gắn hàm vào sự kiện click
 * B2: Xây dựng chi tiết hàm
 *   + Dom tới form và lấy dữ liệu (value) từ form (3 ELE)
 *   + Tính tiền lương dựa vào số ngày đi làm
 * 
 * Outputs: Kết quả hiển thị sau click
 * result
 * 
 */
function getSalary(){
    let date = document.getElementById("inputDate").value;
    let salary = 0;
    let salaryDate = 100000;
    if (date > 0 ){
        salary = date * salaryDate;
        document.getElementById("txtResult").innerHTML = "Lương của bạn là: " + salary;
    }else if(date == 0){
        document.getElementById("txtResult").innerHTML = "Tháng này bạn đã không đi làm, không làm mà đòi có ăn à =))) ";
    }
    else{
        document.getElementById("txtResult").innerHTML = "Vui lòng nhập lại số ngày, số ngày không được bé hơn 0"
    }
}
document.getElementById("btnCalc").onclick = getSalary;