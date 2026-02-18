import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService, TaskStatus } from './task.service';

@Controller('tasks')
export class TasksController{
  constructor(private readonly tasksService: TasksService) {}
  @Post()
  create(@Body() body: { title: string; description?: string }) {
    return this.tasksService.create(body.title, body.description);
  }


}