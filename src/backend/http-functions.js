import {
  created,
  serverError,
  forbidden,
  ok,
  badRequest,
} from 'wix-http-functions';
import { createHTTPFunctionsHelpers } from 'abmp-npm/backend';
const {
  post_migrateInterests: _post_migrateInterests,
  delete_clearCollection: _delete_clearCollection,
  get_getSiteAssociation: _get_getSiteAssociation
} = createHTTPFunctionsHelpers({
  created,
  serverError,
  forbidden,
  ok,
  badRequest,
});
export const post_migrateInterests = _post_migrateInterests;
export const delete_clearCollection = _delete_clearCollection;
export const get_getSiteAssociation = _get_getSiteAssociation;
