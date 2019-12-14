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

// let a =[1,2,3,4];

// let result = a.find(function(value, index,arr){
//     // console.log(value);
//     // console.log(index);
//     // console.log(arr);
//     return value === 2;
// });
// console.log(result);

// result = a.findIndex(function(value, index,arr){
//     // console.log(value);
//     // console.log(index);
//     // console.log(arr);
//     return value === 2;
// });
// console.log(result);

// result = a.filter(function(value, index,arr){
//     // console.log(value);
//     // console.log(index);
//     // console.log(arr);
//     return value > 2;
// });
// console.log(result);
// result = a.filter(function(value, index,arr){
    //     // console.log(value);
    //     // console.log(index);
    //     console.log(arr);
    //     return value >= 2 && value <4;
    // });
    // console.log(result);
    
// let a =[1,2,3,4];
// let b = [5,6,7,8,9];
// let d = [10,22,44,55]
// let c = a.concat(b,d);

// c.join(a,b);
// // console.table(c);
// let char = ["h",'e','l','l','o'];
// console.log(char.join(""));
// console.log(char);

// let marks = [5.2, 7,8,9,10]
// let c = marks.some(function(v,i,a) {
//     return v<5;
// }); //tất cả điểm có trên trung bình hay không.
// console.log(c);
//  marks.sort();
let dienThoai = [
    { "Name": "Xiaomi Redmi Note 7","Price": 4990000 ,"Brand": "Xiaomi" },
    { "Name": "Asus Zenfone Max Pro M2","Price": 4750000,"Brand": "Asus" },
    { "Name": "Nokia 6.1 Plus","Price": 4490000 ,"Brand": "Nokia" },
    { "Name": "Realme 3","Price": 4990000,"Brand": "Oppo"},
    { "Name": "Huawei Y9 2019","Price": 4990000,"Brand": "Huawei" },
    { "Name": "Vsmart Active 1","Price": 3990000,"Brand": "Vinsmart" },
    { "Name": "Xiaomi Mi Play","Price": 8000000,"Brand": "Xiaomi"},
    { "Name": "Razer Phone 2","Price": 11000000,"Brand": "Razer"},
    { "Name": "Google Pixel 3","Price": 12000000,"Brand": "Google"},
    { "Name": "Samsung Galaxy Note9","Price": 18000000,"Brand": "Samsung"},
    { "Name": "LG G8 ThinQ","Price": 11000000,"Brand": "LG"},
    { "Name": "Samsung Galaxy S10","Price": 13000000,"Brand": "Samsung"},
    { "Name": "OnePlus 7 Pro","Price": 13700000 ,"Brand": "OnePlus"}
];

// Tìm các điện thoại có chứa chữ A

let c = dienThoai.filter(function(n,i){
    return n.Name.includes("A");
});
console.log(c);


// Tìm các điện thaoij có giá > 10000000
let d = dienThoai.filter(function(n,i){
    if (n.Price>10000000) {
        return true;
    }
});
console.log(d);
// Tìm các điện thoại hãng Samsung
let e = dienThoai.filter(function(n,i){
    return n.Brand==="Samsung";
});
console.log(e);
// Kiểm tra xem có điện thaoij <50000000 không
let f = dienThoai.some(function(n,i){
    return n.Price <5000000;
})
console.log(f);

// Sắp xếp các điện thoại theo gia theo tên theo hãng,
dienThoai.sort(function(value1, value2){
    return value1.Name.toLowerCase().localeCompare(value2.Name.toLowerCase());
});
console.log(dienThoai);


