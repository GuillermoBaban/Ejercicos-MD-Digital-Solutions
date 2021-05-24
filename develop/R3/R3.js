const play = document.querySelector("#play");
const video = document.querySelector(".video");
const contMain = document.querySelector(".contenedor-main");

let cantC = 0;

const Dflex = () => {
  cantC = 0;
  cantC++;
  video.style.display = "flex";
};

const Dnone = () => {
  cantC++;
  if (cantC > 2) {
    video.style.display = "none";
  }
};

play.addEventListener("click", Dflex);
contMain.addEventListener("click", Dnone);
