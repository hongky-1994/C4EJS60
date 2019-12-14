// Tạo Object về danh sách điện thoại
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
console.table(dienThoai);
// function hienThiDs () {
// 	for (let index = 0; index < dienThoai.length-1; index++) {
// 		console.log(index + 1);
// 		let  phone = dienThoai[index];
	
// 		for (let key in phone) {
// 			if (phone.hasOwnProperty(key)) {
// 				const value = phone[key];
// 				console.log(key + ": " + value);
// 			}
// 		}
// 	}
// }
// // hienThiDs();
chucNang();



//___________________________________________________________________________//
// Bảng chức năng____________________________________________________________//
//___________________________________________________________________________//
function chucNang() {
	let n = parseInt(prompt("Bạn muốn làm gì:\nNhập 1: Thêm dữ liệu\nNhập 2: Sửa dữ liệu\nNhập 3: Xóa dữ liệu\nNhập 4: Thoát"));
	while (!(n===1 || n===2 || n===3 || n===4)) {
		n = parseInt(prompt("Bạn muốn làm gì:\nNhập 1: Thêm dữ liệu\nNhập 2: Sửa dữ liệu\nNhập 3: Xóa dữ liệu\nNhập 4: Thoát"));
	}
	switch (n) {
		case 1:
			themDuLieu();
			break;
		case 2:
			suaDuLieu();
			break;
		case 3:
			xoaDuLieu();
			break;
		case 4:
			alert("Xin chào và hẹn gặp lại");
			break;
		default:
			break;
	}
}



//___________________________________________________________________________//
// Thêm dữ liệu cho danh sách________________________________________________//
//___________________________________________________________________________//

function themDuLieu() {
	let x = "y";
	let dt = { "Name": "","Price": 0 ,"Brand": ""};
	while ( x === "y" ) {
		dt["Name"] = prompt ("Nhập tên điện thoại");
		dt["Price"] = Number(prompt ("Nhập giá điện thoại"));
		dt["Brand"] = prompt ("Nhập Hãng điện thoại");
		dienThoai.push({"Name": dt.Name ,"Price": dt.Price,"Brand": dt.Brand});
		
		inRaManHinh ();
		x = nhapTiep();
	}
	chucNang();
}



//_____________________________________________________________________________________________//
//Function Sửa dữ liệu trong danh sách điện thoại______________________________________________//
//_____________________________________________________________________________________________//
function suaDuLieu() {
	let dt = { "Name": "","Price": 0 ,"Brand": ""};
	let x = "y";
	
	while ( x === "y" ) {
		let n = parseInt(prompt("Bạn muốn sửa dòng index nào trong bảng?"));
		console.log(n);
		while ( !(n < dienThoai.length && n >= 0)) {
			n = parseInt(prompt("Nhập lại số thứ tự bạn muốn sửa"));
		}
		
		dt["Name"] = prompt ("Nhập tên điện thoại");
		dt["Price"] = Number(prompt ("Nhập giá điện thoại"));
		dt["Brand"] = prompt ("Nhập Hãng điện thoại");
		dienThoai[n] = {"Name": dt.Name ,"Price": dt.Price,"Brand": dt.Brand};
		
		inRaManHinh ();		
		x = nhapTiep();
	}
	chucNang();
}

//_____________________________________________________________________________________________//
//Function Xóa dữ liệu trong danh sách điện thoại______________________________________________//
//_____________________________________________________________________________________________//
function xoaDuLieu() {
	let x = "y";
	while ( x === "y" ) {
		let n = parseInt(prompt("Bạn muốn xóa dòng index nào trong bảng?"));
		console.log(n);
		while ( !(n < dienThoai.length && n >= 0)) {
			n = parseInt(prompt("Nhập lại số thứ tự bạn muốn xóa"));
		}
		
		dienThoai.splice(n,1);
		
		inRaManHinh ();		
		x = nhapTiep();
	}
	chucNang();
	
	
	
	
//____________________________________________________________________________//
// Function vòng lặp yêu cầu nhập đúng________________________________________//
//____________________________________________________________________________//
	
	function inRaManHinh (){
		let a = prompt("Bạn có muốn in danh sách không: y/n"); // In danh sách ra  màn hình để kiểm chứng
		while ( a !== "y" && a !== "n") {
			alert ("Vui lòng nhập lại y hoặc n");
			a = prompt("Bạn có muốn in danh sách không; y = yes ; n = no");
		}
		if(a === "y") {
			console.table(dienThoai);
		};
	}
	
	function nhapTiep() {
		let a = "";
		while ( a !== "y" && a !== "n") {
			a = prompt("Bạn có muốn thêm/sửa/xóa vào danh sách điện thoại không; y = yes ; n = no");
		}
	return a;	
	}
}