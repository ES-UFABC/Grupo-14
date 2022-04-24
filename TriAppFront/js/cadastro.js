
class Validator{
	constructor(){
		this.validations = [

		]
	}

	function validate(form){
		let inputs = form.getElementByTagName('input');
		let inputsArray = [...inputs];
		inputsArray.forEach(function(input){
			console.log(input);

		});
	}
}


let form = document.getElementById('registro');
let submit = document.getElementById('btn-submit');
let validator = new Validator();
submit.addEventListener('click', function(e){
	
	e.preventDefault();
	Validator.validate(form);
});