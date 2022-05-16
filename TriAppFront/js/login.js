const fs = require('fs')

function fazGet(url){
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  request.onload = function () {
    console.log(this.responseText)
  }
  return request.responseText
}



function User(){
  let urlHospitais = "http://localhost:8080/api/users/hospitais"
  let urlPacientes = "http://localhost:8080/api/users/pessoas"
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  data = fazGet(urlHospitais)
  usuarios = JSON.parse(data)
  var verifica = 1;
  for (var i = 0; i < Object.keys(usuarios).length; i++){
    if( usuarios[i].email == email){
      if(usuarios[i].password == password){
        window.location = "Area_hospitais.html"
        verifica = 0
      }else{
        alert("Senha incorreta, por favor tente novamente")
      }
      
    }
  }
    if (verifica == 0){
      console.log(email)
    }else{
      data = fazGet(urlPacientes)
      usuarios = JSON.parse(data)
      var verifica = 1;
      for (var i = 0; i < Object.keys(usuarios).length; i++){
        if( usuarios[i].email == email){
          if(usuarios[i].password == password){
            const email = usuarios[i].email
            window.location = "Triagem.html?usuario="+email
            verifica = 0
          }else{
            alert("Senha incorreta, por favor tente novamente")
          }
        }
      }
        if (verifica == 1){
          alert("usuario não cadastrado")
        }
      }
}