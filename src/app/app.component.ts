import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';
import { Task } from '../app/models/task.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto de Prueba de Manuel Navarro';

  newTodoTitle = "";

  tasks : Task[] = [];

  constructor(private tasksService : TasksService){
    this.tasksService.cargarTodos().then(todos=>{
      this.tasks = todos;
    })
  }

  completeThisTask(task : Task){
    task.completed = !task.completed;
  }

  deleteThisTask(task : Task){
    this.tasks = this.tasks.filter(t => t._id !== task._id);
  }

  saveNewTask(){
    this.tasksService.saveNewTask(this.newTodoTitle)
    .then((newTask) => {
      this.tasks.unshift(newTask);
      this.newTodoTitle = "";
    })
  }
}
