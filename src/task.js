export default class Task {
    constructor(title,description,dueDate,priority,taskProjectReferenceId,taskid = false){
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.taskPriority = priority
        if (!taskid){
            this.taskId = crypto.randomUUID()
        }
        else {
            this.taskId = taskid
        }
        
        this.taskProjectId = taskProjectReferenceId
        this.isTaskDone = false
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
    get parentId(){
        return this.taskProjectId
    }
    get taskDoneFlag(){
        return this.isTaskDone
    }
    isComplete(){
        this.isTaskDone = !this.isTaskDone
    }

    updateTaskDetails(attributes){
        this.title = attributes.name,
        this.description = attributes.description,
        this.dueDate = attributes.dueDate,
        this.taskPriority = attributes.priority
    }
    
}