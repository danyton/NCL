const btnNao = document.getElementById('nao');
const btnSim = document.getElementById('sim');

btnNao.addEventListener('touchstart', moverBotao);
btnNao.addEventListener('mouseover', moverBotao);

function moverBotao() {
  const botoes = document.getElementById('botoes');
  const maxX = botoes.offsetWidth - btnNao.offsetWidth;
  const maxY = botoes.offsetHeight - btnNao.offsetHeight;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  btnNao.style.left = `${randomX}px`;
  btnNao.style.top = `${randomY}px`;
}

btnSim.addEventListener('click', () => {
  alert('Eu sabia que você ia dizer sim! 💖💍');
});
