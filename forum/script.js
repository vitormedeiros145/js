
function exibirMensagem() {
    alert('Olá Mundo');
}


function exibirSoma() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var resultado = num1 + num2;
    alert('A soma é: ' + resultado);
}


function alterarPorId() {
    var element = document.getElementById('alterarId');
    element.style.color = 'red';
}


function alterarPorName() {
    var elements = document.getElementsByName('alterarPorName');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontWeight = 'bold';
    }
}


function alterarPorClass() {
    var elements = document.getElementsByClassName('alterarClass');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = '20px';
    }
}