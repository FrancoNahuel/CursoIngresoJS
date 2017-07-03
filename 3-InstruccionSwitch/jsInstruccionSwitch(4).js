function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño)
{
    case "Febrero":
    alert ("Tiene 28 dìas")
    break
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
    alert ("Tiene 30 dìas")
    break
    default:
    alert ("Tiene 31 dìas")

}

//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN