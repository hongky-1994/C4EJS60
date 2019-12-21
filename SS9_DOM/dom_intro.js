// let domH1 = document.getElementById("dom-intro");
// // Dạng Object
// // console.dir(domH1.innerHTML);
// domH1.innerHTML = "Hello World";
// let imgIntro = document.getElementById("img");
// imgIntro.src = "https://image1.infogame.vn/2019/05/16/moonphotobackyard800x800.jpg";
// imgIntro.width = 200;

// console.dir(imgIntro);

// let h1Class = document.getElementsByClassName("dom-class-intro");
// console.dir(h1Class);
// for (let i = 0; i < h1Class.length; i++) {
//     const h1 = h1Class[i];
//     h1.innerHTML="Css Intro "+i;
// }

// document.getElementById("div-intro").innerHTML = "<h1>abc</h1>";
// document.getElementById("list-phone").innerHTML= 
// `<li>Iphone6</li> 
// <li>IphoneX</li> 
// <li>IphoneXs</li>`;

let listPhone =["Iphone6","IphoneX","IphoneXs"];
displayListPhone();

// hiển thị danh sách
function displayListPhone() {
    let sumLi="";
    for (let i = 0; i < listPhone.length; i++) {
     const phoneName = listPhone[i];
     sumLi+="<li>"+phoneName+"</li> ";
    }
    document.getElementById("list-phone").innerHTML =sumLi;
}

// Thêm đt
function them() {
    let newPhone = document.getElementById("them").value;
    listPhone.push(newPhone);
    displayListPhone();
    document.getElementById("them").value = "";
}
// Sửa


// Sửa điện thoại
function doi(){
    let suaPhone = document.getElementById("stt").value;

    listPhone[suaPhone-1] = document.getElementById("ten").value;  
    displayListPhone();
    document.getElementById("stt").value="";
    document.getElementById("ten").value="";
}
