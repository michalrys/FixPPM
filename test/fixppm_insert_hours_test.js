// use this for quick tests - copy paste in browser console

function insertHours() {
    // QUICK CHECK FOR INSERTING HOURS
    console.log("START INSERT HOURS");
    //find tasks
    let found = [];
    let foundId = new Map();

    var taskTable = document.querySelector('#table3'); //put here window.opener.  <<<<<<
    var tasksRows = taskTable.children[1];
    for (let i = 1; i < tasksRows.children.length; i++) {
        let taskCell = tasksRows.children[i];
        let taskName = taskCell.children[1].textContent.replaceAll("\n", "");
        if (found.includes(taskName)) {
            taskName = taskName + "_duplicated";
        }
        found.push(taskName);
        foundId.set(found[i - 1], i);
        console.log(found[i - 1] + "id = " + i);
    }

    console.log(foundId);
    console.log(foundId.get(found[4]));  //52 = asset
    //find tasks

    //filter task
    console.log("OPEN WINDOWS, select task, write amount of hours, insert them.");
    // ******** put macro here : findTasksFilterAndSetToMenu() ************
    // ******** put macro here : insertHours() - content is below ************
    // let task = '\tTask: Development (Baby Waltz)' //example
    let task = '\tReq: 442333 (A1147 - CSP OC - BAU - Asset)' //example
    let hours = parseFloat(30);
    let taskId = foundId.get(task);
    console.log("INSERT DATA: " + task + ", id=" + taskId + ", hours=" + hours);  //'5) \tTask: Development (Baby Waltz)\n'
    //filter task

    //insert hours
    // ! be careful with these
    let bgColorDefaultExpected = "white";
    let bgColorPartialHoursExpected = "rgb(205, 226, 183)";
    let maxHoursDaily = 8;
    // ! be careful with these

    let shallInsertHours = false;
    let totalDayHours = 0;
    var totalDayHoursTable = document.querySelector('#table7');  //put here window.opener.  <<<<<<
    var dayHoursTable = document.querySelector('#table4');  //put here window.opener.  <<<<<<

    var totalDayHoursRows = totalDayHoursTable.children[1];
    var totalDayHoursCells = totalDayHoursRows.children[1];
    for (let i = 0; i < totalDayHoursCells.children.length; i++) {
        let dayHoursComponent = totalDayHoursCells.children[i];
        let dayHoursBackgroundColor = dayHoursComponent.style.getPropertyValue("background-color");
        shallInsertHours = (dayHoursBackgroundColor === bgColorPartialHoursExpected || dayHoursBackgroundColor === bgColorDefaultExpected);
        if (shallInsertHours) {
            let totalDayHoursText = dayHoursComponent.textContent;
            totalDayHours = parseFloat(totalDayHoursText);
            console.log("Day " + i + " -> " + totalDayHours);

            if (totalDayHours < maxHoursDaily && hours > parseFloat(0)) {
                let freeHours = maxHoursDaily - totalDayHours;
                let hoursToInsert = freeHours <= hours ? freeHours : hours;
                console.log("YES, insert hours here: " + hoursToInsert + " from " + hours + "| i = " + i + ",taskId=" + taskId);
                hours = hours - hoursToInsert;

                //var dayHoursTable = document.querySelector('#table4');
                let dayHoursTBody = dayHoursTable.children[1];
                let dayHoursRow = dayHoursTBody.children[taskId];  //taskId=3
                let dayHoursCell = dayHoursRow.children[i]; //i=0
                let dayHoursInput = dayHoursCell.children[0];
                let currentHours;
                if (dayHoursInput.value === '' || dayHoursInput.value === null) {
                    currentHours = parseFloat('0');
                } else {
                    currentHours = parseFloat(dayHoursInput.value);
                }
                dayHoursInput.value = currentHours + hoursToInsert;
                dayHoursInput.onchange();
                validateAllFields();
            }
        }
    }


}

function removingHours() {
    // QUICK CHECK FOR REMOVING HOURS
    console.log("START REMOVING HOURS");
    //find tasks
    let found = [];
    let foundId = new Map();

    var taskTable = document.querySelector('#table3'); //put here window.opener.  <<<<<<
    var tasksRows = taskTable.children[1];
    for (let i = 1; i < tasksRows.children.length; i++) {
        let taskCell = tasksRows.children[i];  //i=5
        found.push(i + ")" + taskCell.children[1].textContent);  //'5) \tTask: Development (Baby Waltz)\n'
        foundId.set(found[i - 1], i);
        console.log(found[i - 1] + "id = " + i);
    }

    console.log(foundId);
    console.log(foundId.get(found[4]));
    //find tasks

    //filter task
    console.log("OPEN WINDOWS, select task, write amount of hours, insert them.");
    // ******** put macro here : findTasksFilterAndSetToMenu() ************
    // ******** put macro here : insertHours() - content is below ************
    let task = '5)\tTask: Development (Baby Waltz)\n' //example
    let hours = parseFloat(12);
    let taskId = foundId.get(task);
    console.log("REMOVE HOURS INPUT DATA: " + task + ", id=" + taskId + ", hours=" + hours);
    //filter task

    //insert hours
    // ! be careful with these
    let maxHoursDaily = 8;
    // ! be careful with these

    let shallRemoveHours = false;
    let totalDayHours = 0;
    var totalDayHoursTable = document.querySelector('#table7');  //put here window.opener.  <<<<<<
    var dayHoursTable = document.querySelector('#table4');  //put here window.opener.  <<<<<<

    var totalDayHoursRows = totalDayHoursTable.children[1];
    var totalDayHoursCells = totalDayHoursRows.children[1];
    for (let i = totalDayHoursCells.children.length - 1; i >= 0; i--) {
        let dayHoursComponent = totalDayHoursCells.children[i];
        let totalDayHoursText = dayHoursComponent.textContent;
        totalDayHours = parseFloat(totalDayHoursText);
        console.log("Day " + i + " -> " + totalDayHours);

        //var dayHoursTable = document.querySelector('#table4');
        let dayHoursTBody = dayHoursTable.children[1];
        let dayHoursRow = dayHoursTBody.children[taskId];  //taskId=5
        let dayHoursCell = dayHoursRow.children[i]; //i=0
        let dayHoursInput = dayHoursCell.children[0];
        let currentHours;
        if (dayHoursInput.value === null || dayHoursInput.value === "") {
            currentHours = parseFloat("0");
        } else {
            currentHours = parseFloat(dayHoursInput.value);
        }

        shallRemoveHours = totalDayHours > parseFloat(0) && hours !== parseFloat(0) && currentHours > parseFloat(0);
        if (shallRemoveHours) {
            let hoursToRemove = currentHours <= hours ? currentHours : hours;
            console.log("YES, remove hours here: " + hoursToRemove + " from " + hours + "| i = " + i + ",taskId=" + taskId);
            hours = hours - hoursToRemove;

            dayHoursInput.value = currentHours - hoursToRemove;
            try {
                dayHoursInput.onchange();
            } catch (error) {
                console.log("Upps: some strange error :-(");
            }
            validateAllFields();
        }
    }

    function validateAllFields() {
        var value,
            inputsTable = document.querySelector("#table4"),
            inputNodes = inputsTable.querySelectorAll("input");
        for (var i = 0; i < inputNodes.length; i++) {
            if (typeof inputNodes[i] == "undefined" || inputNodes[i].type == "hidden") {
                continue;
            }

            validateAndColorInput(inputNodes[i]);
        }

        validateResults();
    }
}