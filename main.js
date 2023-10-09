
let saludo = "Hola ";
let saludoBienvenida = "¡Te damos la bienvenida!";


for (let numeroUsuario = 1; numeroUsuario <=1; numeroUsuario++){
    alert (`${saludoBienvenida} Tu número de usuario es el ${numeroUsuario}`) 
}
    
let nombreUsuario = prompt (`¿Cuál es tu nombre?`);

while (nombreUsuario == ""){
    nombreUsuario = prompt("Debe ingresar su nombre, por favor");
}    

let comoSiente = prompt (`¡${saludo}${nombreUsuario}! ¿Qué sientes hoy? ¿emocion, entusiasmo, felicidad, cansancio, angustia o aburrimiento?`).toLowerCase();

while (comoSiente == ""){
    comoSiente = prompt (`Sería bueno que nos cuentes qué sientes hoy ¿emocion, entusiasmo, felicidad, cansancio, angustia o aburrimiento?`).toLowerCase();
}
    switch (comoSiente) {
        case "emocion" :
        case "emoción" :
        case "entusiasmo" :
        case "felicidad" :
            alert ("¡Qué alegría escuchar eso!");
        break;

        case "cansancio" :
            alert ("Sería importante que te acuestes un rato.");
        break;

        case "angustia" :
            alert ("Lo mejor que puedes hacer ahora, es hablar con alguien.");
        break;

        case "aburrimiento" :
            alert ("Salir un rato a hacer ejercicio, es una buena idea en estos casos.");
        break;

    default:
        alert ("Creo que no te entendí, tal vez prefieras no compartirlo.");
        break
    }

let vasosDeAgua = parseInt(prompt("Ahora hablemos de tu salud, ¿Cuántos vasos de agua tomaste hoy?"));

if (vasosDeAgua <= 2) {
        alert ("¡Ten cuidado!, Recuerda que es muy importante hidratarte.");
    }else if (vasosDeAgua <= 3){
        alert ("Estás a mitad camino, deberías seguir tomando.");
    }else if (vasosDeAgua <= 5){
        alert ("Vienes muy bien pero agrega un poco más.");
    }else if (vasosDeAgua >= 6){
       alert ("¡Excelente!, se nota que te interesa cuidar tu salud.");
}else{
    alert ("Tu cuerpo necesita al menos 8 vasos de agua por día, no lo olvides.");
}


alert ("Resulta que a tu hijo le duele la cabeza y decides darle Ibuprofeno para que se sienta mejor, pero no recuerdas la dosis.");


function multiplicacion (num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}

function division (num1, num2) {
    let resultado = num1 / num2;
    return resultado;
}

let pesoMaximo = 40;

let pesoCorporal = parseInt (prompt("¿Cuál es su peso?"));

let mg = parseInt (prompt("Ingresa los mg que figuran en el envase."));

let dosisIbuprofeno = division (multiplicacion (pesoCorporal,10),mg);
    
    if (pesoCorporal <= pesoMaximo){
        alert (`Puede tomar hasta ${dosisIbuprofeno} comprimido de ${mg} mg cada 6 horas.`);
    }else{(pesoCorporal > pesoMaximo)
        alert ("Puedes tomar hasta 1 comoprimido de 400 mg de Ibuprofeno cada 6 horas.");
    }

alert("Muchas gracias por esforzarte en contestar estas preguntas, que tengas un buen día.")







    



    

