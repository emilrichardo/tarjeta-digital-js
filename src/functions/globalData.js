//https://docs.google.com/spreadsheets/d/1pA3oJ8TbQ1v7204aJTo2qx2Khi8DsKuLFylBl0dHj0c/gviz/tq?tqx=out:json&gid=0
import invitados from "./../invitados.json" assert { type: "json" };
import data from "./../data.json" assert { type: "json" }
import { invited, place, typeInvite, places } from "./classes.js";
// datos gloables de la invitacion

export const types = [];

const newtype = new typeInvite({
  title: "Casamiento",
  slug: "marriage",
  id: "01"
});
types.push(newtype);

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


export const currentWest = invitadosList[currentInvitation];

// content dinamic titlo y cuerpo
class content {
  constructor({
    adjetivo = "Querida",
    relacion = "familia y amigos",
    articulo = "Los",
    invitar = "invitarte/los",
    confirmacion = "confirmamos"
  }) {
    this.adjetivo = adjetivo;
    this.relacion = relacion;
    this.articulo = articulo;
    this.invitar = invitar;
    this.confirmacion = confirmacion;
  }
}

let newContent;
//build
if (
  currentWest?.relacion === "padrinos" ||
  currentWest?.relacion === "tios" ||
  currentWest?.relacion === "tíos" ||
  currentWest?.relacion === "Tios" ||
  currentWest?.relacion === "primos" ||
  currentWest?.relacion === "hermanos" ||
  currentWest?.relacion === "padres" ||
  currentWest?.relacion === "compañeros" ||
  currentWest?.relacion === "amigos"
) {
  newContent = new content({
    adjetivo: "Queridos",
    relacion: currentWest?.relacion.toLowerCase(),
    invitar: "invitarlos"
  });
} else if (
  currentWest?.relacion === "familia" ||
  currentWest?.relacion === "Familia"
) {
  newContent = new content({
    adjetivo: "Querida",
    relacion: currentWest?.relacion.toLowerCase(),
    invitar: "invitarlos"
  });
} else if (
  currentWest?.relacion === "Tía" ||
  currentWest?.relacion === "tía" ||
  currentWest?.relacion === "prima" ||
  currentWest?.relacion === "compañera" ||
  currentWest?.relacion === "amiga"
) {
  newContent = new content({
    adjetivo: "Querida",
    relacion: currentWest?.relacion.toLowerCase(),
    articulo: "Te",
    confirmacion: "confirmo",
    invitar: "invitarte"
  });
} else if (
  currentWest?.relacion === "Tío" ||
  currentWest?.relacion === "tío" ||
  currentWest?.relacion === "primo" ||
  currentWest?.relacion === "compañero" ||
  currentWest?.relacion === "amigo"
) {
  newContent = new content({
    adjetivo: "Querido",
    relacion: currentWest?.relacion.toLowerCase(),
    articulo: "Te",
    confirmacion: "confirmo",
    invitar: "invitarte"
  });
} else if (currentWest?.relacion === "compa") {
  newContent = new content({
    adjetivo: "Querida/o",
    relacion: currentWest?.relacion.toLowerCase(),
    articulo: "Te",
    confirmacion: "confirmo",
    invitar: "invitarte"
  });
} else if (currentWest?.relacion === "compañeras") {
  newContent = new content({
    adjetivo: "Queridas",
    relacion: currentWest?.relacion.toLowerCase(),
    articulo: "Las",
    confirmacion: "confirmo",
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
