// // function welcome () {
// //     console.log("Welcome");
// // }
// // welcome();

// // function welcomev2(n) {
// //     console.log(n);
// // }
// // welcomev2("Xin chào Viêt Nam");

// function tinhTong(a,b) {
//     let c = a + b;
//     console.log(a);
//     console.log(b);
//     console.log(`Tổng là ${c}`);
// }

// let a=10;
// let b=20;

// tinhTong(b,a);

// function tinhTongV2(a,b) {
//     return a + b;
// }

// let tong = tinhTongV2(a,b);
// console.log(tong);

//VD Viết 1 function giải phương trình
// F nhận vào 2 biến a và b
// Trả về nghiệm của phương trình ax+b = 0

// function giaiPT (a,b)  {
//     let x;
//     if (a === 0 && b===0) {
//         return "Vô số nghiệm";
//     } else if ( a === 0 && b!==0) {
//         return "Phương trình vô nghiệm";
//     } else {
//         return -b/a;
//     }
// }

// let a = Number(prompt("Nhập biến a"));
// let b = Number(prompt("Nhập biến b"));
// console.log(giaiPT(a,b));

// VD 2 nhap vao 1 mang danh sach cac so
// tra lai so lon nhat trong mang

// let array = [1,2,5,8,,4,9,2,4,1,0,11,99];

// function Max (A) {
//     let n = 0;
//     for (let i = 0; i < A.length; i++) {
//         const e = A[i];
//         if(n < e) {
//             n = e;
//         }  
//     }
//     return n;
// }

// function Min (A) {
//     let n = 0;
//     for (let i = 0; i < A.length; i++) {
//         const e = A[i];
//         if(n > e) {
//             n = e;
//         }  
//     }
//     return n;
// }

// console.log(Min(array));
// console.log(Max(array));


// Viết F nhận vào 1 số n
// Trả về n!

// function P (n) {
//     let p=1;
//     for (let i = 1; i <= n; i++) {
//         p*=i;
//     }
//     return p;
// }

// function deQuy (n) {
//     if (n===0) {
//         return 1;
//     }
//     return n*deQuy (n-1);
// }
// console.log(deQuy(prompt("hãy nhập N")));