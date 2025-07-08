const projectDiv = document.querySelector(".projects")
export const showProjects=function(projectList){
    projectList.forEach(element => {
        const projectButton = document.createElement("button")
        projectButton.textContent = element.name
        projectDiv.appendChild(projectButton)
    });
}



