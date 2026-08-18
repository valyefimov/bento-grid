import { DEFAULTS, LEVELS } from '../data/levels';
import type { ControlValues } from '../types';

export const TOTAL_LEVELS = LEVELS.length;

class GameState {
  levelIdx = $state(0);
  values = $state<ControlValues>({ ...DEFAULTS });
  completed = $state<Set<number>>(new Set());
}

export const game = new GameState();

export function currentLevel() {
  return LEVELS[game.levelIdx]!;
}

export function loadLevel(idx: number): void {
  const level = LEVELS[idx]!;
  game.levelIdx = idx;
  game.values = { ...DEFAULTS, ...level.forced };
}
