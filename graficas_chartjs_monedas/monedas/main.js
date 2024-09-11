// const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
// const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

async function api_general() {
  const api_total = await fetch("https://mindicador.cl/api/");
  const api_json = await api_total.json();
  const input_cantidad = document.querySelector("#input_pesos").value;
  const select_moneda = document.querySelector("#moneda_inicial").value;
  // console.log(input_cantidad, select_moneda)

  const obtener_valor_moneda = api_json[select_moneda].valor;
  const resultado = input_cantidad / obtener_valor_moneda;
  const mostrar = document.querySelector("#mostrando");
  mostrar.innerHTML = ` vale ${resultado} `

}
api_general()

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 6, max: 16 } }],
    }
  }
});