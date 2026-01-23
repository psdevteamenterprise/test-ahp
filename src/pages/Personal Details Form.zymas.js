import { personalDetailsOnReady } from 'abmp-npm/pages';
import { validateMemberToken, getInterestAll, checkUrlUniqueness, saveRegistrationData } from 'backend/web-methods.web';

$w.onReady(async function () {
  await personalDetailsOnReady({
    $w,
    getInterestAll,
    saveRegistrationData,
    validateMemberToken,
    checkUrlUniqueness,
  });
});
