import Task from "./task"

export default class Project{
    constructor(name,description){
        this.projectName = name,
        this.projectDescription = description,
        this.taskList = [],
        this.projectId = crypto.randomUUID()
    }
    createTask(taskName,taskDescription,dueDate,priority){
        const taskTobeAdded = new Task(taskName,taskDescription,dueDate,priority,this.projectId)
        this.taskList.push(taskTobeAdded)
    }
    removeTaskFromList(taskId){
        const index = this.taskList.findIndex(task => task.id == taskId)
        this.taskList.splice(index,1
        )
    }
    get id(){
        return this.projectId
    }
    get name(){
        return this.projectName
    }
    get description(){
        return this.projectDescription
    }
    get tasks(){
        return this.taskList
    }
    set name(newName){
        this.projectName = newName
    }
    set description(newDescription){
        this.projectDescription = newDescription
    }

}