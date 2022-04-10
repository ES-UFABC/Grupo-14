class Validator{
	constructor(){
		this.validations = [

		]
	}
	validate(form){
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
	
	e.preventDefautl();
	Validator.validate(form);
});