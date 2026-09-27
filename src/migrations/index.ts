import * as migration_20260927_132705 from './20260927_132705';
import * as migration_20260927_184442 from './20260927_184442';

export const migrations = [
  {
    up: migration_20260927_132705.up,
    down: migration_20260927_132705.down,
    name: '20260927_132705',
  },
  {
    up: migration_20260927_184442.up,
    down: migration_20260927_184442.down,
    name: '20260927_184442'
  },
];
