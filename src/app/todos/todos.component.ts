import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { v4 } from 'uuid';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  async ngOnInit(): Promise<any> {
    await this.update();
  }

  async update(): Promise<any> {
    this.todos = await this.todoService.todos.toArray();
  }

  async add(text: string): Promise<any> {
    const todo: Todo = { text, done: false, id: v4() };
    await this.todoService.todos.add(todo);
    await this.update();
  }
}
