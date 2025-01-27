const cat = localStorage.getItem("myCat");
const pet = document.getElementById("myPet");
const feed = document.getElementById("feed");
const play = document.getElementById("play");
const sleep = document.getElementById("sleep");
const energy = document.getElementById("energy");
const hunger = document.getElementById("hunger");
const happiness = document.getElementById("happiness");
const game = document.getElementById("mouseCount");
let bed = document.getElementById("bed");
let snore = document.getElementById("snore");
let night = document.getElementById("night");
let hoverSound = document.getElementById("hover");
let message = document.getElementById("msg");
let cry = document.getElementById("cry");
let val = 0.5;
let energyy = 50;
let happinesss = 50;
let hungerr = 50;
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
const catJumps = [
  "cats/Classical/JumpCat.png",
  "cats/BlackCat/JumpCabt.png",
  "cats/EgyptCatFree/JumpCabt.png",
  "cats/DemonicFree/JumpCatd.png",
  "cats/TigerCatFree/JumpCattt.png",
];
function update() {
  energy.innerHTML = `Energy: ${energyy} `;
  happiness.innerHTML = `Happiness: ${happinesss} `;
  hunger.innerHTML = `Hunger: ${hungerr} `;
}
update();

for (let i = 0; i < catNames.length; i++) {
  if (cat === `${catNames[i]}`) {
    pet.style.backgroundImage = `url('${images[i]}')`;
    pet.style.animation = "cat 2s steps(7) infinite";
  }
}
feed.addEventListener("click", () => {
  for (let i = 0; i < catNames.length; i++) {
    if (cat === `${catNames[i]}`) {
      pet.style.backgroundImage = `url('${images[i]}')`;
      pet.style.animation = "cat 2s steps(7) infinite";
      hoverSound.play();
    }
  }

  snore.pause();
  bed.style.backgroundImage = "";
  if (val < 1.5) {
    val = val + 0.1;
    pet.style.transform = `scale(${val})`;
    energyy += 5;
    happinesss += 5;
    hungerr -= 5;
    update();
    message.innerHTML = "";
  } else {
    message.innerHTML = "I'm full! Let's Play!!";
    pet.style.transform = "scale(1.5)";
    cry.play();
  }
});
play.addEventListener("click", () => {
  for (let i = 0; i < catNames.length; i++) {
    if (cat === `${catNames[i]}`) {
      pet.style.backgroundImage = `url('${catJumps[i]}')`;
      pet.style.animation = "catjump 2s steps(13) infinite";
      hoverSound.play();
    }
  }
  snore.pause();
  bed.style.backgroundImage = "";
  if (val > 0.5) {
    val -= 0.1;
    pet.style.transform = `scale(${val})`;
    energyy -= 5;
    happinesss += 5;
    hungerr += 5;
    update();
    message.innerHTML = "";
  } else {
    message.innerHTML = "I'm Hungry! Feed Me!!";
    pet.style.transform = "scale(0.5)";
    cry.play();
  }
});
sleep.addEventListener("click", () => {
  for (let i = 0; i < catNames.length; i++) {
    if (cat === `${catNames[i]}`) {
      pet.style.backgroundImage = `url('${images[i]}')`;
      pet.style.animation = "cat 7s steps(7) infinite";
    }
  }
  message.innerHTML = "";
  hoverSound.play();
  pet.style.transform = "scale(0.8)";
  bed.style.backgroundImage = "url(props/CatBedBlue.png)";
  snore.play();
  energyy += 5;
  happinesss += 5;
  hungerr += 0;
  update();
});
