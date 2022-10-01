import {buttonPlayer} from "./Icons.js"



export default function AudioPlayer() {
    const buttonPlay = document.querySelector("#playButton")
    const audioElement = document.querySelector("#myAudio")

    const overlayInto  = document.querySelector("#overlayMusic")
    const buttonInto  = document.querySelector("#intoPlayMusic")

    overlayInto.addEventListener("click", playAudio)




    buttonPlay?.addEventListener("click", playAudio)



    if(buttonPlay){
        buttonPlay.innerHTML = buttonPlayer(true)
    }


    function playAudio(){


    if (audioElement.paused) {
        audioElement.play()
        buttonPlay.innerHTML = buttonPlayer(false)
        overlayInto.style.display = "none"



    } else{
        audioElement.pause()
        buttonPlay.innerHTML = buttonPlayer(true)
    }

    }
}

AudioPlayer()