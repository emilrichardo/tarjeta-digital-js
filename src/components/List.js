//https://docs.google.com/spreadsheets/d/167H9GjVKFEZzwVkM9nE4y1-n6xETyRaD1U95tumYlz8/gviz/tq?tqx=out:json&gid=0

export default async function List(dataJson, invitadosList) {
  const elementInvitados = document.getElementById("listadoInvitados");
  const data = await dataJson;



  const listadoMarkup = `

  <h1 class="text-center text-lg font-bold">Todas las invitaciones</h1>
  <h2 class="text-center">Para enviar invitación, copiar texto y pegar en chat de whastapp.</h2>
  <div class=" max-w-[900px] mx-auto">
    <ul id="list">
    </ul>
  </div>

  `;

  if (elementInvitados) {
    elementInvitados.innerHTML = listadoMarkup;
  }

  const list = document.querySelector("#list");

  invitadosList.forEach((invitacion) => {
    const textWhatsapp = `${invitacion.nombres} -
  ${data.mjs_titulo} -
  ${data.mjs_cuerpo}
  Para más información, te dejamos este enlace con la tarjeta digital.
  ${data.dominio + "/" + data.hash + invitacion.id }
  ¡Los esperamos!`;

    const item = `
  <li class="px-8 py-4 border bg-light rounded my-1 mx-2 ">
    <h5>
      <a href="${data.dominio + "/" + data.hash + invitacion.id }" class="hover:text-blue-600">
        ID: ${invitacion.id} - ${invitacion.nombres} <br/>
         Personal:${invitacion.personal}
      </a>
    </h5>
    <a
      class="text-primary hidden flax items-center"
      href="whatsapp://send?text=${textWhatsapp}"
      data-action="share/whatsapp/share"
      >Enviar invitacion ⟶
      </a>
      <div>


      <textarea class="w-full h-20 border border-primary">
      ${textWhatsapp}
      </textarea>
      <button copy="${textWhatsapp}"  class="btn-copy font-sans text-lg bg-gradient-to-l from-primary via-primary to-primary-light text-light rounded px-4 py-1 ">Copiar texto de invitación</button>
      </div>
  </li>
  `;
    if (elementInvitados) {
      list.innerHTML += item;
    }

    const buttonsCopy = document.querySelectorAll(".btn-copy")



    buttonsCopy.forEach(btnCopy=>{
      //console.log(btnCopy.attributes.copy.value);
      btnCopy.addEventListener("click", function(){
        console.log(btnCopy.attributes.copy.value);
        navigator.clipboard.writeText(btnCopy.attributes.copy.value).then(() => {
        });
        btnCopy.textContent = "✓ Invitacion copiada"
      })
    })

  });




}
