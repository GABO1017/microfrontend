import { Component } from '@angular/core';
import { storeTodo, ITodo } from '@Renthub/store';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: new FormControl(null, Validators.required)
    })

  }

  onSubmit(): void {
    
    const {title} = this.form.value;

    const todo: ITodo = {
      completed: true,
      id: storeTodo.id,
      text: title,
    };

    storeTodo.addTodo(todo);

    this.form.reset();
    
  }
}
