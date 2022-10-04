//https://docs.google.com/spreadsheets/d/1pA3oJ8TbQ1v7204aJTo2qx2Khi8DsKuLFylBl0dHj0c/gviz/tq?tqx=out:json&gid=0

export default async function List(dataJson, invitadosList) {
  const elementInvitados = document.getElementById("listadoInvitados");
  const data = await dataJson;



  const listadoMarkup = `

  <h1>Todas las invitaciones</h1>
  <ul id="list">
  </ul>
  `;

  if (elementInvitados) {
    elementInvitados.innerHTML = listadoMarkup;
  }

  const list = document.querySelector("#list");

  invitadosList.forEach((invitacion) => {
    const textWhatsapp = `${invitacion.nombres} -
  ${data.mjs_titulo} - ${data.mjs_cuerpo} - ${data.dominio + "/" + data.hash + invitacion.id }
  Para más información, te dejamos este enlace con la tarjeta digital.

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
      class="text-primary flax items-center"
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
