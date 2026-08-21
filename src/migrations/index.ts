import * as migration_20260805_210625 from './20260805_210625';
import * as migration_20260816_154451 from './20260816_154451';
import * as migration_20260818_104653 from './20260818_104653';
import * as migration_20260821_204117 from './20260821_204117';

export const migrations = [
  {
    up: migration_20260805_210625.up,
    down: migration_20260805_210625.down,
    name: '20260805_210625',
  },
  {
    up: migration_20260816_154451.up,
    down: migration_20260816_154451.down,
    name: '20260816_154451',
  },
  {
    up: migration_20260818_104653.up,
    down: migration_20260818_104653.down,
    name: '20260818_104653',
  },
  {
    up: migration_20260821_204117.up,
    down: migration_20260821_204117.down,
    name: '20260821_204117'
  },
];
