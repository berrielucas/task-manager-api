import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskEntity } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { CategoriesService } from 'src/categories/categories.service';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(private readonly categoriesService: CategoriesService) {}
    
    private readonly tasks: TaskEntity[] = [];
    private lastID = 0;


    findAll() {
        return this.tasks;
    }

    findOne(id: number): TaskEntity {
        const task = this.tasks.find((t) => t.id === id);
        if (task) return task;
        throw new NotFoundException('Task not found.');
    }

    create(body: CreateTaskDto): TaskEntity {
        const { category_id, ...taskBody } = body;
        const category = this.categoriesService.findOne(category_id);
        this.lastID++;
        const taskCreated = {
            id: this.lastID,
            ...taskBody,
            category: category
        };
        this.tasks.push(taskCreated);
        return taskCreated;
    }

    update(id: number, body: UpdateTaskDto) {
        const taskIndex = this.tasks.findIndex((t) => t.id === id);
        if (taskIndex >= 0) {
            const { atLeastOneField, category_id = null, ...taskBody } = body;
            const taskUpdated = this.tasks[taskIndex];

            let category = this.tasks[taskIndex].category;

            if (category_id) {
                category = this.categoriesService.findOne(category_id);
            }

            this.tasks[taskIndex] = {
                ...taskUpdated,
                ...taskBody,
                category: category,
            };
            return {
                message: "Task updated successfully",
                data: this.tasks[taskIndex]
            };
        }
        throw new NotFoundException('Category not found.');
    }

    remove(id: number) {
        const taskIndex = this.tasks.findIndex((t) => t.id === id);
        if (taskIndex >= 0) {
            const taskRemoved = this.tasks[taskIndex];
            this.tasks.splice(taskIndex, 1);
            return {
                message: "Task removed successfully",
                data: taskRemoved
            };
        }
        throw new NotFoundException('Task not found.');
    }
}
