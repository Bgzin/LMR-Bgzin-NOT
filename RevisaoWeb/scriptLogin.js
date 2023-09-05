function check() {
    var Usuario = document.getElementById('usuario2').value;
    var Senha=  document.getElementById('senha2').value;

    if(Usuario==""){
        alert("O campo 'usuario' precisa ser preenchido ")
    }if(Senha==""){
        alert("O campo 'senha' precisa ser preenchido ")
    }else{
        alert("Login bem-sucedido")
    }
}