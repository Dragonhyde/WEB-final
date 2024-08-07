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