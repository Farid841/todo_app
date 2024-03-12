import { Injectable } from '@nestjs/common';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoStaticService {
  private readonly todos: Todo[] = [
    { id: 1, title: 'Todo Statique 1', completed: false },
    { id: 2, title: 'Todo Statique 2', completed: true },
  ];

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    return this.todos.find(todo => todo.id === id);
  }
}
