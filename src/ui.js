import { projectList } from ".";
import Project from "./createProject";
import { renderTasks, showProjects, updateProjectsInTaskDialog } from "./render";
import { format , isAfter } from "date-fns"
const taskForm = document.forms["task-form"];
const porjectForm = document.forms["project-form"];
const editTaskForm = document.forms["edit-task-form"]

const newTaskButton = document.querySelector(".new-task-btn")
const newProjectButton = document.querySelector(".new-project-btn")
const currentDateButton = document.querySelector(".today-btn")
const futureDateButton = document.querySelector(".future-btn")


const taskDialog = document.querySelector("#task-dialog");
const projectDialog = document.querySelector("#project-dialog");
const editTaskDialog = document.querySelector("#edit-task-dialog")

const formInputTask = function(){
    
    const taskName1 = taskForm["formTaskName"].value;
    const taskDescription = taskForm["formTaskDesc"].value;
    const taskDueDate  = taskForm["formTaskDueDate"].value;
    const taskPriority = taskForm["formTaskPriority"].value;
    const taskProject = taskForm["formTaskProject"].value;


    // find the project and append the task there
    // console.log("debug: ",taskProject,projectList)
    projectList.forEach((currentProject) =>{
        if (currentProject.name == taskProject){
            currentProject.createTask(
                taskName1,
                taskDescription,
                taskDueDate,
                taskPriority
            )
            taskForm.reset()
            renderTasks(currentProject)
        }
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

const editTaskFormInput = function(e){
    const currentForm = e.target
    projectList.forEach((currentProject)=>{
        if (currentProject.id==currentForm.dataset.projectId){
            const attributes = {
                name: currentForm["formTaskName"].value,
                description: currentForm["formTaskDesc"].value,
                dueDate: currentForm["formTaskDueDate"].value,
                priority: currentForm["formTaskPriority"].value,
            }
            currentProject.editTaskFromList(currentForm.dataset.taskId,attributes)
            renderTasks(currentProject)
        }
    })
}
export const showTodayTasks = function(){
    const todayDate = format(new Date,'yyyy-mm-dd')
    const todayTaskObject = new Project("TODAY","")
    projectList.forEach((currentProject)=>{
        currentProject.taskList.forEach((currentTask)=>{
            if (currentTask.date == todayDate){
                todayTaskObject.addTask(currentTask)
            }
        })
    })
    renderTasks(todayTaskObject)
    console.log(todayTaskObject.taskList)
}

const showFutureTasks = function(){
    const todayDate = format(new Date(),'yyyy-mm-dd')
    const futureTaskObject = new Project("UPCOMMING","")
    projectList.forEach((currentProject)=>{
        currentProject.taskList.forEach((currentTask)=>{

            console.log(isAfter(currentTask.date,todayDate))
            if (isAfter(currentTask.date,todayDate)){
                futureTaskObject.addTask(currentTask)
            }
        })
    })
    renderTasks(futureTaskObject)
}
/**
 * Sets up all main event listeners for the UI.
 * Call this once after the DOM is loaded.
 */
export const eventListeners = function(){
    currentDateButton.addEventListener("click",showTodayTasks)
    futureDateButton.addEventListener("click",showFutureTasks)
    taskForm.addEventListener("submit",formInputTask)
    editTaskForm.addEventListener("submit",editTaskFormInput)
    porjectForm.addEventListener("submit",formInputProject)
    newTaskButton.addEventListener("click",()=>{

        taskForm.reset()
        const todayDate = format(new Date,'yyyy-MM-dd')
        taskForm["formTaskDueDate"].value = todayDate
        taskDialog.showModal()
    })
    newProjectButton.addEventListener("click",()=>{
        projectDialog.showModal()
    })
}

export const switchToProject = function(e){
    projectList.forEach((currentProject)=>{
        if (currentProject.id == e.target.dataset.projectId){
            renderTasks(currentProject)
        }
    })
}
export const deleteTaskEvent = function(taskToDelete){
    projectList.forEach((currentProject)=>{
        if (currentProject.id == taskToDelete.parentId){
            currentProject.removeTaskFromList(taskToDelete.id)
            renderTasks(currentProject)
        }
    })
}

export const editTaskEvent = function(taskToEdit){
    // fill the form values with the task attributes
    const taskName1 = editTaskForm["formTaskName"];
    const taskDescription = editTaskForm["formTaskDesc"];
    const taskDueDate  = editTaskForm["formTaskDueDate"];
    const taskPriority = editTaskForm["formTaskPriority"];
    taskName1.value = taskToEdit.name
    taskDescription.value = taskToEdit.desc
    taskDueDate.value = taskToEdit.date 
    taskPriority.value = taskToEdit.priority
    editTaskForm.dataset.taskId = taskToEdit.id
    editTaskForm.dataset.projectId = taskToEdit.parentId


    editTaskDialog.showModal()
}