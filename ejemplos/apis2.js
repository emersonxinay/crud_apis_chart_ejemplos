
function comentarios() {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(respondeme => respondeme.json())
    .then(fotos => {
      const mostrar = document.querySelector('#columnas');
      // los 10 primeros 
      const primeros10Fotos = fotos.slice(0, 10);
      // Inicializa una variable para acumular el HTML
      let html = '';
      primeros10Fotos.forEach(foto => {
        html += `
          <div class="fotos">
            <img src="${foto.thumbnailUrl}" alt="Foto de comentario">
          </div>
        `;
      });
      // Actualiza el contenido de #columnas una sola vez
      mostrar.innerHTML = html;
    })
    .catch(errores => console.error('El Error es:', errores));
}
comentarios();


function mostrarDetalles(id) {
  // Redirige a una página de detalles con el ID del comentario
  window.location.href = `detalles.html?id=${id}`;
}
