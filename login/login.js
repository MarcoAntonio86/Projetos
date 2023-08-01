const enviarBtn = document.getElementById('Enviar');
const camposObrigatorios = document.querySelectorAll('[required]');

function verificarCamposObrigatorios() {
  let todosPreenchidos = true;

  camposObrigatorios.forEach(campo => {
    if (!campo.value) {
      todosPreenchidos = false;
    }
  });

  if (todosPreenchidos) {
    enviarBtn.classList.add('enviar-btn-estilizado');
  } else {
    enviarBtn.classList.remove('enviar-btn-estilizado');
  }
}

enviarBtn.addEventListener('click', () => {
  const todosCamposPreenchidos = Array.from(camposObrigatorios).every(campo => campo.value.trim() !== '');

  if (todosCamposPreenchidos) {
    enviarBtn.classList.add('enviar-btn-estilizado');
  }
});

document.addEventListener('input', verificarCamposObrigatorios);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var redefinir = document.getElementById('Redefinir');
redefinir.addEventListener('click', clicar);

function clicar() {
      redefinir.style.background= 'green';
      redefinir.style.fontWeight= 'bold';
      redefinir.style.textDecoration= 'underline'
}