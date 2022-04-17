//import axios from node_modules/axios
//const axios = import('node_modules/axios')

function fazPost(url, body) {
  axios.post(url,body)
}

function cadastrarHospital(){
  let url = "http://localhost:8080/api/users/hospitais"
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
      //fazPost(url, body);
      console.log({body});
    }else{
      alert("Sua senha precisa ter no mínimo 6 caracteres");
    }
    
  } else{
    alert("Senhas incompativeis, tente novamente");
  }
}
