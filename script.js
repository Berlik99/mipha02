const falas = [
  "Oi... você está tão lindo visto daqui... 💙",
  "Você é o herói que me faz vibrar até em forma de luz 💧",
  "Eu queria poder te abraçar, mesmo assim... 💦",
  "Não importa se sou um holograma... meu amor por você é real 💙",
  "Promete que vai ficar comigo pra sempre? 💍"
];

const audios = [
  new Audio('audio/fala1.mp3'),
  new Audio('audio/fala2.mp3'),
  new Audio('audio/fala3.mp3'),
  new Audio('audio/fala4.mp3'),
  new Audio('audio/fala5.mp3')
];

function miphaFala() {
  const fala = document.getElementById("fala-mipha");

  const index = Math.floor(Math.random() * falas.length);
  fala.textContent = falas[index];

  const som = audios[Math.floor(Math.random() * audios.length)];
  som.currentTime = 0;
  som.play();
}
