/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	/*var numero;
	var porcentaje;
	var aumento;

	numero=document.getElementById('NUMERO').value;// REEMPLAZAR ID
	porcentaje=document.getElementById('PORCENTAJE').value; // REEMPLAZAR ID 

	aumento = ;// calcular aumento con el numero y el porcentaje 

	alert("El aumento es de "+ aumento);*/

	var numero;
	var camporesultado;
	var porcentaje;

	numero=document.getElementById('sueldo').value;
	numero=parseInt(numero);
	
	camporesultado=(110*numero/100);

	document.getElementById('resultado').value=camporesultado;

	










}
