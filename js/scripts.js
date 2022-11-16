document.addEventListener('DOMContentLoaded', function() {

    // Bootstrap Tooltip
    const tooltipTriggerList = document.querySelectorAll('[data-bs-tooltip="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // Page Loader
    // window.addEventListener('beforeunload', (e) => {
    //     document.body.className = "page-loading";
    // }, false);

    // Password Visibility
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

    // Clear Form
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

    // Theme Switcher
    let themeBtnSwitcherEle = document.querySelector('.theme-btn-switcher');
    let themeIconSwitcher = document.querySelector('.theme-icon-switcher');

    if (themeBtnSwitcherEle) {
        themeBtnSwitcherEle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            if (localStorage.getItem('isDarkMode') == 'true') {
                themeIconSwitcher.innerHTML = 'light_mode';
                localStorage.setItem('isDarkMode', false);
            } else {
                themeIconSwitcher.innerHTML = 'dark_mode';
                localStorage.setItem('isDarkMode', true);
            }
        });

        if (localStorage.getItem('isDarkMode') == 'true') {     
            document.body.classList.toggle('dark-theme');
            themeIconSwitcher.innerHTML = 'dark_mode';
        }
    }
});