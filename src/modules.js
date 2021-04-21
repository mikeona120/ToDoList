const task = (title, description, dueDate, priority) => {
    
    let status = false;

    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getStatus = () => status;
    const completeTask = () => status = true;

    return {getTitle, getDescription, getDueDate, getPriority, getStatus, completeTask};
};

const project = (projectTitle,task) => {
    let taskList = [];

    const getTitle = () => projectTitle;

    const addToList = (task) => taskList.push(task);

    const getTaskList = () => {
        var x;
        let tasks = [];
        for(x=0;x<taskList.length;x++){
            tasks += taskList[x].getTitle().toString() + "<br />";
        }
        return tasks;
    };

    return {getTitle, addToList, getTaskList};
};

const addNewProject = {
    

}


export {task, project, addNewProject}