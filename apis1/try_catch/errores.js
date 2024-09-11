// cuando todo funcioa okey
try {
  console.log(10 / 0)
} catch (error) {
  console.error("error detectacdo", error)
}
// cuando existe error en el codigo
try {
  console.log(hola / hola2)
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log("hay una referencia erronea")
  } else {

  }
}

// en caso de peticioón de apis 
async function capturandoerror() {
  try {
    // Esta URL intencionalmente no existe, por lo que debería devolver un 404
    let response = await fetch("https://jsonplaceholder.typicode.com/404");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Error de red o problema con la URL:", error.message);
    } else {
      console.error("Error capturado:", error.message);
    }
  }
}

capturandoerror();


