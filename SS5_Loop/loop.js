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
// let n = parseInt(prompt("nhập số n "));
// let soChan = 0;
// let chiaHetCho3 = 0;
// for (let index = 1; index <=n; index++) {
    
    //nhận biết số chẵn
//     if( index % 2 === 0 ){
//         soChan++;
//     } 
    
//     // nhận biết số chia hết cho 3
//     if( index % 3 === 0 ){
//         chiaHetCho3++;
//     }
// }
// console.log("Số số chẵn là :",soChan);
// console.log("Số số chia hết cho 3 là :",chiaHetCho3);
// let N = parseInt(prompt("nhập số N"));
// let S = 0;
// for (let i = 0; i < N; i++) {
//     S +=i;
// }
// console.log(`S = ${S}`);

// Câu 1:
// let S = 0;
// let N = parseInt(prompt('nhập N'));
// for (let i = 1; i <= N; i+=2) {
//     S +=i;
    
// }
// console.log("S = ",S);

//Câu 2
// let S = parseFloat(0);
// let N = parseInt(prompt('nhập N'));
// for (let i = 1; i <= N; i++) {
//     S +=(1/i);
    
// }
// console.log("S = ",S);
// Câu 3

// let S = parseFloat(0);
// let N = parseInt(prompt('nhập N'));
// for (let i = 2; i <= N; i++) {
//     S += 1 / (i * (i-1));
// }
// console.log("S = ",S);

//Câu 4
// let S = parseFloat(0);
// let N = parseInt(prompt('nhập N'));
// for (let i = 2; i <= N; i++) {
//     S += (i-1)/i;
// }
// console.log("S = ",S);

//Câu 5
// let P = parseFloat(1);
// let N = parseInt(prompt('nhập N'));
// for (let i = 1; i <= N; i++) {
//     P *=i;
// }
// console.log("S = ",S);

//Câu 6
// let P = 0;
// let T = 1;
// let N = parseInt(prompt('nhập N'));
// for (let i = 1; i <= N; i++) {
//     T *=i;
//     P +=T;
// }
// console.log("P = ",P);


// // cách 2
// let s = 0;
// let N = parseInt(prompt("Nhập N"));
// for (let i=1; i <=N; i++) {
//     let p = 1;
//     for (let j = 1; j <= i; j++){
//         p *=j;
//     }
//     s +=p;
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////        VÒNG LẶP WHILE           ////////////////////////////////////////////////////////////////



// yêu cầu người dùng nhập 1 số >8

// let n = Number(prompt("nhập n"))

// while (n <= 8) {
// n = Number(prompt("Nhập lại số n, do n của bạn <= 8"))
// }


// // nhập 1 mật khẩu dài ít nhất 8 ký tự, ko thỏa mãn thì nhập lại.
// let pass = prompt("Nhập mật khẩu có 8 ký tự");

// while ( pass.length <8) {
//     pass = prompt("Pass của bạn ít hơn 8 ký tự, hãy nhập lại pass mới.")    
// }
// alert(`Bạn đã nhập pass thành công, pass của bạn là ${pass}`);

// Nhập 1 mật khẩu phải chưa ký tự đặc biệt @
// không thỏa mãn, nhập lại.

// let mk = prompt("Nhập mật khẩu của bạn");
// while (mk.includes("@") === false) {
//     mk = prompt("Nhập lại mật khẩu, mật khẩu bạn thiếu @")
// }
// console.log(`Mật khẩu của bạn là ${mk}`);


// nhập 1 mật khẩu dài ít nhất 8 ký tự và chứa @
// let mk = prompt("Nhập mật khẩu của bạn");
// while (!mk.includes("@") || mk.length <8 ) {
//     mk = prompt("Nhập lại mật khẩu, mật khẩu bạn thiếu @ hoặc ít hơn 8 ký tự")
// }
// console.log(`Mật khẩu của bạn là ${mk}`);


// test continue và break: Ví dụ tính tổng số lẻ.
// let s = 0;
// for ( let i = 0; i<=10; i++) {
//     if( i%2 ==0) {
//         continue;
//     }
//     s+=i;
// }


