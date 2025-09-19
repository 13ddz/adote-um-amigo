// script.js

// Mostrar alerta de envio nos formulários
document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");

    forms.forEach((form) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Evita o envio real

            alert("Formulário enviado com sucesso. Obrigado por enviar! 🐾");

            form.reset(); // Limpa os campos
        });
    });
});
