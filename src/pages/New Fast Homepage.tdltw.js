import {
  getCompiledFiltersOptions,
  getNonCompiledFiltersOptions,
  filterProfiles,
} from 'backend/web-methods.web.js';
import { homePageOnReady } from 'abmp-npm/pages';

$w.onReady(async function () {
  await homePageOnReady({
    _$w: $w,
    getCompiledFiltersOptions,
    getNonCompiledFiltersOptions,
    filterProfiles,
  });
});
