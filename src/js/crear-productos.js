// Validación del formulario
function validarFormulario() {
    // Nombre
    var nombre = document.getElementById("nombre").value;
    if (nombre === "") {
      alert("El nombre es obligatorio.");
      return false;
    }
  
    // Precio
    var precio = document.getElementById("precio").value;
    if (precio === "") {
      alert("El precio es obligatorio.");
      return false;
    }
  
    // Categoría
    var categoria = document.getElementById("categoria").value;
    if (categoria === "") {
      alert("La categoría es obligatoria.");
      return false;
    }
  
    // Foto
    var foto = document.getElementById("foto").files[0];
    if (foto === undefined) {
      alert("La foto es obligatoria.");
      return false;
    }
  
    return true;
  }
  
  // Eventos del formulario
  document.getElementById("form").addEventListener("submit", function(e) {
    // Validar el formulario antes de enviarlo
    if (!validarFormulario()) {
      e.preventDefault();
    }
  });