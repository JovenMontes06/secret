const boton = document.getElementById("playButton");
const titulo = document.getElementById("titulo");
const audio = document.getElementById("miAudio");
var img = 1;
function esperar(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
boton.addEventListener("click", async () => {
    audio.play();

    // Oculta botón y título con animación
    boton.classList.add("fall-and-fade");
    titulo.classList.add("fall-and-fade");
    // Genera corazones cada cierto intervalo
    setInterval(createHeart, 200);
    // Después de 1s (cuando termina la animación), ocultar y mostrar texto escrito
    setTimeout(() => {
        boton.style.display = "none";
        titulo.style.display = "none";
        Letra();
    }, 1000);
});
async function Letra() {
    await esperar(26600);
    mostrarTextoEscrito("Eres", 60);
    await esperar(3100);
    mostrarTextoEscrito("Lo que mas quiero en este mundo eso", 60);
    await esperar(3500);
    mostrarTextoEscrito("Eres", 60);
    await esperar(2600);
    mostrarTextoEscrito("Mi pensamiento más profundo, también eres", 75);
    await esperar(7100);
    mostrarTextoEscrito("Tan sólo dime lo que hago, aquí me tienes", 70);
    await esperar(9300);
    mostrarTextoEscrito("Eres", 60);
    await esperar(3100);
    mostrarTextoEscrito("Cuando despierto, lo primero eso", 60);
    await esperar(3400);
    mostrarTextoEscrito("Eres", 60);
    await esperar(3300);
    mostrarTextoEscrito("Lo que a mi vida le hace falta si no vienes", 70);
    await esperar(5900);
    mostrarTextoEscrito("Lo único precioso que en mi mente habita hoy", 75);
    await esperar(9850);
    mostrarTextoEscrito("¿Qué más puedo decirte?", 70);
    await esperar(3700);
    mostrarTextoEscrito("Tal vez puedo mentirte sin razón", 80);
    await esperar(5800);
    mostrarTextoEscrito("Pero, lo que hoy siento", 70);
    await esperar(3900);
    mostrarTextoEscrito("Es que sin ti estoy muerto, pues eres", 65);
    await esperar(5900);
    mostrarTextoEscrito("Lo que más quiero en este mundo, eso eres", 90);
    await esperar(35000);
    mostrarTextoEscrito("Eres", 70);
    await esperar(3200);
    mostrarTextoEscrito("El tiempo que comparto, eso eres", 85);
    await esperar(6200);
    mostrarTextoEscrito("Lo que la gente promete cuando se quiere", 90);
    await esperar(6700);
    mostrarTextoEscrito("Mi salvación, mi esperanza y mi fe", 70);
    await esperar(9500);
    mostrarTextoEscrito("Soy", 70);
    await esperar(3400);
    mostrarTextoEscrito("El que quererte quiere como nadie, soy", 80);
    await esperar(6000);
    mostrarTextoEscrito("El que te llevaría el sustento día a día, día a día", 80);
    await esperar(6500);
    mostrarTextoEscrito("El que por ti daría la vida, ese soy", 70);
    await esperar(9500);
    mostrarTextoEscrito("Aquí estoy, a tu lado", 70);
    await esperar(3750);
    mostrarTextoEscrito("Y espero, aquí sentado, hasta el final", 70);
    await esperar(6300);
    mostrarTextoEscrito("No te has imaginado", 70);
    await esperar(2700);
    mostrarTextoEscrito("Lo que por ti he esperado, pues eres", 70);
    await esperar(6750);
    mostrarTextoEscrito("Lo que yo amo en este mundo, eso eres", 70);
    await esperar(6250);
    mostrarTextoEscrito("Cada minuto, en lo que pienso, eso eres", 70);
    await esperar(6500);
    mostrarTextoEscrito("Lo que más cuido en este mundo, eso eres", 105);
    await esperar(7500);

    let tiempoFra = 3500;
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres luz",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres belleza",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres magia",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres diversión",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres grandiosa",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres brillante",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres graciosa",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres atenta",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres cariñosa",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres tranquilidad",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres ternura",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres dulzura",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres confianza",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres constancia",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres pasión",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres disciplina con corazón",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres honestidad",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres lealtad",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres fuerza",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres valiente",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres capaz",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres fuerte",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres trabajadora",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres deportista",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres fit",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres líder",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres campeona",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres chismosa",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres quien siempre piensa dos jugadas adelante",70);
    await esperar(tiempoFra+1000);
    mostrarTextoEscrito("Eres ajedrecista",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres la que convierte cada reto en victoria",70);
    await esperar(tiempoFra+1000);
    mostrarTextoEscrito("Eres la que encesta hasta cuando no hay aro",70);
    await esperar(tiempoFra+1000);
    mostrarTextoEscrito("Eres la persona que no se rinde ni en el tablero ni en la vida",70);
    await esperar(tiempoFra+1000);
    mostrarTextoEscrito("Eres quien transforma sudor en gloria",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres quien me enamora sin notarlo",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres programadora",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres un código indentado y con variables significativas",70);
    await esperar(tiempoFra+1000);
    mostrarTextoEscrito("Eres un código que funciona a la primera",70);
    await esperar(tiempoFra+1000);
    mostrarTextoEscrito("Eres una función sin errores",70);
    await esperar(tiempoFra+1000);
    mostrarTextoEscrito("Eres un loop infinito de razones para sonreír",70);
    await esperar(tiempoFra+1000);
    mostrarTextoEscrito("Eres documentación clara en un mundo confuso",70);
    await esperar(tiempoFra+1000);
    mostrarTextoEscrito("Eres la sintaxis correcta en un mundo de bugs",70);
    await esperar(tiempoFra+1000);
    mostrarTextoEscrito("Eres arte",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres poesía en movimiento",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres hogar",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres única",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres todo lo que está bien en este mundo",70);
    await esperar(tiempoFra+1000);
    mostrarTextoEscrito("Eres lo que muchos sueñan y pocos tendrán",70);
    await esperar(tiempoFra+1000);
    mostrarTextoEscrito("Eres inspiración",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres sonrisa bonita",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres risa bonita",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres cachetes bonitos",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres ojitos bonitos",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres nariz bonita",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres cabello bonito",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres @$% bonita",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres linda",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres bonita",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres inteligente",70);

    await esperar(tiempoFra);
    mostrarTextoEscrito("Pero sobre todo...",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres mi persona favorita",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres mi corazón",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres mi cielo",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres mi amor",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres mi princesa",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres mi vida",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres mi mundo",70);
    await esperar(tiempoFra);
    mostrarTextoEscrito("Eres todo para mí",70);
    await esperar(5000);
    mostrarTextoEscrito("Te amo Gisell Rosales Mailen <3",100);

    
}
function mostrarTextoEscrito(texto, tiempo) {
    const contenedor = document.createElement("div");
    contenedor.id = "contenedorTexto";
    contenedor.className = "typing";
    document.body.appendChild(contenedor);

    let i = 0;
    let indicePalabraBuscada = 0;
    let estaLaPalabraEres = texto.toLowerCase().includes("eres"); 
    if(estaLaPalabraEres){
        indicePalabraBuscada = texto.toLowerCase().indexOf("eres") + 4;
    }

    function escribir() {
        if (i < texto.length) {
            contenedor.textContent += texto.charAt(i);
            i++;
            if(i==indicePalabraBuscada){
                cambiarImagen();
            }
            setTimeout(escribir, tiempo); //60
        } else {
            setTimeout(() => {
                contenedor.remove();
            }, 2000);
        }
    }

    escribir();
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const colors = [ "#ff69b4", "#ff1493", "#ffc0cb" ];
    const scales = [ "scale(0.9)", "scale(1)", "scale(1.1)" ];
    const durations = [ 3, 4, 5 ]; // segundos

    // Posición, color, escala, duración aleatoria
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.backgroundColor =
        colors[ Math.floor(Math.random() * colors.length) ];
    heart.style.transform = scales[ Math.floor(Math.random() * scales.length) ];
    const duration = durations[ Math.floor(Math.random() * durations.length) ];
    heart.style.animationDuration = duration + "s";

    document.body.appendChild(heart);

    // Eliminar después de terminar la animación
    setTimeout(() => heart.remove(), duration * 1000);
}

// Ajuste en caso de cambio de tamaño
window.addEventListener("resize", () => {
    document.querySelectorAll(".heart").forEach((heart) => {
        if (parseFloat(heart.style.left) > window.innerWidth) {
            heart.remove();
        }
    });
});

function cambiarImagen(url){
    imgCora = document.getElementById("fotito");
    imgCora.style.backgroundImage = `url("bonita/${img}.jpg")`;
    img += 1;
    if(img>22){img=1;}
}
const secreto = "t_tttttt_tl_yi_odcls_xfex0fuw_jxjxw_ko";
let temporal = "";

document.addEventListener("keydown", (evento) => {
  const tecla = evento.key;
  const valor = mapaConversion[tecla];

  if (valor) {
    temporal += valor;

    if (temporal.length > secreto.length) {
      temporal = temporal.slice(-secreto.length);
    }

    if (temporal === secreto) {
      ejecutar();
      document.title = "Eres <3";
    }
  }
});

function ejecutar() {
  document.getElementById("pantallaBloqueo").style.display = "none";
}

const mapaConversion = {
  "a": String.fromCharCode(120),
  "b": String.fromCharCode(106),
  "c": String.fromCharCode(53),
  "d": String.fromCharCode(57),
  "e": String.fromCharCode(107),
  "f": String.fromCharCode(51),
  "g": String.fromCharCode(113),
  "h": String.fromCharCode(49),
  "i": String.fromCharCode(117),
  "j": String.fromCharCode(55),
  "k": String.fromCharCode(112),
  "l": String.fromCharCode(101),
  "m": String.fromCharCode(122),
  "n": String.fromCharCode(48),
  "o": String.fromCharCode(98),
  "p": String.fromCharCode(54),
  "q": String.fromCharCode(97),
  "r": String.fromCharCode(52),
  "s": String.fromCharCode(119),
  "t": String.fromCharCode(102),
  "u": String.fromCharCode(103),
  "v": String.fromCharCode(50),
  "w": String.fromCharCode(118),
  "x": String.fromCharCode(110),
  "y": String.fromCharCode(56),
  "z": String.fromCharCode(109),
  "0": String.fromCharCode(116),
  "1": String.fromCharCode(99),
  "2": String.fromCharCode(121),
  "3": String.fromCharCode(104),
  "4": String.fromCharCode(115),
  "5": String.fromCharCode(111),
  "6": String.fromCharCode(114),
  "7": String.fromCharCode(108),
  "8": String.fromCharCode(100),
  "9": String.fromCharCode(105),
  "_": "_"
};
