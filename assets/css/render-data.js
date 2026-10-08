import { dataPhone } from "./database.js";

// Render phone vao UI
const contentDOM = document.querySelector('.content__listItems');
let phonesDOM = '';
for (let i=0; i<dataPhone.length; i++) {
    phonesDOM+=`
         <li class="content__item">
            <a href="#" data-id="${dataPhone[i].id}" class="content__itemChild">
                <img src="${dataPhone[i].slideImg}" alt="" class="content__imageItem" style="display: block;">
                <h3 class="content__nameItem">${dataPhone[i].namePhone}</h3>
                <p class="valueItem">${dataPhone[i].pricePhone.toLocaleString("vi-VN") + "đ"}</p>
                <p class="content__smemberItem">${dataPhone[i].smemberItem}</p>
                <p class="studentItem">${dataPhone[i].studentItem}</p>
                <p class="contributeItem">${dataPhone[i].contributeItem}</p>
            </a>
        </li>
    `
}
contentDOM.innerHTML=phonesDOM; 


// Gan ham lang nghe su kien click cho tung phone
const itemsProduct = document.querySelectorAll(".content__itemChild");
for (let i=0; i<itemsProduct.length; i++) {
     itemsProduct[i].addEventListener("click", function (e) {
        e.preventDefault();

        const phoneId = this.dataset.id;
        console.log(phoneId);

        showPhone(phoneId);
    });
}

// Phan nay can xem xet toi uu lai
const page_1 = document.querySelector("#defaultInterface")
const page_2 = document.querySelector("#detailsInterface")

const optionBtn_1 = document.querySelector(".deviceBuyEncase__optionColor-1")
const optionBtn_2 = document.querySelector(".deviceBuyEncase__optionColor-2")
const optionBtn_3 = document.querySelector(".deviceBuyEncase__optionColor-3")
const optionBtn_4 = document.querySelector(".deviceBuyEncase__optionColor-4")
const optionBtn_5 = document.querySelector(".deviceBuyEncase__optionColor-5")
const optionBtn_6 = document.querySelector(".deviceBuyEncase__optionColor-6")


const phoneData_1 = document.querySelector(".deviceInfo__data-1")
const phoneData_2 = document.querySelector(".deviceInfo__data-2")
const phoneData_3 = document.querySelector(".deviceInfo__data-3")
const phoneData_4 = document.querySelector(".deviceInfo__data-4")
const phoneData_5 = document.querySelector(".deviceInfo__data-5")
const phoneData_6 = document.querySelector(".deviceInfo__data-6")
const phoneData_7 = document.querySelector(".deviceInfo__data-7")
const phoneData_8 = document.querySelector(".deviceInfo__data-8")
const phoneData_9 = document.querySelector(".deviceInfo__data-9")
const phoneData_10 = document.querySelector(".deviceInfo__data-10")
const phoneData_11 = document.querySelector(".deviceInfo__data-11")
const phoneData_12 = document.querySelector(".deviceInfo__data-12")
const phoneData_13 = document.querySelector(".deviceInfo__data-13")
const phoneData_14 = document.querySelector(".deviceInfo__data-14")
const phoneData_15 = document.querySelector(".deviceInfo__data-15")
const phoneData_16 = document.querySelector(".deviceInfo__data-16")
const phoneData_17 = document.querySelector(".deviceInfo__data-17")



function showPhone(id) {     

    // Loc lay du lieu cua phone duoc click
    let dataSon = null;
    for (let i=0; i<dataPhone.length; i++) {
        if (dataPhone[i].id == id) {
            dataSon=dataPhone[i];
            break;
        }
    }

    phoneData_1.textContent = dataSon.oS
    phoneData_2.textContent = dataSon.cPU
    phoneData_3.textContent = dataSon.rAM
    phoneData_4.textContent = dataSon.memory
    phoneData_5.textContent = dataSon.camera
    phoneData_6.textContent = dataSon.displayTech
    phoneData_7.textContent = dataSon.screenResolution
    phoneData_8.textContent = dataSon.screenSize
    phoneData_9.textContent = dataSon.maxBright
    phoneData_10.textContent = dataSon.pinCapcity
    phoneData_11.textContent = dataSon.pinType
    phoneData_12.textContent = dataSon.chargingTech
    phoneData_13.textContent = dataSon.ingressProtection
    phoneData_14.textContent = dataSon.otherConnect
    phoneData_15.src = dataSon.slideImg
    phoneData_16.textContent = dataSon.namePhone 

    phoneData_17.textContent = Number(dataSon.pricePhone).toLocaleString("vi-VN") + "đ";
    
    page_1.style.display = "none";
    page_2.style.display = "block";

    window.scrollTo(0, 0);

    optionBtn_1.style.border = "0.2rem solid #d30022";
    optionBtn_1.style.backgroundColor = "#fde2e2";
    optionBtn_4.style.border = "0.2rem solid #d30022";
    optionBtn_4.style.backgroundColor = "#fde2e2";
}

// ket thuc phan can toi uu