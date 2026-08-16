import * as migration_20260805_210625 from './20260805_210625';
import * as migration_20260816_154451 from './20260816_154451';

export const migrations = [
  {
    up: migration_20260805_210625.up,
    down: migration_20260805_210625.down,
    name: '20260805_210625',
  },
  {
    up: migration_20260816_154451.up,
    down: migration_20260816_154451.down,
    name: '20260816_154451'
  },
];
