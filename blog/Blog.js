var cabecalho = document.getElementById('cabecalho');
cabecalho.addEventListener('mouseenter', dentro);
cabecalho.addEventListener('mouseleave', fora);

function dentro() {
    cabecalho.style.fontWeight= 'bold';
    cabecalho.style.textDecoration= 'underline'
}

function fora() {
    cabecalho.style.fontWeight= '';
    cabecalho.style.textDecoration= 'none';
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var desenvolvimento = document.getElementById('desenvolvimento');
desenvolvimento.addEventListener('mouseenter', entrar);
desenvolvimento.addEventListener('mouseleave', sair);

function entrar() {
    desenvolvimento.style.fontWeight= 'bold';
    desenvolvimento.style.textDecoration = 'underline';
}

function sair() {
    desenvolvimento.style.fontWeight= '';
    desenvolvimento.style.textDecoration= 'none';
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var rodape = document.getElementById('rodape');
rodape.addEventListener('mouseenter', entrou);
rodape.addEventListener('mouseleave', saiu);

function entrou() {
    
    rodape.style.fontWeight= 'bold';
    rodape.style.textDecoration= 'underline'
}

function saiu() {
    
    rodape.style.fontWeight= '';
    rodape.style.textDecoration= 'none'
}