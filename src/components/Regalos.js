

export default function Regalos(gifts){

   const accountData = gifts[1].data
   // console.log(accountData);

const modalElement = document.querySelector("#modalAccount")

if(modalElement){
    modalElement.style.display = "none";

    const buttonBank = document.querySelector("#cbu")

    buttonBank.addEventListener("click", function(){
        modalElement.style.display = "block"
    })


    if(modalElement ){
        const bankElement = document.querySelector("#banco")
        bankElement.textContent = accountData.bank



        const aliasElement = document.querySelector("#alias")
        aliasElement.children[0].value = accountData.alias;

        const aliasCopied = document.getElementById("aliasCopied")
        aliasCopied.style.display = "none";

        const cbuCopied = document.getElementById("cbuCopied")
        cbuCopied.style.display = "none"


        aliasElement.addEventListener("click", function(){
            navigator.clipboard.writeText(accountData.alias).then(() => {
            });

            aliasCopied.style.display = "block"

            setTimeout(function(){
            aliasCopied.style.display = "none"
            }, 2000);
        })


        const cbuElement = document.querySelector("#cbuField")
        cbuElement.children[0].value = accountData.accountNumber

        cbuElement.addEventListener("click", function(){
            navigator.clipboard.writeText(accountData.accountNumber).then(() => {
            });
            cbuCopied.style.display = "block"

            setTimeout(function(){
            cbuCopied.style.display = "none"
            }, 2000);
        })


    }



}



const buttonBank = document.querySelector("#cbu")













}
