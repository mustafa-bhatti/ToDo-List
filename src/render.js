import trash from "./images/trash.png";
import edit from "./images/edit.png";
import { format } from "date-fns";
import {
  deleteProjectEvent,
  deleteTaskEvent,
  editTaskEvent,
  switchToProject,
} from "./ui";
const projectDiv = document.querySelector(".projects");

export const showProjects = function (projectList) {
  projectDiv.innerHTML = "";
  projectList.forEach((element) => {
    const projectButton = document.createElement("button");
    projectButton.className = "projectBtn";
    projectButton.textContent = element.name;
    projectButton.dataset.projectId = element.id;
    projectButton.addEventListener("click", switchToProject);
    projectDiv.appendChild(projectButton);
  });
};

export const updateProjectsInTaskDialog = function (projectList) {
  const projectSelectElement = document.querySelector("#formTaskProject");
  projectSelectElement.innerHTML = "";
  projectList.forEach((element) => {
    const opt = document.createElement("option");
    opt.textContent = element.name;
    projectSelectElement.appendChild(opt);
  });
};
const renderProjectHeader = function (currentProject) {
  const taskHeading = document.querySelector("#project-heading");
  const projectDescription = document.querySelector("#project-description");
  const projectHeader = document.querySelector(".project-header");
  const deleteButtonDiv = projectHeader.querySelector("div");
  deleteButtonDiv.innerHTML = "";

  taskHeading.textContent = currentProject.name;
  projectDescription.textContent = currentProject.desc;
  if ((currentProject.name != "TODAY") & (currentProject.name != "UPCOMMING")) {
    const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.textContent = "Delete";
    deleteProjectBtn.dataset.projectId = currentProject.id;
    deleteProjectBtn.addEventListener("click", deleteProjectEvent);
    deleteButtonDiv.appendChild(deleteProjectBtn);
  }

  // deleteProjectBtn.classList.remove("delete-project-btn")
  // deleteProjectBtn.dataset.projectId = currentProject.id
  // deleteProjectBtn.addEventListener("click",deleteProjectEvent)
};

export const renderTasks = function (currentProject) {
  const tasksFlexContainer = document.querySelector(".tasks-flexbox");
  renderProjectHeader(currentProject);
  const taskList = currentProject.tasks;
  tasksFlexContainer.innerHTML = "";
  taskList.forEach((currentTask) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    // sets the task id
    taskDiv.dataset.taskId = currentTask.id;

    if (currentTask.priority != "normal") {
      taskDiv.classList.add(currentTask.priority);
    }

    const taskHeading = document.createElement("div");
    taskHeading.className = "task-heading";
    taskHeading.addEventListener("click", function () {
      currentTask.isComplete();
      renderTasks(currentProject);
    });
    if (currentTask.taskDoneFlag) {
      taskHeading.classList.add("task-done");
    } else {
      taskHeading.className = "task-heading";
    }
    // task heading children
    const heading = document.createElement("h2");
    heading.textContent = currentTask.name;
    // appending project name for Today and Upcomming Tabs
    if (currentProject.name == "TODAY" || currentProject.name == "UPCOMMING") {
      const projectSpan = document.createElement("span");
      projectSpan.textContent = `${currentTask.parentName}`;
      projectSpan.className = "project-span";
      heading.appendChild(projectSpan);
    }

    // date
    const dateP = document.createElement("p");
    const formatDate = format(currentTask.date, "PPPP");
    dateP.textContent = formatDate;

    taskHeading.appendChild(heading);
    taskHeading.appendChild(dateP);

    const taskContent = document.createElement("div");
    taskContent.className = "task-content";
    // children of taskcontent
    const descP = document.createElement("p");
    descP.textContent = currentTask.desc;
    // icons
    const icons = document.createElement("div");
    icons.className = "icons";

    const trashIcon = new Image(18, 18);
    trashIcon.src = trash;
    trashIcon.classList.add("icon", "trash");
    trashIcon.alt = "trash";
    trashIcon.addEventListener("click", () => {
      deleteTaskEvent(currentTask);
    });

    const editIcon = new Image(16, 16);
    editIcon.src = edit;
    editIcon.classList.add("icon", "edit");
    editIcon.alt = "edit";
    editIcon.addEventListener("click", () => {
      editTaskEvent(currentTask);
    });

    icons.appendChild(trashIcon);
    icons.appendChild(editIcon);

    taskContent.appendChild(descP);
    taskContent.appendChild(icons);

    taskDiv.appendChild(taskHeading);
    taskDiv.appendChild(taskContent);

    // final append to the parent div
    tasksFlexContainer.appendChild(taskDiv);
  });
};
