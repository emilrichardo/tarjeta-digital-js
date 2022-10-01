//https://docs.google.com/spreadsheets/d/1pA3oJ8TbQ1v7204aJTo2qx2Khi8DsKuLFylBl0dHj0c/gviz/tq?tqx=out:json&gid=0
import invitados from "./../invitados.json" assert { type: "json" };
import data from "./../data.json" assert { type: "json" }
import { people, invited, place, places, confirmAssistance, gifts,bankAccount } from "./classes.js";
// datos gloables de la invitacion



  const novia = new  people({
    name: data.nombres.novia,
    gender: 0
  })

  const novio = new  people({
    name: data.nombres.novio,
    gender: 1
  })


 export const novios =  {
    "novia": novia,
    "novio": novio,
    "separador": data.nombres.separador,
    "frase": data.frase
  }










//Json de invitados
const invitadosJson = invitados.table.rows;
//div contanedor del listado

// export invited lis
export const invitadosList = [];

//creacion de todos los objetos invitado
invitadosJson.forEach((invitado, i) => {
  const invitadoNew = new invited({
    id: i,
    nombres: invitado.c[1].v,
    personal: invitado.c[2].v,
    relacion: invitado.c[3].v
  });
  invitadosList.push(invitadoNew);
});

//current W E S T
// route
const route = window.location.hash.replace(data.hash, "");
let currentInvitation;
if (route === "") {
  currentInvitation = 0;
} else {
  currentInvitation = route;
}


export const currentGuest = invitadosList[currentInvitation];

// content dinamic titlo y cuerpo
class content {
  constructor({
    adjetivo = "Querida",
    descripcion = "Los invitados",
    relacion = "familia y amigos",
    articulo = "Los",
    invitar = "invitarte/los",
    confirmacion = "confirmamos"
  }) {
    this.adjetivo = adjetivo;
    this.descripcion  = descripcion;
    this.relacion = relacion;
    this.articulo = articulo;
    this.invitar = invitar;
  }
}

let newContent;
//build
if (
  currentGuest?.relacion === "padrinos" ||
  currentGuest?.relacion === "tios" ||
  currentGuest?.relacion === "tíos" ||
  currentGuest?.relacion === "Tios" ||
  currentGuest?.relacion === "primos" ||
  currentGuest?.relacion === "hermanos" ||
  currentGuest?.relacion === "padres" ||
  currentGuest?.relacion === "compañeros" ||
  currentGuest?.relacion === "amigos"
) {
  newContent = new content({
    adjetivo: "Queridos",
    descripcion: "Los invitados",
    relacion: currentGuest?.relacion.toLowerCase(),
    invitar: "invitarlos",

  });
} else if (
  currentGuest?.relacion === "familia" ||
  currentGuest?.relacion === "Familia"
) {
  newContent = new content({
    adjetivo: "Querida",
    descripcion: "Los invitados",
    relacion: currentGuest?.relacion.toLowerCase(),
    invitar: "invitarlos",
  });
} else if (
  currentGuest?.relacion === "Tía" ||
  currentGuest?.relacion === "tía" ||
  currentGuest?.relacion === "prima" ||
  currentGuest?.relacion === "compañera" ||
  currentGuest?.relacion === "amiga"
) {
  newContent = new content({
    adjetivo: "Querida",
    descripcion: "La invitada",
    relacion: currentGuest?.relacion.toLowerCase(),
    articulo: "Te",
    invitar: "invitarte"
  });
} else if (
  currentGuest?.relacion === "Tío" ||
  currentGuest?.relacion === "tío" ||
  currentGuest?.relacion === "primo" ||
  currentGuest?.relacion === "compañero" ||
  currentGuest?.relacion === "amigo"
) {
  newContent = new content({
    adjetivo: "Querido",
    descripcion: "El invitado",
    relacion: currentGuest?.relacion.toLowerCase(),
    articulo: "Te",
    invitar: "invitarte"
  });
} else if (currentGuest?.relacion === "compa") {
  newContent = new content({
    adjetivo: "Querida/o",
    descripcion: "La/El Invitada/o",
    relacion: currentGuest?.relacion.toLowerCase(),
    articulo: "Te",
    invitar: "invitarte"
  });
} else if (currentGuest?.relacion === "compañeras") {
  newContent = new content({
    adjetivo: "Queridas",
    descripcion: "Las invitadas",
    relacion: currentGuest?.relacion.toLowerCase(),
    articulo: "Las",
    invitar: "invitarlas"
  });
} else {
  newContent = new content({});
}

//create elemnt title invitation and body

export const dynamicContent = newContent;


// places -  puntos de encuentros
const puntosEncuentros = []

const newpoints = data.puntos_encuentros.puntos.forEach(punto => {
 const newPlace = new place({
  name: punto.lugar,
  adress: punto.direccion,
  ubication: punto.ubicacion,
  hours: punto.horario,
  linkText : punto.buttonText,
  type: punto.tipo
  })
  puntosEncuentros.push(newPlace)
})



export const Places = new places({
  title: data.puntos_encuentros.titulo,
  points: puntosEncuentros
})




/// confirmar asistencia


const messageSi =`"${newContent.descripcion}: ${currentGuest.nombres} - Personal:(${currentGuest.personal}) ${currentGuest.personal > 1 ? "confirman": "confirma"} su presencia."

 ${newContent.adjetivo} ${currentGuest.relacion}, ${currentGuest.personal > 1 ? data.confirmacion.siResponse2 : data.confirmacion.siResponse}
 Recuerden guardar este enlace dónde encontrar toda la información para ese día: ${data.dominio}/${data.hash + currentGuest.id} - ${novios.novia.name + " " + novios.separador + " " + novios.novio.name}`
const messageNo =`${newContent.adjetivo} ${currentGuest.relacion}, ${currentGuest.personal > 1 ? data.confirmacion.noResponse2 : data.confirmacion.noResponse}. `
export const assitanceData = new confirmAssistance({
  title: data.confirmacion.titulo,
  timeLimit: data.confirmacion.plazo,
  textYes: currentGuest.personal > 1 ? data.confirmacion.si2 : data.confirmacion.si ,
  textNo: currentGuest.personal > 1 ? data.confirmacion.no2 : data.confirmacion.no,
  textSend: data.confirmacion.enviar,
  messageNo: messageNo,
  messageYes: messageSi,

})



//regalos
// cuenta bancaria

const cuentaBancaria = new bankAccount({
  bank:  data.regalos.cuenta_bancaria.banco,
  accountHolder:data.regalos.cuenta_bancaria.titular,
  alias:data.regalos.cuenta_bancaria.alias,
  accountNumber:data.regalos.cuenta_bancaria.cbu
})

const regaloObligarotio = new gifts({
  title: "Regalo obligatorio",
  detail: data.regalos.obligatorio,
  isRequired : false,
})
const regaloOpcional = new gifts({
  title: "Regalo opcional",
  detail: data.regalos.opcional,
  isRequired : true,
  data : cuentaBancaria
})




export const regalos = [regaloObligarotio , regaloOpcional ]
