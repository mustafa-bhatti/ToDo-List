console.log("Running")
import "./styles.css"
import project from "./createProject"
import { showProjects } from "./render"
import { formInputTask } from "./ui"
export const projectList = []
const initialLoad = (function(){
    const defaultProject = new project("Default","TBD");
    projectList.push(defaultProject)
    // render the initial default project
    showProjects(projectList) 
    const dialog = document.querySelector("dialog");
    dialog.showModal()
    formInputTask()



}
)()
