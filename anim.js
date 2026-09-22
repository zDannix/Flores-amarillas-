// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Stand beside it, we can't hide the way it makes us glow", time: 26 },
  { text: "It's no good unless it grows, feel this burning love of mine", time: 37 },
  { text: "Deep inside the ever-spinning, tell me does it feel", time: 52 },
  { text: "It's no good unless it's real, hill sides burning", time: 63},
  { text: "Wild-eyed turning till we're running from it", time: 70 }, 
  
  { text: "I'd take care of you if you'd ask me to", time: 80 },
  { text: "In a year or two", time: 93 },
  
  { text: "“En cada latido mío hay un te amo que solo tú puedes escuchar.”", time: 103 },
  { text: "Me pase la vida imaginandote", time: 110 },
  
  { text: "Tu iluminas mi constelacion", time: 117 },
  { text: "Estare a tu lado en todas mis vidas, por que tu lo eres todo para mi", time: 120 },
  

  { text: "You say swimming in the lake we'll come across a snake", time: 130 },
  { text: "It is real and then it's fake, feel it's heartbeat", time: 141 },
  { text: "Feel what you heat, far so fast it feels too late", time: 148 },
  
  { text: "I'd take care of you if you'd ask me to", time: 158 },
  { text: "In a year or two", time: 171 },
  
  { text: "I'll take care of you, take care of you, that's true", time: 196 }
];


var currentLineIndex = -1;

function updateLyrics() {
  var time = audio.currentTime;

  // Determinar la línea actual
  var line = lyricsData.find((line, index) => {
    return (
      time >= line.time &&
      (index + 1 === lyricsData.length || time < lyricsData[index + 1].time)
    );
  });

  var lineIndex = lyricsData.indexOf(line);

  if (line && lineIndex !== currentLineIndex) {
    // Nueva línea detectada
    currentLineIndex = lineIndex;

    // Limpiar contenedor antes de agregar la nueva frase
    lyrics.innerHTML = "";

    // Crear span para la frase actual (romántico + efecto pulse)
    var currentSpan = document.createElement("span");
    currentSpan.textContent = line.text;
    currentSpan.style.display = "block";
    currentSpan.style.textAlign = "center";
    currentSpan.style.margin = "20px 0";
    currentSpan.style.fontSize = "1.8em";
    currentSpan.style.fontWeight = "bold";
    currentSpan.style.color = "#f7b5caff"; // rosa elegante
    currentSpan.style.opacity = "0";
    currentSpan.style.transition = "opacity 1.2s ease-in-out";

    // Animación de latido
    currentSpan.style.animation = "pulse 2.5s ease-in-out infinite";

    lyrics.appendChild(currentSpan);

    // Hacer aparecer con efecto fade-in
    setTimeout(() => {
      currentSpan.style.opacity = "1";
    }, 50);
  }

  requestAnimationFrame(updateLyrics);
}

// Animación CSS inyectada desde JS para compatibilidad
var style = document.createElement("style");
style.innerHTML = `
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
`;
document.head.appendChild(style);

// Inicia animación
updateLyrics();

// Ocultar título al final de la canción
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 346000); // 5:46
