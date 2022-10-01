export default function Modal(markup, data) {


    const modaMarkup = `
    <div class="modalContainer">
        <div class="modalCard">
            ${modalBody(markup)}
        </div>
    </div>
    `

     return modaMarkup


}





function modalBody (body) {
    return  `
    <div class="modalBody">
        ${body}
    </div>
    `
}


const modalHeader = (title)=>   ` <div class="modalHeader"> <h4>${title}</h4> </div>`
