import {task, project, addNewProject} from './modules';


const task1 = task("My task","Description goes here","Due date here","High Priority");
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

let sidebar = document.getElementById("sidebar-content");
var x;
for(x=0; x<projects.length; x++){
    var btn = document.createElement("a");
    btn.innerHTML = projects[x].getTitle();
    btn.classList = "sidebar-btn";
    btn.onclick = "reply_click(this.id)"
    btn.id = x;

    sidebar.appendChild(btn);      
    sidebar.innerHTML += "<br>";
}


$(".sidebar-btn").click(function() {
    let main_panel = document.getElementById("main-panel");
    let main_panel_content = document.getElementById("main-panel-content");

    main_panel_content.innerHTML = projects[this.id].getTitle() + "<br>" + "<br>";
    main_panel_content.innerHTML += projects[this.id].getTaskList();

});