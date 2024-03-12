import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  private readonly todos: Todo[] = [];

  create(createTodoDto: CreateTodoDto): Todo {
    const todo: Todo = {
      id: this.todos.length + 1,
      title: createTodoDto.title,
      completed: false,
    };
    this.todos.push(todo);
    return todo;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    return this.todos.find(todo => todo.id === id);
  }
}
