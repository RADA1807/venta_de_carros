document.addEventListener("DOMContentLoaded", function () {
    let footer = document.createElement("footer");
    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-section">
                <h3>Contacto</h3>
                <p>📍 Ubicación: San Roque, Alajuela, Costa Rica</p>
                <p>📞 Teléfono: +506 1234-5678</p>
                <p>✉ Email: contacto@autosandrade.com</p>
            </div>

            <div class="footer-section">
                <h3>Redes Sociales</h3>
                <a href="https://facebook.com">Facebook</a>
                <a href="https://instagram.com">Instagram</a>
                <a href="https://twitter.com">Twitter</a>
            </div>

            <div class="footer-section">
                <h3>Información Legal</h3>
                <p>© 2025 Autos Andrade. Todos los derechos reservados.</p>
            </div>
        </div>
    `;
    document.body.appendChild(footer);
});
