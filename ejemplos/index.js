const peliculas = [
  { id: 1, nombre: "Thor" },
  { id: 2, nombre: "Ant-Man" },
  { id: 3, nombre: "Terminator" },
  { id: 4, nombre: "Ip Man" },
  { id: 5, nombre: "Rocky" },
]

// eliminar la pelicula "Terminator"

console.log(peliculas)

const buscar = peliculas.findIndex((buscador) => {
  return buscador.nombre === "Terminator"
})
console.log(buscar)

const indice = peliculas.splice(buscar, 1)

console.log(peliculas)

const estaciones = ["Verano", "Otoño", "Invierno", "Primavera"];
estaciones.forEach(x => console.log(x)) /* con arrow functions */
estaciones.forEach(function (x) {
  console.log(x);
}
);

// crear elementos en base a foreach


const body = document.querySelector('#dato1');
const valores = [200, 300, 180, 99, 500]


valores.forEach(x => { body.innerHTML += ` <li> <p> valor: ${x} </p> </li>` });

// crear una nueva lista con map e insertar

const nuevaList = valores.map(x => x * 2);
console.log(nuevaList)

const lista = document.querySelector('#dato2');
nuevaList.forEach(x => { lista.innerHTML += `<li> <p> valor: ${x} </p> </li>` });

// filtrando los datos 
const filtrar = valores.filter(x => x > 200)
const filtrando = document.querySelector('#dato3');
filtrar.forEach(x => { filtrando.innerHTML += `<li> <p> valor: ${x} </p> </li>` });

// filtrando los datos arreglos con objtos 
const estudiantes = [
  { nombre: "Juan", nota: 3.4 },
  { nombre: "Laura", nota: 6 },
  { nombre: "Katherine", nota: 4.3 },
  { nombre: "Jonathan", nota: 5.4 }
];

const estudiante = document.querySelector('#dato4');
const filtrando_notas = estudiantes.filter(y => y.nota >= 4)
console.table(filtrando_notas);
filtrando_notas.forEach(x => { estudiante.innerHTML += `<li> <p> nombre: ${x.nombre}, Nota: ${x.nota} </p> </li>` });

// usando for of

const estacion1 = document.querySelector('#dato5');
for (let estacion of estudiantes) {
  estacion1.innerHTML += `<li> <p> Estación: ${estacion.nombre} </p> </li>`
}

// ordenando 


const estudiantesOrdenado = estudiantes.sort((x, y) => x.nombre.localeCompare(y.nombre));
console.table(estudiantesOrdenado)
// insertar al html
const estacion2 = document.querySelector('#dato6');
estudiantesOrdenado.forEach(x => { estacion2.innerHTML += `<li> <p> Estación: ${x.nombre} </p> </li>` });

const listaDeInvitados = document.querySelector("#invitados")
const invitadoInput = document.querySelector("#nuevoInvitado")
const btnAgregar = document.querySelector("#agregarInvitado")


const invitados = []
btnAgregar.addEventListener("click", () => {
  /* Agregamos el invitado al arreglo */
  const nombreInvitado = invitadoInput.value
  invitados.push(nombreInvitado)
  invitadoInput.value = ""
  /* Actualizamos la información en el HTML */
  let html = ""
  for (let invitado of invitados) {
    html += `<li>${invitado}</li>`;
  }
  listaDeInvitados.innerHTML = html;
})