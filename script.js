// Inicializar requisitos
document.querySelectorAll('.subject').forEach(button => {
    let reqs = button.dataset.req ? button.dataset.req.split(',') : [];
    if (reqs.length > 0) {
        button.disabled = true;
    }
});

// Función para desbloquear materias
function checkUnlockables() {
    document.querySelectorAll('.subject').forEach(button => {
        if (button.disabled && button.dataset.req) {
            let requirements = button.dataset.req.split(',');
            let unlocked = requirements.every(id =>
                document.querySelector(`[data-id="${id}"]`).classList.contains('completed')
            );
            if (unlocked) {
                button.disabled = false;
            }
        }
    });
}

// Evento al hacer clic en una materia
document.querySelectorAll('.subject').forEach(button => {
    button.addEventListener('click', () => {
        if (!button.disabled) {
            button.classList.add('completed');
            button.disabled = true;
            checkUnlockables();
        }
    });
});
