const Cookies = {
    block: document.querySelector('.cookies'),
    btn: document.querySelector('.cookies__btn'),

    activate() {
        // Cookies.block.classList.remove('cookies-hidden');
        Cookies.block.classList.add('cookies-active');
    },

    hide() {
        Cookies.block.classList.remove('cookies-active');
        // Cookies.block.classList.add('cookies-hidden');
    }
}

setTimeout(Cookies.activate, 2000);

Cookies.btn.addEventListener('click', Cookies.hide);