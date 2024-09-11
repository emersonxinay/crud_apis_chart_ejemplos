const inputCantidad = document.getElementById('cantidad');
const selectMonedaInicial = document.getElementById('moneda-inicial');
const selectMonedaFinal = document.getElementById('moneda-final');
const botonConvertir = document.getElementById('convertir');
const parrafoResultado = document.getElementById('resultado');

inputCantidad.addEventListener('input', async () => {
  const cantidad = parseFloat(inputCantidad.value);
  const monedaInicial = selectMonedaInicial.value;
  const monedaFinal = selectMonedaFinal.value;

  try {
    const respuesta = await fetch('https://mindicador.cl/api/');
    const datos = await respuesta.json();
    // console.log(datos.dolar.valor);

    const valorMonedaInicial = datos[monedaInicial].valor;
    const valorMonedaFinal = datos[monedaFinal].valor;

    const resultado = cantidad * (valorMonedaFinal / valorMonedaInicial);

    parrafoResultado.innerHTML = `El valor del dolar: ${datos['dolar'].valor} y  de ${cantidad} ${monedaInicial} es: ${resultado.toFixed(2)} ${monedaFinal}`;
  } catch (error) {
    console.error(error);
  }
});

