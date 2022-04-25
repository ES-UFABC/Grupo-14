const express = require('express')
const cors = require('cors')
const axios = require('./node_modules/axios')
const app = express()

app.listen(8080, () => console.log('Rodando na porta 8080'))

app.use(cors())

app.use(express.json())


function fazPost(url, body){
  const express = require('express')
  const cors = require('cors')
  const axios = require('./node_modules/axios')
  const app = express()
  
  axios.post(url, body)
  .then(response => {
    console.log(response)
  })
  .catch(error => console.log(error))
}


function cadastrarHospital(){
  let url = "http://localhost:8080/users/hospitais"
  let email = document.getElementById("email").value;
  let name  = document.getElementById("name").value;
  let cnpj = document.getElementById("cnpj").value;
  let cep = document.getElementById("cep").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

   var body = {
    "email": email,
    "name": name,
    "cnpj": cnpj,
    "cep": cep,
    "phone": phone,
    "password": password,
    "confirmPassword": confirmPassword,
  } 
  

  if (password == confirmPassword ) {
    if (password.length >= 6){
      
      fazPost(url,body)
          }else{
      alert("Sua senha precisa ter no mínimo 6 caracteres");
    }
    
  } else{
    alert("Senhas incompativeis, tente novamente");
  }
}


function newUser(){
  app.get('/hospitais', function (req, res) {
  res.send('running');
  });
}
