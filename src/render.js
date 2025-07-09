import trash from "./images/trash.png"
import edit from "./images/edit.png"
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

export const renderTasks = function(taskList){
    const tasksFlexContainer = document.querySelector(".tasks-flexbox")
    taskList.forEach((currentTask)=>{
        const taskDiv = document.createElement("div")
        taskDiv.className = "task"

        if (currentTask.priority != "normal"){
            taskDiv.classList.add(currentTask.priority)
        }

        const taskHeading = document.createElement("div")
        taskHeading.className = "task-heading"
        // task heading children
            const heading = document.createElement("h2")
            heading.textContent = currentTask.name
            // date
            const dateP = document.createElement("p")
            dateP.textContent = currentTask.date
            console.log(dateP)


        taskHeading.appendChild(heading)
        taskHeading.appendChild(dateP)

        const taskContent = document.createElement("div")
        taskContent.className ="task-content"
        // children of taskcontent
            const descP = document.createElement("p")
            descP.textContent = currentTask.desc
            // icons
            const icons = document.createElement("div")
            icons.className ="icons"

            const trashIcon = new Image(18,18)
            trashIcon.src = trash
            trashIcon.classList.add("icon","trash") 
            // trashIcon.id ="trash"
            trashIcon.alt ="trash"

            const editIcon = new Image(16,16)
            editIcon.src = edit
            editIcon.classList.add("icon","edit") 

            icons.appendChild(trashIcon)
            icons.appendChild(editIcon)
        
        taskContent.appendChild(descP)
        taskContent.appendChild(icons)

        taskDiv.appendChild(taskHeading)
        taskDiv.appendChild(taskContent)
        
        // final append to the parent div
        tasksFlexContainer.appendChild(taskDiv)
    })


}




