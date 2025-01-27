import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  controllers: [TasksController],
  imports: [CategoriesModule],
  providers: [TasksService],
})
export class TasksModule {}
