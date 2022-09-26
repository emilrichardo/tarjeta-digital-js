import createElements from "/src/functions/createElements";

function Logo(data) {
  const logoMarkup = () => `
    <div class="logoText text-center">      
      <div>${data.nombres.novia}</div>
      <div>${data.nombres.separador}</div>
      <div>${data.nombres.novio}</div>
    </div>
  `;

  createElements(".logo", logoMarkup());
}
export default Logo;
