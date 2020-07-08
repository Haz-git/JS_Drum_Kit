// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 3000,
    delay: (el, i) => 100 + 30 * i
  });


const clap = new Audio();
clap.src = "sounds/clap.wav";
const hihat = new Audio();
hihat.src = "sounds/hihat.wav";
const kick = new Audio();
kick.src = "sounds/kick.wav";
const openhat = new Audio();
openhat.src = "sounds/openhat.wav";
const boom = new Audio();
boom.src = "sounds/boom.wav";
const ride = new Audio();
ride.src = "sounds/ride.wav";
const snare = new Audio();
snare.src = "sounds/snare.wav";
const tom = new Audio();
tom.src = "sounds/tom.wav";
const tink = new Audio();
tink.src = "sounds/tink.wav";

const clapbtn = document.getElementById('clap');
const hihatbtn = document.getElementById('hihat');
const kickbtn = document.getElementById('kick');
const openbtn = document.getElementById('openhat');
const boombtn = document.getElementById('boom');
const ridebtn = document.getElementById('ride');
const snarebtn = document.getElementById('snare');
const tombtn = document.getElementById('tom');
const tinkbtn = document.getElementById('tink');


clapbtn.addEventListener('keydown', (action) => {
    if (action.code === 'KeyA') {
        clap.play();
    };
});

hihatbtn.addEventListener('keydown', (action) => {
    if (action.code === 'KeyS') {
        hihat.play();
    };
});

kickbtn.addEventListener('keypress', (action) => {
    if (action.code === 'KeyD') {
        kick.play();
    };
});

openbtn.addEventListener('keypress', (action) => {
    if (action.code === 'KeyF') {
        open.play();
    };
});

boombtn.addEventListener('keypress', (action) => {
    if (action.code === 'KeyG') {
        boom.play();
    };
});

ridebtn.addEventListener('keypress', (action) => {
    if (action.code === 'KeyH') {
        ride.play();
    };
});

snarebtn.addEventListener('keypress', (action) => {
    if (action.code === 'KeyJ') {
        snare.play();
    };
});

tombtn.addEventListener('keypress', (action) => {
    if (action.code === 'KeyK') {
        tom.play();
    };
});

tinkbtn.addEventListener('keypress', (action) => {
    if (action.code === 'KeyL') {
        tink.play();
    };
});
