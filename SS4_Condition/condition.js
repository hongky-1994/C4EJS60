//nhap 1 so; nếu >10 thi in ra màn hình
// let x = Number(prompt("Hãy nhập số"));
// if (x>10) {
//     console.log("Số vừa nhập > 10");
// }
// else {
//     console.log("Số vừa nhập không lớn hơn 10");
// }


// cho người dùng nhập 1 số; kiểm tra số đó là chẵn hay lẻ

// let x = parseInt(prompt('Hãy nhập số'));
// if (x%2) {
//     console.log("Bạn đã nhập số lẻ");
// }
// else{
//     console.log("Bạn đã nhập số chẵn");
    
// }

// cho người dùng nhập vào 1 tháng và in ra màn hình số ngày của tháng đó
// let x = Number(prompt("Nhập vào 1 tháng"));
// if(x === 1 || x===3 || x===5 || x===7 || x===8 || x===10 || x===12 ) {
//     console.log("31 ngày");
// } else if (x === 2) {
//     console.log("28 hoặc 29 ngày");
// } else if (x<=0 || x>12 || x != parseInt(x)) {
//     console.log("Nhập sai tháng");
// } else {
//     console.log("30 ngày");
// }

// HOME WORK ã

// // Nhập số liệu
// let height = Number(prompt("Hãy nhập chiều cao của bạn (đơn vị cm)"));
// let weight = Number(prompt("Hãy nhập cân nặng của bạn (đơn vị kg)"));
// let BMI =  weight/(Math.pow(height/100,2));
// let body;
// // Điều kiện theo chỉ số tính BMI
// if( BMI < 18.5 && BMI >=0 ){
//     body = "Cân nặng thấp (Gầy)";
// } else if ( BMI >= 18.5 && BMI <25 ) {
//     body = "Bình thường";
// } else if ( BMI >= 25 && BMI <30 ) {
//     body = "Tiền béo phì";
// } else if ( BMI >= 30 && BMI <35 ) {
//     body = "Béo phì cấp độ I";
// } else if ( BMI >= 35 && BMI <40 ) {
//     body = "Béo phì cấp độ II";
// } else if ( BMI >= 40) {
//     body = "Béo phì cấp độ III";
// } else { 
//     body = "Bạn nhập sai dữ liệu"; 
// }
 
// // Hiển thị tình trạng của cơ thể 
// console.log("Chỉ số BMI theo số đo của bạn theo WHO là:", BMI);
// console.log("Tình trạng cơ thể bạn là:", body);

// Bài tập vê switch case với bàng nhập tháng ra ngày.
let thang = parseInt(prompt("Hãy nhập tháng : "));

switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Số ngày của tháng ",thang,"là 31 ngày");
        
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Số ngày của tháng ",thang,"là 30 ngày");
        break;
    case 2:
        console.log("Số ngày của tháng ",thang,"là 28 hoặc 29 ngày");
            
    default:
        alert("Nhập sai tháng");
        break;
}