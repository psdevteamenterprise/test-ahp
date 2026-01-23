import { contactUsOnReady } from 'abmp-npm/pages';
import { contactSubmission } from 'backend/web-methods.web.js';

$w.onReady(async function () {
  await contactUsOnReady({ $w, contactSubmission });
});
