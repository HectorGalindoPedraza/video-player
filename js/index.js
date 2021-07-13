const $video = document.querySelector("#video")
const $play = document.querySelector("#play")
const $pause = document.querySelector("#pause")
const $backward = document.querySelector("#backward")
const $forward = document.querySelector("#forward")

        
    $play.addEventListener("click", handlePlay)
    $pause.addEventListener("click", handlePause)

        function handlePlay(){
            $video.play()
            $play.hidden =true
            $pause.hidden =false
            console.log("play")
        }
        function handlePause(){
            $video.pause()
            $pause.hidden =true
            $play.hidden =false
            console.log("pause")
        }
$backward.addEventListener("click", handleBackward )
$forward.addEventListener("click", handleForward )

    function handleBackward(){
    $video.currentTime = $video.currentTime - 10
     $video.currentTime -=10
    console.log("backward", $video.currentTime)
    }
    function handleForward(){
    $video.currentTime = $video.currentTime+10
    $video.currentTime +=10
    console.log("forward", $video.currentTime)
    }
