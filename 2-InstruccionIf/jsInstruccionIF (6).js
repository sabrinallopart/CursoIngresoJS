function mostrar()
{
//tomo la edad  

var numero;
numero=document.getElementById('edad').value;
numero=parseInt(numero);

if (numero >=18) {
alert('es mayor de edad');

}
 else if (numero < 13 && numero<=17) {
alert('es adolescente');
 }

 else{ alert('es menor de edad'); }


}//FIN DE LA FUNCIÓN