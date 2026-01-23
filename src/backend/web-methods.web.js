import { Permissions, webMethod } from 'wix-web-module';
import { authentication } from 'wix-members-backend';
import {
  contactSubmission as _contactSubmission,
  getCompiledFiltersOptions as _getCompiledFiltersOptions,
  getNonCompiledFiltersOptions as _getNonCompiledFiltersOptions,
  filterProfiles as _filterProfiles,
  validateMemberToken as _validateMemberToken,
  getInterestAll as _getInterestAll,
  checkUrlUniqueness as _checkUrlUniqueness,
  saveRegistrationData as _saveRegistrationData,
  trackButtonClick as _trackButtonClick,
  createLoginMethods,
} from 'abmp-npm/backend';

//There is no generateSessionToken SDK version,  and the signOn of @wix/identity returns 403 error regardless that the permissions are valid
//Therefore, as a workaround we need to inject the Velo version of generateSessionToken to the login methods.
const {
  loginQAMember: _loginQAMember,
  authenticateSSOToken: _authenticateSSOToken,
} = createLoginMethods(authentication.generateSessionToken);

export const contactSubmission = webMethod(
  Permissions.Anyone,
  _contactSubmission
);
export const getCompiledFiltersOptions = webMethod(
  Permissions.Anyone,
  _getCompiledFiltersOptions
);
export const getNonCompiledFiltersOptions = webMethod(
  Permissions.Anyone,
  _getNonCompiledFiltersOptions
);
export const filterProfiles = webMethod(Permissions.Anyone, _filterProfiles);
export const validateMemberToken = webMethod(
  Permissions.SiteMember,
  _validateMemberToken
);
export const getInterestAll = webMethod(Permissions.Anyone, _getInterestAll);
export const checkUrlUniqueness = webMethod(
  Permissions.SiteMember,
  _checkUrlUniqueness
);
export const saveRegistrationData = webMethod(
  Permissions.SiteMember,
  _saveRegistrationData
);
export const loginQAMember = webMethod(Permissions.Anyone, _loginQAMember);
export const authenticateSSOToken = webMethod(
  Permissions.Anyone,
  _authenticateSSOToken
);
export const trackButtonClick = webMethod(
  Permissions.SiteMember,
  _trackButtonClick
);
