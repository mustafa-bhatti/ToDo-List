import task from "./task"

export default class project{
    constructor(name,description){
        this.projectName = name,
        this.projectDescription = description
        this.taskList = []
    }
    createTask(taskName,taskDescription,dueDate,priority){
        const taskTobeAdded = new task(taskName,taskDescription,dueDate,priority)
        this.taskList.push(taskTobeAdded)
    }

    get name(){
        return this.projectName
    }
    get description(){
        return this.projectDescription
    }
    set name(newName){
        this.projectName = newName
    }
    set description(newDescription){
        this.projectDescription = newDescription
    }
    get tasks(){
        return this.taskList
    }

}