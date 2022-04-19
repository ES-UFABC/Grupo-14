const cors = require('cors')
const express = require('express')
const app = express()
function fazPost(url, body) {
  axios.body({body});
}

function cadastrarHospital(){
  let url = "http://localhost:8080"
  let email = document.getElementById("email").value;
  let name  = document.getElementById("name").value;
  let cnpj = document.getElementById("cnpj").value;
  let cep = document.getElementById("cep").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  body = {
    "email": email,
    "name": name,
    "cnpj": cnpj,
    "cep": cep,
    "password": password,
    "phone": phone,
    
  } 

  if (password == confirmPassword ) {
    if (password.length >= 6){
      fazPost(url, {body});
          }else{
      alert("Sua senha precisa ter no mínimo 6 caracteres");
    }
    
  } else{
    alert("Senhas incompativeis, tente novamente");
  }
}
app.listen('8080')