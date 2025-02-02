# FixPPM

FixPPM is a script that improves quality of work with HP Project and Portfolio Management by making it more readable and adds some QoL features. It is working only for raporting timesheets.
It has been designed to work with [tampermonkey](http://www.tampermonkey.net) addon, but can be also used with other addons when modified.

## Features

On page startup:

* clears values from all inputs that are equal to 0,00.
* colors the Saturday and Sunday columns as well as the public holidays in Poland.

Creates two buttons and a checkbox.

### Button "Clear all 0,00"

Clears 0,00 values from all inputs if any reappeared.

### Button "Validate"

Validates input and result fields if:

* value is not dividable by 0,5 (paints table cell in yellow)
* value is higher than 8 (paints table cell in yellow)
* value is exactly 8 (paints table cell in green)
* value is between 0,5 and 7,5 (paints table cell in light green)

### Button "Insert hours"

Open new window and do

* filter tasks
* select a single task
* write amount of hours
* insert hours if possible, starting from the first day in the hours table
* remove hours if possible, starting from the last day in the hours table
* convert Jira team hours report to input txt file
* write to txt - write all filtered tasks to a txt file, including total hours
* parse txt - read txt file and try to add/remove hours for each task

### Button "Check unused tasks"

Set 'checked'/'unchecked' all tasks for which total hours is 0.

### Checkbox "Auto clear & validate"

Automatically applies changes performed by buttons "Clear all 0,00" and "Validate".
Value (if the box is checked or not) is saved between browser card closures, but may be forgotten after browser is closed.
Calculates total days and adds it under "Total" column.

## Setup instruction

1. Download and install [tampermonkey](http://www.tampermonkey.net) addon for your preferred browser.
1. Left click on addon icon, and select "Add new script".
1. Copy [fixppm](fixppm.js) script from GitHub & paste it to Tampermonkey new script editor. Save it (either file & save or ctrl+s).

## Modifications

Script can be modified to use different colors, or work with part time employees by changing the appropriate values. They have been put in the beginning.

## Feedback

Feedback can be provided to author Damian Zyngier by creating new issue in GitHub, or contacting Damian directly using your favorite communicator.
