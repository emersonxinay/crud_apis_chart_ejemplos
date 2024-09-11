let tareas = [];
let contadorID = 1

const ingresar = document.querySelector('#ingresar')
const mostrar = document.querySelector('#mostrar')
const seleccionar = document.querySelector('#seleccionar')
const agregarTarea = document.querySelector('#agregarTarea')

// Función para agregar tareas
const agregar = () => {
  const ingresando = ingresar.value;
  tareas.push({
    id: contadorID++,       // Asigna un ID basado en el índice
    nombre: ingresando,   // Toma el valor ingresado
    realizada: false,
  });
  mostrarTareas(); // Llama a la función para mostrar todas las tareas actualizadas
};
const contarTareasSeleccionadas = () => {
  const totalTareas = tareas.length
  // Filtra las tareas que están marcadas como realizadas
  const tareasRealizadas = tareas.filter(tarea => tarea.realizada);
  // Cuenta cuántas tareas están realizadas
  const totalRealizadas = tareasRealizadas.length;
  // Muestra el total de tareas realizadas en el HTML
  const realizados = document.querySelector('#realizadas');
  realizados.innerHTML = `${totalRealizadas}`;
  // tareas pendientes
  const totalPendientes = totalTareas - tareasRealizadas.length
  // Muestra el total de tareas pendientes en el HTML
  const pendientes = document.querySelector('#pendientes');
  pendientes.innerHTML = `${totalPendientes}`;

  // comparando 
  if (totalTareas === totalRealizadas) {
    alert('Todos los datos están realizados');
  }
};

// tareas pendientes
const contarTareasPendientes = () => {
  // Filtra las tareas que no están marcadas como realizadas
  const tareasPendientes = tareas.filter(tarea => !tarea.realizada);
  // Cuenta cuántas tareas están pendientes
  const totalPendientes = tareasPendientes.length;
  // Muestra el total de tareas pendientes en el HTML
  const pendientes = document.querySelector('#pendientes');
  pendientes.innerHTML = `${totalPendientes}`;
};

// Función para mostrar todas las tareas
const mostrarTareas = () => {
  mostrar.innerHTML = ''; // Limpia el contenido antes de mostrar las tareas
  tareas.forEach(({ id, nombre, realizada }) => {
    mostrar.innerHTML += `
                <tr>
                  <td>${id}</td>
                  <td>${nombre}</td>
                  <td><input type="checkbox" class="seleccionar" ${realizada ? 'checked' : ''}></td>
                  <td><button onclick="editar(${id})" >editar</button></td>
                  <td><button onclick="eliminar(${id})" >Eliminar</button></td>
                </tr>
    `;
  });
  // contar la cantidad de datos 
  const contar = document.querySelector('#total');
  contar.innerHTML = `${tareas.length}`;
  // contar los datos realizados
  const seleccionados = document.querySelectorAll('.seleccionar')
  seleccionados.forEach((checkbox, index) => {
    checkbox.addEventListener('change', function () {
      // Actualiza la tarea correspondiente en el array
      tareas[index].realizada = this.checked;
      contarTareasSeleccionadas(); // Actualiza el conteo de tareas seleccionadas

    });
  });
  contarTareasSeleccionadas();

};
// Evento para agregar tarea al presionar Enter
ingresar.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    agregar(ingresar.value);
    event.preventDefault(); // Evita el comportamiento por defecto del Enter en el input
    ingresar.value = ''; // Limpia el input después de agregar
  }
});

// funcion para eliminar
const eliminar = (id) => {
  const index = tareas.findIndex(tarea => tarea.id === id);
  tareas.splice(index, 1);
  mostrarTareas(); // Llama a la función para mostrar todas las tareas actualizadas
};

// función para editar
const editar = (id) => {
  const tarea = tareas.find((tarea) => tarea.id === id);
  const { nombre } = tarea;
  const nuevaDescripcion = prompt("Editar tarea:", nombre);
  tarea.nombre = nuevaDescripcion;
  mostrarTareas(); // Llama a la función para mostrar todas las tareas actualizadas
};


// Evento para seleccionar tareas


// Evento para agregar tarea al hacer clic en un botón
agregarTarea.addEventListener('click', () => {
  agregar(ingresar.value, tareas.length);
  ingresar.value = ''; // Limpia el input después de agregar
});
// funcion para contar cuantos datos tiene la lista 
