// buscando las etiquetas en html
const insertar_tarea = document.querySelector("#insertar")
const agregar_tarea = document.querySelector("#agregar")
const buscador_tarea = document.querySelector("#buscartarea")
const buscando_tarea = document.querySelector("#buscandotarea")
const contando_tareas = document.querySelector("#contador_tareas")
const lista_tareas = document.querySelector("#tareasinsertadas")


let tareas = []

// agregar la tarea desde el input
agregar_tarea.addEventListener("click", () => {
  const tarea = insertar_tarea.value
  tareas.push({ id: Date.now(), tarea: tarea })
  insertar_tarea.value = ""
  mostrarTareas(tareas)
})

// mostrar la tareas agregadas
function mostrarTareas(tareas) {
  let html = ""
  // crear un ciclo
  for (let tarea of tareas) {
    html += ` 
    <li>
      <p> id: ${tarea.id}  tarea: ${tarea.tarea} <button onclick="eliminar(${tarea.id})" > eliminar </button> </p> 
    </li> `
    // insertar en el html
    lista_tareas.innerHTML = html
    // contar la cantidad de tareas
    contando_tareas.innerHTML = `<h2>${tareas.length}</h2`
  }
}

// funcion para eliminar 
function eliminar(id) {
  // identificar el id
  const index = tareas.findIndex(x => x.id === id);
  tareas.splice(index, 1);
  mostrarTareas(tareas)
}

// el buscador de tareas
buscador_tarea.addEventListener('input', () => {
  const busqueda = buscador_tarea.value.toLowerCase();
  const filtrando_tareas = tareas.filter(x => x.id.toString().includes(busqueda) || x.tarea.toLowerCase().includes(busqueda));
  mostrarTareas(filtrando_tareas)
})





