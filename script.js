// JavaScript to transition from welcome to main content
document.getElementById('scroll-prompt').addEventListener('click', function() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
});

function loadImages(category) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = `<p>Loading ${category} images...</p>`;
}

window.addEventListener('scroll', function() {
    window.location.href = 'nature.html'; 
});
