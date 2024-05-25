window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    console.log(scrollPos)

    document.querySelector('.hero-back').style.backgroundSize = 100 + scrollPos + '%';
})