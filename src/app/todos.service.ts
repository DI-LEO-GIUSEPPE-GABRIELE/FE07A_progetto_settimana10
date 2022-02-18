import { Todo } from './models/todo';


export let tasks: Todo[] = [];
export let completed: Todo[] = [];
let id = 0;


export function get(): Promise<Todo[]> {
  return new Promise((succ, err) => {
    setTimeout(() => {
      succ(tasks);
    }, 2000);
  });
}

export function getCompleted(): Promise<Todo[]> {
    return new Promise((succ, err) => {
      setTimeout(() => {
        succ(completed);
      }, 2000);
    });
  }




export function aggiungiTask(newTaskTitle: String) {
  return new Promise<void>((succ, err) => {
    setTimeout(() => {
      let newTask: Todo = {
        id: id,
        title: newTaskTitle,
        completed: false,
      };
      tasks.push(newTask);
      console.log(tasks[id].title);
      id++;
      succ();
    }, 2000);
  });
}

export function elimina(task:Todo) {
  tasks.splice(tasks.indexOf(task), 1);
}

export function aggiungi(task: Todo) {
    completed.push(task);
}



