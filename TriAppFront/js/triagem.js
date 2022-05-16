
function fazGet(url){
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  request.onload = function () {
    console.log(this.responseText)
  }
  return request.responseText
}

function getTriagem(){
	let urlH = "http://localhost:8080/api/users/hospitais"
	let urlP = "http://localhost:8080/api/users/pessoas"
	let sintomas = document.getElementById("symptoms").value;
	let inicioSintomas = document.getElementById("date").value;
	let temperaturaCorporal = document.getElementById("temperature").value;
	let pressao = document.getElementById("high_pressure").value;
	let medicamento = document.getElementById("medicine").value;
	let alergia = document.getElementById("alergic").value;
	let cirurgia = document.getElementById("surgery").value;
	let hospital = document.getElementById("hospital").value;
	var usurio = '232'
	data = fazGet(urlH)
    hospitais = JSON.parse(data)
    for (var i = 0; i < Object.keys(hospitais).length; i++){
    	if (hospitais[i].name == hospital) {
    		var usuario = localStorage.getItem("usuario");
    		datau = fazGet(urlP)
    		pacientes = JSON.parse(datau)
    		var hospitale = hospitais[i]
    		triagem = {
				"sintomas": sintomas,
				"inicio Sitomas": inicioSintomas,
				"temperatura Corporal": temperaturaCorporal,
				"pressao": pressao,
				"toma medicamento":medicamento,
				"tem alergia": alergia,
				"fez cirurgia":cirurgia,
				"Paciente": pacientes[0].name,
				"cPF do paciente":pacientes[0].cpf,
				"cartão do sus":pacientes[0].susCard,
				"cor do atendimento": "",
			}

			
		}
    	}
    if (usuario != '232'){
    	console.log(triagem)
    }else{
    	assert("hospital Não encontrado")
    }

    }
	


	
