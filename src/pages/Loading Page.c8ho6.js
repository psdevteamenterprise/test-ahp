import { loadingPageOnReady } from 'abmp-npm/pages';
import { authenticateSSOToken } from 'backend/web-methods.web';

$w.onReady(async function () {
  await loadingPageOnReady(authenticateSSOToken);
});
