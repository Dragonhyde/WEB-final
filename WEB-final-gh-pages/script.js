const apiKey = 'DSP8IOa7ykZ41elGRlam2wyBbAwgNLTIJOfTYAokdSMtnxfcIYEn19rk';
 
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', async () => {
        const category = button.textContent.toLowerCase();
        await fetchImages(category);
 
    
        const content = button.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.style.display = 'none';
            });
            content.style.display = "block";
        }
    });
});
 
async function fetchImages(category) {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${category}&per_page=12`, {
        headers: {
            Authorization: apiKey
        }
    });
    const data = await response.json();
    displayImages(data.photos, category);
}
 
function displayImages(photos, category) {
    const content = document.getElementById(category);
    content.innerHTML = '';
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.src.medium;
        img.alt = photo.photographer;
        content.appendChild(img);
    });
}
