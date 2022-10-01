export default function Assistance(data, currentGuest, phone){


    console.log(data);
    const elementTitle = document.getElementById("confirmTitle")

    if(elementTitle){
        elementTitle.textContent = data.title
        const elementBody = document.getElementById("confirmBody")
        elementBody.textContent = data.timeLimit

    }




    const elementAssistance = document.getElementById("confirmationFielSet")









    if(elementAssistance){
        elementAssistance.addEventListener("change", stateConfirm)







    const elementYes = document.getElementById("yesLabel")
    elementYes.textContent = data.textYes

    const elementNo = document.getElementById("noLabel")
    elementNo.textContent = data.textNo


    let msg_wpp =  data.messageYes

    let wppLink = `https://wa.me/${phone}?text=${msg_wpp}`


    const elementSend = document.getElementById("sendResponse")
    elementSend.textContent = data.textSend

    elementSend.setAttribute("href", wppLink)


    function stateConfirm(e){

        const elementMessage = document.getElementById("message")
        if(e.target.value === "no"){
            elementMessage.textContent = data.messageNo
            msg_wpp = `${currentGuest.nombres} - Personal ${currentGuest.personal} comunican que no podrán asistir al evento.`
            wppLink = `https://wa.me/${phone}?text=${msg_wpp}`
            elementSend.setAttribute("href", wppLink)

        } else{
            elementMessage.textContent = ""
            msg_wpp = data.messageYes
            wppLink = `https://wa.me/${phone}?text=${msg_wpp}`
            elementSend.setAttribute("href", wppLink)
        }
        const elementCheck = document.querySelectorAll("#confirmationFielSet .radio-button")

        elementCheck.forEach((itemCheck) =>{
            const isChecked = itemCheck.control.checked;
            isChecked ? itemCheck.classList.add("active") : itemCheck.classList.remove("active");

        })
    }










    }












}