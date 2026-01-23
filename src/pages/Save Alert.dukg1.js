import { saveAlertsOnReady } from 'abmp-npm/pages';

$w.onReady(async function () {
  await saveAlertsOnReady({ $w });
});
