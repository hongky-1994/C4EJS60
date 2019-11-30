// for (let index = 0; index < 10; index++) {
//    console.log("hello ",index);    
// }


// // Nhập vào 1 số n từ 0 -> n
// let n = prompt("nhập số n ");
// for (let index = 0; index <= n; index++) {
//    console.log(index);
   
// }


// //nhập số n,in từ 1 ->n

// let n = prompt("nhập số n ");
// for (let index = 1; index <=n; index++) {
//    console.log(index);
// }

// //nhập vào 2 số m,n in từ m-> n

// let m = prompt("nhập số m");
// let n = prompt("nhập số n ");

// for (let index = m; index <=n; index++) {
//    console.log(index);
// }   
    
//Nhập 1 số n in từ n đến 0

// let n = prompt("nhập số n ");
// for (let index = n; index >=0; index--) {
//    console.log(index);
   
    
// }

// Bài tập nhập số n, in các số lẻ từ 0 đến n
// let n = parseInt(prompt("nhập số n "));
// for (let index = 0; index <=n; index+=2) {
//    console.log(index);
// }


// nhập số n , in các số chăn từ 0 đến n
// let n = parseInt(prompt("nhập số n "));
// for (let index = 1; index <=n; index+=2) {
//    console.log(index);
// }

// nhập 1 ố n, 
// đếm xe có bao nhiêu số chẵn
// bao nhiêu só chia hết cho 3
let n = parseInt(prompt("nhập số n "));
let soChan = 0;
let chiaHetCho3 = 0;
for (let index = 1; index <=n; index++) {
    
    //nhận biết số chẵn
    if( index % 2 == 0 ){
        soChan++;
    } 
    
    // nhận biết số chia hết cho 3
    if( index % 3 == 0 ) {
        chiaHetCho3++;
    }
}
console.log("Số số chẵn là :",soChan);
console.log("Số số chia hết cho 3 là :",chiaHetCho3);
 