import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto de Prueba de Manuel Navarro';

  tasks = [{
    "userId": 1,
    "id": 6,
    "title":"Hola Jefe como estás",
    "completed": true,  
  },
  {
    "userId": 2,
    "id": 5,
    "title":"Hola Pepe como estás",
    "completed": true,  
  },
  {
    "userId": 3,
    "id": 4,
    "title":"Hola Juan como estás",
    "completed": true,  
  },
  {
    "userId": 4,
    "id": 3,
    "title":"Hola Ricardo como estás",
    "completed": true,  
  },
  {
    "userId": 5,
    "id": 2,
    "title":"Hola Pedro como estás",
    "completed": true,  
  }

  ];

  clickaronEn(title : string){
    alert('Clickaron en aquella con titulo '+ title);
  }
}
