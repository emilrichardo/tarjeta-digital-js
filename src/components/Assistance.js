export default function Assistance(data, currentGuest){



    const elementTitle = document.getElementById("confirmTitle")

    if(elementTitle){
        elementTitle.textContent = data.title
        const elementBody = document.getElementById("confirmBody")
        elementBody.textContent = data.timeLimit

    }




    const elementAssistance = document.getElementById("confirmationFielSet")









    if(elementAssistance){
        elementAssistance.addEventListener("change", stateConfirm)



    function stateConfirm(e){

        const elementMessage = document.getElementById("message")
        if(e.target.value === "no"){
            elementMessage.textContent = data.messageNo
        } else{
            elementMessage.textContent = ""
        }
        const elementCheck = document.querySelectorAll("#confirmationFielSet .btn")

        elementCheck.forEach((itemCheck) =>{
            const isChecked = itemCheck.control.checked;
            isChecked ? itemCheck.classList.add("active") : itemCheck.classList.remove("active");

        })
    }



    const elementYes = document.getElementById("yesLabel")
    elementYes.textContent = data.textYes

    const elementNo = document.getElementById("noLabel")
    elementNo.textContent = data.textNo


    const msg_wpp =  data.messageYes

   const wppLink = `whatsapp://send?text=${msg_wpp}`


    const elementSend = document.getElementById("sendResponse")
    elementSend.textContent = data.textSend
    elementSend.setAttribute("href", wppLink)
    }












}