import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import * as Services from 'src/app/todos.service';

@Component({
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss']
})
export class CompletedPage implements OnInit {
  completedes!: Todo[];

  constructor() {
    Services.getCompleted().then((res: Todo[]) => {
      this.completedes = res;
    });
  }

  ngOnInit(): void {
  }

}
