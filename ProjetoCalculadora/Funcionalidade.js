function dis(val) {
    document.getElementById("result").value += val
}
//basicamente a myFunctio espera o evento "event " ser desparado, no caso quando o cliente clicar em qualquer tecla.
function myFunction(event) {
    if (event.key == '0' || event.key == '1'
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5'
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9'
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/')
        document.getElementById("result").value += event.key;
}

//aqui basicamente quando o usiario clicar enter no teclado vai funcionar 
var cal = document.getElementById("calcu");
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = document.getElementById("result").value
        console.log(x);
        solve();
    }
}


function solve() {
    let x = document.getElementById("result").value  //aqui o script le os numeros digitados / operaçoes inseridas na pagina HTML 
    let y = math.evaluate(x) //aqui é onde a biblioteca math é usada para reconhecer as operaçoes matematicas utilizadas
    document.getElementById("result").value = y //aqui o resultado do cálculo é atribuído ao campo de entrada com o ID "result
}

// aqui é basicamente uma atribuição para o clear, clicando nele "substitui" tudo oque foi digitado por vazio, fazendo sumir tudo ("clear").
function clr() {
    document.getElementById("result").value = ""
}