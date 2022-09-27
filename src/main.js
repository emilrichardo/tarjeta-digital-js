
import data from "/src/data.json" assert { type: "json" }
import Logo from "/src/components/Logo.js";
import CountDown from "./components/CountDown.js";
import List from "./components/List.js";
import CardInvited from "./components/CardInvited.js";
import PlacesComponent from "./components/Places.js"

Logo(data);

import {
  invitadosList,
  dynamicContent,
  currentWest,
  Places
} from "/src/functions/globalData.js";

CountDown(data);
List(data, invitadosList);
CardInvited(currentWest, dynamicContent);
PlacesComponent(Places)


const loader = document.getElementById("loader");
window.onload = loader?.classList.add("hidden");