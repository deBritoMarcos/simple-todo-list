import type { Difficulty } from '../interface/Task';

export const DIFFICULTY_LEVELS: Record<Difficulty, string> = {
  easy: 'easy',
  medium: 'medium',
  hard: 'hard',
} as const;

export const DIFFICULTY_LABELS: Record<string, string> = {
  easy: 'Fácil',
  medium: 'Moderado',
  hard: 'Difícil',
};

export const MAX_TITLE_LENGTH = 255;
export const MIN_TITLE_LENGTH = 1;
