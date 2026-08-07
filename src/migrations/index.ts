import * as migration_20260805_210625 from './20260805_210625';

export const migrations = [
  {
    up: migration_20260805_210625.up,
    down: migration_20260805_210625.down,
    name: '20260805_210625'
  },
];
