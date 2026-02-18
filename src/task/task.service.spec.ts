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

  it('should return all tasks',()=>{
   service.create('Task 1'),
  service.create('Task 2')
    expect(service.findAll()).toHaveLength(2);
  })

  it('should update task status',()=>{
    const task = service.create('Test Task');

    const updatedTask = service.updateStatus(task.id, 'in-progress');

    expect(updatedTask.status).toBe('in-progress');
  })

  it('should throw error if task does not exist', () => {
    expect(() => {
      service.updateStatus(999, 'done');
    }).toThrow(NotFoundException);
  });

  it('should delete a task',()=>{
    const task = service.create('Task to delete');

    service.delete(task.id)
    expect(service.findAll().length).toBe(0)
  });

  it('should throw error when deleting non-existing task',()=>{
    expect(()=>{
      service.delete(999);
    }).toThrow(NotFoundException)
  })

});