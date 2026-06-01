export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export interface ITask {
  id: number;
  title: string;
  difficulty: Difficulty;
  createdAt: Date;
  completed?: boolean;
}

export type TaskFormData = Omit<ITask, 'id' | 'createdAt'>;