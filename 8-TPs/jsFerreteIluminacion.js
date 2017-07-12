/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidad;
    var precioDescuento;
    var marcas;
    var precio;
    var descuento;
    var ingresos;

    precioDescuento=parseInt ( document.getElementById ("precioDescuento").value);

    cantidad=parseInt ( document.getElementById ("cantidad").value);

    descuento=parseInt (document.getElementById ("descuento").value);

    marcas=document.getElementById ("marcas").value;

    precio=35;

  if (cantidad>=6)
{
   descuento= ("precio" * 0,50);
   precioDescuento = precio - descuento;

}  
else if (cantidad == 5)
{
    if (marca == "ArgentinaLuz")
    {
       descuento= ("precio" *0,40);
       precioDescuento =precio - descuento;
    }
    else 
    {
       descuento= ("precio"*0,30);
       precioDescuento = precio - descuento;

    }   
}
else if (cantidad ==4)
{
     if(marca == "ArgentinaLuz"  || marca == "FelipeLamparas") 
     {
         descuento= ("precio" * 0,25);
         precioDescuento =(precio - descuento);

     }
     else
     {
         ("precio" * 0,20);
         precioDescuento =(precio - descuento);
     }
}
else if (cantidad == 3)
{
    if (marca == "ArgentinaLuz")
    {
        ("precio" *0,15);
        precioDescuento =(precio - descuento);
    }
    else (marca = "FelipeLamparas")
    {
        ("precio" *0,10);
        precioDescuento =(precio - descuento);
        
    }
      if (marca != "ArgentinaLuz"  || marca !="FelipeLamparas")
    {
        ("precio" *0,05);
        precioDescuento =(precio - descuento);
    }
}
else if (cantidad<3)
{

}
if (precioDescuento> 120)
{
    ingresos = ("precioDescuento"*0,10);
    precioDescuento = ("precioDescuento" + "ingresos");
    alert = "Usted pago"+ precioDescuento + "de IIBB.";
}

}
