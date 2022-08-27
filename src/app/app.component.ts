import { Component } from '@angular/core';
import { DataModel, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  model = new DataModel();

  public GetName(){
    return this.model.Name;
  }

  public GetItems(){
    return this.model.Items;
  }
}
