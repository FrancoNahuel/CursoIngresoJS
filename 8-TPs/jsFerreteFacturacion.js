/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precioUno, precioDos, precioTres;
var resultado
function Sumar ()
    
{  
    precioUno = document.getElementById ("precioUno");
    precioDos = document.getElementById ("precioDos");
    precioTres = document.getElementById ("precioTres");
    precioUno = parseInt("precioUno");
    precioDos = parseInt("precioDos");
    precioTres = parseInt("precioTres");
    resultado = parseInt("precioUno") + parseInt("precioDos") + parseInt("precioTres");
    alert = ("resultado")

}

function Promedio ()    
{
    
	
}
function PrecioFinal () 
{
PrecioUno = document.getElementById ("PrecioUno").value;
    PrecioDos = document.getElementById ("PrecioDos").value;
    PrecioTres = document.getElementById ("PrecioTres").value;
    resultado = (("PrecioUno") + ("PrecioDos") + ("PrecioTres")) * 0,21
	
}