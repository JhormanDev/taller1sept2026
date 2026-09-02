const historial = [];

$("#calculadoraForm").submit((e) => {
  e.preventDefault();

  const datos = {
    n1: Number($("#numero1").val()),
    n2: Number($("#numero2").val()),
    op: $("#operacion").val(),
  };

  const { n1, n2, op } = datos;

  console.log("---- NUEVA OPERACION ----");
  console.log("Operacion solicitada:", op);
  console.log("Datos de entrada:", datos);

  if ($("#numero1").val() === "" || $("#numero2").val() === "") {
    $("#resultado").text("Ingrese ambos números");
    console.log("Error: Ingrese ambos números");
    console.log("Historial:", historial);
    return;
  }

  let resultado;

  switch (op) {
    case "suma":
      resultado = n1 + n2;
      break;

    case "resta":
      resultado = n1 - n2;
      break;

    case "multiplicacion":
      resultado = n1 * n2;
      break;

    case "division":
      if (n2 === 0) {
        $("#resultado").text("No se puede dividir entre cero");
        console.log("Error: No se puede dividir entre cero");
        console.log("Historial:", historial);
        return;
      }

      resultado = n1 / n2;
      break;
  }

  $("#resultado").text(`Resultado: ${resultado}`);

  let simbolo;

  if (op === "suma") {
    simbolo = "+";
  } else if (op === "resta") {
    simbolo = "-";
  } else if (op === "multiplicacion") {
    simbolo = "x";
  } else {
    simbolo = "÷";
  }

  historial.unshift(`${n1} ${simbolo} ${n2} = ${resultado}`);

  $("#historial").empty();

  historial.forEach((item) => {
    $("#historial").append(`<li>${item}</li>`);
  });

  console.log("Resultado:", resultado);
  console.log("Historial:", historial);
});