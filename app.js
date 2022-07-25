function selector(param) {
    return document.querySelector(param);
}

//VARIABLES parte calificacion
const button1 = selector('#button1');
const button2 = selector('#button2');
const button3 = selector('#button3');
const button4 = selector('#button4');
const button5 = selector('#button5');
const submit = selector('#submit');
const h1 = selector('#h1');
const p1 =selector('#p1')
const estrella =selector('#estrella')
const Respuesta = selector('#opcionElegida')

// VARIABLES partE agradecimieto 
const phone = selector('#phone');
const contenedorMainYH2 =selector('#contenedorMainYH2')
const p2 =selector('#p2')

//Funcion con los eventos de los botones 
function botones() {
    let opcionElegida = 0
    submit.disabled = true;

    //Enventos de los botones
    button1.addEventListener("click", () => {
        //Habilito el voton submit
        submit.disabled = false;
        button1.style.backgroundColor = "hsl(25, 97%, 53%)";
        opcionElegida = button1.value
        //Si  clickea guardo la opcion e el p para mostrarlo
        Respuesta.innerText = "You selected "+opcionElegida+" out of 5";
        console.log(opcionElegida);
        //deshanilito los botones
        disableButtons(button2, button3, button4, button5);
    });
    button2.addEventListener("click", () => {
        //Habilito el voton submit
        submit.disabled = false;
        button2.style.backgroundColor = "hsl(25, 97%, 53%)";
        opcionElegida = button2.value
        //Si  clickea guardo la opcion e el p para mostrarlo
        Respuesta.innerText = "You selected "+opcionElegida+" out of 5";
        //deshanilito los botones
        disableButtons(button1, button3, button4, button5);
    });
    button3.addEventListener("click", () => {
        //Habilito el voton submit
        submit.disabled = false;
        button3.style.backgroundColor = "hsl(25, 97%, 53%)";
        opcionElegida = button3.value
        //Si  clickea guardo la opcion e el p para mostrarlo
        Respuesta.innerText = "You selected "+opcionElegida+" out of 5";
        //deshanilito los botones
        disableButtons(button1, button2, button4, button5);
    });
    button4.addEventListener("click", () => {
        //Habilito el voton submit
        submit.disabled = false;
        button4.style.backgroundColor = "hsl(25, 97%, 53%)";
        opcionElegida = button4.value
        //Si  clickea guardo la opcion e el p para mostrarlo
        Respuesta.innerText = "You selected "+opcionElegida+" out of 5";
        //deshanilito los botones
        disableButtons(button1, button2, button3, button5);
    });
    button5.addEventListener("click", () => {
        //Habilito el voton submit
        submit.disabled = false;
        button5.style.backgroundColor = "hsl(25, 97%, 53%)";
        opcionElegida = button5.value
        //Si  clickea guardo la opcion e el p para mostrarlo
        Respuesta.innerText = "You selected "+opcionElegida+" out of 5";
        //deshanilito los botones
        disableButtons(button1, button2, button3, button4);
    });
}

//Funcion para deshabilitar los botones
function disableButtons(but1, but2, but3, but4) {
    but1.disabled = true;
    but2.disabled = true;
    but3.disabled = true;
    but4.disabled = true;
}

//Funcion para mostrar la parte de agradecimieto
function mostrarThankYou() {
    //saco la parte de calificacion
    estrella.style.display = "none";
    h1.style.display = "none";
    p1.style.display = "none";
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";
    submit.style.display = "none";

    //pongo la parte de agradecimieto y muestreo de opcion elegida
    phone.style.display = "block";
    contenedorMainYH2.style.display = "flex";
    p2.style.display = "block";
}

function main() {
    botones();
    submit.addEventListener("click", () => {
        mostrarThankYou();
    })
}
main();

