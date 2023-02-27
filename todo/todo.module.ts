import { Global, Module } from '@nestjs/common';
import { TodoService } from 'src/todo-service/todo.service';
import { TodoController } from './todo.controller';

@Global()
@Module({
    controllers:[TodoController],
    providers:[TodoService]
})
export class TodoModule {}