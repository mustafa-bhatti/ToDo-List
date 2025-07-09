export default class task {
    constructor(title,description,dueDate,priority){
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.taskPriority = priority
    }
    //getters
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