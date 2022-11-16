document.addEventListener('DOMContentLoaded', function() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-tooltip="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    let passwordEl = document.querySelectorAll('.password');
    let passwordBtn = document.querySelectorAll('.password-btn');
    let passwordIcon = document.querySelectorAll('.password-icon');

    if (passwordBtn) {
        passwordBtn.forEach((index) => {
            index.addEventListener('click', () => {
                passwordEl.forEach((passwordIndex) => {
                    if (passwordIndex.type === 'password') {
                        passwordIndex.type = 'text';
                        passwordIcon.forEach((passwordIconIndex) => {
                            passwordIconIndex.innerHTML = 'visibility_off';
                        });
                    } else {
                        passwordIndex.type = 'password';
                        passwordIcon.forEach((passwordIconIndex) => {
                            passwordIconIndex.innerHTML = 'visibility';
                        });
                    }
                });
            });
        })
    }

    let formEl = document.querySelectorAll('.form');
    let clearFormBtn = document.querySelectorAll('.clear-form');
    
    if (clearFormBtn) {
        clearFormBtn.forEach((index) => {
            index.addEventListener('click',  () => {
                formEl.forEach((formIndex) => {
                    formIndex.reset();
                });
            });
        });
    }
});