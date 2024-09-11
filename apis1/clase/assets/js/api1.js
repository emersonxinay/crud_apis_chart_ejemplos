// async function peticionApis() {

//   // console.log(data);
//   // console.log(data[2]['title']);
//   const obtener = await fetch("https://jsonplaceholder.typicode.com/posts")
//   const data = await obtener.json()
//   const datos = document.querySelector("#datos");
//   let template = "";
//   data.forEach(dat => {
//     template += `
//       <div id="content">
//       <h3> ${dat.title} </h3>
//       <p> ${dat.body} </p>
//       </div>
//     `
//   });
//   datos.innerHTML = template;
// }
// peticionApis()


// const apiURL = "https://api.gael.cloud/general/public/clima";
// async function getClimas() {
//   const res = await fetch(apiURL);
//   const climas = await res.json();
//   return climas;
// }



/*
async function renderClimas() {
  const res = await fetch("https://api.gael.cloud/general/public/clima");
  const climas = await res.json();
  // console.log(climas[0]['Estacion'])
  const climasSection = document.querySelector("#clima");
  let template = ""
  climas.forEach(clima => {
    template += `
      <div class="climas">
      <h3>${clima.Estacion}</h3>
      <p>${clima.Temp}°C</p>
      </div>
    `
  });
  climasSection.innerHTML = template;
}
renderClimas()


// Función para obtener los datos del clima
async function obtenerClima() {
  try {
    // Hacer la petición a la API
    const respuesta = await fetch('https://api.gael.cloud/general/public/clima');
    const datosClima = await respuesta.json();

    // Procesar los datos (por ejemplo, obtener las ciudades y las temperaturas)
    const ciudades = datosClima.map(ciudad => ciudad.Estacion);
    const temperaturas = datosClima.map(ciudad => parseFloat(ciudad.Temp));

    // Llamar a la función para crear el gráfico con los datos procesados
    crearGraficoClima(ciudades, temperaturas);
  } catch (error) {
    console.error('Error al obtener los datos del clima:', error);
  }
}

// Función para crear el gráfico con Chart.js
function crearGraficoClima(ciudades, temperaturas) {
  const ctx = document.getElementById('graficoClima').getContext('2d');

  new Chart(ctx, {
    type: 'line', // Gráfico de barras
    data: {
      labels: ciudades, // Etiquetas (nombres de las ciudades)
      datasets: [{
        label: 'Temperatura (°C)', // Etiqueta del dataset
        data: temperaturas, // Datos (temperaturas)
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
        borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true // Empezar en 0 en el eje Y
        }
      }
    }
  });
}

// Llamar a la función para obtener los datos y crear el gráfico
obtenerClima();

*/

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Mes', 'Ventas'],
    ['Enero', 100],
    ['Febrero', 120],
    ['Marzo', 150],
    ['Abril', 180],
    ['Mayo', 200]
  ]);

  var options = {
    title: 'Ventas mensuales',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

