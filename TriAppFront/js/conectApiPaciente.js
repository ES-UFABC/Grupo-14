
function fazGet(url){
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  request.onload = function () {
    console.log(this.responseText)
  }
  return request.responseText
}

function fazPost(url, body) {
  console.log("Body= ", body)
  let request = new XMLHttpRequest()
  request.open("POST", url, true)
  request.setRequestHeader("Content-type", "application/json")
  request.send(JSON.stringify(body))

  request.onload = function() {
    console.log(this.responseText)
  }
  
  return request.responseText
}

function cadastrarPaciente(){
  let url = "http://localhost:8080/api/users/pessoas"
  let name  = document.getElementById("name").value;
  let cpf = document.getElementById("cpf").value;
  let age =  document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let phone = document.getElementById("phone").value;
  let cep = document.getElementById("cep").value;
  let maritalStatus = document.getElementById("maritalStatus").value;
  let sus = document.getElementById("sus").value;
  let confSenha = document.getElementById("confirmSenha").value;

  body = {
    "name": name,
    "cpf": cpf,
    "email": email,
    "password": password,
    "phone": phone,
    "cep": cep,
    "age":  parseInt(age), 
    "maritalStatus" : maritalStatus,
    "susCard": sus
    
  } 

  if (password == confSenha ) {
    if (password.length >= 6){
      data = fazGet(url)
      usuarios = JSON.parse(data)
      var verifica = 0;
      for (var i = 0; i < Object.keys(usuarios).length; i++){
        if( usuarios[i].email == email){
          alert("email já cadastrado")
          verifica = 1
        }
      }
        if (verifica == 0){
          fazPost(url,body)
        }
      
    }else{
      alert("Sua senha precisa ter no mínimo 6 caracteres");
    }
    
  } else{
    alert("Senhas incompativeis, tente novamente");
  }
}