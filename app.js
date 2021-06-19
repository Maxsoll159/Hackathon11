const papa = document.getElementById("padre");
const carrito = document.getElementById("carrito");
const eliminarTodo = document.getElementById("eliminarTodo");

Carrito = [];
papa.addEventListener("click", (e) => {
  if (e.target.classList.contains("comprar")) {
    let titulo =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .firstElementChild.textContent;
    let precio = parseInt(
      e.target.parentElement.previousElementSibling.firstElementChild
        .nextElementSibling.nextElementSibling.textContent
    );
    let img = String(
      e.target.parentElement.previousElementSibling.firstElementChild
        .nextElementSibling.nextElementSibling.previousElementSibling
        .previousElementSibling.src
    );

    let objetoCursos = { titulo, precio, img };
    Carrito.push(objetoCursos);
    carritoInfo(Carrito);
  }
});
carrito.addEventListener("click", carritoInfo);

function carritoInfo(iems) {
  const recorrido1 = Carrito.map(function (car) {
    return car.titulo;
  });
  const recorrido2 = Carrito.map(function (car) {
    return car.precio;
  });
  const recorrido3 = Carrito.map(function (car) {
    return car.img;
  });

  const pinta = (document.getElementById(
    "infoCarrito"
  ).innerHTML = ` <div class="conten">
  <div class="contenhijo">
    <p>CURSO</p>
    <p>${recorrido1}</p>
  </div>
  <div class="contenhijo">
    <p>PRECIO</p>
    <p>${recorrido2}</p>
  </div>
  <div class="contenhijo">
    <p>FOTO</p>
    <img src="${recorrido3}" width="50">
  </div>
</div>`);
  document.getElementsByName("pe").value = recorrido1;
}

eliminarTodo.addEventListener("click", (e) => {
  carritoInfo();
  Carrito.length = 0;
  console.log(Carrito);
  const pinta = (document.getElementById(
    "infoCarrito"
  ).innerHTML = `<p>VACIO</p>`);
});
