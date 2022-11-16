document.addEventListener('DOMContentLoaded', function() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-tooltip="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    let passwordEl = document.getElementById('password');
    let passwordBtn = document.getElementById('password-btn');
    let passwordIcon = document.getElementById('password-icon');

    passwordBtn.addEventListener('click', () => {
        if (passwordEl.type === 'password') {
            passwordEl.type = 'text';
            passwordIcon.innerHTML = 'visibility_off';
        } else {
            passwordEl.type = 'password';
            passwordIcon.innerHTML = 'visibility';
        }
    });

    let formEl = document.getElementById('form');
    let clearFormBtn = document.getElementById('clear-form');

    clearFormBtn.addEventListener('click',  () => {
        formEl.reset();
    });
});