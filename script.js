const modalInicio = document.getElementById('modal-content-primero');
const modalSegundo = document.getElementById('modal-content-segundo');
const btnIniciar = document.getElementById('btn-iniciar');
const btnContinuar = document.getElementById('btn-continuar');
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const textoPersonalizado = document.getElementById('texto-personalizado');

// Función para mostrar un modal
function mostrarModal(modal) {
    modal.style.display = 'flex';
}

// Función para ocultar un modal
function ocultarModal(modal) {
    modal.style.display = 'none';
}

// Función para reproducir un video
function reproducirVideo(video) {
    video.style.display = 'block';
    video.play();
}

// Función para simular la máquina de escribir
function escribirTexto(texto) {
    let i = 0;
    const escribir = setInterval(() => {
        textoPersonalizado.textContent += texto.charAt(i);
        i++;
        if (i === texto.length) {
            btnContinuar.style.display = 'block';
            clearInterval(escribir)
            
        };
    }, 50);
}

// Eventos
btnIniciar.addEventListener('click', () => {
    ocultarModal(modalInicio);
    reproducirVideo(video1);
    video1.addEventListener('ended', () => {
        video1.style.display = 'none';
        mostrarModal(modalSegundo);
        escribirTexto("Hi Nika, this is Mission Control. We just wanted to check in and see how you're doing up there. How’s everything going? Are you feeling okay? Please let us know if you need anything or if there's anything unusual you’ve noticed. We’re here and monitoring everything closely, but your feedback is important to us. Stay safe and talk to you soon!");
    });
});

btnContinuar.addEventListener('click', () => {
    ocultarModal(modalSegundo);
    reproducirVideo(video2);
})