/* Crea una función para que calcule el promedio de al menos 3 notas y que retorne el valor de la letra asociada:

Calificación	           Equivalente en letras
Entre 4,8 <= 5,0	       E = Excelente
Entre 4,5 < 4,8	           MB = Muy bueno
Entre 4.0 < 4.4	           B = Bueno
Entre 3,5 < 4,0	           A = Aprobado
Entre 0 < 3,5	           R = reprobado */

let num1 = parseFloat(prompt("Digite la primera nota de 0 a 5:"));
let num2 = parseFloat(prompt("Digite la segunda nota de 0 a 5:"));
let num3 = parseFloat(prompt("Digite la tercera nota de 0 a 5:"));

let resultado = calificarNotas(num1, num2, num3);

function calificarNotas(nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3;
    
    if (promedio >= 4.8 && promedio <= 5.0) {
        return "E = Excelente";
    } else if (promedio >= 4.5 && promedio < 4.8) {
        return "MB = Muy bueno";
    } else if (promedio >= 4.0 && promedio < 4.4) {
        return "B = Bueno";
    } else if (promedio >= 3.5 && promedio < 4.0) {
        return "A = Aprobado";
    } else if (promedio >= 0 && promedio < 3.5) {
        return "R = Reprobado";
    } else {
        return "Nota no válida";
    }
}


console.log("El promedio de sus notas es: " + ((num1 + num2 + num3) / 3).toFixed(2));
alert ("El promedio de sus notas es: " + ((num1 + num2 + num3) / 3).toFixed(2));
console.log("Su nota asignada es: " + resultado);
alert("Su nota asignada es: " + resultado);     
