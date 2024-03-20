import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todos } from './todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  'form': FormGroup;
  list: Todos[] = [];
  ngOnInit() {
    this.form = new FormGroup({
      todoname: new FormControl(null, Validators.required),
      addtask: new FormControl(null),
    });
  }

  AddTodo() {
    if (this.form.valid) {
      const todoName = this.form.get('todoname')?.value;
      const newTodo: Todos = { id: this.list.length, name: todoName };
      this.list.push(newTodo);
      this.form.reset();
    }
  }

  RemoveTodo(id: number) {
    this.list = this.list.filter(item => item.id !== id);
  }

  EditTodo(item: Todos) {
    let newName = prompt('Enter new name', item.name);
    if (newName !== null) {
      item.name = newName;
    }
  }

}
