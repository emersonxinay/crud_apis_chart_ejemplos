const pesosInput = document.querySelector("input");
const monedaSelect = document.querySelector(".moneda-select");
const btn = document.querySelector("button");
const span = document.querySelector("span");
const urlBase = "https://mindicador.cl/api";
let myChart = null;

btn.addEventListener("click", async () => {
  const { value: pesos } = pesosInput;
  const { value: monedaSelected } = monedaSelect;

  const valorDeLaMoneda = await search(monedaSelected);
  const valorFinal = (pesos / valorDeLaMoneda).toFixed(2);
  span.innerHTML = `Resultado: $${valorFinal}`;
});

async function search(moneda) {
  try {
    const res = await fetch(`${urlBase}/${moneda}`);
    const data = await res.json();
    const { serie } = data;
    const datos = createDataToChart(serie.slice(0, 10).reverse());

    if (myChart) {
      myChart.destroy();
    }

    renderGrafica(datos);
    const [{ valor: valorDeLaMoneda }] = serie;
    return valorDeLaMoneda;
  } catch (error) {
    alert("oh oh...");
    console.log(error);
  }
}

function renderGrafica(data) {
  const config = {
    type: "line",
    data,
  };
  const canvas = document.getElementById("myChart");
  canvas.style.backgroundColor = "rgba(20, 36, 217, 0.281)";
  if (myChart) {
    myChart.destroy();
  }
  myChart = new Chart(canvas, config);
}

function createDataToChart(serie) {
  const labels = serie.map(({ fecha }) => formatDate(fecha));
  const data = serie.map(({ valor }) => valor);
  const datasets = [
    {
      label: "Historial últimos 10 días",
      borderColor: "rgb(255, 99, 132)",
      data,
    },
  ];
  return { labels, datasets };
}

function formatDate(date) {
  date = new Date(date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}

