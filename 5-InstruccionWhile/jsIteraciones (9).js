function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var max, min
	var num
	var primera= true

	while (respuesta.toLowerCase() == "si")
		num = prompt ()
		num= parseInt (num)

	if (primera)
	{
		max= num
		min = num
		primera = false
	}
	
	else 
	{ 
		if(num < min)
	
        num = min
	}
	 if (min > max)
	 {
		 max= num
	 }


}//FIN DE LA FUNCIÓN