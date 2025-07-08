console.log("Running")
import "./styles.css"
import project from "./createProject"
import { showProjects } from "./render"

const initialLoad = (function(){
    const projectList = []
    const defaultProject = new project("Default","TBD");
    projectList.push(defaultProject)
    showProjects(projectList)
    }

)()
