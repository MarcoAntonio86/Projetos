const botaoSobreMim = document.querySelector('sobre');
const descricao = document.getElementById('descricao');

botaoSobreMim.addEventListener('click', function() {
  descricao.style.display = descricao.style.display === 'none' ? 'block' : 'none';
});
