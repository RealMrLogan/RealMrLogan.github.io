(function () {
    setTimeout(() => {
        const header = document.getElementsByTagName("header")[0];
        header.children[0].classList.add("fade-in-visible");
        const name = header.children[1];
        for (let i = 0; i < name.children.length; i++) {
            name.children[i].classList.add("fade-in-visible");
        }
    }, 200);
    setWidthOfProjects(null);
})();

window.onscroll = (e) => { // whenever you scroll, check if you need to fade in an element
    console.log("Scrolling");
    
    const elements = document.getElementsByClassName("invisible");
    for (let i = 0; i < elements.length; i++) {
        if (document.documentElement.scrollTop - 300 >= elements[i].offsetTop) //Adjust Tolerance as you want
        {
            fadeIn(elements[i], 3000);
        }
    }
}

function fadeIn(element, speed = 500) {
    element.style.transition = speed + "ms";
    element.style.opacity = 1;
}