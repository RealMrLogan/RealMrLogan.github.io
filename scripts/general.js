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
    const projects = document.getElementById("projects").children;
    for (let i = 0; i < projects.length; i++) { // hide all the descriptions
        for (let j = 1; j < projects[i].children.length; j++) { // skip the video
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
            projects[i].children[0].pause(); // pause the video if they aren't already
        }
    } else { // compensate for the hovered element
        const hoveredWidth = 80; // % of container
        element.style.width = hoveredWidth + "%";
        // autoplay the video
        if (element.children[0]) element.children[0].play();
        // show the children of the element
        for (let i = 1; i < element.children.length; i++) {
            element.children[i].classList.remove("make-invisible");
        }
        const width = (100 - hoveredWidth) / (projects.length - 1);
        for (let i = 0; i < projects.length; i++) {
            if (projects[i] != element) {
                projects[i].children[0].pause();
                // hide the children if they aren't hidden already
                for (let j = 1; j < projects[i].children.length; j++) { // skip the video
                    if (!projects[i].children[j].classList.contains("make-invisible")) {
                        projects[i].children[j].classList.add("make-invisible");
                    }
                }
                projects[i].style.width = width + "%";
            }
        }
    }
}