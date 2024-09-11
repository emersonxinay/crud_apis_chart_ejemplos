// Array de datos
const datos2 = [
  { nombre: 'Manzana', categoria: 'Fruta' },
  { nombre: 'Espinaca', categoria: 'Verdura' },
  { nombre: 'Banana', categoria: 'Fruta' },
  { nombre: 'Zanahoria', categoria: 'Verdura' }
];


const datos = [
  {
    "name": "Bulldog",
    "breed": "bulldog",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  },
  {
    "name": "Beagle",
    "breed": "beagle",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  },
  {
    "name": "Poodle",
    "breed": "poodle",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  },
  {
    "name": "Labrador",
    "breed": "labrador",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  },
  {
    "name": "Golden Retriever",
    "breed": "golden retriever",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  },
  {
    "name": "German Shepherd",
    "breed": "germanshepherd",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  },
  {
    "name": "Dachshund",
    "breed": "dachshund",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  },
  {
    "name": "Siberian Husky",
    "breed": "husky",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  },
  {
    "name": "Boxer",
    "breed": "boxer",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  },
  {
    "name": "Shih Tzu",
    "breed": "shihtzu",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  },
  {
    "name": "Cocker Spaniel",
    "breed": "cocker",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  },
  {
    "name": "Chihuahua",
    "breed": "chihuahua",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  },
  {
    "name": "Pomeranian",
    "breed": "pomeranian",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  },
  {
    "name": "Rottweiler",
    "breed": "rottweiler",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  },
  {
    "name": "Yorkshire Terrier",
    "breed": "yorkshire",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  },
  {
    "name": "Great Dane",
    "breed": "greatdane",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  },
  {
    "name": "Pug",
    "breed": "pug",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  },
  {
    "name": "Airedale Terrier",
    "breed": "airedale",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  },
  {
    "name": "Border Collie",
    "breed": "bordercollie",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  },
  {
    "name": "Bichon Frise",
    "breed": "bichon",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  },
  {
    "name": "Schnauzer",
    "breed": "schnauzer",
    "image": { "url": "https://randomuser.me/api/portraits/men/" }
  }
];

const cajaentrada = document.querySelector('#searchInput');
const resultados = document.querySelector('#results');

// Función para mostrar resultados en el DOM

function mostrarResultados(filtrados) {
  resultados.innerHTML = '';  // limpia la lista antes de agregar los nuevos resultados
  filtrados.forEach((fruta, indice) => {
    resultados.innerHTML += `
          <div class="contenedor">
            <article>
              <h2> ${fruta.name}</h2>
              <p>${fruta.breed}</p>
              <img id="imagen" src="${fruta.image.url + indice}.jpg" alt="">
            </article>
          </div>
    `;
  });
}

// const buscador = () => {
//   // convertirlo todo a minuscula
//   const valor = cajaentrada.value.toLowerCase();
//   // filtrar los datos
//   const filtrando = datos.filter(x => x.nombre.toLowerCase().includes(valor) || x.categoria.toLowerCase().includes(valor))
//   mostrarResultados(filtrando);
// }
const buscador = () => {
  // convertirlo todo a minuscula
  const valor = cajaentrada.value.toLowerCase();
  // filtrar los datos
  const filtrando = datos.filter(x => x.name.toLowerCase().includes(valor) || x.breed.toLowerCase().includes(valor))
  mostrarResultados(filtrando);
}

// Evento de busqueda
cajaentrada.addEventListener('input', buscador)

// Inicialmente muestra todos los datos
mostrarResultados(datos);