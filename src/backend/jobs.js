import {
  runScheduledTasks as _runScheduledTasks,
  scheduleDailyPullTask as _scheduleDailyPullTask,
  updateSiteMapS3 as _updateSiteMapS3,
  scheduleContactFormEmailMigration,
  scheduleEmailSync,
} from 'abmp-npm/backend';

export async function runScheduledTasks() {
  return await _runScheduledTasks();
}

export async function scheduleDailyPullTask() {
  return await _scheduleDailyPullTask({ isTestEnvironment: true, includeNone: true });
}

export async function updateSiteMapS3() {
  return await _updateSiteMapS3();
}

/**
 * The following migration jobs Needs to run inside a cronjob as it will reach velo limit if ran through editor,
 * Way to run it through Cronjob is to edit the jobs.config file and add the following code:
 * {
 *   "functionLocation": "/jobs.js",
 *   "functionName": "scheduleMigrateContactFormEmails",
 *   "description": "scheduleMigrateContactFormEmails",
 *   "executionConfig": {
 *     "cronExpression": "0 0 * * *"
 *   }
 * }
 */
export async function scheduleMigrateContactFormEmails() {
  return await scheduleContactFormEmailMigration();
}
export async function scheduleLoginEmailsSync() {
  return await scheduleEmailSync();
}
