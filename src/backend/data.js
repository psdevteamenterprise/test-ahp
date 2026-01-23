import {
  scheduleCompileInterestsTask,
  scheduleCompileStatesTask,
  scheduleCompileCitiesTask,
} from 'abmp-npm/backend';

export function interests_afterUpdate() {
  scheduleCompileInterestsTask();
}
export function interests_afterInsert() {
  scheduleCompileInterestsTask();
}
export function interests_afterRemove() {
  scheduleCompileInterestsTask();
}

export function State_afterUpdate() {
  scheduleCompileStatesTask();
}
export function State_afterInsert() {
  scheduleCompileStatesTask();
}
export function State_afterRemove() {
  scheduleCompileStatesTask();
}

export function City_afterUpdate() {
  scheduleCompileCitiesTask();
}
export function City_afterInsert() {
  scheduleCompileCitiesTask();
}
export function City_afterRemove() {
  scheduleCompileCitiesTask();
}
