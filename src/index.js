import {task, project} from './modules';


const task1 = task("My task","Description goes here","Due date here","High Priority");
// console.log(task1.getTitle());
// console.log(task1.getDescription());
// console.log(task1.getDueDate());
// console.log(task1.getPriority());
const task2 = task("My next task","Description goes here","Due date here","High Priority");

const project1 = project("Project 1");
project1.addToList(task1);
project1.addToList(task2);
project1.getTitle();

const project2 = project("Project 2");
project2.addToList(task1);
project2.addToList(task2);
project2.addToList(task2);
project2.addToList(task2);

let projects = [project1,project2];

let sidebar = document.getElementById('sidebar-content');
var x;
for(x=0; x<projects.length; x++){
    sidebar.innerHTML += projects[x].getTitle() + "<br />" + projects[x].getTaskList() + "<br />";
}