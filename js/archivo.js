

let boton1 = document.getElementById("botonComprar")
boton1.addEventListener('click',respuesta);
 function respuesta(){
    const artistas = [{id: "Los Tipitos"+" "+ "15/06/2022"},
    {id: "Airbag"+" "+ "12/07/2022"},
    {id: "Andres Calamaro"+" "+"Entradas agotadas"}];

for (const artista of artistas){
alert(artista.id);
}

//entradas disponibles por artista
let entradas= prompt("Ingrese el nombre de su artista")
switch (entradas){
case "Los Tipitos":
alert("Se permiten 3 entradas por persona");
break;
case "Airbag":
alert("Se permiten solo 2 entrada por persona");
break;
default:
alert("Entradas agotadas");
break;        
}

//compra de las entradas
function artistaEntradas(){
let nombreIngresado= prompt("Ingrese el nombre de su artista")
let cantidadEntradas= +prompt("¿Cuantas entradas desea?")
if(nombreIngresado=="Los Tipitos" && cantidadEntradas<=3){
alert ("Ya tienes tus entradas")
}
else if(nombreIngresado=="Airbag" && cantidadEntradas<=2){
alert ("Ya tienes tus entradas")
}
else{
alert("Has excedido el número permitido de entradas por persona")
}
}
artistaEntradas();
 }













