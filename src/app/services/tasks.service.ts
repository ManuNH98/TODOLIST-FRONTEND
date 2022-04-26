import { Injectable } from '@angular/core';
import axios from 'axios';
import { Task } from '../models/task.model';

@Injectable({
    providedIn: 'root'
})
export class TasksService {

    urlAPI = 'https://jsonplaceholder.typicode.com/todos';

    constructor() {}

    cargarTodos() : Promise<Task[]>{
        return axios.get(this.urlAPI)
        .then(response => response.data)
    }
    saveNewTask(newTodoTitle : string){
        return axios.post(this.urlAPI,
        {title : newTodoTitle, userId: 1, completed: false})
        .then(response => response.data)
    }
    delete(id : string){
        return axios.delete(this.urlAPI + "/" + id)
            .then (response => response.data)
    }
}