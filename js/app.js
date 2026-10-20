// Cada módulo cuida de uma coisa só.
const btn = document.getElementById('btn');
const saida = document.getElementById('saida');
let cliques = 0;

btn.addEventListener('click', () => {
  cliques++;
  saida.textContent = 'Você clicou ' + cliques + ' vez(es).';
  console.log('clique', cliques);
});
