export default class Task {
    constructor(title,description,dueDate,priority){
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.taskPriority = priority
        this.taskId = crypto.randomUUID()
    }
    //getters
    get id(){
        return this.taskId
    }
    get name() {
        return this.title
    }
    get desc(){
        return this.description
    }
    get date(){
        return this.dueDate
    }
    get priority(){
        return this.taskPriority
    }
    
}