// async function getSomething() {
//   try {
//     const res = await fetch("https://estapaginanoexiste.cl");
//     const data = await res.json();
//     console.log(data);
//   } catch (e) {
//     alert(e.message);
//   }
// }
// getSomething();

async function existencia() {
  try {
    const respuesta = await fetch("https://jsonplasdsdsdsceholder.typicode.com/posts")
    const data = await respuesta.json();
    console.log(data);
  } catch (error) {
    console.log("Error en tu API", error)
    if (condition) {

    } else {

    }
  }
}
existencia()

// crear grafica
const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];
const barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {}
});