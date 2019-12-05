//////////////////////////////////BÀI TẬP VỀ MẢNG - ARRAY///////////////////////////////////////////

// BÀI 1: Tìm kiếm giá trị nhất định trong mảng/////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// let array = ["Samsung","Nokia","Iphone","Philip","Oppo","Xiaomi","Vivo","Realme","Huawei","Mobel","Itel","coolpad","Blackberry","Masstel"];
// let n = prompt("Hãy nhập từ khóa bạn cần tìm");
// for (let X = 0; X < array.length; X++) {
//     const y = array[X];
//     if (y.indexOf(n)>=0 ) {
//         console.log(y);
//     }
// }

// BÀI 2: Tìm min và max////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// let array = [4,1,3,5,3,7,87,6,4,2,6,400,4,2,346,436];
// let n = array[0];
// for (let x = 0; x < array.length; x++) {
//     const y = array[x];
//     if ( n < y) {
//         n = y;
//     }
// }
// console.log(`Max trong dãy số là ${n}`);

// for (let x = 0; x < array.length; x++) {
//     const y = array[x];
//     if ( n > y) {
//         n = y;
//     }
// }
// console.log(`Min trong dãy số là ${n}`);

// BÀI 3: Lọc các giá trị theo khoảng///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// let array = [4,1,3,5,3,7,87,6,4,2,6,400,4,2,346,436];

// let x = Number(prompt('Nhập số bé'));
// let y = Number(prompt('Nhập số lớn'));

// // Chắc chắn rằng x < y
// while ( x > y ) {  
//     alert("Bạn nhập số bé lại lớn hơn số lớn rồi. Vui lòng nhập lại");
//     x = Number(prompt('Nhập số bé'));
//     y = Number(prompt('Nhập số lớn'));  
// }
// // Lọc theo điều kiện của khoảng
// let khoang = [];
// for (let z = 0; z < array.length; z++) {
//     const e = array[z];
//     if ( x <= e && y>=e ) {
//         khoang.push(e);
//     }
// }
// console.log(`Các số trong khoảng ${x} và ${y} là (${khoang})` );

// // BÀI 4: Sắp xếp theo theo thứ tự 
// let array = [4,1,3,5,3,7,87,6,4,2,6,400,4,2,346,436];

// let a = 0;
// /////////////////////////////// SẮP XẾP TỪ BÉ ĐẾN LỚN/////////////////////////////////
// for (let i = 0; i < array.length; i++) {
       
//     for (let j = i+1; j < array.length; j++) {
      
//         if( array[j] < array[i]) {
//             a = array[i]; 
//             array[i] = array[j]; //1
//             array[j] = a; 
//         }
//     }
// }
// console.log(array);

// /////////////////////////////// SẮP XẾP TỪ LỚN ĐẾN BÉ/////////////////////////////////
// for (let i = 0; i < array.length; i++) {
       
//     for (let j = i+1; j < array.length; j++) {
      
//         if( array[j] > array[i]) {
//             a = array[i]; 
//             array[i] = array[j]; //1
//             array[j] = a; 
//         }
//     }
// }
// console.log(array);
