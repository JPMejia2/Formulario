var btr = document.getElementById("btn-r");
var bts = document.getElementById("btn-s");
var btm = document.getElementById("btn-m");
var btd = document.getElementById("btn-d");

function Suma(){
    
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    alert(num1 + num2)
}

function Resta(){
    
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    alert(num1-num2)
}

function Division(){
    
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    alert(num1/num2)
}

function Multiplicacion(){
    
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    alert(num1*num2)
}

btr.addEventListener('click', Suma)
bts.addEventListener('click', Resta)         
btm.addEventListener('click', Division)
btd.addEventListener('click', Multiplicacion)
