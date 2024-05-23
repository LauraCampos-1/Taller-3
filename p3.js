/* En una granja remota, un grupo de ovejas se encuentra en peligro. Están encerradas en diferentes corrales, algunas sanas y salvas, pero otras enfermas o incluso enfrentando la amenaza de un lobo feroz. Tu misión, como programador experto, es crear un programa en JavaScript que te ayude a rescatar a las ovejas vivas y preparar el terreno para su futuro bienestar.

    const corrales = [
        [ 'oveja', 'oveja', '', 'oveja', '' ],
        [ 'oveja', 'oveja', 'oveja', 'oveja', '' ],
        [ 'oveja', 'muerta', 'lobo', '', 'muerta' ]
    ]
La siguiente lista corrales representa los corrales.

Cada posición en la lista contiene un string que indica el estado de un animal:

oveja: Oveja sana y salva.
muerta: Oveja que necesita ser removida del corral.
lobo: ¡Un peligro para las ovejas!
'': Un espacio libre en el corral.
Objetivos:

Usando funciones deberás realizar las siguientes tareas:

Contar las ovejas vivas: Recorre cada corral y determina cuántas ovejas sanas y salvas hay en total.

Contar los espacios libres: Identifica cuántos espacios vacíos hay en los corrales, considerando que los espacios con animales muertos también deben ser liberados.

Neutralizar al lobo: Si encuentras un lobo en algún corral, elimínalo (imagina que lo conviertes en una útil chaqueta de piel) y cuenta el espacio que deja libre como si estuviera vacío.

Incorporar nuevas ovejas: Utiliza el dinero obtenido por eliminar lobos para comprar 2 nuevas ovejas por cada uno. Busca espacios libres en los corrales para colocarlas y aumentar la población ovina. */

function gestionarCorrales(corrales) {
    let ovejasVivas = 0;
    let espaciosLibres = 0;
    let lobosNeutralizados = 0;

  
    for (let i = 0; i < corrales.length; i++) {
        for (let j = 0; j < corrales[i].length; j++) {
            if (corrales[i][j] === 'oveja') {
                ovejasVivas++;
            } else if (corrales[i][j] === '' || corrales[i][j] === 'muerta') {
                espaciosLibres++;
            } else if (corrales[i][j] === 'lobo') {
                lobosNeutralizados++;
                corrales[i][j] = '';  
                espaciosLibres++;
            }
        }
    }

    console.log(`Ovejas vivas iniciales: ${ovejasVivas}`);
    console.log(`Espacios libres iniciales (incluyendo lobos neutralizados): ${espaciosLibres}`);

  
    let nuevasOvejas = lobosNeutralizados * 2;
    for (let i = 0; i < corrales.length && nuevasOvejas > 0; i++) {
        for (let j = 0; j < corrales[i].length && nuevasOvejas > 0; j++) {
            if (corrales[i][j] === '') {
                corrales[i][j] = 'oveja';
                nuevasOvejas--;
                ovejasVivas++;
                espaciosLibres--;
            }
        }
    }

    console.log(`Lobos neutralizados: ${lobosNeutralizados}`);
    console.log(`Ovejas vivas finales: ${ovejasVivas}`);
    console.log(`Espacios libres finales: ${espaciosLibres}`);

    return corrales;
}


const corrales = [
    [ 'oveja', 'oveja', '', 'oveja', '' ],
    [ 'oveja', 'oveja', 'oveja', 'oveja', '' ],
    [ 'oveja', 'muerta', 'lobo', '', 'muerta' ]
];

const resultadoFinal = gestionarCorrales(corrales);
console.log('Estado final de los corrales:', resultadoFinal);
