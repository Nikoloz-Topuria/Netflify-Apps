function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

function openModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}