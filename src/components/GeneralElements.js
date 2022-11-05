import {
    novios
  } from "../functions/globalData.js";

  import createElements from "./../functions/createElements.js";
  import {
    Birds,
    mesa,
    vestimenta,
    qr,
    Calendar,
    Map,
    iglesia,
    salon,
    Gift
  } from "./Icons.js"

  createElements(".frase", novios.frase)



  // icons
  createElements(".iconBird",Birds() )
  createElements(".iconVestimenta",vestimenta )
  createElements(".iconMesa", mesa )
  createElements(".iconQr", qr )
  createElements(".iconCalendar", Calendar )
  createElements(".iconMap", Map )
  createElements(".iconIglesia", iglesia )
  createElements(".iconSalon", salon )
  createElements(".iconRegalo", Gift )
