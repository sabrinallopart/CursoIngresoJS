/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	var primer_campo;

	var segundo_campo;

	var resultado;

	primer_campo= document.getElementById("numeroUno").value;

	segundo_campo= document.getElementById("numeroDos").value;

	resultado = parseInt(primer_campo)+ parseInt(segundo_campo);

	alert(resultado);

	









}

