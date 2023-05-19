function mostrarNome(){

var primeiroNome = document.getElementById('pNome').value;
var sobreNome =  document.getElementById('sNome').value;
var NomeCompleto = primeiroNome+' '+sobreNome;
 alert(' Olá ' + NomeCompleto);
}

let valor1;
let valor2;
let resultado;
function somar(){
   
    valor1 = document.getElementById('pValor1').value;
    valor2 = document.getElementById('pValor2').value;
    if (valor1==""||valor2==""){
        alert ("Informe um valor válido")
        }else{
            resultado = parseInt(valor1)+parseInt(+valor2);
                alert("O resultado da soma é " +resultado);
    }
}

function sub(){
   
    valor1 = document.getElementById('pValor1').value;
    valor2 = document.getElementById('pValor2').value;
    if (valor1==""||valor2==""){
        alert ("Informe um valor válido")
        }else{
            resultado = parseInt(valor1)-parseInt(+valor2);
                alert("O resultado da subtração é " +resultado);
    }
}

function mult(){
   
    valor1 = document.getElementById('pValor1').value;
    valor2 = document.getElementById('pValor2').value;
    if (valor1==""||valor2==""){
        alert ("Informe um valor válido")
        }else{
            resultado = parseInt(valor1)*parseInt(+valor2);
                alert("O resultado da multiplicação é " +resultado);
    }
}

function div(){
   
    valor1 = document.getElementById('pValor1').value;
    valor2 = document.getElementById('pValor2').value;
    if (valor1==""||valor2==""){
        alert ("Informe um valor válido")
        }else if(valor1==0||valor2==0){
            alert ("Não Dividaras")
        }else{
            resultado = parseInt(valor1)*parseInt(+valor2);
            alert("O resultado da multiplicação é " +resultado);

        }
        
                
    }


   

   