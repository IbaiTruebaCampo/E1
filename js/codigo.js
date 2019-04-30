/*function copyAnio() {
  let anio = new Date().getFullYear();
document.getElementById("copyanio").innerHTML = anio;
}*/

let y = new Date();
document.getElementById("footer").innerHTML = '&COPY;' + y.getFullYear() + ' Página realizada por: Ibai Trueba Campo.'; //nos devuelve el año en el que estamos en el mensaje del footer.

/* function fechaHora() {
    let fecha = new Date();
    let dia, hora;
    let semana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    dia = semana[fecha.getDay()];
    hora = fecha.getHours()  + ':' + (fecha.getMinutes()<10?'0':'') + fecha.getMinutes():
    document.getElementById("fecha").innerHTML = '<strong>RESULTADOS:</strong> Hoy es: ' + dia + '. La hora actual es ' + hora + '.';
*/

let dia = '';
switch (new Date().getDay()) {
  case 0:
    dia = "domingo";
    break;
  case 1:
    dia = "lunes";
    break;
  case 2:
    dia = "martes";
    break;
  case 3:
    dia = "miércoles";
    break;
  case 4:
    dia = "jueves";
    break;
  case 5:
    dia = "viernes";
    break;
  case 6:
    dia = "sábado";
    break;
}
function date() {
  document.getElementById("fecha").innerHTML = '<strong>RESULTADOS:</strong> Hoy es ' + dia + '. La hora actual es ' + y.getHours() + ':' + y.getMinutes();
} //Esta es la función a la que llama el botón de Fecha y Hora.

function turn() {
 let numero = prompt("Introduzca un número de más de un dígito");
 let invertido;
 if  (numero != null && numero != undefined && numero != '' && numero.length > 1) {
   invertido =  invertir(numero);
   alert("El número " + numero + "invertido es " + invertido + '.');
 } else {
   alert("Lo que ha introducido no es válido. Vuelva a intentarlo.");
 }
}

/*funcion invertir(porCadena) {
  let arr = porCadena.split('');
  arr.reverse();
  return arr.join('');
}*/

