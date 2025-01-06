document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const galleryItems = document.querySelectorAll('.gallery-item');
const popup = document.getElementById('imagePopup');
const popupImage = document.getElementById('popupImage');
const closePopup = document.querySelector('.close');
const prevButton = document.getElementById('prevImage');
const nextButton = document.getElementById('nextImage');

let currentIndex = 0;

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        popup.style.display = 'flex';
        popupImage.src = item.src;
        currentIndex = index;
    });
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    popupImage.src = galleryItems[currentIndex].src;
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    popupImage.src = galleryItems[currentIndex].src;
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

