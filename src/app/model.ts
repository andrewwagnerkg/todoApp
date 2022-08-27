export class TodoItem{
  Action : string;
  Done : boolean;
  constructor(action: string, done: boolean){
    this.Action = action;
    this.Done = done;
  }
}

export class DataModel{
  Name : string;
  Items;
  constructor(){
    this.Name = "Andrew";
    this.Items = [
      new TodoItem("To buy milk", false),
      new TodoItem("Feed cat", false),
      new TodoItem("To Write first Angular component", false)
    ]
  }
}
