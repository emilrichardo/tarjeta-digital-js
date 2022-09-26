export default function Hero(data) {
  const Frase = `
  <div>
    ${data.antetitulo}
    <div class="logo"></div>
      
      
      <div>"${data.frase}"</div>
     
  </div>
  `;
  return Frase;
}
