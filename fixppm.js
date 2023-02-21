// ==UserScript==
// @name         More readable PPM and insert hours window
// @namespace    https://itg.crifnet.com/itg/tm/EditTimeSheet.do?timesheetId=*
// @homepage     https://github.com/michalrys/FixPPM
// @homepageURL  https://github.com/michalrys/FixPPM
// @updateURL    https://github.com/michalrys/FixPPM/edit/master/fixppm.js
// @downloadURL  https://github.com/michalrys/FixPPM/edit/master/fixppm.js
// @version      1.8.3
// @description  Button Check unused tasks.
// @author       Damian Zyngier, Michał Ryś
// @match        https://itg.crifnet.com/itg/tm/EditTimeSheet.do?timesheetId=*
// @grant        GM_addStyle
// ==/UserScript==

//forked from: https://github.com/DamianZyngier/FixPPM

//search for M.Rys -> my modifications:
//1.8.3  1) Bugfix for insertHours(): hours can be inserted for task with duplicated name.
//1.8.2  3) Button Check unused tasks.
//1.8.2  2) insertHours() → filter tasks, select task, put hours → insert to hour table if possible.
//1.8.2  1) validateAndColorInput() | validateResults() → if hours 0h-7.5h → set light green.

(function () {
    "use strict";

    var maxHoursDaily = 8;

    var bgColorSaturday = "#ff9999";
    var textColorSaturday = "black";
    var bgColorSunday = "#ff6666";
    var textColorSunday = "black";
    var bgColorWarning = "#f9f966";
    var bgColorDefault = "white";
    var bgColorDefaultExpected = "white";
    var bgColorCorrect = "#98bf69";
    var bgColorPartialHours = "#cde2b7";
    var bgColorPartialHoursExpected = "rgb(205, 226, 183)"; //M.Rys - color for partial hours

    var publicHolidays = ["01-01", "01-06", "04-09", "04-10", "05-01", "05-03", "05-28", "06-08", "08-15", "11-01", "11-11", "12-25", "12-26"];

    // May be needed to change return in case of different locale in browser.
    // TODO - make the selection automatic
    function getZeroInLocale() {
        return "0,00" // pl-PL
        //return "0.00" // en-US
    }

    // M.Rys: check unused tasks
    function checkUnusedTasks() {
        console.log("SELECT TASKS FOR WHICH TOTAL SUM OF HOURS IS EQUAL 0");

        var taskTable = document.querySelector('#table3');
        var tasksRows = taskTable.children[1];

        var taskTotalHoursTable = document.querySelector('#table5');
        var taskTotalHoursTBody = taskTotalHoursTable.children[1]
         for(let i = 1; i < taskTotalHoursTBody.children.length; i++) {
             let taskTotalHoursTD = taskTotalHoursTBody.children[i];
             let taskTotalHoursCell = taskTotalHoursTD.children[0];
             if(taskTotalHoursCell.children[0] !== undefined) {
                 let taskTotalHoursTxt = taskTotalHoursCell.children[0].children[0].children[0].children[1].textContent;
                 let taskTotalHours = parseFloat(taskTotalHoursTxt);
                 if(taskTotalHours === parseFloat(0)) {
                     let taskCell = tasksRows.children[i];
                     let taskCheckBox = taskCell.children[0].children[0];
                     if(taskCheckBox.checked) {
                         taskCheckBox.checked = false;
                         taskCheckBox.onclick();
                     } else {
                         taskCheckBox.checked = true;
                         taskCheckBox.onclick();
                     }
                 }
             }
         }
    }

    // M.Rys:
    function insertHours() {
//         console.log("START INSERT HOURS");
//         //find tasks
//         let found = [];
//         let foundId = new Map();

//         var taskTable = document.querySelector('#table3'); //put here window.opener.  <<<<<<
//         var tasksRows = taskTable.children[1];
//         for(let i = 1; i < tasksRows.children.length; i++) {
//             let taskCell = tasksRows.children[i];
//             found.push(i + ")" + taskCell.children[1].textContent);
//             foundId.set(found[i-1], i);
//             console.log(found[i-1] + "id = " + i);
//         };
//         console.log(foundId);
//         console.log(foundId.get(found[4]));
//         //find tasks

//         //filter task
//         console.log("OPEN WINDOWS, select task, write amount of hours, insert them.");
//         // ******** put macro here : findTasksFilterAndSetToMenu() ************
//         // ******** put macro here : insertHours() - content is below ************
//         let task = '\tTask: Development (Baby Waltz)\n' //example
//         let hours = parseFloat(30);
//         let taskId = foundId.get(task);
//         console.log("INSERT DATA: " + task + ", id=" + taskId + ", hours=" + hours);
//         //filter task

//         //insert hours
//         // ! be careful with these
//         let bgColorDefaultExpected = "white";
//         let bgColorPartialHoursExpected = "rgb(205, 226, 183)";
//         let maxHoursDaily = 8;
//         // ! be careful with these

//         let shallInsertHours = false;
//         let totalDayHours = 0;
//         var totalDayHoursTable = document.querySelector('#table7');  //put here window.opener.  <<<<<<
//         var dayHoursTable = document.querySelector('#table4');  //put here window.opener.  <<<<<<

//         var totalDayHoursRows = totalDayHoursTable.children[1];
//         var totalDayHoursCells = totalDayHoursRows.children[1];
//         for(let i = 0; i < totalDayHoursCells.children.length; i++) {
//             let dayHoursComponent = totalDayHoursCells.children[i];
//             let dayHoursBackgroundColor = dayHoursComponent.style.getPropertyValue("background-color");
//             shallInsertHours = (dayHoursBackgroundColor === bgColorPartialHoursExpected || dayHoursBackgroundColor === bgColorDefaultExpected);
//             if(shallInsertHours) {
//                 let totalDayHoursText = dayHoursComponent.textContent;
//                 totalDayHours = parseFloat(totalDayHoursText);
//                 console.log("Day " + i + " -> " + totalDayHours);

//                 if(totalDayHours < maxHoursDaily && hours > parseFloat(0)) {
//                     let freeHours = maxHoursDaily - totalDayHours;
//                     let hoursToInsert = freeHours <= hours ? freeHours : hours;
//                     console.log("YES, insert hours here: " + hoursToInsert + " from " + hours + "| i = " + i + ",taskId=" + taskId);
//                     hours = hours - hoursToInsert;

//                     //var dayHoursTable = document.querySelector('#table4');
//                     let dayHoursTBody = dayHoursTable.children[1];
//                     let dayHoursRow = dayHoursTBody.children[taskId];  //taskId=3
//                     let dayHoursCell = dayHoursRow.children[i]; //i=0
//                     let dayHoursInput = dayHoursCell.children[0];
//                     let currentHours = parseFloat(dayHoursInput.value);
//                     dayHoursInput.value = currentHours + hoursToInsert;
//                     dayHoursInput.onchange();
//                     validateAllFields();
//                 }
//             }
//         };


        //insert hours
        const originalWindow = window.opener;
        const aboutContent = 'Set hours window';
        const windowFeatures = "left=600,top=150,width=700,height=200,about:blank,about=test";
        const hiWindow = window.open(
            "",
            "insertHours",
            windowFeatures
        );
        // PASTE HERE CONVERTED PAGE
hiWindow.document.writeln("<!DOCTYPE html>");
hiWindow.document.writeln("<html lang=\"en\">");
hiWindow.document.writeln("<head>");
hiWindow.document.writeln("    <meta charset=\"UTF-8\">");
hiWindow.document.writeln("    <title>Insert Hours</title>");
hiWindow.document.writeln("    <style>");
hiWindow.document.writeln("        body {");
hiWindow.document.writeln("            background: linear-gradient(0.25turn, #e5e5e5, #b6b6b6, #e5e5e5);");
hiWindow.document.writeln("        }");
hiWindow.document.writeln(" ");
hiWindow.document.writeln("        label {");
hiWindow.document.writeln("            color: #939393;");
hiWindow.document.writeln("        }");
hiWindow.document.writeln(" ");
hiWindow.document.writeln("        input {");
hiWindow.document.writeln("            background: #e8ffe5;");
hiWindow.document.writeln("            font-size: 16px;");
hiWindow.document.writeln("            border-radius: 15px;");
hiWindow.document.writeln("            border-width: 0px;");
hiWindow.document.writeln("            padding: 5px;");
hiWindow.document.writeln("            padding-left: 20px;");
hiWindow.document.writeln("            margin: 5px;");
hiWindow.document.writeln("            width: 600px;");
hiWindow.document.writeln("            height: 32px;");
hiWindow.document.writeln("        }");
hiWindow.document.writeln(" ");
hiWindow.document.writeln("        input#hoursAmount {");
hiWindow.document.writeln("            width: 50px;");
hiWindow.document.writeln("        }");
hiWindow.document.writeln(" ");
hiWindow.document.writeln("        select {");
hiWindow.document.writeln("            background: #e8ffe5;");
hiWindow.document.writeln("            font-size: 16px;");
hiWindow.document.writeln("            border-radius: 15px;");
hiWindow.document.writeln("            border-width: 0px;");
hiWindow.document.writeln("            padding: 5px;");
hiWindow.document.writeln("            padding-left: 20px;");
hiWindow.document.writeln("            margin: 5px;");
hiWindow.document.writeln("            width: 620px;");
hiWindow.document.writeln("            height: 40px;");
hiWindow.document.writeln("        }");
hiWindow.document.writeln(" ");
hiWindow.document.writeln("        input#insertButton {");
hiWindow.document.writeln("            background: #62b0ff;");
hiWindow.document.writeln("            width: 150px;");
hiWindow.document.writeln("            height: 40px;");
hiWindow.document.writeln("            border-width: 3px;");
hiWindow.document.writeln("            padding-left: 0px;");
hiWindow.document.writeln("            margin-left: 50px;");
hiWindow.document.writeln("        }");
hiWindow.document.writeln(" ");
hiWindow.document.writeln("        div#status {");
hiWindow.document.writeln("            font-size: 16px;");
hiWindow.document.writeln("            color: #939393;");
hiWindow.document.writeln("            margin-top: 10px;");
hiWindow.document.writeln("            font-weight: bold;");
hiWindow.document.writeln("        }");
hiWindow.document.writeln("        b {");
hiWindow.document.writeln("            font-weight: normal;");
hiWindow.document.writeln("        }");
hiWindow.document.writeln("    </style>");
hiWindow.document.writeln("</head>");
hiWindow.document.writeln("<body onload=\"findTasksFilterAndSetToMenu()\">");
hiWindow.document.writeln("<form>");
hiWindow.document.writeln("    <label for=\"filterTasks\">Filter: </label>");
hiWindow.document.writeln("    <input type=\"text\" id=\"filterTasks\" value=\"\" onkeyup=\"findTasksFilterAndSetToMenu()\">");
hiWindow.document.writeln("    <br>");
hiWindow.document.writeln("    <label for=\"foundTasks\">Task: </label>");
hiWindow.document.writeln("    <select id=\"foundTasks\">");
hiWindow.document.writeln("    </select>");
hiWindow.document.writeln("    <br><label for=\"hoursAmount\">Hours:</label>");
hiWindow.document.writeln("    <input type=\"text\" id=\"hoursAmount\" value=\"40\" size=\"100px\">");
hiWindow.document.writeln("    <input type=\"button\" id=\"insertButton\" value=\"INSERT\" onclick=\"insertHours()\">");
hiWindow.document.writeln("    <br>");
hiWindow.document.writeln("    <div id=\"status\">Status: <b id=\"statusMessage\">waiting for pressing INSERT button</b></div>");
hiWindow.document.writeln("</form>");
hiWindow.document.writeln("<script>");
hiWindow.document.writeln("    let foundFiltered = [];");
hiWindow.document.writeln("    let foundId = new Map();");
hiWindow.document.writeln("    let task = \"\";");
hiWindow.document.writeln("    let hours = \"\";");
hiWindow.document.writeln("    const status = document.querySelector('#statusMessage');");
hiWindow.document.writeln(" ");
hiWindow.document.writeln("    function findTasksFilterAndSetToMenu() {");
hiWindow.document.writeln("        console.log(\"filter\");");
hiWindow.document.writeln("        //clear task list");
hiWindow.document.writeln("        const foundTasks = document.querySelector('#foundTasks');");
hiWindow.document.writeln("        while (foundTasks.firstChild) {");
hiWindow.document.writeln("            foundTasks.removeChild(foundTasks.lastChild);");
hiWindow.document.writeln("        }");
hiWindow.document.writeln(" ");
hiWindow.document.writeln("        //find tasks");
hiWindow.document.writeln("        let found = [];");
hiWindow.document.writeln(" ");
hiWindow.document.writeln("        var taskTable = window.opener.document.querySelector('#table3'); //put here window.opener.  <<<<<<");
hiWindow.document.writeln("        var tasksRows = taskTable.children[1];");
hiWindow.document.writeln("        for(let i = 1; i < tasksRows.children.length; i++) {");
hiWindow.document.writeln("            let taskCell = tasksRows.children[i];");
hiWindow.document.writeln("            found.push(i + \")\" + taskCell.children[1].textContent);");
hiWindow.document.writeln("            foundId.set(found[i-1], i);");
hiWindow.document.writeln("            console.log(found[i-1] + \"id = \" + i);");
hiWindow.document.writeln("        };");
hiWindow.document.writeln("        console.log(foundId);");
hiWindow.document.writeln("        console.log(foundId.get(found[4]));");
hiWindow.document.writeln("        //find tasks");
hiWindow.document.writeln(" ");
hiWindow.document.writeln(" ");
hiWindow.document.writeln("        //filter");
hiWindow.document.writeln("        let filter = document.querySelector('#filterTasks').value;");
hiWindow.document.writeln("        filter = filter.toLowerCase();");
hiWindow.document.writeln("        let words = filter.split(\" \");");
hiWindow.document.writeln(" ");
hiWindow.document.writeln("        foundFiltered = [];");
hiWindow.document.writeln("        found.forEach(task => {");
hiWindow.document.writeln("            let taskLowerCase = task.toLowerCase();");
hiWindow.document.writeln("            let taskShallBeAdded = true;");
hiWindow.document.writeln("            words.forEach(word => {");
hiWindow.document.writeln("                if (taskLowerCase.search(word) === -1 && word !== \"\") {");
hiWindow.document.writeln("                    taskShallBeAdded = false;");
hiWindow.document.writeln("                }");
hiWindow.document.writeln("            });");
hiWindow.document.writeln("            if (taskShallBeAdded) {");
hiWindow.document.writeln("                foundFiltered.push(task);");
hiWindow.document.writeln("            }");
hiWindow.document.writeln("        });");
hiWindow.document.writeln(" ");
hiWindow.document.writeln(" ");
hiWindow.document.writeln("        let i = 0;");
hiWindow.document.writeln("        foundFiltered.forEach(found => {");
hiWindow.document.writeln("            let newOption = new Option(found);");
hiWindow.document.writeln("            i++;");
hiWindow.document.writeln("            let id = \"foundTask-\" + i;");
hiWindow.document.writeln("            newOption.setAttribute('value', found);");
hiWindow.document.writeln("            newOption.setAttribute('id', id);");
hiWindow.document.writeln("            foundTasks.add(newOption);");
hiWindow.document.writeln("        })");
hiWindow.document.writeln(" ");
hiWindow.document.writeln(" ");
hiWindow.document.writeln("    }");
hiWindow.document.writeln(" ");
hiWindow.document.writeln("    function insertHours() {");
hiWindow.document.writeln("        task = document.querySelector('#foundTasks').value;");
hiWindow.document.writeln("        hours = document.querySelector('#hoursAmount').value;");
hiWindow.document.writeln("        let taskId = foundId.get(task);");
hiWindow.document.writeln("        status.textContent = hours + \" hours were inserted to \" + task;");
hiWindow.document.writeln(" ");
hiWindow.document.writeln("        //insert hours");
hiWindow.document.writeln("        // ! be careful with these");
hiWindow.document.writeln("        let bgColorDefaultExpected = \"white\";");
hiWindow.document.writeln("        let bgColorPartialHoursExpected = \"rgb(205, 226, 183)\";");
hiWindow.document.writeln("        let maxHoursDaily = 8;");
hiWindow.document.writeln("        // ! be careful with these");
hiWindow.document.writeln(" ");
hiWindow.document.writeln("        let shallInsertHours = false;");
hiWindow.document.writeln("        let totalDayHours = 0;");
hiWindow.document.writeln("        var totalDayHoursTable = window.opener.document.querySelector('#table7');  //put here window.opener.  <<<<<<");
hiWindow.document.writeln("        var dayHoursTable = window.opener.document.querySelector('#table4');  //put here window.opener.  <<<<<<");
hiWindow.document.writeln(" ");
hiWindow.document.writeln("        var totalDayHoursRows = totalDayHoursTable.children[1];");
hiWindow.document.writeln("        var totalDayHoursCells = totalDayHoursRows.children[1];");
hiWindow.document.writeln("        for(let i = 0; i < totalDayHoursCells.children.length; i++) {");
hiWindow.document.writeln("            let dayHoursComponent = totalDayHoursCells.children[i];");
hiWindow.document.writeln("            let dayHoursBackgroundColor = dayHoursComponent.style.getPropertyValue(\"background-color\");");
hiWindow.document.writeln("            shallInsertHours = (dayHoursBackgroundColor === bgColorPartialHoursExpected || dayHoursBackgroundColor === bgColorDefaultExpected);");
hiWindow.document.writeln("            if(shallInsertHours) {");
hiWindow.document.writeln("                let totalDayHoursText = dayHoursComponent.textContent;");
hiWindow.document.writeln("                totalDayHours = parseFloat(totalDayHoursText);");
hiWindow.document.writeln("                console.log(\"Day \" + i + \" -> \" + totalDayHours);");
hiWindow.document.writeln(" ");
hiWindow.document.writeln("                if(totalDayHours < maxHoursDaily && hours > parseFloat(0)) {");
hiWindow.document.writeln("                    let freeHours = maxHoursDaily - totalDayHours;");
hiWindow.document.writeln("                    let hoursToInsert = freeHours <= hours ? freeHours : hours;");
hiWindow.document.writeln("                    console.log(\"YES, insert hours here: \" + hoursToInsert + \" from \" + hours + \"| i = \" + i + \",taskId=\" + taskId);");
hiWindow.document.writeln("                    hours = hours - hoursToInsert;");
hiWindow.document.writeln(" ");
hiWindow.document.writeln("                    //var dayHoursTable = document.querySelector('#table4');");
hiWindow.document.writeln("                    let dayHoursTBody = dayHoursTable.children[1];");
hiWindow.document.writeln("                    let dayHoursRow = dayHoursTBody.children[taskId];  //taskId=3");
hiWindow.document.writeln("                    let dayHoursCell = dayHoursRow.children[i]; //i=0");
hiWindow.document.writeln("                    let dayHoursInput = dayHoursCell.children[0];");
hiWindow.document.writeln("                    let currentHours = parseFloat(dayHoursInput.value);");
hiWindow.document.writeln("                    dayHoursInput.value = currentHours + parseFloat(hoursToInsert);");
hiWindow.document.writeln("                    dayHoursInput.onchange();");
hiWindow.document.writeln("                    // validateAllFields();");
hiWindow.document.writeln("                    window.opener.document.querySelectorAll('input[value=Validate]')[0].click();");
hiWindow.document.writeln("                }");
hiWindow.document.writeln("            }");
hiWindow.document.writeln("        };");
hiWindow.document.writeln("    }");
hiWindow.document.writeln("</script>");
hiWindow.document.writeln("</body>");
hiWindow.document.writeln("</html>");
        validateAllFields()
        // PASTE HERE CONVERTED PAGE

        if (!hiWindow) {
            alert("Turn off popup blockers!");
        }
    }

    GM_addStyle("#wiTable_leftDataDiv, #wiTable_middleDataDiv, #wiTable_rightDataDiv { height: 100% !important; }" +
        ".sticky { position: fixed !important; top: 0 !important; z-index: 300 !important; }" +
        "td { border-radius: 10px; text-align: center !important; padding: 1px !important; margin: 10px !important; }" +
        "input { border-radius: 2px; border: 1px solid black !important; }" +
        "#table4 .tab-list-data-R { border: 1px solid lightgrey !important; }" +
        "#table1 td { color: black; }" +
        "#wiTable_rightHeaderDiv, #wiTable_rightTotalDiv { width: 102px !important; }" +
        ".h_border_onlyRow_middle, .h_border_onlyRow_last, .noTopBorder, .resultH, .resultMD { color: black !important; font-weight: bold; font-size: 12px; }" +
        ".result0 { font-weight: normal; color: lightgrey !important; }" +
        ".subgroupings-right, .subgroupings-left { color: black !important; background-color: #d0d1ff !important; }");

    function createButton(context, func, value) {
        var button = document.createElement("input");
        button.type = "button";
        button.value = value;
        button.onclick = func;
        button.style.padding = "5px";
        button.style.marginLeft = "10px";
        button.style.fontSize = "15px";
        button.style.verticalAlign = "middle";

        context.appendChild(button);
    }

    function createCheckbox(context, func, labelValue) {
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = func;
        checkbox.id = "fixPpmAuto";
        checkbox.style.padding = "5px";
        checkbox.style.marginLeft = "10px";
        checkbox.style.fontSize = "15px";
        checkbox.style.verticalAlign = "middle";
        checkbox.style.zoom = "1.5";

        var label = document.createElement("label");
        label.innerHTML = labelValue;
        label.style.verticalAlign = "middle";
        label.style.padding = "2px";
        label.style.fontSize = "15px";

        context.appendChild(checkbox);
        context.appendChild(label);

        if (localStorage.getItem("isFixPpmAutoChecked") == "true") {
            checkbox.click();
        }
    }

    function clearZeros() {
        var allInputs = document.getElementsByTagName("input");
        for (var i = 0; i < allInputs.length; i++) {
            if (typeof allInputs[i] == "undefined") {
                continue;
            }

            if (allInputs[i].value == getZeroInLocale()) {
                allInputs[i].value = "";
            }
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

    function validateInputEvent() {
        if (this.value == getZeroInLocale()) {
            this.value = "";
            colorDefaultInput(this.parentNode);
        } else {
            validateAndColorInput(this);
        }
        validateResults();
        calculateMdCell();
    }

    function validateAndColorInput(object) {
        var nodeValue = parseFloat(object.value.replace(",", "."));

        if (!isNaN(nodeValue) && (object.value.length > 4 || nodeValue % 0.5 != 0 || nodeValue > maxHoursDaily)) {
            object.parentNode.style.backgroundColor = bgColorWarning;
        } else if (nodeValue == maxHoursDaily) {
            object.parentNode.style.backgroundColor = bgColorCorrect;
        } else if ((nodeValue >= 0.5) && (nodeValue < maxHoursDaily) && (nodeValue % 0.5 == 0)) {
            //M.Rys - color for partial hours
            object.parentNode.style.backgroundColor = bgColorPartialHours;
        } else if (!isNaN(nodeValue) && nodeValue != 0) {
            object.parentNode.style.backgroundColor = bgColorDefault;
        } else {
            colorDefaultInput(object.parentNode);
        }
    }

    function validateResults() {
        var nodeValue,
        resultTable = document.querySelector('#table7'),
        resultNodes = resultTable.querySelectorAll("span");
        for (var i = 0; i < resultNodes.length; i++) {
            if (typeof resultNodes[i] == "undefined") {
                continue;
            }

            nodeValue = parseFloat(resultNodes[i].innerHTML.replace(",", "."));
            if (nodeValue == maxHoursDaily) {
                resultNodes[i].parentNode.style.backgroundColor = bgColorCorrect;
            } else if ((nodeValue >= 0.5) && (nodeValue < maxHoursDaily) && (nodeValue % 0.5 == 0)) {
                //M.Rys - color for total hours not equals to max
                resultNodes[i].parentNode.style.backgroundColor = bgColorPartialHours;
            } else if (nodeValue > 9999 || nodeValue > maxHoursDaily || nodeValue % 0.5 != 0) {
                resultNodes[i].parentNode.style.backgroundColor = bgColorWarning;
            } else if (nodeValue != 0) {
                resultNodes[i].parentNode.style.backgroundColor = bgColorDefault;
            } else {
                colorDefaultInput(resultNodes[i].parentNode);
            }
        }
    }

    function colorDefaultInput(object) {
        if (object.classList.contains("sat")) {
            object.style.backgroundColor = bgColorSaturday;
        } else if (object.classList.contains("sun")) {
            object.style.backgroundColor = bgColorSunday;
        } else {
            object.style.backgroundColor = bgColorDefault;
        }
    }

    function colorAllTdsInTable(tableId) {
        var tdSelectors,
        mainTable = document.querySelector(tableId),
        trSelectors = mainTable.querySelectorAll('tr');

        for (var i = 0; i < trSelectors.length; i++) {
            if (typeof trSelectors[i] == "undefined") {
                continue;
            }
            tdSelectors = trSelectors[i].querySelectorAll('td');

            for (var j = 0; j < tdSelectors.length; j++) {
                if (typeof tdSelectors[j] == "undefined" || tdSelectors.length < 3) {
                    continue;
                }

                if (saturdays.includes(j)) {
                    tdSelectors[j].style.backgroundColor = bgColorSaturday;
                    tdSelectors[j].style.color = textColorSaturday;
                    tdSelectors[j].classList.add("sat");
                }

                if (sundays.includes(j)) {
                    tdSelectors[j].style.backgroundColor = bgColorSunday;
                    tdSelectors[j].style.color = textColorSunday;
                    tdSelectors[j].classList.add("sun");
                }
            }
        }
    }

    function checkTheBox() {
        clearZeros();
        validateAllFields();

        var isChecked = document.getElementById("fixPpmAuto").checked;
        localStorage.setItem("isFixPpmAutoChecked", isChecked);
        var inputsTable = document.querySelector('#table4');
        var inputNodes = inputsTable.querySelectorAll("input");

        for (var i = 0; i < inputNodes.length; i++) {
            if (typeof inputNodes[i] == "undefined" || inputNodes[i].type == "hidden") {
                continue;
            }
            if (isChecked) {
                inputNodes[i].addEventListener("change", validateInputEvent);
            } else {
                inputNodes[i].removeEventListener("change", validateInputEvent);
            }
        }
    }

    function colorHeaderRow() {
        var headerTable = document.querySelector('#table1');
        var headerNodes = headerTable.querySelectorAll('.ellipsisCell');

        for (var i = 0; i < headerNodes.length; i++) {
            if (typeof headerNodes[i] == "undefined") {
                continue;
            }

            if (headerNodes[i].innerHTML.includes("N<br>") || headerNodes[i].innerHTML.includes("Sun<br>") || new RegExp(publicHolidays.join("|")).test(headerNodes[i].innerHTML)) {
                headerNodes[i].style.backgroundColor = bgColorSunday;
                headerNodes[i].style.color = textColorSunday;
                sundays[sundays.length] = i;
            } else if (headerNodes[i].innerHTML.includes("So<br>") || headerNodes[i].innerHTML.includes("Sat<br>")) {
                headerNodes[i].style.backgroundColor = bgColorSaturday;
                headerNodes[i].style.color = textColorSaturday;
                saturdays[saturdays.length] = i;
            }
        }
    }

    function saveEvent() {
        var inputsTable = document.querySelector("#table4"),
        inputNodes = inputsTable.querySelectorAll("input");
        for (var i = 0; i < inputNodes.length; i++) {
            if (typeof inputNodes[i] == "undefined" || inputNodes[i].type == "hidden") {
                continue;
            }

            if (inputNodes[i].value == "") {
                inputNodes[i].value = getZeroInLocale();
            }
        }
    }

    function scrollHeader() {
        if (window.pageYOffset > stickyHeader) {
            document.getElementById("wiTable_leftHeaderDiv").classList.add("sticky");
            document.getElementById("wiTable_middleHeaderDiv").classList.add("sticky");
            document.getElementById("wiTable_rightHeaderDiv").classList.add("sticky");
            document.getElementById("wiTable_leftDataDiv").style.marginTop = document.getElementById('wiTable_middleHeaderDiv').offsetHeight;
            document.getElementById("wiTable_middleDataDiv").style.marginTop = document.getElementById('wiTable_middleHeaderDiv').offsetHeight;
            document.getElementById("wiTable_rightDataDiv").style.marginTop = document.getElementById('wiTable_middleHeaderDiv').offsetHeight;
        } else {
            document.getElementById("wiTable_leftHeaderDiv").classList.remove("sticky");
            document.getElementById("wiTable_middleHeaderDiv").classList.remove("sticky");
            document.getElementById("wiTable_rightHeaderDiv").classList.remove("sticky");
            document.getElementById("wiTable_leftDataDiv").style.marginTop = 0;
            document.getElementById("wiTable_middleDataDiv").style.marginTop = 0;
            document.getElementById("wiTable_rightDataDiv").style.marginTop = 0;
        }
    }

    function addMdCell(tableId) {
        var tdSelector,
        cell,
        spanH,
        spanMD,
        table = document.querySelector(tableId),
        trSelectors = table.querySelectorAll('tr');

        for (var i = 0; i < trSelectors.length; i++) {
            if (typeof trSelectors[i] == "undefined" || trSelectors[i].getElementsByClassName("subgroupings-left").length != 0 || trSelectors[i].getElementsByTagName("tr").length == 0) {
                continue;
            }

            tdSelector = trSelectors[i].firstChild;

            if (typeof tdSelector == "undefined") {
                continue;
            }
            rowsTotal++;
            tdSelector.colSpan = 1;

            spanH = tdSelector.getElementsByTagName("span")[0];
            spanH.classList.add("resultH", "resultH" + rowsTotal);

            cell = trSelectors[i].insertCell(1);
            cell.colSpan = 1;
            cell.appendChild(createTable());
            cell.classList.add("h_border_onlyColumn_last", "ellipsisCell");

            spanMD = cell.getElementsByTagName("span")[0]
                spanMD.classList.add("resultMD", "resultMD" + rowsTotal);
        }
    }

    function createTable() {
        var table = document.createElement('table'),
        tbody = document.createElement('tbody'),
        span = document.createElement('span'),
        cell,
        row;
        table.width = "100%";
        table.appendChild(tbody);

        row = table.insertRow(0);
        cell = row.insertCell(0);
        span = cell.appendChild(span);
        return table;
    }

    function calculateMdCell() {
        var cellH = document.getElementsByClassName("resultH"),
        cellMD = document.getElementsByClassName("resultMD"),
        cellHValue;

        for (var i = 0; i < rowsTotal; i++) {
            if (cellH[i].innerHTML == getZeroInLocale()) {
                cellH[i].classList.add("result0");
                cellMD[i].classList.add("result0");
            } else {
                cellH[i].classList.remove("result0");
                cellMD[i].classList.remove("result0");
            }

            cellHValue = parseFloat(cellH[i].innerHTML.replace(",", "."));
            cellMD[i].innerHTML = Math.floor(cellHValue / 8) + "d " + cellHValue % 8 + "h";
        }

    }

    function changeSpans() {
        var table = document.getElementById("table3")
            var spans = table.getElementsByTagName("span");
        for (var span of spans) {
            span.textContent = span.title.split("&gt; ")[1]
        }
    }

    var x = document.getElementById("table1");

    var saturdays = [];
    var sundays = [];
    var rowsTotal = 0;

    colorHeaderRow();

    createButton(document.body, clearZeros, "Clear all 0's");
    createButton(document.body, validateAllFields, "Validate");
    createButton(document.body, insertHours, "Insert hours");    // M.Rys: insert hours
    createButton(document.body, checkUnusedTasks, "Check unused tasks");    // M.Rys: check unused tasks
    createCheckbox(document.body, checkTheBox, "Auto clear & validate");

    document.getElementById("wiTable_rightDataDiv").classList.remove("verticalScrollDiv");

    clearZeros();
    colorAllTdsInTable("#table4");
    colorAllTdsInTable("#table7");
    addMdCell("#table5");
    addMdCell("#table8");

    document.getElementById("save_top").addEventListener("mousedown", saveEvent);
    document.getElementById("release_top").addEventListener("mousedown", saveEvent);

    if (document.getElementById("fixPpmAuto").checked) {
        validateAllFields();
        calculateMdCell();
    }

    window.onscroll = function () {
        scrollHeader()
    };
    var header = document.getElementById("myHeader");

    var stickyHeader = document.getElementById("wiTable_middleHeaderDiv").offsetTop + document.getElementById("headerMenu").offsetHeight + 15;

    changeSpans();
})();
