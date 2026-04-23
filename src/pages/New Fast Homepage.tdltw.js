import { logHomePageLoadPhase } from 'abmp-npm/public/Utils/homePageLoadTrace';
import {
  getCompiledFiltersOptions,
  getNonCompiledFiltersOptions,
  filterProfiles,
} from 'backend/web-methods.web.js';
import { homePageOnReady } from 'abmp-npm/pages';

logHomePageLoadPhase('page_script_executed_after_imports');

$w.onReady(async function () {
  logHomePageLoadPhase('wix_onready_callback_start');
  await homePageOnReady({
    _$w: $w,
    getCompiledFiltersOptions,
    getNonCompiledFiltersOptions,
    filterProfiles,
  });
});
