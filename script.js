const images = [
    './img/autumn-4470022_1920.jpg',
    './img/dog-4390885_1920.jpg',
    './img/paw-7231300_1920.jpg'
];

let currentImageIndex = 0;
const section = document.getElementById('inicio');

function changeBackgroundImage() {
    section.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 3500);
changeBackgroundImage(); 
