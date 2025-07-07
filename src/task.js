export default class task {
    constructor(title,description,dueDate,priority){
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority
    }
    //getters
    get title() {
        return this.title
    }
    get description(){
        return this.description
    }
    get dueDate(){
        return this.dueDate
    }
    get priority(){
        return this.priority
    }
    
}