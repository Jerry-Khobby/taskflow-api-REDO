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

  @Get()
  findAll(){
    return this.tasksService.findAll();
  }

  @Patch(':id')
  updateStatus(
    @Param('id') id: string,
    @Body() body: { status: TaskStatus },
  ) {
    return this.tasksService.updateStatus(Number(id), body.status);
  }

    @Delete(':id')
  remove(@Param('id') id: string) {
    this.tasksService.delete(Number(id));
    return { message: 'Task deleted' };
  }
}