/*
1- get total
2- CREATE PROUDUCT
3- save inlocal storage
4- clear inputs
5- read in table
6- count
7- delete pro
8 updata
9 search
10 clean data
*/






var booknameInput = document.getElementById("bookName");
var priceInput = document.getElementById("Price");
var faxesInput = document.getElementById("Faxes");
var adsInput = document.getElementById("ads");
var discounntInput = document.getElementById("discounnt");
var totalInput = document.getElementById("total");
var countInput = document.getElementById("count");
var CategoryInput = document.getElementById("Category");
var urlInput = document.getElementById("url");
var SubmitInput = document.getElementById("Submit");




//Get total
function getTotal() {
    if (priceInput.value != "") {
        // + : convert string into number
        var result = (+priceInput.value + +faxesInput.value + +adsInput.value) - +discounntInput.value;
        totalInput.innerHTML = result;
        totalInput.style.background = '#008000';
    }
    else {
        totalInput.style.background = '#ff0000';
        totalInput.innerHTML = '';
    }

}



//CREATE PROUDUCT
var allprodcts;
if (localStorage.ALLBOOKS != null) {
    // بضيف ف الاراي الحاجه الي موجوده ف اللوكال 
    allprodcts = JSON.parse(localStorage.ALLBOOKS)
}
else {
    var allprodcts = [];
}
function addProduct() {
    var product = {
        name: booknameInput.value,
        price: priceInput.value,
        faxes: faxesInput.value,
        ads: adsInput.value,
        discounnt: discounntInput.value,
        total: totalInput.innerHTML,
        count: countInput.value,
        category: CategoryInput.value,
        URL: urlInput.value,
    }

    if (product.count > 1) {
        for (var i = 0; i < product.count; i++) {
            allprodcts.push(product);

        }
    }
    else {

        allprodcts.push(product);
    }


    // بضيف ف اللوكل الاراي
    localStorage.setItem("ALLBOOKS", JSON.stringify(allprodcts));
    console.log(allprodcts);

    cleardata();
    shawData();
}

// clear inputs
function cleardata() {
    booknameInput.value = '';
    priceInput.value = '';
    faxesInput.value = '';
    adsInput.value = '';
    discounntInput.value = '';
    totalInput.innerHTML = ''
    countInput.value = '';
    CategoryInput.value = '';
    urlInput.value = '';
}

//READ data in table
function shawData() {
    var cartona = '';
    for (var i = 0; i < allprodcts.length; i++) {
        cartona += `
        <tr>
                        <td>${i + 1}</td>
                        <td>${allprodcts[i].name}</td>
                        <td>${allprodcts[i].URL}</td>
                        <td>${allprodcts[i].price}</td>
                        <td>${allprodcts[i].faxes}</td>
                        <td>${allprodcts[i].ads}</td>
                        <td>${allprodcts[i].discounnt}</td>
                        <td>${allprodcts[i].total}</td>
    
                        <td>
                        <a href="${allprodcts[i].URL}"> <button class="btn btn-warning">Visit</button></a>
                        </td>
                        <td>
                            <button id="Delete" onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button>
                        </td>
                        <td>
                            <button id="Update" onclick="updateData(${i})" class="btn btn-info">Update</button>
                        </td>
                    </tr>
        `
    }
    document.getElementById('tbody').innerHTML = cartona;
}
//عشان تبقي شغاله ع طول مجرد م افتح الصفحه يظهر ليا الي ف اللوكال استوردج
shawData();


//delete product
function deleteProduct(x) {
    allprodcts.splice(x, 1);
    localStorage.ALLBOOKS = JSON.stringify(allprodcts);
    shawData();
}


// function updateData(i) {
//     booknameInput.value = allprodcts[i].name;
//     priceInput.value = allprodcts[i].price;
//     faxesInput.value = allprodcts[i].faxes;
//     adsInput.value = allprodcts[i].ads;
//     discounntInput.value = allprodcts[i].discounnt;
//     totalInput.value = allprodcts[i].total;
//     countInput.value = allprodcts[i].count;
//     CategoryInput.value = allprodcts[i].category;
//     urlInput.value=allprodcts[i].URL;
//     getTotal();
//     countInput.style.display='none';
//     SubmitInput.innerHTML='Update';
// }



var sea = document.getElementById('searchName');

var searcH = document.getElementById('search')
function searchElement(x) {
    var cartona = '';


    for (var i = 0; i < allprodcts.length; i++) {
        if (allprodcts[i].name.toLowerCase().includes(x.toLowerCase())) {
            cartona += `
        <tr>
                        <td>${i + 1}</td>
                        <td>${allprodcts[i].name}</td>
                        <td>${allprodcts[i].URL}</td>
                        <td>${allprodcts[i].price}</td>
                        <td>${allprodcts[i].faxes}</td>
                        <td>${allprodcts[i].ads}</td>
                        <td>${allprodcts[i].discounnt}</td>
                        <td>${allprodcts[i].total}</td>
    
                        <td>
                        <a href="${allprodcts[i].URL}"> <button class="btn btn-warning">Visit</button></a>
                        </td>
                        <td>
                            <button id="Delete" onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button>
                        </td>
                        <td>
                            <button id="Update" onclick="updateData(${i})" class="btn btn-info">Update</button>
                        </td>
                    </tr>
        `
        }
    }
    document.getElementById('tbody').innerHTML = cartona;

}
function searchName(x) {
    searchElement(x)
}



