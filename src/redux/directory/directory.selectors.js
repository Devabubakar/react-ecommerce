import { createSelector } from 'reselect';

const directorySelector = (state) => state.directory;

export const sectionSelector = createSelector(
  [directorySelector],
  (directory) => directory.sections
);
