//Bài 1: Nhập vào bán kính hình tròn, in ra chu vi và diện tích hình tròn.
// {
//     let r = prompt("Hãy nhập bán kính hình tròn");
//     let chuvi = 2 * Math.PI * r;
//     console.log("chu vi hinh tron la",chuvi);
//     let dientich = 4 * Math.PI * Math.pow(r,2);
//     console.log("dien tich hinh tron la ",dientich);
// }

//Bài 2: Nhập vào chiều dài và chiều rộng, in ra chu vi và diện tích hình chữ nhật
// {
//     let d = prompt ("Hay nhap chieu dai");
//     let r = prompt ("Hay nhap chieu rong");
//     let chuvi = ( r*1 + d*1 ) * 2;
//     console.log ("Chu vi hinh chu nhat la ",chuvi);
//     let dientich = r*d;
//     console.log ("Dien tich hinh chu nhat la ", dientich);
// }

//Bài 3: Tính giá trị biểu thức:
// {
//     let x = prompt("Hãy nhập x");
//     x=x*1;
//     let y1 = 4*(x**2 + 10*x*Math.sqrt(x) + 3 * x + 1);
//     console.log("y1 = ",y1);
    
//     let y2 = (Math.sin(Math.PI*(x**2))+Math.sqrt(x**2+1))/(Math.E**(2*x)+Math.cos(Math.PI*x/4));
//     console.log("y2 = ",y2);
// }

// Bài 4: Nhập vào số tiền X vnđ (giả sử số tiền là bội số của 10.000vnđ), đổi xem số tiền đó được bao nhiêu tờ 100.000, 50.000, 20.000, 10.000 vnđ.
// Ví dụ: 320.000 vnđ = 3 tờ 100.000 + 0 tờ 50.000 + 1 tờ 20.000 + 0 tờ 10.000 vnđ
// {
//     let x = prompt("Hãy nhập số tiền")
//     console.log("Phép tính tách ",x," vnđ thành các mệnh giá tiền");
//     let y = (x-x%100000)/100000;//Số tờ 100K
//     console.log("Số tờ 100K là ",y," tờ");

//     x = x%100000;
//     let z = (x-x%50000)/50000;//Số tờ 50K
//     console.log("Số tờ 50K là ",z," tờ");
    
//     x = x%50000;
//     let i = (x-x%20000)/20000;//Số tờ 20K
//     console.log("Số tờ 20K là ",i," tờ");

//     x = x%20000;
//     let k = (x-x%10000)/10000;//Số tờ 10K
//     console.log("Số tờ 10K là ",k," tờ");

//     console.log("Sô tiền lẻ còn lại là",x%10000," vnđ");  
// }


// Bài 5: Nhập 1 số có 3 chữ số, tính tổng các chữ số đó.

// let n = parseInt(prompt("Nhập 1 số có 3 chữ số"));
// let x = (n-n%100)/100; n = n%100;
// let y = (n-n%10)/10; n = n%10;
// let z = n;
// let tong = x + y + z;
// console.log("Tổng các chữ số là: ", tong," đơn vị");

