function mostrar()
{
//tomo la edad  

	var numero;
	var estado;
	numero=document.getElementById('edad').value;
	numero=parseInt(numero);

	estado=document.getElementById("estadoCivil").value;


	if (numero <=18 && estado != 'Soltero') {
		alert('es muy pequeno para NO ser soltero');

	}


}//FIN DE LA FUNCIÓN