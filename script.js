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
// Mensaje de bienvenida
alert("Bienvenido a la sección de rutas de transporte público. Aquí podrás encontrar información sobre las rutas disponibles, incluyendo tiempos estimados y horarios de salida. Haz clic en el nombre de cada ruta para ver el video correspondiente.");

// Mensaje de información sobre el primer video
alert("Ya estan disponibles los videos, esperando que sea de gran utilidad para todos los usuarios. de esta prospera comunidad Tizayuquense. ¡Buen viaje!");

// Mensaje de agradecimiento y solicitud de ayuda
alert("Esperando contar con tu valiosa ayuda, con el fin de seguir mejorando la información de esta Pag. WEB. Si tienes alguna duda, sugerencia o comentario, no dudes en hacérmelo saber. ¡Gracias por tu gran apoyo! 1$");

// Llamadas a la función para agregar rutas (puedes agregar o quitar según la necesidad)
agregarRuta("👍 Video Ruta 1: Gasera - Andalucia - Olmos y viceversa... 🎬✅disponible...", "50 minutos *A consideracion de retrasos por causas externas*", "L a S: de 5:00 am, cada 12 min. hasta las 8:00 pm. D: de 7:00 am. a 7:00 pm.", "https://youtu.be/yGtPyt26OJc?t=2887");
agregarRuta("👍 Video Ruta 2: Quma 1 - Tulipanes y viceversa... 🎬✅disponible...", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 10 minutos de 5:20 a 20:00 Hrs.", "https://youtu.be/J5oxfTI2-eI?t=4");
agregarRuta("👍 Video Ruta 3: Quma 245 - Tulipanes y viceversa... 🎬✅disponible...", "40 minutos *A consideracion de retrasos por causas externas*", "L a S: de 5:00 am, cada 10 min. hasta las 10:00 pm. D: de 7:00 am. a 10:00 pm.", "https://youtu.be/3gAQedYYrOU?t=3");
agregarRuta("👍 Video Ruta 4: Huitzila - El Carmen y viceversa... 🎬✅disponible...", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 10 minutos de 5:10 a 20:00 Hrs.", "https://youtu.be/JEdGEYycEfk?t=14");
agregarRuta("👍 Video Ruta 5: Huitzila - Fraccionamiento el Carmen y viceversa... 🎬✅disponible...", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 10 minutos de 5:10 a 20:00 Hrs.", "https://youtu.be/zZHp7Py9sSI?t=233");
agregarRuta("👍 Video Ruta 6: Plazas - Huitzila y viceversa... 🎬✅disponible...", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 10 minutos de 5:10 a 20:00 Hrs.", "https://youtu.be/IJwa1I_XDbU?t=571");
agregarRuta("👍 Video Ruta 7: Diamante - Clinica 18 y viceversa... 🎬❌en proceso!", "39 minutos *A consideracion de retrasos por causas externas*", "Cada 10 minutos de 5:50 a 18:00 Hrs.", "");
agregarRuta("👍 Video Ruta 8: U. Habitacional - Pedregal - Facc. ICA y viceversa... 🎬✅disponible...", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 15 minutos de 6:00 a 18:00 Hrs.", "https://youtu.be/VhX3yz23sio?t=369");
agregarRuta("👍 Video Ruta 9: Fraccionamiento Olmos - Quma 3 - Tulipanes y viceversa... 🎬✅disponible...", "35 minutos *A consideracion de retrasos por causas externas*", "L a S: de 6:15 am, cada 30 min. hasta las 8:00 pm. D: de 7:00 am. a 5:00 pm.", "https://youtu.be/L8gbyN1OACI?t=1153");
agregarRuta("👍 Video Ruta 10: Los Angeles - Unidad Habitacional y viceversa... 🎬✅disponible...", "35 minutos *A consideracion de retrasos por causas externas*", "L a S: de 5:15 am, cada 12 min. hasta las 8:00 pm. D: de 7:00 am. a 7:00 pm.", "https://youtu.be/e0Mi1-vr63Q?t=117");
agregarRuta("👍 Video Ruta 11: El rRecinto - Zapata - Lazaro Cardenas y viceversa... 🎬✅disponible...", "35 minutos *A consideracion de retrasos por causas externas*", "L a S: de 5:20 am, cada 10 min. hasta las 8:00 pm. D: de 7:00 am. a 7:00 pm.", "https://youtu.be/uy2ugR7Kyf0?t=65");
agregarRuta("👍 Video Ruta 12: Expresidentes - Cementos y viceversa... 🎬❌en proceso!", "30 minutos *A consideracion de retrasos por causas externas*", "Cada 10 minutos de 6:00 a 20:00 Hrs.", "");
agregarRuta("👍 Video Ruta 13: Haciendas 2 - Cementos y viceversa 🎬✅disponible...", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 8 minutos de 5:00 a 22:00 Hrs.", "https://youtu.be/SCoiUhqSrJs?t=54");
agregarRuta("👍 Video Ruta 14: Haciendas 1 Hogares Union - Cementos y viceversa... 🎬✅disponible...", "35 minutos *A consideracion de retrasos por causas externas*", "L a S: de 5:00 am, cada 8 min. hasta las 10:00 pm. D: de 7:00 am. a 10:00 pm.", "https://youtu.be/cNgdOttcn1o?t=2");
agregarRuta("👍 Video Ruta 15: Sadasi - Huitzila - Queretaro y viceversa... 🎬✅disponible...", "40 minutos *A consideracion de retrasos por causas externas*", "Cada 8 minutos de 5:00 a 22:00 Hrs.", "https://youtu.be/zXsw91cIXzE?t=33");
agregarRuta("👍 Video Ruta 16: Sadasi - Huitzila - La joya y viceversa... 🎬✅disponible...", "40 minutos *A consideracion de retrasos por causas externas*", "Cada 8 minutos de 5:00 a 22:00 Hrs.", "https://youtu.be/mi2PEOlSgnc?t=3");
agregarRuta("👍 Video Ruta 17: Tepojaco - Lala y viceversa... 🎬✅disponible...", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 10 minutos de 5:15 a 21:00 Hrs.", "https://youtu.be/Swo4mmgqQrI?t=7");
agregarRuta("👍 Video Ruta 18: Casas Ara - Villamagna y viceversa... 🎬✅disponible...", "30 minutos *A consideracion de retrasos por causas externas*", "L a S: de 5:00 am, cada 12 min. hasta las 10:00 pm. D: de 7:00 am. a 10:00 pm.", "https://youtu.be/9cIGlaUxWTA?t=7");
agregarRuta("👍 Video Ruta 19: Torres - Zona Industrial y viceversa 🎬❌en proceso", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 12 minutos de 5:00 a 18:00 Hrs.", "");
agregarRuta("👍 Video Ruta 20: Centro de Tizayuca - El Rey - Puratos y viceversa... 🎬✅disponible...", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 10 minutos de 5:00 a 21:00 Hrs.", "https://youtu.be/FcQHb44wZE4?t=4");
agregarRuta("👍 Video Ruta 21: Lazaro Cardenas - Lienzo y viceversa... 🎬✅disponible...", "40 minutos *A consideracion de retrasos por causas externas*", "L a S: de 5:50 am, cada 10 min. hasta las 8:00 pm. D: de 7:00 am. a 7:00 pm.", "https://youtu.be/1ERSkSNEfSs?t=4");
agregarRuta("👍 Video Ruta 22: Florencia - Davivir y viceversa 🎬✅disponible...", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 10 minutos de 6:00 a 20:00 Hrs.", "https://youtu.be/GUTcP3cqC7g?t=4");
agregarRuta("👍 Video Ruta 23: Haciendas 3 - Cementos y viceversa... 🎬❌en proceso!", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 12 minutos de 5:00 a 21:00 Hrs.", "");
agregarRuta("👍 Video Ruta 24: Haciendas 4 - Villa Magna y viceversa... 🎬✅disponible...", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 15 minutos de 6:00 a 18:00 Hrs.", "https://youtu.be/m75dfJquk-4?t=288");
agregarRuta("👍 Video Ruta 25: Refugio - Tulipanes y viceversa... 🎬✅disponible...", "35 minutos *A consideracion de retrasos por causas externas*", "Cada 10 minutos de 6:00 a 20:00 Hrs.", "https://youtu.be/cvrX1XFUTeo?t=5");
agregarRuta("👍 Video Ruta 26: Gasera - La Boing y viceversa... 🎬❌en proceso!", "35 minutos *A consideracion de retrasos por causas externas*", "L a S: de 6:00 am, cada 12 min. hasta las 8:00 pm. D: de 7:00 am. a 6:00 pm.", "");

