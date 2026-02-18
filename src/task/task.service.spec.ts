import { NotFoundException } from '@nestjs/common';
import { TasksService } from './task.service';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    service = new TasksService();
  });

  it('should create a task', () => {
    const task = service.create('Test Task');
    expect(task.title).toBe('Test Task');
    expect(task.status).toBe('todo');
  });

});