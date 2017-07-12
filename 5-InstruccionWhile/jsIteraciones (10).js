function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var num
	var respuesta=true;
	var acumulador =0
	var acumNeg=0 
	var acumPos=0
	var contNeg=0
	var contPos=0
	var contPares=0
	var contCeros=0
	var dif
	var promp
	var promn

	while(respuesta==true )
	{
		num= prompt ("Ingrese un numero" )
		num= parseInt(num)
		document.write ()
	
	if (num < 0)
	{
		acumNeg += num
		contPos ++
	}
	else if (num>0)
	{
		acumNeg+=num
		contPos ++
	}
	else
	{
		contCeros ++
	}
	if (num %2 ==0)
	{
		contPares ++
	}
	respuesta = confirm()
	}
	promp=acumPos/contPos
	promn=acumNeg/contNeg

	dif= contNeg - contPos
	if (dif<0)
	{
		dif=dif +-1
	}
	
}//FIN DE LA FUNCIÓN