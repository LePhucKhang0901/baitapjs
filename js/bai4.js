function tinhRec(){
    let width = document.getElementById("inputDai").value; 
    let height = document.getElementById("inputRong").value;
    let chuVi = (Number(width) + Number(height)) * 2;
    let dienTich = height * width;

    document.getElementById("txtChuVi").innerHTML = "Chu vi HCN là: " + chuVi;
    document.getElementById("txtDienTich").innerHTML = "Diện tích HCN là: " + dienTich;
}document.getElementById("btnCalcRec").onclick = tinhRec;