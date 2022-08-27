import { Component, OnInit } from '@angular/core';
import { DataModel, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'todoApp';
  addTodoActionText = ""
  model = new DataModel();

  public ngOnInit(): void {

  }

  public GetName(){
    return this.model.Name;
  }

  public GetItems(){
    return this.model.Items.filter(item => !item.Done);
  }

  public AddTodo():void{
    this.model.Items.push(new TodoItem(this.addTodoActionText, false))
    this.addTodoActionText = ''
  }
}
