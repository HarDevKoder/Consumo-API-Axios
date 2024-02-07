// Funcion que busca datos de un registro de la API
const buscarDatosRegistroApi = () => {
  const inputId = document.querySelector(".inputId");
  const filaDatos = document.querySelector('.filaDatos');
  const tablaResultados = document.querySelector('.tablaResultados');

  inputId.focus();
  tablaResultados.style.display='none';
  inputId.addEventListener("input", () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")

      .then((respuesta) => {
        let registro = inputId.value;
        if (registro !== "") {
          let registro = Number(inputId.value) - 1;

          let datoCompleto = respuesta.data;
          if (registro >= 0 && registro < datoCompleto.length) {
            let [nombre, usuario, email] = [
              datoCompleto[registro].name,
              datoCompleto[registro].username,
              datoCompleto[registro].email,
            ];

            let datoAMostrar = `
              <td>${nombre}</td>
              <td>${usuario}</td>
              <td>${email}</td>`;

            tablaResultados.style.display = "block";
            filaDatos.innerHTML = datoAMostrar;

          } else {
            alert("El valor ingresado debe estar entre 1 y 10");
            location.reload();
          }

        } else {
          location.reload();
        }
      })

      .catch((error) => console.error("se ha producido el error:", error));
  });
};

// PROGRAMA PRINCIPAL
buscarDatosRegistroApi();
