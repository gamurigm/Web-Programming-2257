document.addEventListener('DOMContentLoaded', function() {
    const productTitle = document.querySelector('.product-title');

    productTitle.addEventListener('mouseenter', function() {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    });

    productTitle.addEventListener('mouseleave', function() {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    });
});
