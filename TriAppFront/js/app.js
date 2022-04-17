var btnentrar = document.querySelector("#entrar");
var btncriar = document.querySelector("#criar");
var body = document.querySelector("body");

btnentrar.addEventListener("click", function () {
	body.className = "entrar-js";
});
btncriar.addEventListener("click", function () {
	body.className = "criar-js";
});