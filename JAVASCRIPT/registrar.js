const formRegister = document.getElementById('formulario');
const NombreJs = document.getElementById('nombre');
const CorreoJs = document.getElementById('email');
const ContraJs = document.getElementById('contraseña');
const ContraConfirm = document.getElementById('contraseña2');

const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

formRegister.addEventListener('submit', (e) => {
    e.preventDefault(); 

    let valid = true; 

    if (NombreJs.value.trim().length < 3) {
        alert('El nombre debe tener al menos 3 caracteres.');
        valid = false;
    }

    if (!regexEmail.test(CorreoJs.value.trim())) {
        alert('Por favor, ingresa un correo electrónico válido.');
        valid = false;
    }

    if (ContraJs.value.trim().length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        valid = false;
    }

    if (ContraJs.value.trim() !== ContraConfirm.value.trim()) {
        alert('Las contraseñas no coinciden.');
        valid = false;
    }

    if (
        NombreJs.value.trim() === '' ||
        CorreoJs.value.trim() === '' ||
        ContraJs.value.trim() === '' ||
        ContraConfirm.value.trim() === ''
    ) {
        alert('Por favor, completa todos los campos.');
        valid = false;
    }

    if (valid) {
        alert('Registro exitoso.');
        window.location.href = 'index.html';
    }
});