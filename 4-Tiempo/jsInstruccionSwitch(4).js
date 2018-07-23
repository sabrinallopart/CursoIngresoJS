function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño) {
		case 'Enero':
			alert('Tiene 31 días');
			break;

		case 'Febrero':
			alert('Tiene 28 días');
			break;	

		case 'Abril':
			alert('Tiene 30 días');
			break;


		case 'Junio':
			alert('Tiene 30 días');					
			break;

		case'Septiembre':
			alert('Tiene 30 días');		
			break;

		default:
			alert('este mes tiene 31 dias');
			break



	}



}//FIN DE LA FUNCIÓN