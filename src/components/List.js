//https://docs.google.com/spreadsheets/d/1pA3oJ8TbQ1v7204aJTo2qx2Khi8DsKuLFylBl0dHj0c/gviz/tq?tqx=out:json&gid=0

export default async function List(dataJson, invitadosList) {
  const elementInvitados = document.getElementById("listadoInvitados");
  const data = await dataJson;

  const listadoMarkup = `
  Todas las invitaciones
  <ul id="list">
  </ul>
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
  ${data.dominio}/${invitacion.id}
  ¡Los esperamos!`;

    const item = `
  <li class="px-8 py-1 border">
    <h5>
      <a href="/#invitacion-1911${invitacion.id}" class="hover:text-blue-600">
        ID: ${invitacion.id} - ${invitacion.nombres} - Personal:${invitacion.personal}
      </a>
    </h5>
    <a
      class="text-blue-600"
      href="whatsapp://send?text=${textWhatsapp}"
      data-action="share/whatsapp/share"
      >Enviar invitacion
      </a>
  </li>
  `;
    if (elementInvitados) {
      list.innerHTML += item;
    }
  });
}
