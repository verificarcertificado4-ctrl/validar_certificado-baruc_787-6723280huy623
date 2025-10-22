// Funcionalidad JavaScript
function verificarCertificado() {
    const codigoInput = document.getElementById('codigoInput').value.trim();
    const imagenDiv = document.getElementById('certificadoImagen');
    const imagenDiv2 = document.getElementById('certificadoImagen2');
    const mensajeP = document.getElementById('mensaje');

    // Limpiar resultados anteriores
    imagenDiv.style.display = 'none';
    mensajeP.textContent = '';
    mensajeP.className = 'mensaje';

    const codigo = codigoInput.toLowerCase()
    const codigoCorrecto ="gcatc-027";

    // --- Lógica de Verificación (Simulación) ---
    // **IMPORTANTE:** En una aplicación real, este código debería hacer
    // una llamada a un servidor (API) para verificar el código en una base de datos.
    
    if (codigo === codigoCorrecto) {
        // Código Correcto (Simulado)
        mensajeP.textContent = '✅ ¡Certificado Verificado Correctamente!';
        mensajeP.classList.add('exito');
        imagenDiv.style.display = 'block'; 
        imagenDiv2.style.display = 'block';
        // Mostrar la imagen del certificado
        // Puedes cambiar la imagen dinámicamente si es necesario
        // imagenDiv.src = 'ruta/al/certificado_real_' + codigo + '.jpg';
        

    } else if (codigo === '') {
        // Campo vacío
        mensajeP.textContent = 'Por favor, introduce un número de registro.';
        mensajeP.classList.add('error');

    } else {
        // Código Incorrecto (Simulado)
        mensajeP.textContent = '❌ Registro no válido.';
        mensajeP.classList.add('error');
    }
}