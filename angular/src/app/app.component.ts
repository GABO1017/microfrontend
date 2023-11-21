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


  navbarContainer = {
    'width': '100%',
    'height': '10vh',
    'background-color': 'lavender',
    'position': 'fixed',
    'top': '0',
    'left': '0'
  };
  
 
  color = {
    'display': 'flex',
    'justify-content': 'center',
    'padding': '3vh'
  };
  
  navLink = {
    'margin': '0 10vh', 
    'text-decoration': 'none',
    'color': '#333',
    'font-weight': 'bold',
    'font-size': '30px'
  };

  inputStyles = {
    'padding': '10px',
    
    'border': '1px solid #ccc',
    'border-radius': '5px',
    'width': '200px' 
  };

  
  buttonStyles = {
    'padding': '10px',
    'margin-left': '10px',
    'background-color': '#4CAF50',
    'color': 'white',
    'border': 'none',
    'border-radius': '5px',
    'cursor': 'pointer'
  };

  container = {
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'height': '37vh' 
  };
  

  centeredDiv = {
    'width': '30%', 
    'padding': '20px',
    'border': '1px solid #ccc',
    'border-radius': '5px',
    'background-color': 'azure'
  };

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
