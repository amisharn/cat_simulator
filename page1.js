let prev = document.getElementById("previous");
let nex = document.getElementById("next");
let box = document.getElementById("container");
let names = document.getElementById("catName");
let hoverSound = document.getElementById("hover");
let hoverButton = document.getElementById("startButton");
const images = [
  "cats/Classical/IdleCat.png",
  "cats/BlackCat/IdleCatb.png",
  "cats/EgyptCatFree/IdleCatb.png",
  "cats/DemonicFree/IdleCatd.png",
  "cats/TigerCatFree/IdleCatt.png",
];
const catNames = [
  "Classical Cat",
  "Black Cat",
  "Egyptian Cat",
  "Demonic Cat",
  "Tiger Cat",
];
const catSounds = [
  new Audio("audio/classical.wav"),
  new Audio("audio/black.wav"),
  new Audio("audio/egyptian.wav"),
  new Audio("audio/demonic.wav"),
  new Audio("audio/tiger.wav"),
];
box.style.backgroundImage = `url(${images[0]})`;
names.innerHTML = `${catNames[0]}`;

setTimeout(() => {
  catSounds[0].play();
}, 300);
let i = 0;
nex.addEventListener("click", () => {
  i = (i + 1) % images.length;
  box.style.backgroundImage = `url('${images[i]}')`;
  names.innerHTML = catNames[i];
  hoverSound.play();
  catSounds[i].play();
});
prev.addEventListener("click", () => {
  i = (i - 1 + images.length) % images.length;
  box.style.backgroundImage = `url('${images[i]}')`;
  names.innerHTML = `${catNames[i]}`;
  hoverSound.play();
  catSounds[i].play();
});

hoverButton.addEventListener("click", () => {
  hoverSound.play();
  setTimeout(() => {
    window.location = "page2.html";
  }, 400);
  localStorage.setItem("myCat", `${catNames[i]}`);
});
