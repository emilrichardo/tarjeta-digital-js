import createElements from "./../functions/createElements.js";
import {Calendar, Map, Gift, Birds} from "./../components/Icons.js"
export default  function PlacesComponent (data){
   const listPoints =  `
   <div>
    <h3>${data.title}</h3>
    ${ data.points.map(point=> pointItem(point)).join("")}
   </div>
    `
    createElements(".places", listPoints);

}

function pointItem  (pointdata) {
    const pointMarkup = `
    <div class="pt-2 px-4 border" >
        <i class="icon ${pointdata.type === 0 ? "icon-church" : "icon-fest" }"></i>
        <h3> ${pointdata.hours}</h3>
        <h4>${pointdata.name}</h4>
        <p>${pointdata.adress}</p>
        <a href=${pointdata.ubication} target="_blank" >${pointdata.linkText}</a>
    </div>
    `
    return pointMarkup
}

const icons = document.querySelectorAll(".icon")
