document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('.nav-links');

    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    const serviceButtons = document.querySelectorAll('.service-button');
    serviceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalWindow = button.nextElementSibling;
            modalWindow.style.display = modalWindow.style.display === 'block' ? 'none' : 'block';
            modalWindow.addEventListener('click', event => {
                if (event.target === modalWindow) {
                    modalWindow.style.display = 'none';
                }
            });
        });
    });

const map = L.map('map').setView([14.5995, 120.9842], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
}).addTo(map);

map.on('resize', () => {
    map.invalidateSize();
});
});