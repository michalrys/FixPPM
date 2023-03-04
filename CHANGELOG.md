# Changelog

All notable changes to this project will be documented in this file.

## [1.8.12] - 2023-03-04, M.Ryś

- InsertHours window: convertion of Jiras report in second way, more detailed. Simplest implementation.
- Jira log time macro - first release.
- Small fixes.

## [1.8.11] - 2023-03-02, M.Ryś

- InsertHours window: update css window.
- InsertHours window: convertion of Jiras report in second way, more detailed.

## [1.8.10] - 2023-03-02, M.Ryś

- Update asset fix in changeSpans().
- InsertHours window: bugfix for asset parsing.
- InsertHours window: fix css style for size and scroll.

## [1.8.9] - 2023-03-01, M.Ryś

- InsertHours window: add convJira - conversion Jira team hours report xls to input hours txt.

## [1.8.8] - 2023-02-25, M.Ryś

- add src for hiwindow - web template, working js code, converter, converted file ready to paste into fixppm.js.
- fixppm.js: remove redundant lines, comments, console.logs.
- InsertHours window: css fixes, txt as default file type for write/read, add info tips.

## [1.8.7] - 2023-02-24, M.Ryś

- InsertHours window: some bug fixes.
- InsertHours window: write total hours for each task.
- some css updates.

## [1.8.6] - 2023-02-23, M.Ryś

- InsertHours window: add functionality for saving hours to a text file and parsing input txt file (adding, removing hours).
- Some bug fixes: remove tasks for which hours cannot be inserted, remove \\r during parsing input txt file.

## [1.8.5] - 2023-02-22, M.Ryś

- Some bug fixes: parsing empty cells, removing hours, github path.

## [1.8.4] - 2023-02-21, M.Ryś

- InsertHours window: add functionality for removing hours.

## [1.8.3] - 2023-02-21, M.Ryś

- InsertHours window: fix for adding hours for duplicated tasks.

## [1.8.2] - 2023-02-19, M.Ryś

- Add button check unused tasks.

## [1.8.1] - 2023-02-19, M.Ryś

- Add light green for partial hours.
- New button: instertHours → create additional window for inserting working hours.

## [1.8.0] - 2023-02-13

- Updated list of public holidays in Poland for 2023.
- Added new function for different locale than pl-PL.

## [1.7.1] - 2021-01-01

- Updated list of public holidays in Poland for 2021.

## [1.7] - 2020-07-30

- Added list of public holidays in Poland.

## [1.6] - 2020-07-27

- Changed color scheme and table cell format of table.
- Added additional column to "Total", which calculates days when "Auto" mode is enabled.
- Table header will be always visible at top when scrolling through large amount of projects.

## [1.5] - 2020-07-06

- Fixed script behavior with save button not accounting for missing input values. On mouse down, the values will restore for save operation.

## [1.4] - 2020-07-05

- Fixed script behavior with "use strict".
- Added features and setup instruction to README file.

## [1.3] - 2020-07-04

- Added checkbox to automatically apply clear all 0,00's, and validate all input and result fields.
- Changed 'Validate' to also work with weekend days.

## [1.2] - 2020-07-02

- Changed 'Validate sum' to 'Validate' button. Now it will validate non-weekend inputs if they are above maximum value or not dividable by 0,5.

## [1.1] - 2020-07-01

- Changed 'Validate sum' for result to check result if maximum value has been reached, or if it is dividable by 0,5.
- Added LICENSE.md.

## [1.0] - 2020-06-30

- Added 'Clear all 0,00' button.
- Added 'Validate sum' button.
- Added README.md.