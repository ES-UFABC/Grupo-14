function fazPost(url, body) {
  console.log({body})
}

function cadastrarPaciente(){
  let url = "http://localhost:8080/api/users/pacientes"
  let email = document.getElementById("email").value;
  let name  = document.getElementById("name").value;
  let rg = document.getElementById("rg").value;
  let cpf = document.getElementById("cpf").value;
  let sus = document.getElementById("sus").value;
  let phone = document.getElementById("phone").value;
  let endereco = document.getElementById("endereco").value;
  let senha = document.getElementById("senha").value;
  let confSenha = document.getElementById("confirmSenha").value;

  body = {
    "email": email,
    "name": name,
    "rg": rg,
    "cpf": cpf,
    "sus": sus,
    "phone": phone,
    "endereco": endereco,
    "senha": senha,
    "confSenha": confSenha,
    
  } 

  if (senha == confSenha ) {
    if (senha.length >= 6){
      fazPost(url, body);
      
    }else{
      alert("Sua senha precisa ter no mínimo 6 caracteres");
    }
    
  } else{
    alert("Senhas incompativeis, tente novamente");
  }
}