function mostrar()
{
//tomo la edad  

	var numero;
	var estado;

	numero=document.getElementById('edad').value;
	numero=parseInt(numero);

	estado=document.getElementById("estadoCivil").value;

	if (numero <=18 && estado !='Soltero') {

	}	
	else if (estado =='Soltero' && numero <=18) {
		alert('es soltero y no es menor');
	}

	

}//FIN DE LA FUNCIÓN