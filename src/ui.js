import task from "./task";
import { projectList } from ".";
import project from "./createProject";

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
            
        }
        console.log(projectList)
        
    })
}

const formInputProject = function(){
    const projectName = porjectForm["formProjectName"].value;
    const projectDesc = porjectForm["formProjectDesc"].value;
    const projectToBeAdded = new project(projectName,projectDesc);
    projectList.push(projectToBeAdded)
    console.log(projectList)
}
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