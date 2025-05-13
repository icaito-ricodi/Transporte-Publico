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

alert("Bienvenido a la sección de rutas de transporte público. Aquí podrás encontrar información sobre las rutas disponibles, incluyendo tiempos estimados y horarios de salida. Haz clic en el nombre de cada ruta para ver el video correspondiente.");
// Mensaje de bienvenida

alert("Ya esta disponible el primer video, esperando que sea de gran utilidad para todos los usuarios. de esta prospera comunidad Tizayuquemse. ¡Buen viaje!");
// Mensaje de información sobre el primer video

alert("Esperando contar con tu valiosa ayuda, con el fin de seguir mejorando la información de las rutas. Si tienes alguna duda, sugerencia o comentario, no dudes en hacérmelo saber. ¡Gracias por tu gran apoyo! 1$");
// Mensaje de agradecimiento y solicitud de ayuda

// Llamadas a la función para agregar rutas (puedes agregar o quitar según necesidad)
agregarRuta("👍 Video Ruta 1: Andalucia - Gasera y viceversa... 🎬❌en proceso!", "40 minutos *A consideracion de retrasos por causas externas*", "L a S: de 5:00 am, cada 12 min. hasta las 8:00 pm. D: de 7:00 am. a 7:00 pm.", "");
agregarRuta("👍 Video Ruta 2: Quma 1 - Tulipanes 🎬❌en proceso!", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 10 minutos de 5:20 a 20:00 Hrs.", "");
agregarRuta("👍 Video Ruta 3: Quma 245 - Tulipanes y viceversa... 🎬❌en proceso!", "40 minutos *A consideracion de retrasos por causas externas*", "L a S: de 5:00 am, cada 10 min. hasta las 10:00 pm. D: de 7:00 am. a 10:00 pm.", "");
agregarRuta("👍 Video Ruta 4: Huitzila - El Carmen - Fraccionamiento - Plazas y viceversa... 🎬❌en proceso!", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 10 minutos de 5:10 a 20:00 Hrs.", "");
agregarRuta("👍 Video Ruta 5: Diamante - Clinica 18 y viceversa... 🎬❌en proceso!", "39 minutos *A consideracion de retrasos por causas externas*", "Cada 10 minutos de 5:50 a 18:00 Hrs.", "");
agregarRuta("👍 Video Ruta 6: U. Habitacional - Pedregal - Facc. ICA y viceversa... 🎬❌en proceso!", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 15 minutos de 6:00 a 18:00 Hrs.", "");
agregarRuta("👍 Video Ruta 7: Fraccionamiento Olmos - Tulipanes y viceversa... 🎬❌en proceso!", "35 minutos *A consideracion de retrasos por causas externas*", "L a S: de 6:15 am, cada 30 min. hasta las 8:00 pm. D: de 7:00 am. a 5:00 pm.", "");
agregarRuta("👍 Video Ruta 8: Loa Angeles - Unidad Habitacional y viceversa... 🎬❌en proceso!", "35 minutos *A consideracion de retrasos por causas externas*", "L a S: de 5:15 am, cada 12 min. hasta las 8:00 pm. D: de 7:00 am. a 7:00 pm.", "");
agregarRuta("👍 Video Ruta 9: Zapata - Lazaro Cardenas y viceversa... 🎬❌en proceso!", "35 minutos *A consideracion de retrasos por causas externas*", "L a S: de 5:20 am, cada 10 min. hasta las 8:00 pm. D: de 7:00 am. a 7:00 pm.", "");
agregarRuta("👍 Video Ruta 10: Expresidentes - Cementos y viceversa... 🎬❌en proceso!", "30 minutos *A consideracion de retrasos por causas externas*", "Cada 10 minutos de 6:00 a 20:00 Hrs.", "");
agregarRuta("👍 Video Ruta 11: Haciendas 2 - Cementos y viceversa 🎬❌en proceso!", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 8 minutos de 5:00 a 22:00 Hrs.", "");
agregarRuta("👍 Video Ruta 12: Hogares Union - Cementos y viceversa... 🎬❌en proceso!", "35 minutos *A consideracion de retrasos por causas externas*", "L a S: de 5:00 am, cada 8 min. hasta las 10:00 pm. D: de 7:00 am. a 10:00 pm.", "");
agregarRuta("👍 Video Ruta 13: Sadasi - Queretaro - La joya 🎬❌en proceso!", "40 minutos *A consideracion de retrasos por causas externas*", "Cada 8 minutos de 5:00 a 22:00 Hrs.", "");
agregarRuta("👍 Video Ruta 14: Tepojaco - Lala 🎬❌en proceso!", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 10 minutos de 5:15 a 21:00 Hrs.", "");
agregarRuta("👍 Video Ruta 15: Casas Ara - Villamagna y viceversa... 🎬❌en proceso!", "30 minutos *A consideracion de retrasos por causas externas*", "L a S: de 5:00 am, cada 12 min. hasta las 10:00 pm. D: de 7:00 am. a 10:00 pm.", "");
agregarRuta("👍 Video Ruta 16: Torres - Zona Industrial 🎬❌en proceso", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 12 minutos de 5:00 a 18:00 Hrs.", "");
agregarRuta("👍 Video Ruta 17: Centro de Tizayuca - El Rey - Puratos 🎬❌en proceso!", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 10 minutos de 5:00 a 21:00 Hrs.", "");
agregarRuta("👍 Video Ruta 18: Lazaro Cardenas - Lienzo y viceversa... 🎬❌en proceso!", "40 minutos *A consideracion de retrasos por causas externas*", "L a S: de 5:50 am, cada 10 min. hasta las 8:00 pm. D: de 7:00 am. a 7:00 pm.", "");
agregarRuta("👍 Video Ruta 19: Florencia - Davivir 🎬❌en proceso!", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 10 minutos de 6:00 a 20:00 Hrs.", "");
agregarRuta("👍 Video Ruta 20: Haciendas 3 - Cementos 🎬❌en proceso!", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 12 minutos de 5:00 a 21:00 Hrs.", "");
agregarRuta("👍 Video Ruta 21: Haciendas 4 - Villa Magna 🎬❌en proceso!", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 15 minutos de 6:00 a 18:00 Hrs.", "");
agregarRuta("👍 Video Ruta 22: Refugio - Tulipanes 🎬❌en proceso!", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 10 minutos de 6:00 a 20:00 Hrs.", "");
agregarRuta("👍 Video Ruta 23: Gasera - La Boing y viceversa... 🎬❌en proceso!", "35 minutos *A consideracion de retrasos por causas externas*", "L a S: de 6:00 am, cada 12 min. hasta las 8:00 pm. D: de 7:00 am. a 6:00 pm.", "");
