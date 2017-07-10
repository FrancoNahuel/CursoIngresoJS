function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero= 0
	var respuesta='si';
	var respuesta = true
	numero = prompt ("Ibgrese si")
	while (respuesta == "si")
	contador ++
	acumulador += numero



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN