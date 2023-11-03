// Para calcular Valor de Tickets

// Click para saber Cantidad
let ticketsQuantity = document.querySelector(".ticketsQuantity");
ticketsQuantity.addEventListener("click", clearInput);

// Para elegir Categoria
let ticketsCategory = document.querySelector(".ticketsCategory");
ticketsCategory.addEventListener("click", descuento);

// Para seleccionar la Categoria
let discountStudent = document.querySelector(".ortodonciaMetalica");
discountStudent.addEventListener("click", updateCategory);
let discountTrainee = document.querySelector(".ortodonciaInvisible");
discountTrainee.addEventListener("click", updateCategory);
let discountJunior = document.querySelector(".bracketsOcultos");
discountJunior.addEventListener("click", updateCategory);

// Click para Limpiar
let ticketsBorrar = document.querySelector("#ticketsBorrar");
ticketsBorrar.addEventListener("click", borrarOutput);

// Click para el Resúmen
let ticketsResumen = document.querySelector("#ticketsResumen");
ticketsResumen.addEventListener("click", ticketsPrice);

// FUNCIONES

function ticketsPrice(evento) {
  // Se usa preventDefault() para evitar que se refresque el formualario
  evento.preventDefault();

  // se lee la cantidad
  let ticketsQuantity = document.querySelector(".ticketsQuantity");

  if (Number(ticketsQuantity.value)) {
    let ticketsCategory = document.querySelector(".ticketsCategory");
    let totalPayment;

    switch (ticketsCategory.value) {
        case "OrtodonciaMetalica": {
          totalPayment = 200 * ticketsQuantity.value * 0.2;
          break; 
        }
        case "OrtodonciaInvisible": {
          totalPayment = 200 * ticketsQuantity.value * 0.5;
          break; 
        }
        case "BracketsOcultos": {
          totalPayment = 200 * ticketsQuantity.value * 0.85;
          break; 
        }
    }

    document.querySelector(".ticketsOutput").textContent = `Total a pagar: $${totalPayment}`;
    let outputNode = document.querySelector(".ticketsOutput");
    let spanNode = document.createElement("span");
    spanNode.className = 'ticketsBuy';
    let textNode = document.createTextNode("Comprar");
    spanNode.append(textNode);
    outputNode.append(spanNode);

    // Para Span ticketBuy
    let ticketsBuy = document.querySelector(".ticketsBuy");
    ticketsBuy.addEventListener("click", ticketsSubmit);


  } else {
    document.querySelector(".ticketsQuantity").style.border = "2px solid red";
    ticketsQuantity.value = "";
    ticketsQuantity.placeholder = "Ingrese una cantidad válida";
  }
}

// Función Borrar
function borrarOutput() { 
  document.querySelector(".ticketsOutput").textContent = "Total a pagar:";

  let form = document.querySelector(".ticketsForm");
  for (i = 0; i < 4; i++) {
    document.querySelector("." + form[i].className).style.border = "1px solid red";

  }
}

// Funcion ApdateCategory
function updateCategory(evento) {
  //console.log(document.querySelector(".ticketsCategory"));
  let categoria = evento.target.parentNode.className;

  switch (categoria) {
      case "ortodonciaMetalica": {
        console.log("es ortodonciaMetalica");
        document.querySelector(".ticketsCategory").options.selectedIndex = 0;
        document.querySelector(".ortodonciaMetalica").style.backgroundColor = "#f2f2f2";
        document.querySelector(".ortodonciaInvisible").style.backgroundColor = "transparent";
        document.querySelector(".bracketsOcultos").style.backgroundColor = "transparent";
        break
      }
      case "ortodonciaInvisible": {
        console.log("es ortodonciaInvisible");
        document.querySelector(".ticketsCategory").options.selectedIndex = 1;
        document.querySelector(".ortodonciaMetalica").style.backgroundColor = "transparent";
        document.querySelector(".ortodonciaInvisible").style.backgroundColor = "#f2f2f2";
        document.querySelector(".bracketsOcultos").style.backgroundColor = "transparent";
        break
      }
      case "bracketsOcultos": {
        console.log("es bracketsOcultos");
        document.querySelector(".ticketsCategory").options.selectedIndex = 2;
        document.querySelector(".ortodonciaMetalica").style.backgroundColor = "transparent";
        document.querySelector(".ortodonciaInvisible").style.backgroundColor = "transparent";
        document.querySelector(".bracketsOcultos").style.backgroundColor = "#f2f2f2";
        break
      }
  }
}

// FUNCION ticketsSubmit
function ticketsSubmit() {

  let form = document.querySelector(".ticketsForm");

  inputCheck(form);

  function inputCheck(form) {
    let arrayCheck = [];
    for (i = 0; i < 3; i++) {
      arrayCheck[i] = form[i].value;
      if (form[i].value == "") {
        document.querySelector("." + form[i].className).style.border = "2px solid red";  
      } else {
        document.querySelector("." + form[i].className).style.border = "1px solid var(--gray-300)"; 
      }
    }

    if (arrayCheck.every(element => element !="")) {
      if (form[2].value.includes('@') && form[2].value.includes('.')) {
          alert("Formulario enviado");
          form.submit();
          document.querySelector("." + form[2].className).style.border = "1px solid var(--gray-300)";
      } else {
          alert("Debe ingresar un correo válido");
          document.querySelector("." + form[2].className).style.border = "2px solid red";
      }

    } else {
        alert("Completar los campos en Rojo");
    }

  }
}

// Función CLEARINPUT
function clearInput(evento) {
  // console.log(typeof(evento.target.value));
  document.querySelector("." + evento.target.className).style.border = "1px solid var(--gray-300)";
}

// Funcion DESCUENTO
function descuento(evento) {
  // console.log(typeof(evento.target.value));
  switch (evento.target.value) {
    case "OrtodonciaMetalica": {
      document.querySelector(".ortodonciaMetalica").style.backgroundColor = "#f2f2f2";
      document.querySelector(".ortodonciaInvisible").style.backgroundColor = "transparent";
      document.querySelector(".bracketsOcultos").style.backgroundColor = "transparent";
      break;
    }
    case "OrtodonciaInvisible": {
      document.querySelector(".ortodonciaMetalica").style.backgroundColor = "transparent";
      document.querySelector(".ortodonciaInvisible").style.backgroundColor = "#f2f2f2";
      document.querySelector(".bracketsOcultos").style.backgroundColor = "transparent";
      break;
    }
    case "BracketsOcultos": {
      document.querySelector(".ortodonciaMetalica").style.backgroundColor = "transparent";
      document.querySelector(".ortodonciaInvisible").style.backgroundColor = "transparent";
      document.querySelector(".bracketsOcultos").style.backgroundColor = "#f2f2f2";
      break;
    }
  }
}

