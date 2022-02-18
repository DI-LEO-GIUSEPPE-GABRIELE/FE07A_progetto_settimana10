import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import * as Services from 'src/app/todos.service';

@Component({
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  tasks!: Todo[]
  newTaskTitle!: string;

  constructor() {
    Services.get().then((res: Todo[]) => {
      this.tasks = res;
    });
  }

  ngOnInit(): void {}

  scriviTask(event: Event) {
    const target = <HTMLInputElement>event.target;
    console.log(target.value);
    this.newTaskTitle = target.value;
  }

  aggiungi() {
    Services.aggiungiTask(this.newTaskTitle);
  }

  completa(task: Todo) {
    Services.elimina(task);
    Services.aggiungi(task);
  }
}
