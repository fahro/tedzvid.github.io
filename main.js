
function PlaySound(path) {
    var audioElement = document.getElementsByTagName("audio")[0];
    audioElement.pause();
    audioElement.setAttribute('src', path);
    audioElement.play();
}
