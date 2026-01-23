import { profileOnReady } from 'abmp-npm/pages';

$w.onReady(async () => {
  await profileOnReady({ $w });
});
