export default function Assistance(data, currentGuest){

    const elementAssistance = document.getElementById("confirmationFielSet")

    elementAssistance.addEventListener("change", stateConfirm)

    function stateConfirm(e){

        const elementMessage = document.getElementById("message")
        if(e.target.value === "no"){
            elementMessage.textContent = data.messageNo
        } else{
            elementMessage.textContent = ""
        }
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





console.log(elementSend);



}