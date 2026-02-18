import { Injectable, NotFoundException } from '@nestjs/common';

export type TaskStatus = 'todo' | 'in-progress' | 'done';


export interface Task{
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  createdAt: Date;
}

@Injectable()
export class TasksService{
  private tasks: Task[] = [];
  private idCounter = 1;

  //create a tasks
    create(title: string, description?: string): Task {
    const task: Task = {
      id: this.idCounter++,
      title,
      description,
      status: 'todo',
      createdAt: new Date(),
    };

    this.tasks.push(task);
    return task;
  }

  //get all task 
  findAll():Task[]{
    return this.tasks;
  }

    updateStatus(id: number, status: TaskStatus): Task {
    const task = this.tasks.find(t => t.id === id);
    if (!task) throw new NotFoundException('Task not found');

    task.status = status;
    return task;
  }

    delete(id: number): void {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index === -1) throw new NotFoundException('Task not found');

    this.tasks.splice(index, 1);
  }
}