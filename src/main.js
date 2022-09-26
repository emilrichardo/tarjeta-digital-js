import data from "/src/data.json";
import Logo from "/src/components/Logo.js";
import {
  invitadosList,
  dynamicContent,
  currentWest
} from "/src/functions/globalData";
import List from "./components/List";
import CardInvited from "/src/components/CardInvited";

import CountDown from "./components/CountDown";

Logo(data);
CountDown(data);
List(data, invitadosList);
CardInvited(currentWest, dynamicContent);

const loader = document.getElementById("loader");
window.onload = loader?.classList.add("hidden");

//const App = document.getElementById("App");
