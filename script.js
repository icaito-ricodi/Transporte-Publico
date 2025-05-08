// Referencia al contenedor principal donde se agregan las rutas
const listaRutasDiv = document.getElementById('lista-rutas');

// Función que extrae el ID del video de YouTube desde una URL completa
function extraerIdYoutube(url) {
  const regExp = /^.*(youtu\.be\/|v\/|embed\/|watch\?v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

// Función para crear y mostrar una ruta con su información y video (si aplica)
function agregarRuta(nombre, tiempoEstimado, horariosSalida, youtubeUrl) {
  // Crear el contenedor de la ruta
  const rutaDiv = document.createElement('div');
  rutaDiv.classList.add('ruta');

  // Crear y agregar el título de la ruta
  const nombreRutaH3 = document.createElement('h3');
  nombreRutaH3.classList.add('nombre-ruta');
  nombreRutaH3.textContent = nombre;

  // Crear y agregar el párrafo con el tiempo estimado
  const tiempoEstimadoP = document.createElement('p');
  tiempoEstimadoP.classList.add('detalle-ruta');
  tiempoEstimadoP.textContent = `Tiempo Estimado: ${tiempoEstimado}`;

  // Crear y agregar el párrafo con los horarios de salida
  const horariosSalidaP = document.createElement('p');
  horariosSalidaP.classList.add('detalle-ruta');
  horariosSalidaP.textContent = `Horarios de Salida: ${horariosSalida}`;

  // Agregar los elementos al contenedor de la ruta
  rutaDiv.appendChild(nombreRutaH3);
  rutaDiv.appendChild(tiempoEstimadoP);
  rutaDiv.appendChild(horariosSalidaP);

  // Extraer el ID del video de YouTube
  const videoId = extraerIdYoutube(youtubeUrl);
  if (videoId) {
    // Crear contenedor para el video
    const videoDiv = document.createElement('div');
    videoDiv.classList.add('video-ruta');
    videoDiv.style.display = 'none'; // Inicialmente oculto

    // Crear el iframe con el video embebido
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.title = `Video de la ruta ${nombre}`;
    iframe.width = "255";
    iframe.height = "250";
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    // Agregar el iframe al div del video y luego al contenedor de la ruta
    videoDiv.appendChild(iframe);
    rutaDiv.appendChild(videoDiv);

    // Mostrar/ocultar el video al hacer clic en el título
    nombreRutaH3.addEventListener('click', function () {
      videoDiv.style.display = videoDiv.style.display === 'none' ? 'block' : 'none';
    });
  }

  // Agregar la ruta al contenedor principal
  listaRutasDiv.appendChild(rutaDiv);
}

// Llamadas a la función para agregar rutas (puedes agregar o quitar según necesidad)
agregarRuta("👍 Video Ruta 1: Andalucia - Gasera y viceversa...", "40 minutos", "L a S: de 6:00 am, cada 12 min. hasta las 8:00 pm. D: de 7:00 am. a 7:00 pm.", "https://www.youtube.com/embed/141ukvwdGGU?si=uaj0dBWmVcmEcu_Y");
agregarRuta("👍 Video Ruta 2: Quma 1 - Tulipanes", "35 minutos", "Cada 10 minutos de 6:00 a 20:00 Hrs.", "");
agregarRuta("👍 Video Ruta 3: Quma 245 - Tulipanes y viceversa...", "40 minutos", "L a S: de 6:00 am, cada 12 min. hasta las 8:00 pm. D: de 7:00 am. a 7:00 pm.", "");
agregarRuta("👍 Video Ruta 4: Huitzila - El Carmen - Fraccionamiento - Plazas y viceversa", "35 minutos", "Cada 10 minutos de 6:00 a 20:00 Hrs.", "");
agregarRuta("👍 Video Ruta 5: Fraccionamiento Olmos - Tulipanes y viceversa...", "40 minutos", "L a S: de 6:00 am, cada 12 min. hasta las 8:00 pm. D: de 7:00 am. a 7:00 pm.", "");
agregarRuta("👍 Video Ruta 6: Olmos - Tulipanes", "35 minutos", "Cada 10 minutos de 6:00 a 20:00 Hrs.", "");
agregarRuta("👍 Video Ruta 7: Lazaro Cardenas - Lienzo y viceversa...", "40 minutos", "L a S: de 6:00 am, cada 12 min. hasta las 8:00 pm. D: de 7:00 am. a 7:00 pm.", "");
agregarRuta("👍 Video Ruta 8: Tepojaco - Lala", "35 minutos", "Cada 10 minutos de 6:00 a 20:00 Hrs.", "");
agregarRuta("👍 Video Ruta 9: Unidad Habitacional - Loa Angeles y viceversa...", "40 minutos", "L a S: de 6:00 am, cada 12 min. hasta las 8:00 pm. D: de 7:00 am. a 7:00 pm.", "");
agregarRuta("👍 Video Ruta 10: Centro de Tizayuca - El Rey - Puratos", "35 minutos", "Cada 10 minutos de 6:00 a 20:00 Hrs.", "");
agregarRuta("👍 Video Ruta 11: Casas Ara - Villamagna y viceversa...", "40 minutos", "L a S: de 6:00 am, cada 12 min. hasta las 8:00 pm. D: de 7:00 am. a 7:00 pm.", "");
agregarRuta("👍 Video Ruta 12: Haciendas 2 - Cementos", "35 minutos", "Cada 10 minutos de 6:00 a 20:00 Hrs.", "");
agregarRuta("👍 Video Ruta 13: Hogares Union - Cementos y viceversa...", "40 minutos", "L a S: de 6:00 am, cada 12 min. hasta las 8:00 pm. D: de 7:00 am. a 7:00 pm.", "");
agregarRuta("👍 Video Ruta 14: Florencia - Davivir", "35 minutos", "Cada 10 minutos de 6:00 a 20:00 Hrs.", "");
agregarRuta("👍 Video Ruta 15: Zapata - Lazaro Cardenas y viceversa...", "40 minutos", "L a S: de 6:00 am, cada 12 min. hasta las 8:00 pm. D: de 7:00 am. a 7:00 pm.", "");
agregarRuta("👍 Video Ruta 16: Diamante - Clinica 18", "35 minutos", "Cada 10 minutos de 6:00 a 20:00 Hrs.", "");
agregarRuta("👍 Video Ruta 17: Gasera - La Boing y viceversa...", "40 minutos", "L a S: de 6:00 am, cada 12 min. hasta las 8:00 pm. D: de 7:00 am. a 7:00 pm.", "");
agregarRuta("👍 Video Ruta 18: Refugio - Tulipanes", "35 minutos", "Cada 10 minutos de 6:00 a 20:00 Hrs.", "");
agregarRuta("👍 Video Ruta 19: Haciendas 3 - Cementos", "35 minutos", "Cada 10 minutos de 6:00 a 20:00 Hrs.", "");
agregarRuta("👍 Video Ruta 20: Sadasi - Queretaro - La joya", "35 minutos", "Cada 10 minutos de 6:00 a 20:00 Hrs.", "");
