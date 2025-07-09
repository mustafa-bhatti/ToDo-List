import "./styles.css"
import project from "./createProject"
import { showProjects , renderTasks } from "./render"
import { eventListeners } from "./ui"
export const projectList = []
const initialLoad = (function(){
    const defaultProject = new project("Default","TBD");
    defaultProject.createTask("Learn Web Dev","TBD","21-05-2026","Normal")
    projectList.push(defaultProject)
    console.log(projectList)
    // render the initial default p roject
    showProjects(projectList) 
    eventListeners()
    renderTasks(defaultProject.tasks)



}
)()
