const navButton2 = document.getElementById('nav-btn-2');

navButton2.addEventListener('click', () => {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'page3.html';
    }, 500);
});
