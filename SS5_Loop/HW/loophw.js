// Bài 10.
// Cho biết dãy số Fibonacci: 1, 1, 2, 3, 5, 8, …
// có dạng: Fn+2= Fn+1 +Fn (số sau bằng tổng 2 số liền trước):
// 	- Tìm phần tử thứ N của dãy số với N nhập từ bàn phím.
// 	- Tổng N phần tử đầu tiên của dãy số với N nhập từ bàn phím

// let N = parseInt(prompt("Nhập số N"));
// let b = 1;
// let c = 1;
// let tong = b + c;
// let d;
// for (let a = 3 ; a <= N ; a++) {
//     d = c;
//     c = b + c;
//     b = d;
//     tong +=c;
// }
// console.log(`Số hạng thứ ${N} là ${c}`);
// console.log(`Tổng ${N} phần tử đầu tiên của dãy số là ${tong} `);

// Bài 11.
// In ra màn hình hình sau:
// ***********
// ***********
// ***********
// với chiều dài là a dấu *, chiều rộng là b dấu * (a, b nhập từ bàn phím).
// let a = parseInt(prompt("Hãy nhập só a"));
// let b = parseInt(prompt("Hãy nhập só b"));
// let hang = "";
// for ( y = 1; y <= b; y++) {
//     hang = ""
//     for (let x = 1; x <= a; x ++) {
//     hang = hang + "*";
//     }
//     console.log(hang);
// }

// Bài 12.
//In ra màn hình hình sau:
// *
// **
// ***
// ****
// *****
// với chiều dài cạnh dưới cùng là a dấu * (a nhập từ bàn phím).
// let a = parseInt(prompt("Hãy nhập a"));
// let daySo=""
// for ( x = 1; x <= a; x++) {
//     daySo = daySo + "*";
//     console.log(daySo);
// }

// Bài 13. 
// Yêu cầu người dùng nhập mật khẩu, nếu mật khẩu ngắn hơn 8 ký tự, yêu cầu nhập lại.

// let pass= prompt("Hãy nhập mật khẩu có 8 ký tự");
// for (let x = pass.length; x <=8; x = pass.length) {
//     alert("Mật khẩu quá ngắn");
//     pass = prompt("Hãy nhập lại pass");
// }

// Bài 14.
// Yêu cầu người dùng nhập mật khẩu chứa đồng thời 3 ký tự đặc biệt ($, %, _) 
// và dài ít nhất 8 ký tự. Thiếu điều kiện nào, yêu cầu người dùng nhập lại.
let pass = prompt("Hãy nhập pass của bạn:");

for (let x = pass.length; x ; x = pass.length) {
        alert("Mật khẩu quá ngắn");
        pass = prompt("Hãy nhập lại pass");
    }
for (let y = pass.length; y >8; y = pass.length) {
    if ( pass.indexOf("&") === -1 || pass.indexOf("%") === -1|| pass.indexOf("_") === -1 ) {
        alert("Mật khẩu thiếu ký tự & hoặc % hoặc _");
        pass = prompt("Hãy nhập lại pass");
    }
}