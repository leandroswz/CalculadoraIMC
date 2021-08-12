function calculo(){
    if (document.getElementById("peso").value ==""){
        alert ("Preencha o peso");
        document.getElementById ("peso").style.borderColor = "red";
        document.getElementById("peso").style.backgroundColor = "red";
        document.getElementById("peso").focus();
        return false;
    }
}
    if (document.getElementById("altura") .value ==""){
    alert ("Preencha a altura");
    document.getElementById ("altura") .style.borderColor = "red";
    document.getElementById("altura").style.backgroundColor = "red";
    document.getElementById("altura").focus();
    return false; 
}

var peso = parseFloat (document.getElementById("peso").value);
var altura = parseFloat (document.getElementById("altura").value);
var resultado = peso/(altura*altura);
alert ("Seu IMC é: "+resultado);
return true;
