
var cabecalho = document.getElementById('cabecalho');
cabecalho.addEventListener('mouseenter', entrar);
cabecalho.addEventListener('mouseleave', sair);

function entrar() {
    cabecalho.style.fontWeight = 'bold';
    cabecalho.style.textDecoration = 'underline';
}
function sair() {
    cabecalho.style.fontWeight = '';
    cabecalho.style.textDecoration = 'none';
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var apresentacao = document.getElementById('apresentacao');
apresentacao.addEventListener('mouseenter', entrar1);
apresentacao.addEventListener('mouseleave', sair1);

function entrar1() { 
    apresentacao.style.fontWeight = 'bold';
    apresentacao.style.textDecoration = 'underline';
}
function sair1() {
    apresentacao.style.fontWeight = '';
    apresentacao.style.textDecoration = 'none';
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var lista = document.getElementById('lista');
lista.addEventListener('mouseenter', entrar2);
lista.addEventListener('mouseleave', sair2);

function entrar2() { 
    lista.style.fontWeight = 'bold';
    lista.style.textDecoration = 'underline';
}
function sair2() {
    lista.style.fontWeight = '';
    lista.style.textDecoration = 'none';
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var rodape = document.getElementById('rodape');
rodape.addEventListener('mouseenter', entrar3);
rodape.addEventListener('mouseleave', sair3);

function entrar3() { 
    rodape.style.fontWeight = 'bold';
    rodape.style.textDecoration = 'underline';
}
function sair3() {
    rodape.style.fontWeight = '';
    rodape.style.textDecoration = 'none';
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
