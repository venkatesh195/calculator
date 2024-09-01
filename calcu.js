function insert(num) {
    var number = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = number + num;
}

function clean() {
    document.getElementById("result").innerHTML = " ";
}

function back() {
    var result = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = result.substring(0, result.length
        - 1);
}

function calcular() {
    var result = document.getElementById("result").innerHTML;
    if (result) {
        document.getElementById("result").innerHTML = eval(result);
    }
    else { document.getElementById("result").innerHTML = "NoData"; }

}

function author(){
alert("Made By - putla venkatesh \n Thank you For your time \n Give some Feedback");

}

function vibrar() {
    navigator.vibrate(25);
}

window.navigator = window.navigator || {};
document.getElementById('cle').addEventListener('click', vibrar);
document.getElementById('bac').addEventListener('click', vibrar);
document.getElementById('div').addEventListener('click', vibrar);
document.getElementById('mul').addEventListener('click', vibrar);
document.getElementById('seven').addEventListener('click', vibrar);
document.getElementById('eight').addEventListener('click', vibrar);
document.getElementById('nine').addEventListener('click', vibrar);
document.getElementById('add').addEventListener('click', vibrar);
document.getElementById('four').addEventListener('click', vibrar);
document.getElementById('five').addEventListener('click', vibrar);
document.getElementById('six').addEventListener('click', vibrar);
document.getElementById('subt').addEventListener('click', vibrar);
document.getElementById('one').addEventListener('click', vibrar);
document.getElementById('two').addEventListener('click', vibrar);
document.getElementById('three').addEventListener('click', vibrar);
document.getElementById('equal').addEventListener('click', vibrar);
document.getElementById('zero').addEventListener('click', vibrar);
document.getElementById('dot').addEventListener('click', vibrar);