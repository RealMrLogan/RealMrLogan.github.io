(function () {
    setTimeout(() => {
        const header = document.getElementsByTagName("header")[0];
        console.dir(header);

        header.children[0].classList.add("fade-in-visible");
        const name = header.children[1];
        for (let i = 0; i < name.children.length; i++) {
            name.children[i].classList.add("fade-in-visible");
        }
    }, 200);
    setWidthOfProjects(null);
})();

document.getElementById("projects").addEventListener('mouseover', e => {
    const projects = document.getElementById("projects");
    if (e.target == projects) {
        return;
    } else if (!e.target.classList.contains("vertical-ribbon")) {
        let target = e.target;
        while (!target.classList.contains("vertical-ribbon")) {
            target = target.parentElement;
        }
        setWidthOfProjects(target);
    } else {
        setWidthOfProjects(e.target);
    }
});

document.getElementById("projects").addEventListener('mouseout', e => {
    console.log("left the projects");
    const projects = document.getElementById("projects").children;
    for (let i = 0; i < projects.length; i++) { // hide all the descriptions
        for (let j = 0; j < projects[i].children.length; j++) {
            if (!projects[i].children[j].classList.contains("make-invisible")) {
                projects[i].children[j].classList.add("make-invisible");
            }
        }
    }
    setWidthOfProjects(null);
});

function setWidthOfProjects(element) {
    const projects = document.getElementById("projects").children;
    // remove any previously set widths
    for (let i = 0; i < projects.length; i++) {
        projects[i].style.removeProperty("width");
    }
    if (element == null) { // set each project to equal lengths
        const width = 100 / projects.length;
        for (let i = 0; i < projects.length; i++) {
            projects[i].style.width = width + "%";
        }
    } else { // compensate for the hovered element
        const hoveredWidth = 75;
        element.style.width = hoveredWidth + "%";
        // show the children of the element
        for (let i = 0; i < element.children.length; i++) {
            element.children[i].classList.remove("make-invisible");
        }
        const width = (100 - hoveredWidth) / (projects.length - 1);
        for (let i = 0; i < projects.length; i++) {
            if (projects[i] != element) {
                // hide the children if they aren't hidden already
                for (let j = 0; j < projects[i].children.length; j++) {
                    if (!projects[i].children[j].classList.contains("make-invisible")) {
                        projects[i].children[j].classList.add("make-invisible");
                    }
                }
                projects[i].style.width = width + "%";
            }
        }
    }
}