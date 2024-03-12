import { Controller, Get, Post, Body, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './entities/todo.entity';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto, @Req() req: Request): Todo {
    // Ici, vous pouvez utiliser req['language'] si vous avez besoin de la langue pour la création
    const language = req['language']; // Exemple d'extraction de la langue
    console.log(`La langue utilisée est : ${language}`); // Utilisation de la langue (exemple : log)

    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll(@Req() req: Request): Todo[] {
    const language = req['language']; // Exemple d'extraction de la langue
    console.log(`La langue utilisée est : ${language}`); // Utilisation de la langue (exemple : log)

    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: Request): Todo {
    const language = req['language']; // Exemple d'extraction de la langue
    console.log(`La langue utilisée est : ${language}`); // Utilisation de la langue (exemple : log)

    return this.todoService.findOne(+id);
  }
}
