import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './task.controller'; // fixed: was './task.controller'
import { TasksService } from './task.service';        // fixed: was './task.service'

describe('TasksController', () => {
  let controller: TasksController;

  const mockTasksService = {
    create: jest.fn(),
    findAll: jest.fn(),
    updateStatus: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        {
          provide: TasksService,
          useValue: mockTasksService,
        },
      ],
    }).compile();

    controller = module.get<TasksController>(TasksController);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a task', async () => {
    const mockTask = {
      id: 1,
      title: 'Test Task',
      description: 'A description',
      status: 'todo',
      createdAt: new Date(),
    };

    mockTasksService.create.mockReturnValue(mockTask);

    const result = controller.create({ title: 'Test Task', description: 'A description' });

    expect(mockTasksService.create).toHaveBeenCalledWith('Test Task', 'A description');
    expect(result).toEqual(mockTask);
  });

  it('should update task status', () => {
    const updatedTask = {
      id: 1,
      title: 'Test Task',
      status: 'done',
      createdAt: new Date(),
    };

    mockTasksService.updateStatus.mockReturnValue(updatedTask);

    const result = controller.updateStatus('1',{status:'in-progress'}); 

    expect(mockTasksService.updateStatus).toHaveBeenCalledWith(1, 'done');
    expect(result).toEqual(updatedTask);
  });

});