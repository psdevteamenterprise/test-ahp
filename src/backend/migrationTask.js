//This file contains Developer only triggered Methods
import {
  scheduleConvertHtmlToRichContent as _scheduleConvertHtmlToRichContent,
  scheduleExternalProfileImageMigration as _scheduleExternalProfileImageMigration,
  scheduleUrlMigration as _scheduleUrlMigration,
  scheduleUrlGeneration as _scheduleUrlGeneration,
} from 'abmp-npm/backend';

//this will be run only once by the developers during the migration
export async function scheduleConvertHtmlToRichContent() {
  return _scheduleConvertHtmlToRichContent();
}

// This function is used to migrate external profile images to Wix-hosted images
export async function scheduleExternalProfileImageMigration() {
  return _scheduleExternalProfileImageMigration();
}

/**
 * URL Migration Phase 2: Schedule migration of existing URLs from backup collection
 * This schedules tasks to process members in chunks of 10k
 */
export async function scheduleMigrateExistingUrls() {
  return _scheduleUrlMigration();
}

/**
 * URL Migration Phase 3: Schedule generation of missing URLs
 * This schedules tasks to generate URLs for members that don't have them
 */
export async function scheduleGenerateMissingUrls() {
  return _scheduleUrlGeneration();
}
