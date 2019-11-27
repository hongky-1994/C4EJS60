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
let x = Number(prompt("Nhập vào 1 tháng"));
if(x === 1 || x===3 || x===5 || x===7 || x===8 || x===10 || x===12 ) {
    console.log("31 ngày");
} else if (x === 2) {
    console.log("28 hoặc 29 ngày");
} else if (x<=0 || x>12 || x != parseInt(x)) {
    console.log("Nhập sai tháng");
} else {
    console.log("30 ngày");
}
