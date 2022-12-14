import {buttonPlayer} from "./Icons.js"



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
            audioElement?.classList.remove("absolute", "bottom-8")
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