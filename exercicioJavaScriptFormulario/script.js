function checar(){
    var nomePrincipal = document.getElementById('nomeCompl').value;
    var endereco =  document.getElementById('endereco').value;
    var email1= document.getElementById('email1').value;
    var checkEmail = document.getElementById('email2').value;
    var senhaPrincipal= document.getElementById('pSenha').value;
    var checkSenha= document.getElementById('confSenha').value;
    var termos= document.getElementById('termos2').value;

    if (nomePrincipal==""){
          alert ("O campo com o seu Nome está vazio, Preencha-o novamente")
       }if(endereco==""){
            alert ("o campo com o seu Endereço está vazio, Preencha-o novamente")
         }if(email1==""){
              alert ("o seu campo Email está vazio, Preencha-o novamente")
            }if(email1==checkEmail){     
               }else{
                  alert ("os Emails não se coincidem, Tente Novamente!")
                  }if (senhaPrincipal==""){
                       alert ("Insire uma senha no campo 'Digite Sua Senha' ")
                       }if (senhaPrincipal==checkSenha){      
                        }else{
                           alert("suas Senhas não são iguais. Tente Novamente!")
                        }if (termos==""){

                        }else{
                            alert ("o termo precisa ser aceito amigão!")
                        }
                        
                           
                           
}