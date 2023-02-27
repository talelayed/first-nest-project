import {BadRequestException,NotFoundException, Inject, Injectable } from '@nestjs/common';
import { TodoModel } from 'src/todos/todo.model';
import { TodoStatusEnum } from 'src/todos/todo.statusenum';
import { TodoDto } from 'src/todos/todoDto';
import { UpdateTodoDto } from 'src/todos/updateTodoDto';

@Injectable()
export class TodoService {
    private todos = [];
   
    getTodos ()
{ 
    console.log('Recuperer la liste des todos');
    return this.todos;
}
constructor(@Inject('uuid') private readonly uuid) {
}

addTodos(body:TodoDto) 
{ 
    if(body.description == undefined || body.name == undefined){
        return new BadRequestException()
    }
    
    this.todos.push(new TodoModel(this.uuid,body.name,body.description,'waiting'))

}

getTodoById(id : string){
    const found= this.todos.find(element=>element.id==id);
    if(found == undefined){
        return new NotFoundException()
    }
    return found;
}

deleteTodoById(id:string){
    const removed=this.todos.find(element=>element.id!=id)
    if(removed == undefined){
        return new NotFoundException()
    }
    return this.todos = this.todos.filter(element=> element.id != id)
}

modifTodo(id:string, body:UpdateTodoDto){

    const modif = this.getTodoById(id);
    if(modif == undefined){
        return new NotFoundException()
    }
    if( body.name != undefined){
        this.todos[modif].name = body.name
    }
    if( body.description != undefined){
        this.todos[modif].description = body.description
    }
    if( body.status != undefined){
        this.todos[modif].status = Object.values(TodoStatusEnum)[ Object.keys(TodoStatusEnum).indexOf(body.status)]
    }
    return this.findAll()


}

findAll(): TodoModel[] {
    return this.todos;
}
}