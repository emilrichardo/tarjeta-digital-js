
import data from "/src/data.json" assert { type: "json" }
import Logo from "/src/components/Logo.js";
import CountDown from "./components/CountDown.js";
import List from "./components/List.js";
import CardInvited from "./components/CardInvited.js";


Logo(data);

import {
  invitadosList,
  dynamicContent,
  currentWest
} from "/src/functions/globalData.js";

CountDown(data);
List(data, invitadosList);
CardInvited(currentWest, dynamicContent);


const loader = document.getElementById("loader");
window.onload = loader?.classList.add("hidden");