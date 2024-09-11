const select_moneda_inicial = document.querySelector("#moneda_inicial");
const select_moneda_final = document.querySelector("#moneda_final");
const input_pesos = document.querySelector("#input_pesos");
const btnconvertir = document.querySelector("#convertir");
const resultado = document.querySelector("#resultados");
const valor_dolar = document.querySelector("#clp");
// funcion para obtener los datos y la api
async function obtener_api_moneda() {
  const cantidad = parseFloat(input_pesos.value)
  const moneda_inicial = select_moneda_inicial.value;
  const moneda_final = select_moneda_final.value;
  console.log(moneda_inicial, moneda_final)

  try {
    const rsta_api = await fetch("https://mindicador.cl/api/")
    const datos_api = await rsta_api.json();
    // console.log(datos_api)
    // valores de moneda inicial y final 
    if (moneda_inicial === 'clp') {
      // Conversión de pesos chilenos a cualquier moneda
      const valor_moneda_inicial = 1; // 1 peso chileno es igual a 1 peso chileno
      const valor_moneda_final = datos_api[moneda_final].valor; // tipo de cambio de la moneda final con respecto al peso chileno
      const resultado_conversion = cantidad * (valor_moneda_inicial / valor_moneda_final);
      resultado.innerHTML = `${cantidad} ${moneda_inicial} equivale a ${resultado_conversion.toLocaleString('es-CL')} ${moneda_final}`;
    } else if (moneda_final === 'clp') {
      // Conversión de cualquier moneda a pesos chilenos
      const valor_moneda_inicial = datos_api[moneda_inicial].valor; // tipo de cambio de la moneda inicial con respecto al peso chileno
      const valor_moneda_final = 1; // 1 peso chileno es igual a 1 peso chileno
      const resultado_conversion = cantidad * (valor_moneda_inicial / valor_moneda_final);
      resultado.innerHTML = `${cantidad} ${moneda_inicial} equivale a ${resultado_conversion.toLocaleString('es-CL')} ${moneda_final}`;
    } else {
      // Conversión entre dos monedas diferentes
      const valor_moneda_inicial = datos_api[moneda_inicial].valor; // tipo de cambio de la moneda inicial con respecto al peso chileno
      const valor_moneda_final = datos_api[moneda_final].valor; // tipo de cambio de la moneda final con respecto al peso chileno
      const resultado_conversion = cantidad * (valor_moneda_final / valor_moneda_inicial);
      resultado.innerHTML = `${cantidad} ${moneda_inicial} equivale a ${resultado_conversion.toLocaleString('es-CL')} ${moneda_final}`;
    }


  }
  catch (e) {
    resultado.innerHTML = `Error al obtener datos de la API ${console.error(e)} `;
  }
}

async function valor_dolares() {
  const rsta_api = await fetch("https://mindicador.cl/api/")
  const datos_api = await rsta_api.json();
  valor_dolar.innerHTML = `${datos_api['dolar'].valor}`
}

valor_dolares();

input_pesos.addEventListener('input', obtener_api_moneda);
btnconvertir.addEventListener('click', obtener_api_moneda);

//:::::::::::>>>>>>>>> función para mostrar gráficas con google chart
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

async function drawChart() {
  // Obtener la moneda seleccionada por el usuario
  const moneda_final = select_moneda_final.value;

  try {
    // Obtener los datos de la moneda seleccionada
    const respuesta = await fetch(`https://mindicador.cl/api/${moneda_final}`);
    const datos = await respuesta.json();

    // Convertir los datos a un formato que Google Charts entienda
    const nueva_data = datos.serie.map((valor) => [new Date(valor.fecha), valor.valor]);

    const data = google.visualization.arrayToDataTable([
      ['Fecha', 'Valor'], ...nueva_data
    ]);

    // Opciones de configuración del gráfico
    const options = {
      legend: '',
      pointSize: 5,
      series: {
        0: { pointShape: 'diamond' }
      }
    };

    // Dibujar el gráfico en el div con id 'chart_div'
    const chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  } catch (error) {
    console.error('Error al obtener los datos de la API para la gráfica', error);
  }
}

// Redibujar la gráfica cuando se seleccione una nueva moneda final
select_moneda_final.addEventListener('change', drawChart);
