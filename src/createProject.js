import Task from "./task"

export default class Project{
    constructor(name,description,projectid = false){
        this.projectName = name
        this.projectDescription = description
        this.taskList = []
        if (!projectid){
            this.projectId = crypto.randomUUID()
        }
        else {
            this.projectId = projectid
        }
    }
    createTask(taskName,taskDescription,dueDate,priority,taskId=false){
        const taskTobeAdded = new Task(taskName,taskDescription,dueDate,priority,this.projectId,this.projectName,taskId)
         this.taskList.push(taskTobeAdded)
    }
    addTask(taskInstance){
        this.taskList.push(taskInstance)
    }
    removeTaskFromList(taskId){
        const index = this.taskList.findIndex(task => task.id == taskId)
        this.taskList.splice(index,1)
    }
    editTaskFromList(taskId,attributes){
        const index = this.taskList.findIndex(task => task.id == taskId)
        this.taskList[index].updateTaskDetails(attributes)
    }
    get id(){
        return this.projectId
    }
    get name(){
        return this.projectName
    }
    get desc(){
        return this.projectDescription
    }
    get tasks(){
        return this.taskList
    }


}