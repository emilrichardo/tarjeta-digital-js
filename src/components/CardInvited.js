import createElements from "/src/functions/createElements";

export default async function westElements(data, dynamicContent) {
  const currentInvited = (await data) || {};
  const tituloInvitacion = `¡${dynamicContent?.adjetivo} ${dynamicContent?.relacion}!`;
  const cuerpoInvitacion = `Con mucho amor y cariño queremos ${dynamicContent?.invitar} a formar parte de este momento tan importante en nuestras vidas. ${dynamicContent.articulo} esperamos.`;

  console.log(currentInvited);
  if (currentInvited) {
    createElements(".nombres", currentInvited.nombres);
    createElements(".personal", currentInvited.personal);
    createElements(".relacion", currentInvited.relacion);
    createElements(".id", currentInvited.id + 1);
    createElements(".tituloInvitacion", tituloInvitacion);
    createElements(".cuerpoInvitacion", cuerpoInvitacion);
  }
}
