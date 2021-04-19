//import {} from './modules';

const project = (projectTitle,task) => {

    let list = [];

    const getProjectTitle = () => console.log(projectTitle);

    const getToDoList = () => {

        list.forEach(function(entry) {
            console.log(entry.getTitle());
        });

    };

    const addToList = (task) => list.push(task);

    
    return {getProjectTitle, getToDoList, addToList};
};

const todo = (title, description, dueDate, priority) => {
    
    let done = false;

    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const isDone = () => done;
    const completeTask = () => done = true;

    
    
    return {getTitle, getDescription, getDueDate, getPriority, isDone, completeTask};
};

const todo1 = todo("My task","Description goes here","Due date here","High Priority");
const todo2 = todo("My next task","Description goes here","Due date here","High Priority");

const project1 = project("My title");

project1.addToList(todo1);
project1.addToList(todo2);

project1.getToDoList();
