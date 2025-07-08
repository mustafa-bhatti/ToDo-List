console.log("Running")
import "./styles.css"
import project from "./createProject"

const project1 = new project("Demo","TBD")
project1.createTask("Hello world","writing","21-5-2025","high")
console.log(project1)
