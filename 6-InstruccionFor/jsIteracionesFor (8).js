function Mostrar()
{
var num=prompt()
var primo=true
for (i=2; i<num; i++)
{
    if (num%i==0)
    {
        primo=false
        break
    }
}
if (primo)
{    alert ("Es primo")
}
}//FIN DE LA FUNCIÓN