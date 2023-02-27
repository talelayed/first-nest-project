import { TodoStatusEnum } from "./todo.statusenum";

export class TodoModel{
        id :String;
        name : String;
        description : String;
        creationDate : string;
        status : TodoStatusEnum;
        constructor(id,name,description,status){
          this.id = id;
          this.name = name;
          this.description = description;
          this.creationDate = Date();
          this.status = Object.values(TodoStatusEnum)[Object.keys(TodoStatusEnum).indexOf(status)];
      }
      }
  