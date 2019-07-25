(function () {
    setTimeout(() => { // have the name some in 200 ms after page load
        const header = document.getElementsByTagName("header")[0];
        header.children[0].classList.add("fade-in-visible");
        header.children[header.children.length - 1].classList.add("fade-in-visible");
    }, 200);
    const nav = document.getElementsByTagName("nav")[0];
    let time = 500;
    const diff = 200;
    for (let i = 0; i < nav.children.length; i++) {
        setTimeout(() => {
            nav.children[i].classList.add("fade-in-visible");
            nav.children[i].classList.remove("fade-in-hide");
        }, time);
        time += diff;
    }
    setWidthOfProjects(null);
})();

// whenever you scroll, check if you need to fade in an element
window.onscroll = (e) => {
    console.log("Scrolling");

    const elements = document.getElementsByClassName("technology");
    for (let i = 0; i < elements.length; i++) {
        if (document.documentElement.scrollTop - 700 >= elements[i].offsetTop) //Adjust Tolerance as you want
        {
            elements[i].classList.add("fade-in-visible");
        }
    }
}

// smooth scrolling when you click on an anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});