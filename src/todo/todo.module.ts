import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoStaticService } from './todo.static-service';
import { LanguageMiddleware } from '../middleware/language.middleware';

@Module({
  controllers: [TodoController],
  providers: [TodoService, TodoStaticService],
})
export class TodoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LanguageMiddleware).forRoutes('todo');
  }
}
