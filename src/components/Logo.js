import createElements from "./../functions/createElements.js";



function Logo(data) {


  const elementLogo = document.querySelectorAll(".logo")

  const logoText = () => {
    return `
    <div class="logoText text-center">
      <div>${data.nombres.novia}</div>
      <div>${data.nombres.separador}</div>
      <div>${data.nombres.novio}</div>
    </div>
  `
  };

  const logoImage = (data, imageUrl) => {
    return `
    <div class="logoImage text-center">
        <img
        src=${imageUrl}
        alt=${data.nombres.novia + " " + data.nombres.separador + " " + data.nombres.novio}"
        />
    </div>
  `
  };

  elementLogo.forEach(logo =>{
    const imgUrl = logo.attributes.imageurl?.value
    if(logo.attributes.type?.value === "image"){
      logo.innerHTML = logoImage(data, imgUrl)
    } else{
      logo.innerHTML = logoText(data)
    }

  })



  //createElements(".logo", logoMarkup());
  createElements(".antetitulo", data.antetitulo);



}
export default Logo;
