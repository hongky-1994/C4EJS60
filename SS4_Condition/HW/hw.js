//Season 4 Điều kiện.

// Bài 1. Nhập vào 1 năm, kiểm tra xem năm đó phải năm đó có bao nhiêu ngày?
// let nam = parseInt(prompt("Hãy nhập năm"));
// if (nam%4 === 0) {
//     alert(`Năm ${nam} là năm nhuận`);
// } else {
//     alert(`Năm ${nam} không phải là năm nhuận`);
// }

// Bài 2. 
// Nhập vào 1 tháng trong năm, in ra màn hình số ngày của tháng đó (Yêu cầu kiểm tra cả năm nhuận).
// let thang = parseInt(prompt("Nhập tháng"));
// let nam = parseInt(prompt("Nhập năm"));

// switch (thang) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         alert(`Tháng ${thang} của năm ${nam} có 31 ngày.`);
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         alert(`Tháng ${thang} của năm ${nam} có 30 ngày.`);
//     case 2:
//         if ( nam % 4 === 0){
//             alert(`Tháng ${thang} của năm ${nam} có 29 ngày.`);
//         } else {
//             alert(`Tháng ${thang} của năm ${nam} có 28 ngày.`);
//         }
//         break;
//     default:
//         break;
// }

// BÀI 3
// Nhập vào 1 tháng trong năm, in ra mùa của tháng đó
// let thang = parseInt(prompt("Nhập tháng"));

// switch (thang) {
//     case 1:
//     case 2:
//     case 3:
//         alert(`Tháng ${thang} là vào mùa xuân.`);
//         break;
//     case 4:
//     case 5:
//     case 6:
//         alert(`Tháng ${thang} là vào mùa hè.`);
//         break;
//     case 7:
//     case 8:
//     case 9:
//         alert(`Tháng ${thang} là vào mùa thu.`);
//         break;
//     case 10:
//     case 11:
//     case 12:
//         alert(`Tháng ${thang} là vào mùa đông.`);
//         break;
//     default:
//         alert("Nhập vớ va vớn vẩn.")
//         break;
// }


// Bài 4. Nhập vào 3 số a, b, c. In ra theo thứ tự tăng dần.
// let a = Number(prompt("Hãy nhập a:"));
// let b = Number(prompt("Hãy nhập b:"));
// let c = Number(prompt("Hãy nhập c:"));
// alert(`Số lớn nhất là ${Math.max(a,b,c)}`);
// alert(`Số nhì nhất là ${a + b + c - Math.max(a,b,c)- Math.min(a,b,c)}`);
// alert(`Số nhỏ nhất là ${Math.min(a,b,c)}`);
// console.log(Math.max(a,b,c));
// console.log(a + b + c - Math.max(a,b,c)- Math.min(a,b,c));
// console.log(Math.min(a,b,c));


// Bài 5. Nhập vào 3 số a, b, c. Kiểm tra xem 3 số đó có lập được thành tam giác không. Nếu có, kiểm tra xem tam giác có vuông, cân hay đều k?
// let a = Number(prompt("Hãy nhập a:"));
// let b = Number(prompt("Hãy nhập b:"));
// let c = Number(prompt("Hãy nhập c:"));

// if ((a+b)>c && (b+c)>a && (a+c)>b) {
//     if( (a===b && a!==c )|| (b===c && b!==a) || (c===a && c!==b) ){
//         console.log("Tam giác cân.");
//     } else if( a===b && a===c) {
//         console.log("Tam giác đều."); 
//     } else {
//         console.log( "Tam giác thường.")
//     }
// } else {
//     console.log("Không hình thành được tam giác.");
    
// }

// Bài 6. giá điện
// let soDien = parseInt(prompt("Nhập số điện")) ;
// let tienDien;
// if( soDien <=50 && soDien >=0) {
//     tienDien = 1.678 * soDien;
// } else if ( soDien >50 && soDien <= 100 ) {
//     tienDien = 1.678*50 + (soDien - 50) * 1.734;
// } else if ( soDien >100 && soDien <= 200 ) {
//     tienDien = 1.678 * 50 + 50 * 1.734 + (soDien - 100) * 2.014;
// } else if ( soDien >200 && soDien <= 300 ) {
//     tienDien = 1.678 * 50 + 50 * 1.734 + 100 * 2.014 + (soDien - 200) * 2.536;
// } else if ( soDien >300 && soDien <= 400 ) {
//     tienDien = 1.678 * 50 + 50 * 1.734 + 100 * 2.014 + 100 * 2.536 + (soDien-300) * 2.834;
// } else if ( soDien >400) {
//     tienDien = 1.678 * 50 + 50 * 1.734 + 100 * 2.014 + 100 * 2.536 + 100 * 2.834 + (soDien-400)*2.927;
// }
// console.log(tienDien);


// Bài 8. Nhập vào 1 số, kiểm tra xem có phải số chính phương không? có phải số nguyên tố không? có phải hợp số k? 
// Nếu là hợp số, in ra các ước số của nó. 
let n = Number(prompt("Hãy nhập số n"));
// // Số chính phương
if (Math.sqrt(n) === Math.floor(Math.sqrt(n))) {
    console.log(`${n} là số chính phương.`);
} else {
    console.log(`${n} không là số chính phương.`);
}
//Số nguyên tố
let soNguyenTo = 1;
for (let x = 2; x < n; x++) {
    if (n%x !==0){
        soNguyenTo *= 1;      
    } else {
        console.log(`${n} có ước số là ${x}`); 
        soNguyenTo *=0;  
    }
}
if (soNguyenTo === 0){
    console.log(`${n} là hợp số.`);
} else {
    console.log(`${n} là số nguyên tố.`);
    
}
