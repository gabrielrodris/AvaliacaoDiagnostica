const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");


const jump = () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "imagens/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

   const gameOverText = document.createElement('img');
   gameOverText.src = 'imagens/game-over-text.png';
   gameOverText.style.position = 'absolute';
   gameOverText.style.width = '50%';
   gameOverText.style.marginLeft = '25%'
   gameOverText.style.top = '-9%';
   //gameOverText.style.left = '50%';
   //gameOverText.style.transform = 'translate(-50%, -50%';
   document.body.appendChild(gameOverText);
   
   clearInterval(loop);

  }
}, 10);

document.addEventListener("keydown", jump);
