var listPhone = [];
    function displayList() {
        let sumTr="";
        for (let i = 0; i < listPhone.length; i++) {
            const e = listPhone[i];
            sumTr+=`
                <tr>
                    <td class="stt">${i+1}</td>
                    <td class="name">${e.name}</td>
                    <td class="price">${e.price}</td>
                    <td class="brand">${e.brand}</td>
                </tr>`;
        }
        document.getElementById("listPhone").innerHTML = sumTr;
    }

function addNewPhone() { //Thêm điện thoại mới
    let newPhone = {
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        brand: document.getElementById("brand").value
    };
    listPhone.push(newPhone);
    displayList();
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("brand").value = "";
}    

function replacePhone() { // Sửa diện thoại
    if(document.getElementById("stt").value<listPhone.length) {
        listPhone[document.getElementById("stt").value-1]["name"] = document.getElementById("name1").value;
        listPhone[document.getElementById("stt").value-1]["price"] = document.getElementById("price1").value;
        listPhone[document.getElementById("stt").value-1]["brand"] = document.getElementById("brand1").value;
        displayList();
    }
    document.getElementById("stt").value = "";
    document.getElementById("name1").value = "";
    document.getElementById("price1").value = "";
    document.getElementById("brand1").value = "";
}

