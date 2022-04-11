function fazPost(url, body) {
  console.log(body)
  let request = XMLHttpRequest()
  request.open("POST", url, true)
  request.setRequestHeader("Content-type", "application/json")
  request.send(body)

  request.onload = function(){
    console.log(this.responseText)
  }
  return request.responseText
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
    "name": name,
    "cnpj": cnpj,
    "email": email,
    "password": password,
    "phone": phone,
    "cep": cep
  } 

  if (password == confirmPassword ) {

    fazPost(url, body);
  } else{
    alert("Senhas incompativeis, tente novamente");
  }
}