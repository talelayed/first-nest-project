import {Body, Controller, Delete, Get,Param,Post, Put} from '@nestjs/common';
import { UpdateTodoDto } from './updateTodoDto';
import { TodoDto } from './todoDto';
import { TodoService } from 'src/todo-service/todo.service';

@Controller('todo')
 export class TodoController {
    constructor (private service:TodoService){}
   

    @Get()
getTodos () 
{ 
    return this.service.findAll();

}

@Post()
addTodos(@Body() body: TodoDto)
{ 
   this.service.addTodos(body);
   return this.service.findAll();
}


@Get ('/:id')
getTodoById(@Param() param){
    return this.service.getTodoById(param.id)
}

@Delete (':id')
deleteTodoById(@Param() param){
  return this.service.deleteTodoById(param.id)
}

@Put(':id')
modifTodo(@Param() param,@Body() body:UpdateTodoDto){
   return this.service.modifTodo(param.id,body)
}
}