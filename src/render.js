const projectDiv = document.querySelector(".projects");
export const showProjects=function(projectList){
    projectDiv.innerHTML=""
    projectList.forEach(element => {
        const projectButton = document.createElement("button")
        projectButton.textContent = element.name
        projectDiv.appendChild(projectButton)
    });
}

export const updateProjectsInTaskDialog = function(projectList){
    const projectSelectElement = document.querySelector("#formTaskProject")
    projectSelectElement.innerHTML = ""
    projectList.forEach((element)=>{
        const opt = document.createElement("option")
        opt.textContent = element.name
        projectSelectElement.appendChild(opt)
    })
}



