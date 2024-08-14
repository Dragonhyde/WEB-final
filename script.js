const apiKey = 'DSP8IOa7ykZ41elGRlam2wyBbAwgNLTIJOfTYAokdSMtnxfcIYEn19rk';

async function fetchImages(category) {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${category}&per_page=12`, {
        headers: {
            Authorization: apiKey
        }
    });
    const data = await response.json();
    displayImages(data.photos);
}

function displayImages(photos) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.src.medium;
        img.alt = photo.photographer;
        gallery.appendChild(img);
    });
}


fetchImages('landscape');
document.addEventListener('DOMContentLoaded', function () {
    const accordionToggles = document.querySelectorAll('.accordion-toggle');

    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            const content = this.nextElementSibling;

            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
