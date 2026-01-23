import { learnMoreOnReady } from 'abmp-npm/pages';
import { trackButtonClick } from 'backend/web-methods.web';

$w.onReady(function () {
  learnMoreOnReady({
    $w,
    trackClick: trackButtonClick,
  });
});
