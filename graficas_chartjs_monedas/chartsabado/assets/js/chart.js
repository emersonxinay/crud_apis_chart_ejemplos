// crear los arreglos 
// const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
// const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

// mostrando gráfica de apis 
async function mostrandoapis() {
  try {
    const responde = await fetch("https://mindicador.cl/api/dolar")
    const apijson = await responde.json()
    return apijson
  } catch (error) {
    alert("error al hacer peticion de APIs", error)
  }

}
mostrandoapis()
// obteniendo el arreglo para el eje X
async function ejex_fechas() {
  const apicompleta = await mostrandoapis()
  const fechas = apicompleta.serie.map(item => item.fecha).reverse()
  // console.log(fechas.length)
  return fechas
}
ejex_fechas()

// obteniendo el arreglo para el eje y
async function ejey_valores() {
  const apicompleta = await mostrandoapis()
  const valores = apicompleta.serie.map(item => item.valor)
  // console.log(valores.length)
  return valores
}
ejey_valores()


async function mostrarGrafica() {
  try {
    const xValues = await ejex_fechas();
    const yValues = await ejey_valores();
    const myChart = new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            data: yValues
          }
        ]
      },
      options: {

      }
    });
  } catch (error) {
    const etiqueta = document.querySelector('.error');
    etiqueta.innerHTML = "Error con la API: " + error.message
  }


}
mostrarGrafica()

