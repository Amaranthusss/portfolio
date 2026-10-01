import * as migration_20260927_132705 from './20260927_132705';
import * as migration_20260927_184442 from './20260927_184442';
import * as migration_20260928_131550 from './20260928_131550';

export const migrations = [
  {
    up: migration_20260927_132705.up,
    down: migration_20260927_132705.down,
    name: '20260927_132705',
  },
  {
    up: migration_20260927_184442.up,
    down: migration_20260927_184442.down,
    name: '20260927_184442',
  },
  {
    up: migration_20260928_131550.up,
    down: migration_20260928_131550.down,
    name: '20260928_131550'
  },
];
