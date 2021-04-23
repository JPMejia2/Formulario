function Main(){
    
    var num1 = document.getElementById("num1").value;//10
    var num2 = document.getElementById("num2").value;//15
    
    var suma = parseInt(num1) + parseInt(num2);//25
    
    alert(suma)
    console.log(suma)
}

var btn = document.getElementById("btn");
btn.addEventListener('click', Main)
           