
import data from "/src/data.json" assert { type: "json" }
import Logo from "/src/components/Logo.js";
import CountDown from "./components/CountDown.js";
import List from "./components/List.js";
import CardInvited from "./components/CardInvited.js";
import PlacesComponent from "./components/Places.js";
import Assistance from "./components/Assistance.js";
import Regalos from "./components/Regalos.js"

Logo(data);

import {
  invitadosList,
  dynamicContent,
  currentGuest,
  Places,
  assitanceData
} from "/src/functions/globalData.js";

CountDown(data);
List(data, invitadosList);
CardInvited(currentGuest, dynamicContent);
PlacesComponent(Places)
Assistance(assitanceData,currentGuest)
Regalos()


const loader = document.getElementById("loader");
window.onload = loader?.classList.add("hidden");