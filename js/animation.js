// Animations on scroll
document.addEventListener('scroll', () => {
    document.querySelectorAll('.animate__animated').forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('animate__fadeIn');
        }
    });
});
