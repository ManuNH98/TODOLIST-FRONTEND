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
  loading : boolean = false;

  tasks : Task[] = [];

  constructor(private tasksService : TasksService){
    this.loadTodos();
  }

  loadTodos(){
    this.loading = true;
    this.tasksService.cargarTodos().then(tasks => {
      this.tasks = tasks
      this.loading = false;
    })
  }

  completeThisTask(task : Task){
    task.completed = !task.completed;
  }

  deleteThisTask(task : Task){
    this.loading = true;

    this.tasksService.delete(task._id as string)
      .then(response => {
        this.tasks = this.tasks.filter(t => t._id !== task._id)
      })
  }

  saveNewTask(){
    this.tasksService.saveNewTask(this.newTodoTitle)
    .then((newTask) => {
      this.tasks.unshift(newTask);
      this.newTodoTitle = "";
    })
    .catch(err => {
      console.log({err})
      if(err && err.response && err.response.data && err.response.data.errors && err.response.data.errors.title){
        alert('Tienes un error en el titulo');
        alert(err.response.data.errors.title)
      }
    })
  }
}
