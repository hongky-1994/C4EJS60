// let array = [2,5,7,8];
// let customer = ["Phạm Văn A","Nguyễn Thị B"];

// console.log(array);
// console.log(array.length);
// console.log(customer);
// console.log(customer[3]);

// array.push(1,2,3,4);
// console.table(array);

// let lastElement = array.pop(1,2,3,4);
// console.table(array);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(`Xin chào ${element}`);
    
// }


// VD1: Tính tổng các giá trị trong mảng
// let array = [2,5,7,8];
// let tong = 0;
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     tong +=element;
// }
// console.log(tong);


// VD2: Tính giá tring bình của mảng
// let array = [2,5,7,8];
// let tong = 0;
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     tong +=element;
// }
// console.log(tong/array.length);



//////////////////OBJECT///////////////////
// let myInfo = {
//     "name": "Hung",
//     age: 20,
// }

// console.log(myInfo["age"]);
// console.log(myInfo.name);

// myInfo.school = "DH QG";
// myInfo["country"] = "VN";

// delete myInfo.school;

// for (const key in myInfo) {
//     if (myInfo.hasOwnProperty(key)) {
//         const value = myInfo[key];
//         console.log(value);
//         console.log(key + ": " +value);
               
//     }
// }


// VD VỀ OBJECT
// tạo 1 Object lưu thông tin 1 điện thoại mặc định gồm 
// tên và giá
// 1. nhập thêm thông tin: nsx, mô tả
// 2. cho sửa 1 thông tin mà người dùng muốn.
// 3. Xóa 1 thông tin mà người dùng muốn

// let dt = {
//     "ten": "A7 ",
//     "giá": 100000,
// }

// // thêm thông tin
// dt.nsx = "SamSung";
// dt["Mô tả"] = "Sản xuất năm 2018";

// console.log(dt);

// // cho người dùng sửa 1 thông tin muốn
// let n = prompt("thông tin bạn muốn sửa - ten, giá, nsx, Mô tả");

// // if (dt.hasOwnProperty(n)) {
// //     dt[n] = prompt ("Thông tin bạn sửa là: ")
// //         console.log(dt);
// //     } else {
// //         alert ("Thông tin bạn muốn sửa không tồn tại.")
// //     }


// while (!dt.hasOwnProperty(n)) {
//     n = prompt("Thông tin bạn nhập sai");
// }
// dt[n]= prompt ("Thông tin bạn sửa là: ")
// console.log(dt);

// Ví dụ về kết hợp array và object
// let listPhones = [
// {
//     name:"A",
//     price:0,
//     brand:"",
// }
// {
//     name:"B",
//     price:0,
//     brand:"",
// }
// {
//     name:"C",
//     price:0,
//     brand:"",
// }
// ];


//1. hiển thị danh sách
// 1. 
// Name: ..
// Brand:...
// 2.


//2. thêm 
/// nhập name, price, brand => object trước rồi mới push
// push list

// 3. sửa
// sửa object bình thường.