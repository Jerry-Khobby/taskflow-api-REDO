import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './task.controller'; 
import { TasksService } from './task.service';       

describe('TasksController', () => {
  let controller: TasksController;

  const mockTasksService = {
    create: jest.fn(),
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

});