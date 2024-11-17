function enviarDatos() {
    // Capturar los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const fecha_concierto = document.getElementById("fecha_concierto").value;
    const lugar_concierto = document.getElementById("lugar_concierto").value;
    const cantidad = document.getElementById("cantidad").value;
    const metodo_pago = document.querySelector('input[name="metodo_pago"]:checked').value;

    // Almacenar los datos en sessionStorage
    sessionStorage.setItem("nombre", nombre);
    sessionStorage.setItem("fecha_concierto", fecha_concierto);
    sessionStorage.setItem("lugar_concierto", lugar_concierto);
    sessionStorage.setItem("cantidad", cantidad);
    sessionStorage.setItem("metodo_pago", metodo_pago);

    // Redirigir a la página de confirmación
    window.location.href = "confirmacion.html";
}
