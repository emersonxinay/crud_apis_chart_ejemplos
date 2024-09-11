// apis sin async ni await 
// const obtenerPersonas = async () => {
//   try {
//     const res = await fetch('https://randomuser.me/api/')
//     const data = await res.json()
//     console.log(data)
//   } catch (error) {
//     console.error('Error:', error)
//   }
// }

// obtenerPersonas()
function posteados() {
  fetch('https://randomuser.me/api')
    .then(respondeme => respondeme.json())
    .then(datos => {
      console.log(datos)
    })
    .catch(errores => console.error('Error:', errores))
}
posteados()

// crear otra función para placeholder
function comentarios() {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(respondeme => respondeme.json())
    .then(comentarios => {
      // console.log(comentarios);
      const mostrar = document.querySelector('#columnas');
      comentarios.forEach(comentario => {
        mostrar.innerHTML += `
          <div class="comentarios">
            <h2> <strong> Escrito por: </strong> ${comentario.name}</h2>
            <p> <strong> email:</strong>   ${comentario.email}</p>
            <p> <strong> Body:</strong>  ${comentario.body}</p>
          </div>
        `;
      });
    })
    .catch(errores => console.error('El Error es:', errores));
}
comentarios();
// función para saber que usuario comento
function usuario_unico() {

}






// function posteados() {
//   fetch('https://randomuser.me/api')
//     .then(response => response.json())  // Convertir la respuesta a JSON
//     .then(data => {
//       console.log(data);  // Manejar los datos obtenidos
//     })
//     .catch(error => console.error('Error:', error));  // Manejar posibles errores
// }

// posteados();


