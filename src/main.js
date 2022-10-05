
import {data} from "./data.js" ;
import Logo from "./components/Logo.js";
import CountDown from "./components/CountDown.js";
import List from "./components/List.js";
import CardInvited from "./components/CardInvited.js";
import PlacesComponent from "./components/Places.js";
import Assistance from "./components/Assistance.js";
import Regalos from "./components/Regalos.js"
import  "./components/GeneralElements.js"
import "./components/AudioPlayer.js"

Logo(data);

import {
  invitadosList,
  dynamicContent,
  currentGuest,
  Places,
  assitanceData,
  regalos,
  phone
} from "/src/functions/globalData.js";



CountDown(data);
List(data, invitadosList);
CardInvited(currentGuest, dynamicContent);
PlacesComponent(Places)
Assistance(assitanceData,currentGuest,phone)
Regalos(regalos)










const loader = document.getElementById("loader");
window.onload = loader?.classList.add("hidden");
