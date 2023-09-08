
document.addEventListener('DOMContentLoaded', function () {
    // Load the navbar using JavaScript
    const navbarContainer = document.getElementById('navbarContainer');
    fetch('templates/nav/navbar.html')
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;
        });

    // Load the category using JavaScript
    const categoryContainer = document.getElementById('categoryContainer');
    fetch('templates/category/category.html')
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
    // Load the footer using JavaScript
    const footerContainer = document.getElementById('footerContainer');
    fetch('templates/footer/footer.html')
        .then(response => response.text())
        .then(data => {
            footerContainer.innerHTML = data;
        });
});
