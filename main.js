var audio = document.getElementById('newRelease');
var icon = document.getElementById('icon');
icon.onclick = function(){
    if(audio.paused){
        audio.play();
        icon.src = "img/pause.png"
    }else{
        audio.pause();
        icon.src = "img/play.png"
    }
    
}