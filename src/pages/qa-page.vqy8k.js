import { qaPageOnReady } from 'abmp-npm/pages';
import { loginQAMember } from 'backend/web-methods.web';

$w.onReady(async function () {
  await qaPageOnReady({
    $w,
    loginQAMember,
  });
});
