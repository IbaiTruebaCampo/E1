/*function copyAnio() {
  let anio = new Date().getFullYear();
document.getElementById("copyanio").innerHTML = anio;
}*/

let y = new Date();
document.getElementById("footer").innerHTML = '&COPY;' + y.getFullYear() + ' Página realizada por: Ibai Trueba Campo.'; //nos devuelve el año en el que estamos en el mensaje del footer.

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
  document.getElementById("fecha").innerHTML = 'Hoy es ' + dia + '. La hora actual es ' + y.getHours(); + ':' + y.getMinutes();
} //Esta es la función a la que llama el botón de Fecha y Hora.
function turn() {
  let n = '0123456789';
  let nArr = n.split('');
  nArr.reverse();
  nArr.join('');
  n = prompt("Please enter one number");
}

/*function turn() {
  let number = prompt("Please enter one number", "32243");
  if (number != null) {
   
  }
}*/



