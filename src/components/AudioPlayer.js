import {buttonPlayer} from "./Icons.js"

const letra = [
    ["Mi amor",
    "Nunca encuentro las palabras, mi amor",
    "Para decirte como me siento",
    "Estas palabras no puedo explicar",
    "Precioso amor",
    "Tu tienes mi vida esperando en tus manos",
    "Creaste todo lo que soy",
     "Me enseñaste como vivir otra vez"],

    ["Solo tu",
    "Viniste cuando necesité un amigo",
    "Creíste entre mi estupidez y mi rareza",
    "Esta canción es para ti",
    "Prueba de gratitud y amor"],

    ["Dios te bendiga",
    "Tu me haces sentir como nuevo",
    "Por que dios me bendijo contigo",
    "Tu me haces sentir como nuevo",
    "Canto es"],

    ["Esta canción",
    "Me haces sentir como nuevo",
    "Mi amor",
    "Donde sea me sentía inseguro",
    "Tu construiste y me hiciste seguro",
    "Me regresaste mi orgullo",
    "Preciosa amiga",
    "Contigo",
    "Eres alguien que puede contar conmigo",
    "Para caminar el sendero hasta el fin de los tiempos"],

    ["Sin ti",
    "La vida no tiene sentido o rima",
    "Como una canción fuera de tiempo",
    "Como lo puedo compensar",
    "Puedes tener fe en mi."]

]



function showSong (estrofa){

    for(let i = 0; i > estrofa.length ; i++){
console.log(i);
        setTimeout(() => {
            console.log(estrofa[1]);
           }, "1000")
    }

}
showSong(letra)

export default function AudioPlayer() {
    const buttonPlay = document.querySelector("#playButton")
    const audioElement = document.querySelector("#myAudio")

    const overlayInto  = document.querySelector("#overlayMusic")
    const buttonInto  = document.querySelector("#intoPlayMusic")

    overlayInto?.addEventListener("click", playAudio)




    buttonPlay?.addEventListener("click", playAudio)



    if(buttonPlay){
        buttonPlay.innerHTML = buttonPlayer(true)
    }


    function playAudio(){


    if (audioElement.paused) {
        audioElement.play()
        buttonPlay.innerHTML = buttonPlayer(false)
        overlayInto.style.display = "none";
        showArrow (true)



    } else{
        audioElement.pause()
        buttonPlay.innerHTML = buttonPlayer(true)

    }

    }
}

AudioPlayer()


window.addEventListener('scroll',(event) => {
    //console.log('Scrolling...', event, window.scrollY);
    const audioElement = document.querySelector("#audioPlayer")
    if(audioElement){
        if(window.scrollY >= 300){
            audioElement?.classList.add("fixed", "top-4" , "right-4")
            audioElement?.classList.remove("relative")
        } else{
            audioElement?.classList.remove("fixed", "top-4")
            //audioElement?.classList.add("absolute", "bottom-5")
        }

    }

  });




function showArrow (state){
    const arrowDown = document.getElementById("keepDown")
    arrowDown.style.display = "none"

  if(state){
    setTimeout(() => {
        arrowDown.style.display = "block"
    }, "1000")
  }
}