import task from "./task";
import { projectList } from ".";
import Project from "./createProject";
import { renderTasks, showProjects, updateProjectsInTaskDialog } from "./render";

const taskForm = document.forms["task-form"];
const porjectForm = document.forms["project-form"];

const newTaskButton = document.querySelector(".new-task-btn")
const newProjectButton = document.querySelector(".new-project-btn")

const taskDialog = document.querySelector("#task-dialog");
const projectDialog = document.querySelector("#project-dialog");


const formInputTask = function(){
    
    const taskName1 = taskForm["formTaskName"].value;
    const taskDescription = taskForm["formTaskDesc"].value;
    const taskDueDate  = taskForm["formTaskDueDate"].value;
    const taskPriority = taskForm["formTaskPriority"].value;
    const taskProject = taskForm["formTaskProject"].value;
    
    // find the project and append the task there
    projectList.forEach((element) =>{
        if (element.name == taskProject){
            element.createTask(
                taskName1,
                taskDescription,
                taskDueDate,
                taskPriority
            )
            taskForm.reset()
            console.log("before: ",element.name,element.taskList)
            renderTasks(element.name,element.taskList)
        }
        console.log(projectList)
        
    })
}

const formInputProject = function(){
    const projectName = porjectForm["formProjectName"].value;
    const projectDesc = porjectForm["formProjectDesc"].value;
    const projectToBeAdded = new Project(projectName,projectDesc);
    projectList.push(projectToBeAdded)
    showProjects(projectList) 
    updateProjectsInTaskDialog(projectList)
    porjectForm.reset();
}

/**
 * Sets up all main event listeners for the UI.
 * Call this once after the DOM is loaded.
 */
export const eventListeners = function(){
    taskForm.addEventListener("submit",formInputTask)
    newTaskButton.addEventListener("click",()=>{
        taskDialog.showModal()
    })
    newProjectButton.addEventListener("click",()=>{
        projectDialog.showModal()
    })
    porjectForm.addEventListener("submit",formInputProject)
}

export const switchToProject = function(e){
    projectList.forEach((currentProject)=>{
        if (currentProject.id == e.target.dataset.projectId){
            renderTasks(currentProject.name,currentProject.taskList)
        }
    })
}
export const deleteTaskEvent = function(e){
    
}