import Modal from "./Modal.js"

export default function Regalos(gifts){

const modalElement = document.querySelector("#modalAccount")
modalElement.innerHTML = banckAccountMarkup (gifts[1].data)
//modalElement.style.display = "none"

const buttonBank = document.querySelector("#cbu")


buttonBank.addEventListener("click", function(){
    modalElement.style.display = "block"
})

const elementsCopy = modalElement


/*  elementsCopy.forEach(item => {
    console.log("item");
 })
 */

console.log(elementsCopy);



    gifts.forEach(gift => {
        console.log(giftItem(gift));
    });

}

function giftItem(gift){
    return `
    <div class="giftItem">
        <h4>${gift.title}</h4>
        <p>${gift.detail}</p>
    </div>
    `
}



function banckAccountMarkup (data)  {
    return `
    <ul class="account-data">
        <li>
            <h5>Banco: ${data.bank}</h5>
        </li>
        <li>
            <h5>Alias:</h5>
            <div  > <input value=${data.alias} /> </div>
        </li>
        <li>
            <h5>CBU:</h5>
            <div "><input value=${data.accountNumber} /></div>

        </li>
    </ul>
    `

}




function copy () {
console.log("copiado");
}
