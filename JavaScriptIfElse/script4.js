let operação;
let numero1, numero2;

operacao = prompt("Digite a Operação Desejada", " +, -, *, /");
numero1= prompt("Digite um numero");
numero2= prompt("Digite um outro Numero");

switch(operacao){
    case("+"): document.write(parseInt(numero1)+parseInt(numero2));
    break;
    case("-"): document.write(parseInt(numero1)-parseInt(numero2));
    break;
    case("*"): document.write(parseInt(numero1)*parseInt(numero2));
    break;
    case("/"):
    if(numero2==0){
        document.write("não dividarás por zero")
    }
     else {document.write(parseInt(numero1)/parseInt(numero2));
    }
    break;
    default:
    
    
}
