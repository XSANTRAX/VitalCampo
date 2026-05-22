const toggle = document.getElementById("darkMode-bt");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Modo claro"
    : "🌙 Modo oscuro";
});

document.addEventListener("DOMContentLoaded", function() {
  // Calendario con fechas deshabilitadas
  flatpickr("#fecha-cita", {
    dateFormat: "d/m/Y",
    minDate: "today",
    locale: "es",
    disable: [
      function(date) {
        return (date.getDay() === 0); // Deshabilitar domingos
      },
      "2026-04-25" // Ejemplo: fecha específica sin cupo
    ]
  });
});

