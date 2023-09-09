
document.addEventListener('DOMContentLoaded', function () {
    // Load the navbar using JavaScript
    const navbarContainer = document.getElementById('navbarContainer');
    fetch('templates/nav/navbar.html')
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;
        });
    // Load the searchingNavContainer using JavaScript
    const searchingNavContainer = document.getElementById('searchingNavContainer');
    fetch('/mj-career/templates/searchingnav/searchingNav.html')
        .then(response => response.text())
        .then(data => {
            searchingNavContainer.innerHTML = data;
        });
    // Load the carouselContainer using JavaScript
    const carouselContainer = document.getElementById('carouselContainer');
    fetch('/mj-career/templates/carousel/carousel.html')
        .then(response => response.text())
        .then(data => {
            carouselContainer.innerHTML = data;
        });

    // Load the category using JavaScript
    const categoryContainer = document.getElementById('categoryContainer');
    fetch('/mj-career/templates/category/category.html')
        .then(response => response.text())
        .then(data => {
            categoryContainer.innerHTML = data;
        });

    // Load the marquee using JavaScript
    const marqueeContainer = document.getElementById('marqueeContainer');
    fetch('templates/marquee/marquee.html')
        .then(response => response.text())
        .then(data => {
            marqueeContainer.innerHTML = data;
        });
        // Load the marquee using JavaScript
    const latestJobsContainer = document.getElementById('latestJobsContainer');
    fetch('templates/latest/latestjobs.html')
        .then(response => response.text())
        .then(data => {
            latestJobsContainer.innerHTML = data;
        });
    
    // Load the footer using JavaScript
    const footerContainer = document.getElementById('footerContainer');
    fetch('templates/footer/footer.html')
        .then(response => response.text())
        .then(data => {
            footerContainer.innerHTML = data;
        });
});
