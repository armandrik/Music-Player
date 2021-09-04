let myMusic = document.getElementById("mymusic");
let playBtn = document.getElementById("play");
let backwardBtn = document.getElementById("backward");
let forwardBtn = document.getElementById("forward");
let hearticon = document.getElementsByClassName("fa-heart")[0];
let refresh = document.getElementsByClassName("fa-refresh")[0];
let volumeup = document.getElementsByClassName("fa-volume-up")[0];
let volumedown = document.getElementsByClassName("fa-volume-down")[0];
let slider = document.getElementById("progress");
let timevalue = document.getElementById("timevalue");
let musicduration = document.getElementById("musicduration");
const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}
let isPlaying = false;

function showPause(x) {
    myMusic.play();
    x.classList.toggle("fa-pause");
    isPlaying ? myMusic.pause() : myMusic.play();
}

myMusic.onplaying = function() {
    isPlaying = true;
};

myMusic.onpause = function() {
    isPlaying = false;
};

backwardBtn.addEventListener("click", function() {
    myMusic.currentTime -= 5;
})

forwardBtn.addEventListener("click", function() {
    myMusic.currentTime += 5;
})

hearticon.addEventListener("click", function() {
    hearticon.classList.toggle("active-heart");
})

refresh.addEventListener("click", function() {
    myMusic.loop = true;
    refresh.classList.toggle("active-refresh");
})

volumeup.addEventListener("click", function() {
    if (myMusic.volume < 1) {
        myMusic.volume += 0.2;
    } else {
        myMusic.volume = 1;
    }
})
const setSliderMax = () => {
    slider.max = Math.floor(myMusic.duration);
}
volumedown.addEventListener("click", function() {
    myMusic.volume -= 0.2;
})
slider.addEventListener("change", function() {
    myMusic.currentTime = slider.value;
    timevalue.textContent = calculateTime(slider.value);
})
myMusic.addEventListener("timeupdate", function() {
    slider.value = Math.floor(myMusic.currentTime);
})
playBtn.addEventListener("click", function() {
    timevalue.textContent = calculateTime(slider.value);
})
setInterval(() => {
    timevalue.textContent = calculateTime(slider.value);
}, 1000);