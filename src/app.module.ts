import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { LanguageMiddleware } from './middleware/language.middleware';

@Module({
  imports: [TodoModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LanguageMiddleware).forRoutes('*');
  }
}
