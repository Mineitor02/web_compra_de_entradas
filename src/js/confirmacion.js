// Obtener los datos desde sessionStorage y mostrarlos
document.getElementById('nombre').innerText = sessionStorage.getItem("nombre");
document.getElementById('fecha_concierto').innerText = sessionStorage.getItem("fecha_concierto");
document.getElementById('lugar_concierto').innerText = sessionStorage.getItem("lugar_concierto");
document.getElementById('cantidad').innerText = sessionStorage.getItem("cantidad");
document.getElementById('metodo_pago').innerText = sessionStorage.getItem("metodo_pago");

// Limpiar sessionStorage si ya no se necesitan los datos
sessionStorage.clear();
