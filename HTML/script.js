// Obtiene una referencia al elemento HTML con el ID 'container'.
const container = document.getElementById('container');

// Obtiene una referencia al botón de registro (register).
const registerBtn = document.getElementById('register');

// Obtiene una referencia al botón de inicio de sesión (login).
const loginBtn = document.getElementById('login');

// Añade un 'event listener' al botón de registro.
// Cuando se hace clic en este botón, se ejecuta la función.
registerBtn.addEventListener('click', () => {
    // Añade la clase 'active' al contenedor principal.
    // Esta clase activa las animaciones CSS para mostrar el formulario de registro.
    container.classList.add("active");
});

// Añade un 'event listener' al botón de inicio de sesión.
// Cuando se hace clic en este botón, se ejecuta la función.
loginBtn.addEventListener('click', () => {
    // Elimina la clase 'active' del contenedor principal.
    // Esto revierte las animaciones CSS para mostrar el formulario de inicio de sesión.
    container.classList.remove("active");
});


// --- Lógica para la Ventana Modal de Recuperación de Contraseña ---

// Obtiene referencias a los elementos de la modal
const forgotPasswordLink = document.getElementById('forgot-password-link');
const modal = document.getElementById('forgot-password-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const recoveryForm = document.getElementById('recovery-form');
const recoveryEmailInput = document.getElementById('recovery-email');
const confirmationMessage = document.getElementById('confirmation-message');

// Event listener para abrir la modal cuando se hace clic en el enlace "¿Olvido su contraseña?"
forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que el enlace recargue la página
    modal.style.display = 'flex'; // Muestra la modal (usando flex para centrar)
    confirmationMessage.style.display = 'none'; // Oculta cualquier mensaje de confirmación previo
    recoveryEmailInput.value = ''; // Limpia el campo de email
});

// Event listener para cerrar la modal cuando se hace clic en la 'X'
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Oculta la modal
});

// Event listener para simular el envío del formulario de recuperación
recoveryForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita el envío real del formulario

    const email = recoveryEmailInput.value;
    // Aquí podrías añadir una validación básica del email si lo deseas

    // Simula el envío y muestra un mensaje de confirmación
    confirmationMessage.textContent = `Si existe una cuenta asociada a ${email}, recibirás un enlace para restablecer tu contraseña.`;
    confirmationMessage.style.display = 'block'; // Muestra el mensaje

    // Opcional: Podrías cerrar la modal automáticamente después de unos segundos
    // setTimeout(() => {
    //     modal.style.display = 'none';
    // }, 5000); 
});