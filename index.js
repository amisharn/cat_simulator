let hoverSound = document.getElementById("hover");
let hoverButton = document.getElementById("startButton");

hoverButton.addEventListener("click", () => {
  hoverSound.play();
  setTimeout(() => {
    window.location = "page1.html";
  }, 400);
});
