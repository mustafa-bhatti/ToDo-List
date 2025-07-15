import "./styles.css"
import Project from "./createProject"
import { showProjects , renderTasks } from "./render"
import { eventListeners, showTodayTasks } from "./ui"
export const projectList = []
const initialLoad = (function(){

    // console.log(projectList)
    // render the initial default p roject
    loadLocalProjects()
    showProjects(projectList) 
    eventListeners()
    showTodayTasks()



}
)()
function loadLocalProjects(){
    let localProjects = localStorage.getItem("projects")
    if (localProjects){
        localProjects = JSON.parse(localProjects)
        for (let index in localProjects){
            console.log(localProjects[index])
            const projectName = localProjects[index].projectName
            const projectDesc = localProjects[index].projectDescription
            const projectId = localProjects[index].projectId
            const tempProject = new Project(projectName,projectDesc,projectId)
            for (let taskIndex in localProjects[index].taskList){
                const currentTask = localProjects[index].taskList[taskIndex]
                const taskName = currentTask.title
                const taskDescription = currentTask.description
                const dueDate = currentTask.dueDate
                const priority = currentTask.taskPriority
                const taskId = currentTask.taskId

                tempProject.createTask(taskName,taskDescription,dueDate,priority,taskId)
            }
            projectList.push(tempProject)
        }
    }
    else {
        const defaultProject = new Project("Default","TBD");
    // defaultProject.createTask("Learn Web Dev","TBD","2025-07-15","Normal")
        projectList.push(defaultProject)
        console.log("empty storage")
        renderTasks(defaultProject)

    }
}