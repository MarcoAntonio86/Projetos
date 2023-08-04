
var rodape = document.getElementById('rodape');
rodape.addEventListener('mouseenter', entrar);
rodape.addEventListener('mouseleave', sair);

function entrar() {
    rodape.style.background= 'aqua';
    rodape.style.fontWeight= 'bold';
    rodape.style.textDecoration= 'underline';
}

function sair() {
    rodape.style.background= '';
    rodape.style.fontWeight= '';
    rodape.style.textDecoration= 'none';
}