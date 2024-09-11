// Hacer la petición a randomuser
async function obteniendo() {
  try {
    const personas = await fetch("https://randomuser.me/api/");
    const datosobtenidos = await personas.json();
    console.log(datosobtenidos);

    // Pasando a HTML
    const buscaretiqueta = document.querySelector("#personasapi");

    buscaretiqueta.innerHTML = `
      <li> ${datosobtenidos.results[0].location.street.number} </li>
      <li>ciudad: ${datosobtenidos.results[0].location.city} </li>
      <li>ciudad: ${datosobtenidos.results[0].location.city} </li>
      <li> Nombre: ${datosobtenidos.results[0].name.first} ${datosobtenidos.results[0].name.last} </li>
      <li> Género: ${datosobtenidos.results[0].gender} </li>
      <li> Fecha de nacimiento: ${datosobtenidos.results[0].dob.date} </li>
      <li> Email: ${datosobtenidos.results[0].email} </li>
      <li> Nacionalidad: ${datosobtenidos.results[0].nat} </li>
      <li> Imagen: <img src="${datosobtenidos.results[0].picture.large}" alt="imagen de la persona"> </li>
    `;

  } catch (error) {
    // Manejo de errores
    if (error instanceof TypeError) {
      console.log("La URL no es válida", error.message);
    } else if (error instanceof ReferenceError) {
      console.log("Hay alguna variable que no está correctamente usada", error.message);
    } else {
      console.log("Ocurrió un error:", error.message);
    }
  }
}

obteniendo(); // Ejecutar la función
