/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var campoUno;
	var campoDos;
	var suma;

	campoUno=document.getElementById("numeroUno").value;
	campoDos=document.getElementById("numeroDos").value;
	suma=parseInt(campoUno)+parseInt(campoDos);

	alert("la suma es "+suma);


}

function restar()

{
	var campoUno;
	var campoDos;
	var resta;

	campoUno=document.getElementById("numeroUno").value;
	campoDos=document.getElementById("numeroDos").value;
	resta=parseInt(campoUno)-parseInt(campoDos);

	alert("la resta es " +resta);
	
}

function multiplicar()
{ 
	var campoUno;
	var campoDos;
	var producto;

	campoUno=document.getElementById("numeroUno").value;
	campoDos=document.getElementById("numeroDos").value;
	producto=parseInt(campoUno)*parseInt(campoDos);
	
	alert("la multiplicacion es " +producto);
}

function dividir()
{
	var campoUno;
	var campoDos;
	var division;

	campoUno=document.getElementById("numeroUno").value;
	campoDos=document.getElementById("numeroDos").value;
	division=parseInt(campoUno)/parseInt(campoDos);
	
	alert("la division es " + division);
}

