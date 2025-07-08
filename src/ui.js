import task from "./task";
import { projectList } from ".";
const taskForm = document.forms["taskForm"];
export const formInputTask = function(){
    taskForm.addEventListener("submit",()=>{
        
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
            else {
                console.error("Error: Unable to add project");
            }
            console.log(projectList)

        })
    })
}