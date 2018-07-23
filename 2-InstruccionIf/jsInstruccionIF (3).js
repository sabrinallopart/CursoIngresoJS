function mostrar()
{
//tomo la edad  
var numero;

numero=document.getElementById('edad').value;

numero=parseInt(numero);

if (numero >=18) {
alert('es mayor de edad');
} else {
alert('Es menor');	
}

}//FIN DE LA FUNCIÓN