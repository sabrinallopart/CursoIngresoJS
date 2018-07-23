/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	

	var numero;
	var campoResultado;

	numero=document.getElementById('importe').value;
	numero=parseInt(numero);

	campoResultado=(75*numero/100);

	document.getElementById('resultado').value = campoResultado

}
