
let a = 0;

document.getElementById('lanzar_alerta').onclick = function () {
    alert('hola mundo!');
    a = a + 1;
    document.getElementById("something").textContent = a;
}

//document.getElementById("something").innerHTML = a;
