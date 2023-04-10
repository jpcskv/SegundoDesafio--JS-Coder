const productos = [
    { nombre: "Vinil Rock", precio: 25 },
    { nombre: "Vinil Pop", precio: 30 },
    { nombre: "Vinil Rap", precio: 15 },
    { nombre: "Vinil Romantico", precio: 8 },
  ];

  let carrito = [];
  let nombre = "";
  let apellido = "";
  let telefono = 0;


function ingresoDeDatos() {
    nombre += prompt("Ingresa tu nombre");
    apellido += prompt("ingresa tu apellido");
    telefono += parseInt(prompt("ingresa tu numero telefonico")
    );
    let datosComprador = `-Nombre: ${nombre}\n-Apellido: ${apellido}\n-Telefono: ${telefono}\n`;
    return datosComprador;
  }
  
  let validaccionDatos = prompt(
    `Los datos:\n${ingresoDeDatos()}\nson correctos? \nresponda con un "si" o "no"`
  );
  while (validaccionDatos != "si" && validaccionDatos != "no") {
    confirmacion = prompt(`Responde con "si" o "no"`);
    validaccionDatos = confirmacion;
  }


if (validaccionDatos === "si") {
    alert(
      "A continuacion nuestros productos disponibles.\nSelecciona cual o cuales deseas de la siguiente lista:"
    );
    let listaDeProductos = productos.map(
      (producto) => producto.nombre + " - " + "$" + producto.precio
    );
    alert(listaDeProductos.join("\n"));
  } else {
    alert("Muchas gracias, ¡hasta la proxima!");
  }
  function comprar() {
  
  
    let id = "";
    while (id != "salir") {
      id = prompt(
        `ingresa el nombre del disco o finaliza tu compra escribiendo la palabra "salir"`
      );
      if (
        id == "Vinil Rock" ||
        id == "Vinil Pop" ||
        id == "Vinil Rap" ||
        id == "Vinil Romantico" 
      ) {
        switch (id) {
            case "Vinil Rock":
              precio = 25
            case "Vinil Pop":
              precio = 30;
              break;
            case "Vinil Rap":
              precio = 15;
              break;
            case "Vinil Romantico":
              precio = 8;
              break;
          }
        let cantidad = parseInt(prompt("¿Cuantos discos quieres?"));
        carrito.push({ id, precio, cantidad });
      }
    }
  

    let compra = carrito.map((e) => e.id + " - " + "$" + e.precio * e.cantidad);
    alert(`Los discos seleccionados son:\n${compra.join("\n")}`);
    const total = carrito.reduce(
      (acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad,
      0
    );
    alert(`El total a pagar es de: $${total}`);


  }
  comprar();
  
  let terminarCompra = prompt(`confirmar compra?\n("si" - "no")`);
  while (terminarCompra !== "no" || terminarCompra !== "si") {
    if (terminarCompra == "si") {
      alert(
        `Gracias ${nombre} por tu compra!!\n Para realizar el envio nos comunicaremos al numero ${telefono}`
      );
      break;
    } else if (terminarCompra == "no") {
      alert(`Muchas gracias, te esperamos la proxima!!`);
      break;
    } else {
      alert(`responde con "si" o "no"`);
      terminarCompra = prompt(`confirmar compra?\n("si" - "no")`);
    }
  }

