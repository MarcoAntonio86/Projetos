var quadra1 = document.getElementById(`img1`);
quadra1.addEventListener('mouseenter', entrar1);
quadra1.addEventListener('mouseleave', sair1);
var quadra2 = document.getElementById(`img2`);
quadra2.addEventListener('mouseenter', entrar2);
quadra2.addEventListener('mouseleave', sair2);
var quadra3 = document.getElementById(`img3`); 
quadra3.addEventListener('mouseenter', entrar3);
quadra3.addEventListener('mouseleave', sair3);
var quadra4 = document.getElementById(`img4`);
quadra4.addEventListener('mouseenter', entrar4);
quadra4.addEventListener('mouseleave', sair4);
var quadra5 = document.getElementById(`img5`); 
quadra5.addEventListener('mouseenter', entrar5);
quadra5.addEventListener('mouseleave', sair5);
var quadra6 = document.getElementById(`img6`);
quadra6.addEventListener('mouseenter', entrar6);
quadra6.addEventListener('mouseleave', sair6);




function entrar1() {
    quadra1.style.background='blue';
    quadra1.style.fontWeight = 'bold';
    quadra1.style.textDecoration = 'underline';

}
function sair1(){
    quadra1.style.background = '';
    quadra1.style.font = '';
    quadra1.style.textDecoration = 'none';
}
function entrar2() {
    quadra2.style.background='blue';
    quadra2.style.fontWeight = 'bold';
    quadra2.style.textDecoration = 'underline';
}
function sair2() {
    quadra2.style.background = '';
    quadra2.style.font = '';
    quadra2.style.textDecoration = 'none';

}
function entrar3() {
    quadra3.style.background='blue';
    quadra3.style.fontWeight = 'bold';
    quadra3.style.textDecoration = 'underline';

}
function sair3(){
    quadra3.style.background = '';
    quadra3.style.font = '';
    quadra3.style.textDecoration = 'none';
}
function entrar4() {
    quadra4.style.background='blue';
    quadra4.style.fontWeight = 'bold';
    quadra4.style.textDecoration = 'underline';
}
function sair4() {
    quadra4.style.background = '';
    quadra4.style.font = '';
    quadra4.style.textDecoration = 'none';

}
function entrar5() {
    quadra5.style.background='blue';
    quadra5.style.fontWeight = 'bold';
    quadra5.style.textDecoration = 'underline';

}
function sair5(){
    quadra5.style.background = '';
    quadra5.style.font = '';
    quadra5.style.textDecoration = 'none';
}
function entrar6() {
    quadra6.style.background='blue';
    quadra6.style.fontWeight = 'bold';
    quadra6.style.textDecoration = 'underline';
}
function sair6() {
    quadra6.style.background = '';
    quadra6.style.font = '';
    quadra6.style.textDecoration = 'none';

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var button1 = document.getElementById('button1');
var primeiroClick1 = true;
button1.addEventListener('click', function() {
  changeStyle(button1, primeiroClick1);
  primeiroClick1 = !primeiroClick1; 
});


var button2 = document.getElementById('button2');
var primeiroClick2 = true;
button2.addEventListener('click', function() {
  changeStyle(button2, primeiroClick2);
  primeiroClick2 = !primeiroClick2; 
});

var button3 = document.getElementById('button3');
var primeiroClick3 = true;
button3.addEventListener('click', function() {
  changeStyle(button3, primeiroClick3);
  primeiroClick3 = !primeiroClick3; 
});


var button4 = document.getElementById('button4');
var primeiroClick4 = true;
button4.addEventListener('click', function() {
  changeStyle(button4, primeiroClick4);
  primeiroClick4 = !primeiroClick4; 
});

var button5 = document.getElementById('button5');
var primeiroClick5 = true;
button5.addEventListener('click', function() {
  changeStyle(button5, primeiroClick5);
  primeiroClick5 = !primeiroClick5; 
});

var button6 = document.getElementById('button6');
var primeiroClick6 = true;
button6.addEventListener('click', function() {
  changeStyle(button6, primeiroClick6);
  primeiroClick6 = !primeiroClick6; 
});




function changeStyle(button, primeiroClick) {
  if (primeiroClick) {
    button.style.background = 'green';
    button.style.fontWeight = 'bold';
    button.style.textDecoration = 'underline';
  } else {
    button.style.background = 'yellow';
    button.style.fontWeight = '';
    button.style.textDecoration = 'underline';
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var rodape = document.getElementById (`rodape`);
rodape.addEventListener('mouseenter', entrou);
rodape.addEventListener('mouseleave', saiu);


function entrou() {
    rodape.style.background='aqua';
    rodape.style.fontWeight = 'bold';
    rodape.style.textDecoration = 'underline';

}

function saiu () {
    rodape.style.background = '';
    rodape.style.font = '';
    rodape.style.textDecoration = 'none';
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






