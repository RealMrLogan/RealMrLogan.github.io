setTimeout(() => {
    const header = document.getElementsByTagName("header")[0];
    console.dir(header);
    
    header.children[0].classList.add("fade-in-visible");
    const name = header.children[1];
    for (let i = 0; i < name.children.length; i++) {
        name.children[i].classList.add("fade-in-visible");
    }
}, 200);