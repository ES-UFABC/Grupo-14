
class Validator{
	constructor(form){
		this.form = form;
	}

	validate(){
		let inputs = form.getElementByTagName('input');
		let inputsArray = [...inputs];
		inputsArray.forEach(function(input){
			console.log(input);

		});
	}
}


let form = document.getElementById('registro');
let submit = document.getElementById('btn-submit');
let validator = new Validator(form);
submit.addEventListener('click', function(e){
	
	e.preventDefault();
	validator.validate;
});