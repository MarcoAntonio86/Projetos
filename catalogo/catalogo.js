var quadra = document.getElementById(`teste`) 
quadra.addEventListener('mouseenter', entrar)
var quadra2 = document.getElementById('teste2');
quadra2.addEventListener('mouseenter', entrar2);

function entrar() {
    quadra.style.background='blue'
    quadra.style.fontWeight = 'bold';

}
function entrar2() {
    quadra2.style.background='blue'
    quadra2.style.fontWeight = 'bold';
}