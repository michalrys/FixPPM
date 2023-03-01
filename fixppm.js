// ==UserScript==
// @name         More readable PPM and insert hours window
// @namespace    https://itg.crifnet.com/itg/tm/EditTimeSheet.do?timesheetId=*
// @homepage     https://github.com/michalrys/FixPPM
// @homepageURL  https://github.com/michalrys/FixPPM
// @updateURL    https://raw.githubusercontent.com/michalrys/FixPPM/master/fixppm.js
// @downloadURL  https://raw.githubusercontent.com/michalrys/FixPPM/master/fixppm.js
// @version      1.8.9
// @description  Button Check unused tasks.
// @author       Damian Zyngier, Michał Ryś
// @match        https://itg.crifnet.com/itg/tm/EditTimeSheet.do?timesheetId=*
// @grant        GM_addStyle
// ==/UserScript==
// forked from: https://github.com/DamianZyngier/FixPPM
// search for 'M.Rys' to get my modifications

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

    function isZero(content) {
        return parseFloat(content) === parseFloat("0");
    }

    // M.Rys: check unused tasks
    function checkUnusedTasks() {
        var taskTable = document.querySelector('#table3');
        var tasksRows = taskTable.children[1];

        var taskTotalHoursTable = document.querySelector('#table5');
        var taskTotalHoursTBody = taskTotalHoursTable.children[1]
        for (let i = 1; i < taskTotalHoursTBody.children.length; i++) {
            let taskTotalHoursTD = taskTotalHoursTBody.children[i];
            let taskTotalHoursCell = taskTotalHoursTD.children[0];
            if (taskTotalHoursCell.children[0] !== undefined) {
                let taskTotalHoursTxt = taskTotalHoursCell.children[0].children[0].children[0].children[1].textContent;
                let taskTotalHours = parseFloat(taskTotalHoursTxt);
                if (taskTotalHours === parseFloat(0)) {
                    let taskCell = tasksRows.children[i];
                    let taskCheckBox = taskCell.children[0].children[0];
                    if (taskCheckBox.checked) {
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

    // M.Rys: additional window for inserting/removing hours
    function insertHours() {
        const originalWindow = window.opener;
        const aboutContent = 'Set hours window';
        const windowFeatures = "left=600,top=150,width=710,height=210,about:blank,about=test";
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
        hiWindow.document.writeln("            box-shadow: 3px 3px #b4b4b4 inset;");
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
        hiWindow.document.writeln("            box-shadow: 3px 3px #b4b4b4 inset;");
        hiWindow.document.writeln("            font-size: 16px;");
        hiWindow.document.writeln("            border-radius: 15px;");
        hiWindow.document.writeln("            border-width: 0px;");
        hiWindow.document.writeln("            padding: 5px;");
        hiWindow.document.writeln("            padding-left: 20px;");
        hiWindow.document.writeln("            margin: 5px;");
        hiWindow.document.writeln("            width: 625px;");
        hiWindow.document.writeln("            height: 40px;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#insertButton {");
        hiWindow.document.writeln("            background: #9cff62;");
        hiWindow.document.writeln("            box-shadow: 3px 3px 0 #000000;");
        hiWindow.document.writeln("            width: 120px;");
        hiWindow.document.writeln("            height: 40px;");
        hiWindow.document.writeln("            border-width: 3px;");
        hiWindow.document.writeln("            padding-left: 0px;");
        hiWindow.document.writeln("            margin-left: 40px;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#removeButton {");
        hiWindow.document.writeln("            background: #ff6262;");
        hiWindow.document.writeln("            box-shadow: 3px 3px 0 #000000;");
        hiWindow.document.writeln("            transition: all .15s linear 0s;");
        hiWindow.document.writeln("            position: relative;");
        hiWindow.document.writeln("            display: inline-block;");
        hiWindow.document.writeln("            width: 120px;");
        hiWindow.document.writeln("            height: 40px;");
        hiWindow.document.writeln("            border-width: 3px;");
        hiWindow.document.writeln("            padding-left: 0px;");
        hiWindow.document.writeln("            margin-left: 15px;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#insertButton:active {");
        hiWindow.document.writeln("            background: #63a83b;");
        hiWindow.document.writeln("            box-shadow: 0px 0px 0 #000000;");
        hiWindow.document.writeln("            transition: all .05s linear 0s;");
        hiWindow.document.writeln("            top: 3px;");
        hiWindow.document.writeln("            left: 3px;");
        hiWindow.document.writeln("            position: relative;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#insertButton:hover {");
        hiWindow.document.writeln("            border-color: #0014ff;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#removeButton:active {");
        hiWindow.document.writeln("            background: #ad3f3f;");
        hiWindow.document.writeln("            box-shadow: 0px 0px 0 #000000;");
        hiWindow.document.writeln("            transition: all .05s linear 0s;");
        hiWindow.document.writeln("            top: 3px;");
        hiWindow.document.writeln("            left: 3px;");
        hiWindow.document.writeln("            position: relative;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#removeButton:hover {");
        hiWindow.document.writeln("            border-color: #0014ff;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#removeButton:active {");
        hiWindow.document.writeln("            background: #ad3f3f;");
        hiWindow.document.writeln("            box-shadow: 0px 0px 0 #000000;");
        hiWindow.document.writeln("            transition: all .05s linear 0s;");
        hiWindow.document.writeln("            top: 3px;");
        hiWindow.document.writeln("            left: 3px;");
        hiWindow.document.writeln("            position: relative;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#removeButton:hover {");
        hiWindow.document.writeln("            border-color: #0014ff;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#convertJiraReportButton {");
        hiWindow.document.writeln("            font-size: 10px;");
        hiWindow.document.writeln("            font-weight: bold;");
        hiWindow.document.writeln("            background: #07e3da;");
        hiWindow.document.writeln("            box-shadow: 3px 3px 0 #000000;");
        hiWindow.document.writeln("            transition: all .15s linear 0s;");
        hiWindow.document.writeln("            position: relative;");
        hiWindow.document.writeln("            display: inline-block;");
        hiWindow.document.writeln("            width: 55px;");
        hiWindow.document.writeln("            height: 40px;");
        hiWindow.document.writeln("            border-width: 3px;");
        hiWindow.document.writeln("            padding-left: 0px;");
        hiWindow.document.writeln("            margin-left: 30px;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#convertJiraReportButton:active {");
        hiWindow.document.writeln("            background: #0d9492;");
        hiWindow.document.writeln("            box-shadow: 0px 0px 0 #000000;");
        hiWindow.document.writeln("            transition: all .05s linear 0s;");
        hiWindow.document.writeln("            top: 3px;");
        hiWindow.document.writeln("            left: 3px;");
        hiWindow.document.writeln("            position: relative;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#convertJiraReportButton:hover {");
        hiWindow.document.writeln("            border-color: #0014ff;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#writeToTxtButton {");
        hiWindow.document.writeln("            font-size: 10px;");
        hiWindow.document.writeln("            font-weight: bold;");
        hiWindow.document.writeln("            background: #ffe786;");
        hiWindow.document.writeln("            box-shadow: 3px 3px 0 #000000;");
        hiWindow.document.writeln("            transition: all .15s linear 0s;");
        hiWindow.document.writeln("            position: relative;");
        hiWindow.document.writeln("            display: inline-block;");
        hiWindow.document.writeln("            width: 55px;");
        hiWindow.document.writeln("            height: 40px;");
        hiWindow.document.writeln("            border-width: 3px;");
        hiWindow.document.writeln("            padding-left: 0px;");
        hiWindow.document.writeln("            margin-left: 10px;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#writeToTxtButton:active {");
        hiWindow.document.writeln("            background: #bdaa64;");
        hiWindow.document.writeln("            box-shadow: 0px 0px 0 #000000;");
        hiWindow.document.writeln("            transition: all .05s linear 0s;");
        hiWindow.document.writeln("            top: 3px;");
        hiWindow.document.writeln("            left: 3px;");
        hiWindow.document.writeln("            position: relative;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#writeToTxtButton:hover {");
        hiWindow.document.writeln("            border-color: #0014ff;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#readTxtButton {");
        hiWindow.document.writeln("            font-size: 10px;");
        hiWindow.document.writeln("            font-weight: bold;");
        hiWindow.document.writeln("            background: #c987ff;");
        hiWindow.document.writeln("            box-shadow: 3px 3px 0 #000000;");
        hiWindow.document.writeln("            transition: all .15s linear 0s;");
        hiWindow.document.writeln("            position: relative;");
        hiWindow.document.writeln("            display: inline-block;");
        hiWindow.document.writeln("            width: 55px;");
        hiWindow.document.writeln("            height: 40px;");
        hiWindow.document.writeln("            border-width: 3px;");
        hiWindow.document.writeln("            padding-left: 0px;");
        hiWindow.document.writeln("            margin-left: 5px;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#readTxtButton:active {");
        hiWindow.document.writeln("            background: #9460bd;");
        hiWindow.document.writeln("            box-shadow: 0px 0px 0 #000000;");
        hiWindow.document.writeln("            transition: all .05s linear 0s;");
        hiWindow.document.writeln("            top: 3px;");
        hiWindow.document.writeln("            left: 3px;");
        hiWindow.document.writeln("            position: relative;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#readTxtButton:hover {");
        hiWindow.document.writeln("            border-color: #0014ff;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        div#statusMessage {");
        hiWindow.document.writeln("            font-size: 16px;");
        hiWindow.document.writeln("            color: #939393;");
        hiWindow.document.writeln("            margin-top: 10px;");
        hiWindow.document.writeln("            font-weight: normal;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln("    </style>");
        hiWindow.document.writeln("</head>");
        hiWindow.document.writeln("<body>");
        hiWindow.document.writeln("<form>");
        hiWindow.document.writeln("    <table>");
        hiWindow.document.writeln("        <tr>");
        hiWindow.document.writeln("            <td>");
        hiWindow.document.writeln("                <label for=\"filterTasks\">Filter: </label>");
        hiWindow.document.writeln("            </td>");
        hiWindow.document.writeln("            <td>");
        hiWindow.document.writeln("                <input type=\"text\" id=\"filterTasks\" value=\"\" onkeyup=\"findTasksFilterAndSetToMenu()\"");
        hiWindow.document.writeln("                       onmouseover=\"filterTasksInfo()\">");
        hiWindow.document.writeln("            </td>");
        hiWindow.document.writeln("        </tr>");
        hiWindow.document.writeln("        <tr>");
        hiWindow.document.writeln("            <td>");
        hiWindow.document.writeln("                <label for=\"foundTasks\">Task: </label>");
        hiWindow.document.writeln("            </td>");
        hiWindow.document.writeln("            <td>");
        hiWindow.document.writeln("                <select id=\"foundTasks\" onmouseover=\"foundTasksInfo()\">");
        hiWindow.document.writeln("                </select>");
        hiWindow.document.writeln("            </td>");
        hiWindow.document.writeln("        </tr>");
        hiWindow.document.writeln("        <tr>");
        hiWindow.document.writeln("            <td>");
        hiWindow.document.writeln("                <label for=\"hoursAmount\">Hours:</label>");
        hiWindow.document.writeln("            </td>");
        hiWindow.document.writeln("            <td>");
        hiWindow.document.writeln("                <input type=\"text\" id=\"hoursAmount\" value=\"40\" size=\"100px\" onmouseover=\"hoursAmountInfo()\">");
        hiWindow.document.writeln("                <input type=\"button\" id=\"insertButton\" value=\"INSERT\" onclick=\"insertHours()\"");
        hiWindow.document.writeln("                       onmouseover=\"insertButtonInfo()\">");
        hiWindow.document.writeln("                <input type=\"button\" id=\"removeButton\" value=\"REMOVE\" onclick=\"removeHours()\"");
        hiWindow.document.writeln("                       onmouseover=\"removeButtonInfo()\">");
        hiWindow.document.writeln("                <input type=\"button\" id=\"convertJiraReportButton\" value=\"convJira\" onclick=\"convertJiraReport()\"");
        hiWindow.document.writeln("                       onmouseover=\"convertJiraReportInfo()\">");
        hiWindow.document.writeln("                <input type=\"button\" id=\"writeToTxtButton\" value=\"writeTXT\" onclick=\"writeToTxtFile()\"");
        hiWindow.document.writeln("                       onmouseover=\"writeToTxtButtonInfo()\">");
        hiWindow.document.writeln("                <input type=\"button\" id=\"readTxtButton\" value=\"parseTXT\" onclick=\"readTxtFile()\"");
        hiWindow.document.writeln("                       onmouseover=\"readTxtButtonInfo()\">");
        hiWindow.document.writeln("            </td>");
        hiWindow.document.writeln("        </tr>");
        hiWindow.document.writeln("        <tr>");
        hiWindow.document.writeln("            <td></td>");
        hiWindow.document.writeln("            <td>");
        hiWindow.document.writeln("                <div id=\"statusMessage\">Waiting for pressing some button...</div>");
        hiWindow.document.writeln("            </td>");
        hiWindow.document.writeln("        </tr>");
        hiWindow.document.writeln("    </table>");
        hiWindow.document.writeln("</form>");
        hiWindow.document.writeln("<script src=\"https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.9/xlsx.full.min.js\"></script>");
        hiWindow.document.writeln("<script>");
        hiWindow.document.writeln("    let foundFiltered = [];");
        hiWindow.document.writeln("    let foundId = new Map();");
        hiWindow.document.writeln("    let sumHoursForTask = [];");
        hiWindow.document.writeln("    let task = \"\";");
        hiWindow.document.writeln("    let hours = \"\";");
        hiWindow.document.writeln("    const status = document.querySelector('#statusMessage');");
        hiWindow.document.writeln("    document.querySelectorAll('input[id=filterTasks]')[0].onkeyup();");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("    function filterTasksInfo() {");
        hiWindow.document.writeln("        status.textContent = \"Filter ? just start writing, tasks will be filtered.\";");
        hiWindow.document.writeln("    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("    function hoursAmountInfo() {");
        hiWindow.document.writeln("        status.textContent = \"Hours ? write here amount of h for selected task. Both , and . are supported.\";");
        hiWindow.document.writeln("    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("    function foundTasksInfo() {");
        hiWindow.document.writeln("        status.textContent = \"Task ? select filtered one.\";");
        hiWindow.document.writeln("    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("    function insertButtonInfo() {");
        hiWindow.document.writeln("        status.textContent = \"INSERT ? try to add given hours into selected task, if it is possible, starting from 1st day.\";");
        hiWindow.document.writeln("    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("    function removeButtonInfo() {");
        hiWindow.document.writeln("        status.textContent = \"REMOVE ? try to substruct given hours from selected task, if it is posiible, starting from last day.\";");
        hiWindow.document.writeln("    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("    function convertJiraReportInfo() {");
        hiWindow.document.writeln("        status.textContent = \"convJira ? read xls report from Jira and covert to input txt file.\";");
        hiWindow.document.writeln("    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("    function writeToTxtButtonInfo() {");
        hiWindow.document.writeln("        status.textContent = \"writeTXT ? write all filtered tasks to a txt file, including total hours.\";");
        hiWindow.document.writeln("    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("    function readTxtButtonInfo() {");
        hiWindow.document.writeln("        status.textContent = \"parseTXT ? read txt file and try to add/remove hours for each task.\";");
        hiWindow.document.writeln("    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("    function findTasksFilterAndSetToMenu() {");
        hiWindow.document.writeln("        //console.log(\"filter\");");
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
        hiWindow.document.writeln("        let iFound = -1;");
        hiWindow.document.writeln("        for (let i = 1; i < tasksRows.children.length; i++) {");
        hiWindow.document.writeln("            let taskCell = tasksRows.children[i];");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("            let taskName = taskCell.children[1].textContent.replaceAll(\"\\n\", \"\").replaceAll(\"\\t\", \"\");");
        hiWindow.document.writeln("            if (taskName.includes(\"Project:\") || taskName.includes(\"Misc -\")) {");
        hiWindow.document.writeln("                continue;");
        hiWindow.document.writeln("            }");
        hiWindow.document.writeln("            iFound = iFound + 1;");
        hiWindow.document.writeln("            if (found.includes(taskName)) {");
        hiWindow.document.writeln("                taskName = taskName + \"_duplicated\";");
        hiWindow.document.writeln("            }");
        hiWindow.document.writeln("            found.push(taskName);");
        hiWindow.document.writeln("            // found.push(i + \")\" + taskCell.children[1].textContent.replaceAll(\"\\n\",\"\"));");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("            foundId.set(found[iFound], i);");
        hiWindow.document.writeln("            //console.log(found[iFound] + \"id = \" + i);");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("            // finding sum hours --------------");
        hiWindow.document.writeln("            var sumHoursTable = window.opener.document.querySelector('#table5');  //put here window.opener.  <<<<<<");
        hiWindow.document.writeln("            var sumHoursTableTBody = sumHoursTable.children[1];");
        hiWindow.document.writeln("            var sumHoursTableTBodyTR = sumHoursTableTBody.children[i];");
        hiWindow.document.writeln("            var sumHoursTableTBodyTD = sumHoursTableTBodyTR.children[0];");
        hiWindow.document.writeln("            var sumHoursTableTBodyTDsubtable = sumHoursTableTBodyTD.children[0];");
        hiWindow.document.writeln("            var sumHours = sumHoursTableTBodyTDsubtable.children[0].children[0].children[1].children[0].textContent;");
        hiWindow.document.writeln("            //console.log(\"sumHours=\" + sumHours);");
        hiWindow.document.writeln("            sumHoursForTask.push(sumHours);");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("            //console.log(sumHoursForTask);");
        hiWindow.document.writeln("            // finding sum hours");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln("        //console.log(foundId);");
        hiWindow.document.writeln("        //console.log(foundId.get(found[4]));");
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
        hiWindow.document.writeln("    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("    function insertHours() {");
        hiWindow.document.writeln("        task = document.querySelector('#foundTasks').value;");
        hiWindow.document.writeln("        // hours = parseFloat(document.querySelector('#hoursAmount').value);");
        hiWindow.document.writeln("        if (parseFloat(\"0,1\") === 0) {");
        hiWindow.document.writeln("            hours = parseFloat(document.querySelector('#hoursAmount').value.replaceAll(\",\", \".\"));");
        hiWindow.document.writeln("        } else {");
        hiWindow.document.writeln("            hours = parseFloat(document.querySelector('#hoursAmount').value.replaceAll(\".\", \",\"));");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
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
        hiWindow.document.writeln("        for (let i = 0; i < totalDayHoursCells.children.length; i++) {");
        hiWindow.document.writeln("            let dayHoursComponent = totalDayHoursCells.children[i];");
        hiWindow.document.writeln("            let dayHoursBackgroundColor = dayHoursComponent.style.getPropertyValue(\"background-color\");");
        hiWindow.document.writeln("            shallInsertHours = (dayHoursBackgroundColor === bgColorPartialHoursExpected || dayHoursBackgroundColor === bgColorDefaultExpected);");
        hiWindow.document.writeln("            if (shallInsertHours) {");
        hiWindow.document.writeln("                let totalDayHoursText = dayHoursComponent.textContent;");
        hiWindow.document.writeln("                totalDayHours = parseFloat(totalDayHoursText);");
        hiWindow.document.writeln("                //console.log(\"Day \" + i + \" -> \" + totalDayHours);");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                if (totalDayHours < maxHoursDaily && hours > parseFloat(0)) {");
        hiWindow.document.writeln("                    let freeHours = maxHoursDaily - totalDayHours;");
        hiWindow.document.writeln("                    let hoursToInsert = freeHours <= hours ? freeHours : hours;");
        hiWindow.document.writeln("                    //console.log(\"YES, insert hours here: \" + hoursToInsert + \" from \" + hours + \"| i = \" + i + \",taskId=\" + taskId);");
        hiWindow.document.writeln("                    hours = hours - hoursToInsert;");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    //var dayHoursTable = document.querySelector('#table4');");
        hiWindow.document.writeln("                    let dayHoursTBody = dayHoursTable.children[1];");
        hiWindow.document.writeln("                    let dayHoursRow = dayHoursTBody.children[taskId];  //taskId=3");
        hiWindow.document.writeln("                    let dayHoursCell = dayHoursRow.children[i]; //i=0");
        hiWindow.document.writeln("                    let dayHoursInput = dayHoursCell.children[0];");
        hiWindow.document.writeln("                    let currentHours;");
        hiWindow.document.writeln("                    if (dayHoursInput.value === '' || dayHoursInput.value === null) {");
        hiWindow.document.writeln("                        currentHours = parseFloat('0');");
        hiWindow.document.writeln("                    } else {");
        hiWindow.document.writeln("                        if (parseFloat(\"0,1\") === 0) {");
        hiWindow.document.writeln("                            currentHours = parseFloat(dayHoursInput.value.replaceAll(\",\", \".\"));");
        hiWindow.document.writeln("                        } else {");
        hiWindow.document.writeln("                            currentHours = parseFloat(dayHoursInput.value.replaceAll(\".\", \",\"));");
        hiWindow.document.writeln("                        }");
        hiWindow.document.writeln("                        // currentHours = parseFloat(dayHoursInput.value);");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln("                    dayHoursInput.value = currentHours + hoursToInsert;");
        hiWindow.document.writeln("                    dayHoursInput.onchange();");
        hiWindow.document.writeln("                    // validateAllFields();");
        hiWindow.document.writeln("                    window.opener.document.querySelectorAll('input[id=validateAllFieldsButton]')[0].click();");
        hiWindow.document.writeln("                }");
        hiWindow.document.writeln("            }");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln("    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("    function removeHours() {");
        hiWindow.document.writeln("        task = document.querySelector('#foundTasks').value;");
        hiWindow.document.writeln("        // hours = parseFloat(document.querySelector('#hoursAmount').value);");
        hiWindow.document.writeln("        if (parseFloat(\"0,1\") === 0) {");
        hiWindow.document.writeln("            hours = parseFloat(document.querySelector('#hoursAmount').value.replaceAll(\",\", \".\"));");
        hiWindow.document.writeln("        } else {");
        hiWindow.document.writeln("            hours = parseFloat(document.querySelector('#hoursAmount').value.replaceAll(\".\", \",\"));");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln("        let taskId = foundId.get(task);");
        hiWindow.document.writeln("        status.textContent = hours + \" hours were removed from \" + task;");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        //insert hours");
        hiWindow.document.writeln("        // ! be careful with these");
        hiWindow.document.writeln("        let maxHoursDaily = 8;");
        hiWindow.document.writeln("        // ! be careful with these");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        let shallRemoveHours = false;");
        hiWindow.document.writeln("        let totalDayHours = 0;");
        hiWindow.document.writeln("        var totalDayHoursTable = window.opener.document.querySelector('#table7');  //put here window.opener.  <<<<<<");
        hiWindow.document.writeln("        var dayHoursTable = window.opener.document.querySelector('#table4');  //put here window.opener.  <<<<<<");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        var totalDayHoursRows = totalDayHoursTable.children[1];");
        hiWindow.document.writeln("        var totalDayHoursCells = totalDayHoursRows.children[1];");
        hiWindow.document.writeln("        for (let i = totalDayHoursCells.children.length - 1; i >= 0; i--) {");
        hiWindow.document.writeln("            let dayHoursComponent = totalDayHoursCells.children[i];");
        hiWindow.document.writeln("            let totalDayHoursText = dayHoursComponent.textContent;");
        hiWindow.document.writeln("            totalDayHours = parseFloat(totalDayHoursText);");
        hiWindow.document.writeln("            //console.log(\"Day \" + i + \" -> \" + totalDayHours);");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("            //var dayHoursTable = document.querySelector('#table4');");
        hiWindow.document.writeln("            let dayHoursTBody = dayHoursTable.children[1];");
        hiWindow.document.writeln("            let dayHoursRow = dayHoursTBody.children[taskId];  //taskId=5");
        hiWindow.document.writeln("            let dayHoursCell = dayHoursRow.children[i]; //i=0");
        hiWindow.document.writeln("            let dayHoursInput = dayHoursCell.children[0];");
        hiWindow.document.writeln("            let currentHours;");
        hiWindow.document.writeln("            if (dayHoursInput.value === null || dayHoursInput.value === \"\") {");
        hiWindow.document.writeln("                currentHours = parseFloat(\"0\");");
        hiWindow.document.writeln("            } else {");
        hiWindow.document.writeln("                if (parseFloat(\"0,1\") === 0) {");
        hiWindow.document.writeln("                    currentHours = parseFloat(dayHoursInput.value.replaceAll(\",\", \".\"));");
        hiWindow.document.writeln("                } else {");
        hiWindow.document.writeln("                    currentHours = parseFloat(dayHoursInput.value.replaceAll(\".\", \",\"));");
        hiWindow.document.writeln("                }");
        hiWindow.document.writeln("                // currentHours = parseFloat(dayHoursInput.value);");
        hiWindow.document.writeln("            }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("            shallRemoveHours = currentHours > parseFloat('0') && hours !== parseFloat('0');");
        hiWindow.document.writeln("            if (shallRemoveHours) {");
        hiWindow.document.writeln("                let hoursToRemove = currentHours <= hours ? currentHours : hours;");
        hiWindow.document.writeln("                //console.log(\"YES, remove hours here: \" + hoursToRemove + \" from \" + hours + \"| i = \" + i + \",taskId=\" + taskId);");
        hiWindow.document.writeln("                hours = hours - hoursToRemove;");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                dayHoursInput.value = currentHours - hoursToRemove;");
        hiWindow.document.writeln("                try {");
        hiWindow.document.writeln("                    dayHoursInput.onchange();");
        hiWindow.document.writeln("                } catch (error) {");
        hiWindow.document.writeln("                    //console.log(\"Upps: some strange error :-(\");");
        hiWindow.document.writeln("                }");
        hiWindow.document.writeln("                //validateAllFields();");
        hiWindow.document.writeln("                window.opener.document.querySelectorAll('input[id=validateAllFieldsButton]')[0].click();");
        hiWindow.document.writeln("                window.opener.document.querySelectorAll('input[id=clearZerosButton]')[0].click();");
        hiWindow.document.writeln("            }");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln("        ;");
        hiWindow.document.writeln("    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("    function writeToTxtFile() {");
        hiWindow.document.writeln("        let fondTasks = document.querySelector('#foundTasks').children");
        hiWindow.document.writeln("        hours = document.querySelector('#hoursAmount').value;");
        hiWindow.document.writeln("        status.textContent = \"Filtered tasks were written to a txt file.\";");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        // open file in order to write a file & what to write");
        hiWindow.document.writeln("        async function writeFile() {");
        hiWindow.document.writeln("            const options = {");
        hiWindow.document.writeln("                // suggestedName: 'ppm_hours_',");
        hiWindow.document.writeln("                types: [");
        hiWindow.document.writeln("                    {");
        hiWindow.document.writeln("                        description: 'Text Files',");
        hiWindow.document.writeln("                        accept: {");
        hiWindow.document.writeln("                            'text/plain': ['.txt'],");
        hiWindow.document.writeln("                        },");
        hiWindow.document.writeln("                    },");
        hiWindow.document.writeln("                ],");
        hiWindow.document.writeln("            };");
        hiWindow.document.writeln("            const fileHandle = await window.showSaveFilePicker(options);");
        hiWindow.document.writeln("            const writable = await fileHandle.createWritable();");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("            var creationDate = new Date();");
        hiWindow.document.writeln("            var creationDateFormatted = +creationDate.getFullYear() + \"-\" + (creationDate.getMonth() + 1) + \"-\" + creationDate.getDate()");
        hiWindow.document.writeln("                + \"_\" + creationDate.getHours() + \"-\" + creationDate.getMinutes() + \"-\" + creationDate.getSeconds();");
        hiWindow.document.writeln("            await writable.write(\"# Created in \" + creationDateFormatted + \".\\n\");");
        hiWindow.document.writeln("            await writable.write(\"#------------------------------------------------------------------------------------\\n\");");
        hiWindow.document.writeln("            await writable.write(\"#<-- use this for comments.\\n\");");
        hiWindow.document.writeln("            await writable.write(\"# Content:\\n\");");
        hiWindow.document.writeln("            await writable.write(\"# List of task names, below each current total hours.\\n\");");
        hiWindow.document.writeln("            await writable.write(\"# In order to increase or decrease hours, write +XXX or -XXX, for example:\\n\");");
        hiWindow.document.writeln("            await writable.write(\"#     |====1) My great task\\n\");");
        hiWindow.document.writeln("            await writable.write(\"#     |12\\n\");");
        hiWindow.document.writeln("            await writable.write(\"#     |-2\\n\");");
        hiWindow.document.writeln("            await writable.write(\"#     |+6\\n\");");
        hiWindow.document.writeln("            await writable.write(\"# So current hours for Task 1 is 12h, it will be decreased by 2h and increased by 6h.\\n\");");
        hiWindow.document.writeln("            await writable.write(\"# Current hours are not required, can be deleted from this file.\\n\");");
        hiWindow.document.writeln("            await writable.write(\"#------------------------------------------------------------------------------------\\n\");");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("            for (let i = 0; i < fondTasks.length; i++) {");
        hiWindow.document.writeln("                let foundTask = fondTasks[i].value;");
        hiWindow.document.writeln("                await writable.write(\"====\" + foundTask + \"\\n\");");
        hiWindow.document.writeln("                await writable.write(200 + \"\\n\");");
        hiWindow.document.writeln("                let sumHours = sumHoursForTask[i];");
        hiWindow.document.writeln("                await writable.write(sumHours + \" #SUM\\n\");");
        hiWindow.document.writeln("                //console.log(\"sum=\" + sumHours + \"\\n\");");
        hiWindow.document.writeln("            }");
        hiWindow.document.writeln("            await writable.close();");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        // writting a file");
        hiWindow.document.writeln("        async function parseWriteFile() {");
        hiWindow.document.writeln("            await writeFile();");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        parseWriteFile()");
        hiWindow.document.writeln("    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("    function readTxtFile() {");
        hiWindow.document.writeln("        task = document.querySelector('#foundTasks').value;");
        hiWindow.document.writeln("        hours = document.querySelector('#hoursAmount').value;");
        hiWindow.document.writeln("        status.textContent = \"Parsing given txt file.\";");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        //reading file");
        hiWindow.document.writeln("        async function getFileHandle() {");
        hiWindow.document.writeln("            const options = {");
        hiWindow.document.writeln("                types: [");
        hiWindow.document.writeln("                    {");
        hiWindow.document.writeln("                        description: 'Text Files',");
        hiWindow.document.writeln("                        accept: {");
        hiWindow.document.writeln("                            'text/plain': ['.txt'],");
        hiWindow.document.writeln("                        },");
        hiWindow.document.writeln("                    },");
        hiWindow.document.writeln("                ],");
        hiWindow.document.writeln("            };");
        hiWindow.document.writeln("            const [fileHandle] = await window.showOpenFilePicker(options);");
        hiWindow.document.writeln("            return fileHandle;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        async function readFile() {");
        hiWindow.document.writeln("            const fileHandle = await getFileHandle();");
        hiWindow.document.writeln("            const file = await fileHandle.getFile();");
        hiWindow.document.writeln("            const content = await file.text();");
        hiWindow.document.writeln("            return content;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        // parsing read txt file");
        hiWindow.document.writeln("        async function parseReadTxt() {");
        hiWindow.document.writeln("            const content = await readFile();");
        hiWindow.document.writeln("            // //console.log(content);");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("            let lines = content.replaceAll(\"\\r\", \"\").split(\"\\n\")");
        hiWindow.document.writeln("            let currentTask;");
        hiWindow.document.writeln("            let hours;");
        hiWindow.document.writeln("            let increase = false;");
        hiWindow.document.writeln("            let decrease = false;");
        hiWindow.document.writeln("            for (let i = 0; i < lines.length; i++) {");
        hiWindow.document.writeln("                let line = lines[i];");
        hiWindow.document.writeln("                //console.log(\"LINE|\" + line);");
        hiWindow.document.writeln("                if (line.length === 0 || line === null) {");
        hiWindow.document.writeln("                    continue;");
        hiWindow.document.writeln("                }");
        hiWindow.document.writeln("                let firstLetter = line[0];");
        hiWindow.document.writeln("                if (firstLetter === \"#\") {");
        hiWindow.document.writeln("                    continue;");
        hiWindow.document.writeln("                }");
        hiWindow.document.writeln("                if (firstLetter === \"=\") {");
        hiWindow.document.writeln("                    increase = false;");
        hiWindow.document.writeln("                    decrease = false;");
        hiWindow.document.writeln("                    hours = parseFloat(\"0\");");
        hiWindow.document.writeln("                    currentTask = line.split(\"====\")[1];");
        hiWindow.document.writeln("                    //console.log(\"\\t-->TASK|\" + currentTask);");
        hiWindow.document.writeln("                }");
        hiWindow.document.writeln("                if (firstLetter === \"+\") {");
        hiWindow.document.writeln("                    increase = true;");
        hiWindow.document.writeln("                    if (parseFloat(\"0,1\") === 0) {");
        hiWindow.document.writeln("                        hours = parseFloat(line.replaceAll(\",\", \".\").split(\"+\")[1]);");
        hiWindow.document.writeln("                    } else {");
        hiWindow.document.writeln("                        hours = parseFloat(line.replaceAll(\".\", \",\").split(\"+\")[1]);");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln("                    if (hours === null || hours === parseFloat(\"0\")) {");
        hiWindow.document.writeln("                        continue;");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln("                    //console.log(\"\\thours=\" + hours);");
        hiWindow.document.writeln("                    let foundTaskMenu = document.querySelector('#foundTasks');");
        hiWindow.document.writeln("                    let foundTaskElements = foundTaskMenu.children;");
        hiWindow.document.writeln("                    for (let i = 0; i < foundTaskElements.length; i++) {");
        hiWindow.document.writeln("                        let foundTask = foundTaskElements[i].value;");
        hiWindow.document.writeln("                        if (currentTask === foundTask) {");
        hiWindow.document.writeln("                            document.querySelector('#foundTasks').value = foundTask;");
        hiWindow.document.writeln("                            document.querySelector('#hoursAmount').value = hours;");
        hiWindow.document.writeln("                            document.querySelector('#insertButton').onclick();");
        hiWindow.document.writeln("                            //console.log(\"\\t--> +  |\" + hours);");
        hiWindow.document.writeln("                            break;");
        hiWindow.document.writeln("                        }");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln("                }");
        hiWindow.document.writeln("                if (firstLetter === \"-\") {");
        hiWindow.document.writeln("                    increase = true;");
        hiWindow.document.writeln("                    if (parseFloat(\"0,1\") === 0) {");
        hiWindow.document.writeln("                        hours = parseFloat(line.replaceAll(\",\", \".\").split(\"-\")[1]);");
        hiWindow.document.writeln("                    } else {");
        hiWindow.document.writeln("                        hours = parseFloat(line.replaceAll(\".\", \",\").split(\"-\")[1]);");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln("                    if (hours === null || hours === parseFloat(\"0\")) {");
        hiWindow.document.writeln("                        continue;");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln("                    //console.log(\"\\thours=\" + hours);");
        hiWindow.document.writeln("                    let foundTaskMenu = document.querySelector('#foundTasks');");
        hiWindow.document.writeln("                    let foundTaskElements = foundTaskMenu.children;");
        hiWindow.document.writeln("                    for (let i = 0; i < foundTaskElements.length; i++) {");
        hiWindow.document.writeln("                        let foundTask = foundTaskElements[i].value;");
        hiWindow.document.writeln("                        if (currentTask === foundTask) {");
        hiWindow.document.writeln("                            document.querySelector('#foundTasks').value = foundTask;");
        hiWindow.document.writeln("                            document.querySelector('#hoursAmount').value = hours;");
        hiWindow.document.writeln("                            document.querySelector('#removeButton').onclick();");
        hiWindow.document.writeln("                            //console.log(\"\\t--> -  |\" + hours);");
        hiWindow.document.writeln("                            break;");
        hiWindow.document.writeln("                        }");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln("                }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("            }");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        parseReadTxt();");
        hiWindow.document.writeln("    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("    function convertJiraReport() {");
        hiWindow.document.writeln("        console.log(\"Convert xml\")");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        //reading file");
        hiWindow.document.writeln("        async function getFileHandle() {");
        hiWindow.document.writeln("            const options = {");
        hiWindow.document.writeln("                types: [");
        hiWindow.document.writeln("                    {");
        hiWindow.document.writeln("                        description: 'Excel files',");
        hiWindow.document.writeln("                        accept: {");
        hiWindow.document.writeln("                            'application/vnd.ms-excel': ['.xls']");
        hiWindow.document.writeln("                        },");
        hiWindow.document.writeln("                    },");
        hiWindow.document.writeln("                ],");
        hiWindow.document.writeln("            };");
        hiWindow.document.writeln("            const [fileHandle] = await window.showOpenFilePicker(options);");
        hiWindow.document.writeln("            return fileHandle;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        async function readFile() {");
        hiWindow.document.writeln("            let content = \"\";");
        hiWindow.document.writeln("            const fileHandle = await getFileHandle();");
        hiWindow.document.writeln("            const permissionGranted = await fileHandle.requestPermission();");
        hiWindow.document.writeln("            if (!permissionGranted) {");
        hiWindow.document.writeln("                console.error('Permission to access file was denied');");
        hiWindow.document.writeln("                return;");
        hiWindow.document.writeln("            }");
        hiWindow.document.writeln("            const file = await fileHandle.getFile();");
        hiWindow.document.writeln("            //const content = await file.text();");
        hiWindow.document.writeln("            const fileReader = new FileReader();");
        hiWindow.document.writeln("            fileReader.addEventListener('load', (event) => {");
        hiWindow.document.writeln("                    const binaryString = event.target.result;");
        hiWindow.document.writeln("                    // Use a library like SheetJS or XLSX to parse the binary string");
        hiWindow.document.writeln("                    //console.log(binaryString);");
        hiWindow.document.writeln("                    const workbook = XLSX.read(binaryString, {type: 'binary'});");
        hiWindow.document.writeln("                    // read first sheet only");
        hiWindow.document.writeln("                    const sheetName = workbook.SheetNames[0];");
        hiWindow.document.writeln("                    const sheet = workbook.Sheets[sheetName];");
        hiWindow.document.writeln("                    // convert xls sheet to JSON");
        hiWindow.document.writeln("                    let sheetContent = XLSX.utils.sheet_to_json(sheet);");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    // parseSheetContent(sheetContent);");
        hiWindow.document.writeln("                    if (sheetContent === \"\" || sheetContent === null || sheetContent.length <= 1) {");
        hiWindow.document.writeln("                        console.log(\"There is no content for sheet :-(\");");
        hiWindow.document.writeln("                        return;");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln("                    console.log(sheetContent);");
        hiWindow.document.writeln("                    let jiraTaskHours = new Map();");
        hiWindow.document.writeln("                    let resultOfParsing = \"\";");
        hiWindow.document.writeln("                    for (let i = 0; i < sheetContent.length; i++) {");
        hiWindow.document.writeln("                        let row = sheetContent[i];");
        hiWindow.document.writeln("                        console.log(\"row \" + i + \"→\" + row);");
        hiWindow.document.writeln("                        let taskName = \"\";");
        hiWindow.document.writeln("                        let taskHours = parseFloat(0);");
        hiWindow.document.writeln("                        for (var key in row) {");
        hiWindow.document.writeln("                            var value = row[key];");
        hiWindow.document.writeln("                            // console.log(\"key=\" + key + \", value=\" + value);");
        hiWindow.document.writeln("                            if (key.search((\"PPM Project\")) === 0) {");
        hiWindow.document.writeln("                                taskName = value;");
        hiWindow.document.writeln("                            } else if (key.search((\"Total PPM Project\")) === 0) {");
        hiWindow.document.writeln("                                taskHours = parseFloat(value);");
        hiWindow.document.writeln("                            }");
        hiWindow.document.writeln("                        }");
        hiWindow.document.writeln("                        if (taskName === \"Total\") {");
        hiWindow.document.writeln("                            continue;");
        hiWindow.document.writeln("                        }");
        hiWindow.document.writeln("                        if (taskName.match(\" - \") === -1) {");
        hiWindow.document.writeln("                            continue;");
        hiWindow.document.writeln("                        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                        taskName = taskName.replaceAll(\"\\t\", \"\").split(\" - \").slice(-1);   //<<<<<<<< update here");
        hiWindow.document.writeln("                        console.log(\"task=\" + taskName);");
        hiWindow.document.writeln("                        console.log(\"hours=\" + taskHours);");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                        jiraTaskHours.set(taskName, taskHours);");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                        // resultOfParsing");
        hiWindow.document.writeln("                        document.querySelector('#filterTasks').value = taskName;");
        hiWindow.document.writeln("                        document.querySelector('#hoursAmount').value = taskHours;");
        hiWindow.document.writeln("                        document.querySelector('#filterTasks').onkeyup();");
        hiWindow.document.writeln("                        document.querySelector('#foundTasks');");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                        let foundTasksAmount = document.querySelector('#foundTasks').childElementCount;");
        hiWindow.document.writeln("                        if (foundTasksAmount > 0) {");
        hiWindow.document.writeln("                            for (let k = 0; k < foundTasksAmount; k++) {");
        hiWindow.document.writeln("                                resultOfParsing = resultOfParsing + \"====\" + document.querySelector('#foundTasks').children[k].value + \"\\n\";");
        hiWindow.document.writeln("                            }");
        hiWindow.document.writeln("                            resultOfParsing = resultOfParsing + taskHours + \"\\n\"");
        hiWindow.document.writeln("                        } else {");
        hiWindow.document.writeln("                            resultOfParsing = resultOfParsing + \"#task not found: \" + taskName + \" -> \" + taskHours + \"\\n\";");
        hiWindow.document.writeln("                        }");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    if (jiraTaskHours.size === 0) {");
        hiWindow.document.writeln("                        return;");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    console.log(\"resultOfParsing=\");");
        hiWindow.document.writeln("                    console.log(resultOfParsing);");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    // // DUMMY TEST - set filter task -> get list of filtered tasks");
        hiWindow.document.writeln("                    // let taskName = \"small feat\";");
        hiWindow.document.writeln("                    // let taskHours = parseFloat(40);");
        hiWindow.document.writeln("                    // let tasksFound = \"\";");
        hiWindow.document.writeln("                    //");
        hiWindow.document.writeln("                    // document.querySelector('#filterTasks').value = taskName;");
        hiWindow.document.writeln("                    // document.querySelector('#hoursAmount').value = taskHours;");
        hiWindow.document.writeln("                    // document.querySelector('#filterTasks').onkeyup();");
        hiWindow.document.writeln("                    // document.querySelector('#foundTasks');");
        hiWindow.document.writeln("                    //");
        hiWindow.document.writeln("                    // let foundTasksAmount = document.querySelector('#foundTasks').childElementCount;");
        hiWindow.document.writeln("                    // for (let i = 0; i < foundTasksAmount; i++) {");
        hiWindow.document.writeln("                    //     tasksFound = tasksFound + \"====\" + document.querySelector('#foundTasks').children[i].value + \"\\n\";");
        hiWindow.document.writeln("                    // }");
        hiWindow.document.writeln("                    // console.log(\"Shall write to a file:\");");
        hiWindow.document.writeln("                    // console.log(tasksFound);");
        hiWindow.document.writeln("                    // console.log(taskHours);");
        hiWindow.document.writeln("                    // // DUMMY TEST - set filter task -> get list of filtered tasks");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    // open file in order to write a file & what to write");
        hiWindow.document.writeln("                    async function writeFile() {");
        hiWindow.document.writeln("                        const options = {");
        hiWindow.document.writeln("                            // suggestedName: 'ppm_hours_',");
        hiWindow.document.writeln("                            types: [");
        hiWindow.document.writeln("                                {");
        hiWindow.document.writeln("                                    description: 'Text Files',");
        hiWindow.document.writeln("                                    accept: {");
        hiWindow.document.writeln("                                        'text/plain': ['.txt'],");
        hiWindow.document.writeln("                                    },");
        hiWindow.document.writeln("                                },");
        hiWindow.document.writeln("                            ],");
        hiWindow.document.writeln("                        };");
        hiWindow.document.writeln("                        const fileHandle = await window.showSaveFilePicker(options);");
        hiWindow.document.writeln("                        const writable = await fileHandle.createWritable();");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                        var creationDate = new Date();");
        hiWindow.document.writeln("                        var creationDateFormatted = +creationDate.getFullYear() + \"-\" + (creationDate.getMonth() + 1) + \"-\" + creationDate.getDate()");
        hiWindow.document.writeln("                            + \"_\" + creationDate.getHours() + \"-\" + creationDate.getMinutes() + \"-\" + creationDate.getSeconds();");
        hiWindow.document.writeln("                        await writable.write(\"# Created in \" + creationDateFormatted + \".\\n\");");
        hiWindow.document.writeln("                        await writable.write(\"# Converted from Jira report file\\n\");");
        hiWindow.document.writeln("                        await writable.write(\"#------------------------------------------------------------------------------------\\n\");");
        hiWindow.document.writeln("                        await writable.write(\"#<-- use this for comments.\\n\");");
        hiWindow.document.writeln("                        await writable.write(\"# Content:\\n\");");
        hiWindow.document.writeln("                        await writable.write(\"# List of task names, below each current total hours.\\n\");");
        hiWindow.document.writeln("                        await writable.write(\"# In order to increase or decrease hours, write +XXX or -XXX, for example:\\n\");");
        hiWindow.document.writeln("                        await writable.write(\"#     |====1) My great task\\n\");");
        hiWindow.document.writeln("                        await writable.write(\"#     |12\\n\");");
        hiWindow.document.writeln("                        await writable.write(\"#     |-2\\n\");");
        hiWindow.document.writeln("                        await writable.write(\"#     |+6\\n\");");
        hiWindow.document.writeln("                        await writable.write(\"# So current hours for Task 1 is 12h, it will be decreased by 2h and increased by 6h.\\n\");");
        hiWindow.document.writeln("                        await writable.write(\"# Current hours are not required, can be deleted from this file.\\n\");");
        hiWindow.document.writeln("                        await writable.write(\"#------------------------------------------------------------------------------------\\n\");");
        hiWindow.document.writeln("                        await writable.write(resultOfParsing);");
        hiWindow.document.writeln("                        await writable.close();");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    // writting a file");
        hiWindow.document.writeln("                    async function parseWriteFile() {");
        hiWindow.document.writeln("                        await writeFile();");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    parseWriteFile()");
        hiWindow.document.writeln("                }");
        hiWindow.document.writeln("            )");
        hiWindow.document.writeln("            fileReader.readAsBinaryString(file);");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        async function runReadingXmlFile() {");
        hiWindow.document.writeln("            console.log(\"reading file\");");
        hiWindow.document.writeln("            await readFile();");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        runReadingXmlFile();");
        hiWindow.document.writeln("    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("</script>");
        hiWindow.document.writeln("</body>");
        hiWindow.document.writeln("</html>");

        window.opener.document.querySelectorAll('input[id=filterTasks]')[0].onkeyup();
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

    function createButton(context, func, value, id) {
        var button = document.createElement("input");
        button.type = "button";
        button.value = value;
        button.id = id;
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

            if (isZero(allInputs[i].value)) {
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
        if (isZero(this.value)) {
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
                inputNodes[i].value = parseFloat("0");
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
            if (isZero(cellH[i].innerHTML)) {
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

    createButton(document.body, clearZeros, "Clear all 0's", "clearZerosButton");
    createButton(document.body, validateAllFields, "Validate", "validateAllFieldsButton");
    createButton(document.body, insertHours, "Insert hours", "insertHoursButton");    // M.Rys: insert hours
    createButton(document.body, checkUnusedTasks, "Check unused tasks", "checkUnusedTasksButton");    // M.Rys: check unused tasks
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
