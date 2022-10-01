import createElements from "../functions/createElements.js";

export default async function westElements(data, dynamicContent) {
  const currentInvited = (await data) || {};
  const tituloInvitacion = `¡${dynamicContent?.adjetivo} ${dynamicContent?.relacion}!`;
  const cuerpoInvitacion = `Con mucho amor y cariño queremos ${dynamicContent?.invitar} a formar parte de este momento tan importante en nuestras vidas. ${dynamicContent.articulo} esperamos.`;


  if (currentInvited) {
    createElements(".nombres", currentInvited.nombres);
    createElements(".personal", currentInvited.personal);
    createElements(".relacion", currentInvited.relacion);
    createElements(".id", currentInvited.id);
    createElements(".tituloInvitacion", tituloInvitacion);
    createElements(".cuerpoInvitacion", cuerpoInvitacion);
  }
  console.log(dynamicContent);
}
