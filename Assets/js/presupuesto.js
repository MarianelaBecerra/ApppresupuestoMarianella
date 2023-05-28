const botonCalcular = document.getElementById('boton-calcular');
const entradaPresupuesto = document.getElementById('entrada-presupuesto');
const entradaNombreGasto = document.getElementById('entrada-nombre-gasto');
const entradaCantidadGasto = document.getElementById('entrada-cantidad-gasto');
const presupuestoValor = document.getElementById('presupuesto-valor');
const gastoValor = document.getElementById('gasto-valor');
const saldoValor = document.getElementById('saldo-valor');
const listaGastos = document.getElementById('lista-gastos');

botonCalcular.addEventListener('click', () => {
  const presupuesto = parseFloat(entradaPresupuesto.value);
  const cantidadGasto = parseFloat(entradaCantidadGasto.value);

  presupuestoValor.textContent = `$${presupuesto.toFixed(2)}`;
  gastoValor.textContent = `$${cantidadGasto.toFixed(2)}`;
  saldoValor.textContent = `$${(presupuesto - cantidadGasto).toFixed(2)}`;

  const nuevoGasto = document.createElement('li');
  nuevoGasto.textContent = `${entradaNombreGasto.value}: $${cantidadGasto.toFixed(2)}`;
  listaGastos.appendChild(nuevoGasto);

  entradaNombreGasto.value = '';
  entradaCantidadGasto.value = '';
});