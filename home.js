


let navbar = document.getElementById("Nav");
let scrolled = false;

window.onscroll = function () {
    if (window.pageYOffset > 100) {
        navbar.classList.remove('top');
        if (!scrolled) { navbar.style.transform = 'translateY(-70px)'; }
        setTimeout(function () {
            navbar.style.transform = 'translateY(0px)'
        }, 200);
        scrolled = ture;
    } else {
        navbar.classList.add('top');
        scrolled = false;
    }
}

// smooth-scrolling 

$('#Nav a, .btn').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100,
            },
            800
        );
    }
});