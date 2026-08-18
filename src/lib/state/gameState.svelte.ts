import { goto } from '$app/navigation';
import { browser } from '$app/environment';
import { DEFAULTS, LEVELS } from '../data/levels';
import type { ControlValues } from '../types';

export const TOTAL_LEVELS = LEVELS.length;

const PROGRESS_KEY = 'cgs_progress';

class GameState {
  levelIdx = $state(0);
  values = $state<ControlValues>({ ...DEFAULTS });
  completed = $state<Set<number>>(new Set());
}

export const game = new GameState();

export function currentLevel() {
  return LEVELS[game.levelIdx]!;
}

export function loadLevel(idx: number, options: { syncUrl?: boolean } = {}): void {
  const level = LEVELS[idx]!;
  game.levelIdx = idx;
  game.values = { ...DEFAULTS, ...level.forced };

  if (browser && (options.syncUrl ?? true)) {
    const url = new URL(window.location.href);
    url.searchParams.set('level', String(idx + 1));
    goto(`${url.pathname}${url.search}`, { replaceState: true, noScroll: true, keepFocus: true });
  }
}

export function levelIdxFromSearch(search: URLSearchParams): number {
  const raw = parseInt(search.get('level') ?? '', 10);
  return Number.isFinite(raw) && raw >= 1 && raw <= TOTAL_LEVELS ? raw - 1 : 0;
}

export function markLevelCompleted(idx: number): void {
  game.completed.add(idx);
  saveCompletedToStorage();
}

export function hydrateCompletedFromStorage(): void {
  if (!browser) return;
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return;
    for (const n of parsed) {
      if (typeof n === 'number' && n >= 0 && n < TOTAL_LEVELS) game.completed.add(n);
    }
  } catch {
    // corrupted storage value, ignore and keep progress empty
  }
}

function saveCompletedToStorage(): void {
  if (!browser) return;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify([...game.completed]));
}
