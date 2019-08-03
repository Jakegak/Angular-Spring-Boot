import { Component, OnInit } from '@angular/core';

export class Todos{
  constructor(
    public id: number,
    public description: String,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})


export class ListTodosComponent implements OnInit {
  todos=[
    new Todos(1, 'Learn how to code', false,  new Date()),
    new Todos(2, 'Build my own app', false,  new Date()),
    new Todos(3, 'Land my dream job', false,  new Date())
  ]

  constructor() { }

  ngOnInit() {
  }

}
