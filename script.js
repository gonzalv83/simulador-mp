
function mostrarPantalla() {
  const valor = document.getElementById("price").value;
  const formateado = new Intl.NumberFormat('es-AR').format(valor);
  document.getElementById("precio-dinamico").textContent = formateado;
  document.getElementById("input-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "block";
}
