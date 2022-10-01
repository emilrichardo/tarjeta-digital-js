import {buttonPlayer} from "./Icons.js"


export default function AudioPlayer() {
    const buttonPlay = document.querySelector("#playButton")
    const audioElement = document.querySelector("#myAudio")

    buttonPlay?.addEventListener("click", playAudio)



    if(buttonPlay){
        buttonPlay.innerHTML = buttonPlayer(true)
    }


    function playAudio(){

    if (audioElement.paused) {
        audioElement.play()
        buttonPlay.innerHTML = buttonPlayer(false)

    } else{
        audioElement.pause()
        buttonPlay.innerHTML = buttonPlayer(true)
    }

    }
}

AudioPlayer()