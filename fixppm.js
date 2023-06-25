// ==UserScript==
// @name         More readable PPM and insert hours window
// @namespace    https://itg.crifnet.com/itg/tm/EditTimeSheet.do?timesheetId=*
// @homepage     https://github.com/michalrys/FixPPM
// @homepageURL  https://github.com/michalrys/FixPPM
// @updateURL    https://raw.githubusercontent.com/michalrys/FixPPM/master/fixppm.js
// @downloadURL  https://raw.githubusercontent.com/michalrys/FixPPM/master/fixppm.js
// @version      1.8.20
// @description  Bugfix for cell value checking if is zero.
// @author       Damian Zyngier, Michał Ryś
// @match        https://itg.crifnet.com/itg/tm/EditTimeSheet.do?timesheetId=*
// @icon         data:image/png;base64,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
// @grant        GM_addStyle
// ==/UserScript==
// forked from: https://github.com/DamianZyngier/FixPPM
// search for 'M.Rys' to get my modifications

(function () {
    "use strict";

    var maxHoursDaily = 8;

    var bgColorSaturday = "#ff9999";
    var bgColorSaturdayRGB = "rgb(255, 153, 153)";
    var textColorSaturday = "black";
    var bgColorSunday = "#ff6666";
    var bgColorSundayRGB = "rgb(255, 102, 102)";
    var textColorSunday = "black";
    var bgColorWarning = "#f9f966";
    var bgColorDefault = "white";
    var bgColorDefaultExpected = "white";
    var bgColorCorrect = "#98bf69";
    var bgColorPartialHours = "#cde2b7";
    var bgColorPartialHoursExpected = "rgb(205, 226, 183)"; //M.Rys - color for partial hours
    var bgColorPartialHoursWarning = "#FFFF7CFF"; //M.Rys - color for partial hours with 0.25

    // Formatting options: for other ?
    //var publicHolidays = ["01-01", "01-06", "04-09", "04-10", "05-01", "05-03", "05-28", "06-08", "08-15", "11-01", "11-11", "12-25", "12-26"];
    // Formatting options: English Unitated States
    // M.Rys: $ is needed here for regex check - for days 1, 2, 3 only. (previous error: given holiday '5/1' regex check date 'Wed<br>5/10' -> true)
    var publicHolidays = ["1/1$", "1/6", "4/9", "4/10", "5/1$", "5/3$", "5/28", "6/8", "8/15", "11/1$", "11/11", "12/25", "12/26"];

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
        hiWindow.document.writeln("            overflow: hidden;");
        hiWindow.document.writeln("            width: 710px;");
        hiWindow.document.writeln("            height: 210px;");
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
        hiWindow.document.writeln("        input#hoursOvertime {");
        hiWindow.document.writeln("            width: 20px;");
        hiWindow.document.writeln("            padding-left: 5px;");
        hiWindow.document.writeln("            padding-right: 0px;");
        hiWindow.document.writeln("            text-align: center;");
        hiWindow.document.writeln("            background: #c9dcc7;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#hoursOvertimeWeekends {");
        hiWindow.document.writeln("            width: 12px;");
        hiWindow.document.writeln("            box-shadow: 0px 0px;");
        hiWindow.document.writeln("            padding: 0px;");
        hiWindow.document.writeln("            padding-left: 0px;");
        hiWindow.document.writeln("            padding-right: 0px;");
        hiWindow.document.writeln("            margin: 0px;");
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
        hiWindow.document.writeln("            width: 100px;");
        hiWindow.document.writeln("            height: 40px;");
        hiWindow.document.writeln("            border-width: 3px;");
        hiWindow.document.writeln("            padding-left: 0px;");
        hiWindow.document.writeln("            margin-left: 10px;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#removeButton {");
        hiWindow.document.writeln("            background: #ff6262;");
        hiWindow.document.writeln("            box-shadow: 3px 3px 0 #000000;");
        hiWindow.document.writeln("            transition: all .15s linear 0s;");
        hiWindow.document.writeln("            position: relative;");
        hiWindow.document.writeln("            display: inline-block;");
        hiWindow.document.writeln("            width: 100px;");
        hiWindow.document.writeln("            height: 40px;");
        hiWindow.document.writeln("            border-width: 3px;");
        hiWindow.document.writeln("            padding-left: 0px;");
        hiWindow.document.writeln("            margin-left: 10px;");
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
        hiWindow.document.writeln("        input#convertJiraReportDetailsButton {");
        hiWindow.document.writeln("            font-size: 10px;");
        hiWindow.document.writeln("            font-weight: bold;");
        hiWindow.document.writeln("            background: #07e3da;");
        hiWindow.document.writeln("            box-shadow: 3px 3px 0 #000000;");
        hiWindow.document.writeln("            transition: all .15s linear 0s;");
        hiWindow.document.writeln("            position: relative;");
        hiWindow.document.writeln("            display: inline-block;");
        hiWindow.document.writeln("            width: 35px;");
        hiWindow.document.writeln("            height: 40px;");
        hiWindow.document.writeln("            border-width: 3px;");
        hiWindow.document.writeln("            padding-left: 0px;");
        hiWindow.document.writeln("            margin-left: 10px;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#convertJiraReportDetailsButton:active {");
        hiWindow.document.writeln("            background: #0d9492;");
        hiWindow.document.writeln("            box-shadow: 0px 0px 0 #000000;");
        hiWindow.document.writeln("            transition: all .05s linear 0s;");
        hiWindow.document.writeln("            top: 3px;");
        hiWindow.document.writeln("            left: 3px;");
        hiWindow.document.writeln("            position: relative;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        input#convertJiraReportDetailsButton:hover {");
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
        hiWindow.document.writeln("            width: 35px;");
        hiWindow.document.writeln("            height: 40px;");
        hiWindow.document.writeln("            border-width: 3px;");
        hiWindow.document.writeln("            padding-left: 0px;");
        hiWindow.document.writeln("            margin-left: 10px;");
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
        hiWindow.document.writeln("            margin-left: 10px;");
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
        hiWindow.document.writeln("                <input type=\"text\" id=\"hoursOvertime\" value=\"0\" size=\"100px\" onmouseover=\"hoursOvertimeInfo()\">");
        hiWindow.document.writeln("                <input type=\"checkbox\" id=\"hoursOvertimeWeekends\" onmouseover=\"hoursOvertimeWeekendsInfo()\">");
        hiWindow.document.writeln("                <input type=\"button\" id=\"insertButton\" value=\"INSERT\" onclick=\"insertHours()\"");
        hiWindow.document.writeln("                       onmouseover=\"insertButtonInfo()\">");
        hiWindow.document.writeln("                <input type=\"button\" id=\"removeButton\" value=\"REMOVE\" onclick=\"removeHours()\"");
        hiWindow.document.writeln("                       onmouseover=\"removeButtonInfo()\">");
        hiWindow.document.writeln("                <input type=\"button\" id=\"convertJiraReportDetailsButton\" value=\"xls 2\"");
        hiWindow.document.writeln("                       onclick=\"convertJiraReportDetailed()\"");
        hiWindow.document.writeln("                       onmouseover=\"convertJiraReportInfoDetailed()\">");
        hiWindow.document.writeln("                <input type=\"button\" id=\"convertJiraReportButton\" value=\"xls\" onclick=\"convertJiraReport()\"");
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
        hiWindow.document.writeln("    let taskSumHours = new Map();");
        hiWindow.document.writeln("    let task = \"\";");
        hiWindow.document.writeln("    let hours = \"\";");
        hiWindow.document.writeln("    let hoursOvertime = \"\";");
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
        hiWindow.document.writeln("    function hoursOvertimeInfo() {");
        hiWindow.document.writeln("        status.textContent = \"Overtime ? allowable overtime hours per day. Use 0 for no overtime.\";");
        hiWindow.document.writeln("    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("    function hoursOvertimeWeekendsInfo() {");
        hiWindow.document.writeln("        status.textContent = \"Overtime on weekends ? allowable overtime on weekends first.\";");
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
        hiWindow.document.writeln("        status.textContent = \"REMOVE ? try to subtract given hours from selected task, if it is possible, starting from last day.\";");
        hiWindow.document.writeln("    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("    function convertJiraReportInfoDetailed() {");
        hiWindow.document.writeln("        status.textContent = \"xls 2 ? read xls report from Jira (Group By PPM Project 20xx, Issue) and convert to input txt file.\";");
        hiWindow.document.writeln("    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("    function convertJiraReportInfo() {");
        hiWindow.document.writeln("        status.textContent = \"xls ? read xls report from Jira (Group By PPM Project 20xx) and convert to input txt file.\";");
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
        hiWindow.document.writeln("        sumHoursForTask = [];");
        hiWindow.document.writeln("        taskSumHours = new Map();");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("        var taskTable = window.opener.document.querySelector('#table3'); //put here window.opener.  <<<<<<");
        hiWindow.document.writeln("        var tasksRows = taskTable.children[1];");
        hiWindow.document.writeln("        let iFound = -1;");
        hiWindow.document.writeln("        for (let i = 1; i < tasksRows.children.length; i++) {");
        hiWindow.document.writeln("            let taskCell = tasksRows.children[i];");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("            let taskName = taskCell.children[1].textContent.replaceAll(\"\\n\", \"\").replaceAll(\"\\t\", \"\");");
        hiWindow.document.writeln("            if (taskName.includes(\"Project:\")");
        hiWindow.document.writeln("                || taskName.includes(\"Misc -\")");
        hiWindow.document.writeln("                || (taskName.includes(\"Asset\") && taskName.length <= 6)) {");
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
        hiWindow.document.writeln("            taskSumHours.set(taskName, sumHours);");
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
        hiWindow.document.writeln("        let bgColorPartialHoursWarning = \"rgb(255, 255, 124)\";");
        hiWindow.document.writeln("        var bgColorCorrect = \"rgb(152, 191, 105)\";");
        hiWindow.document.writeln("        var bgColorWarning = \"rgb(249, 249, 102)\";");
        hiWindow.document.writeln("        var bgColorSaturdayRGB = \"rgb(255, 153, 153)\";");
        hiWindow.document.writeln("        var bgColorSundayRGB = \"rgb(255, 102, 102)\";");
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
        hiWindow.document.writeln("            shallInsertHours = (dayHoursBackgroundColor === bgColorPartialHoursExpected");
        hiWindow.document.writeln("                || dayHoursBackgroundColor === bgColorDefaultExpected || dayHoursBackgroundColor === bgColorPartialHoursWarning);");
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
        hiWindow.document.writeln("        if (hours <= 0) {");
        hiWindow.document.writeln("            return;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln("        // insert overtime into weekends starting from beginning");
        hiWindow.document.writeln("        let shallAddOvertimeOnWeekends = document.querySelector('#hoursOvertimeWeekends').checked;");
        hiWindow.document.writeln("        if(shallAddOvertimeOnWeekends) {");
        hiWindow.document.writeln("            //FIXME - make it dry");
        hiWindow.document.writeln("            totalDayHoursRows = totalDayHoursTable.children[1];");
        hiWindow.document.writeln("            totalDayHoursCells = totalDayHoursRows.children[1];");
        hiWindow.document.writeln("            for (let i = 0; i < totalDayHoursCells.children.length; i++) {");
        hiWindow.document.writeln("                let dayHoursComponent = totalDayHoursCells.children[i];");
        hiWindow.document.writeln("                let dayHoursBackgroundColor = dayHoursComponent.style.getPropertyValue(\"background-color\");");
        hiWindow.document.writeln("                shallInsertHours = (dayHoursBackgroundColor === bgColorSaturdayRGB");
        hiWindow.document.writeln("                    || dayHoursBackgroundColor === bgColorSundayRGB);");
        hiWindow.document.writeln("                if (shallInsertHours) {");
        hiWindow.document.writeln("                    let totalDayHoursText = dayHoursComponent.textContent;");
        hiWindow.document.writeln("                    totalDayHours = parseFloat(totalDayHoursText);");
        hiWindow.document.writeln("                    //console.log(\"Day \" + i + \" -> \" + totalDayHours);");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    if (totalDayHours < maxHoursDaily && hours > parseFloat(0)) {");
        hiWindow.document.writeln("                        let freeHours = maxHoursDaily - totalDayHours;");
        hiWindow.document.writeln("                        let hoursToInsert = freeHours <= hours ? freeHours : hours;");
        hiWindow.document.writeln("                        //console.log(\"YES, insert hours here: \" + hoursToInsert + \" from \" + hours + \"| i = \" + i + \",taskId=\" + taskId);");
        hiWindow.document.writeln("                        hours = hours - hoursToInsert;");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                        //var dayHoursTable = document.querySelector('#table4');");
        hiWindow.document.writeln("                        let dayHoursTBody = dayHoursTable.children[1];");
        hiWindow.document.writeln("                        let dayHoursRow = dayHoursTBody.children[taskId];  //taskId=3");
        hiWindow.document.writeln("                        let dayHoursCell = dayHoursRow.children[i]; //i=0");
        hiWindow.document.writeln("                        let dayHoursInput = dayHoursCell.children[0];");
        hiWindow.document.writeln("                        let currentHours;");
        hiWindow.document.writeln("                        if (dayHoursInput.value === '' || dayHoursInput.value === null) {");
        hiWindow.document.writeln("                            currentHours = parseFloat('0');");
        hiWindow.document.writeln("                        } else {");
        hiWindow.document.writeln("                            if (parseFloat(\"0,1\") === 0) {");
        hiWindow.document.writeln("                                currentHours = parseFloat(dayHoursInput.value.replaceAll(\",\", \".\"));");
        hiWindow.document.writeln("                            } else {");
        hiWindow.document.writeln("                                currentHours = parseFloat(dayHoursInput.value.replaceAll(\".\", \",\"));");
        hiWindow.document.writeln("                            }");
        hiWindow.document.writeln("                            // currentHours = parseFloat(dayHoursInput.value);");
        hiWindow.document.writeln("                        }");
        hiWindow.document.writeln("                        dayHoursInput.value = currentHours + hoursToInsert;");
        hiWindow.document.writeln("                        dayHoursInput.onchange();");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln("                }");
        hiWindow.document.writeln("            }");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln("        if (parseFloat(\"0,1\") === 0) {");
        hiWindow.document.writeln("            hoursOvertime = parseFloat(document.querySelector('#hoursOvertime').value.replaceAll(\",\", \".\"));");
        hiWindow.document.writeln("        } else {");
        hiWindow.document.writeln("            hoursOvertime = parseFloat(document.querySelector('#hoursOvertime').value.replaceAll(\".\", \",\"));");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln("        if (hoursOvertime <= 0) {");
        hiWindow.document.writeln("            return;");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln("        // insert overtime into working days starting from beginning again");
        hiWindow.document.writeln("        //FIXME - make it dry");
        hiWindow.document.writeln("        totalDayHoursRows = totalDayHoursTable.children[1];");
        hiWindow.document.writeln("        totalDayHoursCells = totalDayHoursRows.children[1];");
        hiWindow.document.writeln("        for (let i = 0; i < totalDayHoursCells.children.length; i++) {");
        hiWindow.document.writeln("            let dayHoursComponent = totalDayHoursCells.children[i];");
        hiWindow.document.writeln("            let dayHoursBackgroundColor = dayHoursComponent.style.getPropertyValue(\"background-color\");");
        hiWindow.document.writeln("            shallInsertHours = (dayHoursBackgroundColor === bgColorPartialHoursExpected");
        hiWindow.document.writeln("                || dayHoursBackgroundColor === bgColorDefaultExpected");
        hiWindow.document.writeln("                || dayHoursBackgroundColor === bgColorPartialHoursWarning");
        hiWindow.document.writeln("                || dayHoursBackgroundColor === bgColorCorrect");
        hiWindow.document.writeln("                || dayHoursBackgroundColor === bgColorWarning);");
        hiWindow.document.writeln("            if(shallAddOvertimeOnWeekends && !shallInsertHours) {");
        hiWindow.document.writeln("                shallInsertHours = (dayHoursBackgroundColor === bgColorSaturdayRGB");
        hiWindow.document.writeln("                    || dayHoursBackgroundColor === bgColorSundayRGB);");
        hiWindow.document.writeln("            }");
        hiWindow.document.writeln("            if (shallInsertHours) {");
        hiWindow.document.writeln("                let totalDayHoursText = dayHoursComponent.textContent;");
        hiWindow.document.writeln("                totalDayHours = parseFloat(totalDayHoursText);");
        hiWindow.document.writeln("                //console.log(\"Day \" + i + \" -> \" + totalDayHours);");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                if (totalDayHours < maxHoursDaily + hoursOvertime && hours > parseFloat(0)) {");
        hiWindow.document.writeln("                    let freeHours = maxHoursDaily + hoursOvertime - totalDayHours;");
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
        hiWindow.document.writeln("                }");
        hiWindow.document.writeln("            }");
        hiWindow.document.writeln("        }");
        hiWindow.document.writeln("        window.opener.document.querySelectorAll('input[id=validateAllFieldsButton]')[0].click();");
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
        hiWindow.document.writeln("                let sumHours = taskSumHours.get(foundTask);");
        hiWindow.document.writeln("                await writable.write(\"+\" + sumHours + \" #SUM\\n\");");
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
        hiWindow.document.writeln("                        console.log(\"row \" + i + \"->\" + row);");
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
        hiWindow.document.writeln("                    document.querySelector('#filterTasks').value = \"\";");
        hiWindow.document.writeln("                    document.querySelector('#hoursAmount').value = parseFloat(40);");
        hiWindow.document.writeln("                    document.querySelector('#filterTasks').onkeyup();");
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
        hiWindow.document.writeln("    function convertJiraReportDetailed() {");
        hiWindow.document.writeln("        console.log(\"Convert xml 2 - detailed way\")");
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
        hiWindow.document.writeln("                    const commentOffset = 6;");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    function updateHoursInMainOrInSubtask(currentDescriptionInDetails, idMain, resultsFound, foundTasksForCurrent) {");
        hiWindow.document.writeln("                        const commentOffset = 6;");
        hiWindow.document.writeln("                        // check if it is subtask or not -> add");
        hiWindow.document.writeln("                        //\"<Bug Fixing and Rework> dfanalysis is <asdf asdf >\".split(/(<[a-zA-Z 0-9]*>)/)");
        hiWindow.document.writeln("                        //\"nothing important\".split(/(<[a-zA-Z 0-9]*>)/)");
        hiWindow.document.writeln("                        console.log(\"==== parsing description\");");
        hiWindow.document.writeln("                        console.log(currentDescriptionInDetails);");
        hiWindow.document.writeln("                        let descriptionSplited = currentDescriptionInDetails.split(/(<[a-zA-Z 0-9:-_,]*>)/);");
        hiWindow.document.writeln("                        let length = descriptionSplited.length;");
        hiWindow.document.writeln("                        let isSubtask = false;");
        hiWindow.document.writeln("                        if (length > 1 && resultsFound.task[idMain].sub.length > 0) {");
        hiWindow.document.writeln("                            let descriptionSubtask = descriptionSplited[1];");
        hiWindow.document.writeln("                            descriptionSubtask = descriptionSubtask.replaceAll(\">\", \"\").replaceAll(\"<\", \"\");");
        hiWindow.document.writeln("                            // isSubtask = foundTasksForCurrent.includes(descriptionSubtask);");
        hiWindow.document.writeln("                            isSubtask = foundTasksForCurrent.some(tasks => tasks.includes(descriptionSubtask));");
        hiWindow.document.writeln("                        }");
        hiWindow.document.writeln("                        if (isSubtask) {");
        hiWindow.document.writeln("                            for (let i in resultsFound.task[idMain].sub) {");
        hiWindow.document.writeln("                                let subtask = resultsFound.task[idMain].sub[i];");
        hiWindow.document.writeln("                                let descriptionSubtask = descriptionSplited[1];");
        hiWindow.document.writeln("                                descriptionSubtask = descriptionSubtask.replaceAll(\">\", \"\").replaceAll(\"<\", \"\");");
        hiWindow.document.writeln("                                if (subtask.name.includes(descriptionSubtask)) {");
        hiWindow.document.writeln("                                    console.log(\"=-=-=\");");
        hiWindow.document.writeln("                                    console.log(\"   added to subtask: \" + subtask.name);");
        hiWindow.document.writeln("                                    let timeSize = (currentTimeReportedInDetails + \"\").length;");
        hiWindow.document.writeln("                                    let offset = commentOffset - timeSize > 0 ? commentOffset - timeSize : 1;");
        hiWindow.document.writeln("                                    subtask.hours.push(");
        hiWindow.document.writeln("                                        \"+\"");
        hiWindow.document.writeln("                                        + currentTimeReportedInDetails");
        hiWindow.document.writeln("                                        + \" \".repeat(offset)");
        hiWindow.document.writeln("                                        + \"# \" + currentIssueInDetails");
        hiWindow.document.writeln("                                        + \" : \"");
        hiWindow.document.writeln("                                        + currentDescriptionInDetails");
        hiWindow.document.writeln("                                            .replaceAll(descriptionSplited[1], \"\")");
        hiWindow.document.writeln("                                            .replaceAll(\"\\n\", \"\")");
        hiWindow.document.writeln("                                            .replaceAll(\"\\t\", \"\"));");
        hiWindow.document.writeln("                                    break;");
        hiWindow.document.writeln("                                }");
        hiWindow.document.writeln("                            }");
        hiWindow.document.writeln("                        } else {");
        hiWindow.document.writeln("                            let timeSize = (currentTimeReportedInDetails + \"\").length;");
        hiWindow.document.writeln("                            let offset = commentOffset + 1 - timeSize > 0 ? commentOffset + 1 - timeSize : 1;");
        hiWindow.document.writeln("                            let content = currentTimeReportedInDetails");
        hiWindow.document.writeln("                                + \" \".repeat(offset)");
        hiWindow.document.writeln("                                + \"# \" + currentIssueInDetails");
        hiWindow.document.writeln("                                + \" : \" + currentDescriptionInDetails.replaceAll(\"\\n\", \"\").replaceAll(\"\\t\", \"\");");
        hiWindow.document.writeln("                            console.log(\"no subtask found -> \" + content);");
        hiWindow.document.writeln("                            resultsFound.task[idMain].main.hours.push(content);");
        hiWindow.document.writeln("                        }");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    const binaryString = event.target.result;");
        hiWindow.document.writeln("                    // Use a library like SheetJS or XLSX to parse the binary string");
        hiWindow.document.writeln("                    //console.log(binaryString);");
        hiWindow.document.writeln("                    const workbook = XLSX.read(binaryString, {type: 'binary'});");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    // (1) read first sheet - parse Jira task and PPM task");
        hiWindow.document.writeln("                    let sheetName = workbook.SheetNames[0];");
        hiWindow.document.writeln("                    let sheet = workbook.Sheets[sheetName];");
        hiWindow.document.writeln("                    // convert xls sheet to JSON");
        hiWindow.document.writeln("                    let sheetContent = XLSX.utils.sheet_to_json(sheet);");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    // parseSheetContent(sheetContent);");
        hiWindow.document.writeln("                    if (sheetContent === \"\" || sheetContent === null || sheetContent.length <= 1) {");
        hiWindow.document.writeln("                        console.log(\"There is no content for sheet :-(\");");
        hiWindow.document.writeln("                        return;");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln("                    console.log(sheetContent);");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    // mapping Jira to ppm task");
        hiWindow.document.writeln("                    const jiraTaskPPMTask = new Map();");
        hiWindow.document.writeln("                    let currentIssue = \"\";");
        hiWindow.document.writeln("                    let currentPPMProject = \"\";");
        hiWindow.document.writeln("                    for (let i = 0; i < sheetContent.length; i++) {");
        hiWindow.document.writeln("                        let elementOnSheet = sheetContent[i];");
        hiWindow.document.writeln("                        console.log(\"Element \" + i + \" = \" + elementOnSheet)");
        hiWindow.document.writeln("                        for (let key in elementOnSheet) {");
        hiWindow.document.writeln("                            let value = elementOnSheet[key];");
        hiWindow.document.writeln("                            console.log(\"---> key=\" + key + \", value=\" + value);");
        hiWindow.document.writeln("                            if (key.search(\"Issue\") === 0) {");
        hiWindow.document.writeln("                                currentIssue = value;");
        hiWindow.document.writeln("                                if (currentPPMProject !== \"\") {");
        hiWindow.document.writeln("                                    jiraTaskPPMTask.set(currentIssue, currentPPMProject);");
        hiWindow.document.writeln("                                }");
        hiWindow.document.writeln("                            } else if (key.search(\"PPM Project 20\") === 0) {");
        hiWindow.document.writeln("                                let ppmName = value.replaceAll(\"\t\", \"\").split(\" - \").slice(-1)[0];");
        hiWindow.document.writeln("                                currentPPMProject = ppmName;");
        hiWindow.document.writeln("                            }");
        hiWindow.document.writeln("                        }");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln("                    console.log(\"(1) done: jiraTaskPPMTask = \");");
        hiWindow.document.writeln("                    console.log(jiraTaskPPMTask);");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    // (2) read second sheet - parse Jira tasks hours to proper PPM task and save");
        hiWindow.document.writeln("                    console.log(\"===============\")");
        hiWindow.document.writeln("                    console.log(\"=== part 2 ====\")");
        hiWindow.document.writeln("                    console.log(\"===============\")");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    // (2.0) get list of all tasks");
        hiWindow.document.writeln("                    document.querySelector('#filterTasks').value = \"\";");
        hiWindow.document.writeln("                    document.querySelector('#filterTasks').onkeyup();");
        hiWindow.document.writeln("                    document.querySelector('#foundTasks');");
        hiWindow.document.writeln("                    let foundTasksAmount = document.querySelector('#foundTasks').childElementCount;");
        hiWindow.document.writeln("                    const foundTasks = [];");
        hiWindow.document.writeln("                    for (let k = 0; k < foundTasksAmount; k++) {");
        hiWindow.document.writeln("                        foundTasks.push(document.querySelector('#foundTasks').children[k].value);");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln("                    console.log(\"My all found tasks are:\");");
        hiWindow.document.writeln("                    console.log(foundTasks);");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    // (2.1) read data from sheet 2");
        hiWindow.document.writeln("                    sheetName = workbook.SheetNames[1];");
        hiWindow.document.writeln("                    sheet = workbook.Sheets[sheetName];");
        hiWindow.document.writeln("                    sheetContent = XLSX.utils.sheet_to_json(sheet);");
        hiWindow.document.writeln("                    // parseSheetContent(sheetContent);");
        hiWindow.document.writeln("                    if (sheetContent === \"\" || sheetContent === null || sheetContent.length <= 1) {");
        hiWindow.document.writeln("                        console.log(\"There is no content for sheet :-(\");");
        hiWindow.document.writeln("                        return;");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln("                    console.log(sheetContent);");
        hiWindow.document.writeln("                    let currentIssueInDetails = \"\";");
        hiWindow.document.writeln("                    let currentTimeReportedInDetails = \"\";");
        hiWindow.document.writeln("                    let currentDescriptionInDetails = \"\";");
        hiWindow.document.writeln("                    let currentPPMMainTaskInDetails = \"\";");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    const resultsFound = {\"task\": []};");
        hiWindow.document.writeln("                    const resultsNotFound = {\"task\": []};");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    for (let i = 0; i < sheetContent.length; i++) {");
        hiWindow.document.writeln("                        let elementOnSheet = sheetContent[i];");
        hiWindow.document.writeln("                        console.log(\"Element \" + i + \" = \" + elementOnSheet);");
        hiWindow.document.writeln("                        for (let key in elementOnSheet) {");
        hiWindow.document.writeln("                            let value = elementOnSheet[key];");
        hiWindow.document.writeln("                            if (key.search(\"Issue\") === 0) {");
        hiWindow.document.writeln("                                currentIssueInDetails = value;");
        hiWindow.document.writeln("                            } else if (key.search(\"Time reported\") === 0) {");
        hiWindow.document.writeln("                                currentTimeReportedInDetails = parseFloat(value);");
        hiWindow.document.writeln("                            } else if (key.search(\"Description\") === 0) {");
        hiWindow.document.writeln("                                currentDescriptionInDetails = value;");
        hiWindow.document.writeln("                            }");
        hiWindow.document.writeln("                        }");
        hiWindow.document.writeln("                        currentPPMMainTaskInDetails = jiraTaskPPMTask.get(currentIssueInDetails);");
        hiWindow.document.writeln("                        console.log(\"Found: \" + currentIssueInDetails + \" \" + currentTimeReportedInDetails + \"h |\"");
        hiWindow.document.writeln("                            + currentDescriptionInDetails + \"|\" + \" ppm = \" + currentPPMMainTaskInDetails);");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                        let isCurrentPPMMainTaskInFoundTasks = false;");
        hiWindow.document.writeln("                        let foundTasksForCurrent = [];");
        hiWindow.document.writeln("                        for (let id in foundTasks) {");
        hiWindow.document.writeln("                            let foundTask = foundTasks[id];");
        hiWindow.document.writeln("                            if (foundTask.includes(currentPPMMainTaskInDetails)) {");
        hiWindow.document.writeln("                                isCurrentPPMMainTaskInFoundTasks = true;");
        hiWindow.document.writeln("                                foundTasksForCurrent.push(foundTask);");
        hiWindow.document.writeln("                            }");
        hiWindow.document.writeln("                        }");
        hiWindow.document.writeln("                        //resultsFound  |  resultsNotFound  |  foundTasks  |  currentPPMProject");
        hiWindow.document.writeln("                        //  aaa.some(e => /.*lic.*/.test(e))");
        hiWindow.document.writeln("                        if (isCurrentPPMMainTaskInFoundTasks) {");
        hiWindow.document.writeln("                            console.log(\"-->  OK: it was found in foundTask\");");
        hiWindow.document.writeln("                            let hasResultsTask = false;");
        hiWindow.document.writeln("                            for (let i in resultsFound.task) {");
        hiWindow.document.writeln("                                if (resultsFound.task[i].main.name === currentPPMMainTaskInDetails) {");
        hiWindow.document.writeln("                                    hasResultsTask = true;");
        hiWindow.document.writeln("                                    break;");
        hiWindow.document.writeln("                                }");
        hiWindow.document.writeln("                            }");
        hiWindow.document.writeln("                            if (!hasResultsTask) {");
        hiWindow.document.writeln("                                console.log(\"-->  create new foundTask for \" + currentPPMMainTaskInDetails);");
        hiWindow.document.writeln("                                resultsFound.task.push({");
        hiWindow.document.writeln("                                    \"main\": {");
        hiWindow.document.writeln("                                        \"name\": currentPPMMainTaskInDetails,");
        hiWindow.document.writeln("                                        \"hours\": []");
        hiWindow.document.writeln("                                    },");
        hiWindow.document.writeln("                                    \"sub\": []");
        hiWindow.document.writeln("                                });");
        hiWindow.document.writeln("                                let idMain = resultsFound.task.length - 1;");
        hiWindow.document.writeln("                                console.log(resultsFound);");
        hiWindow.document.writeln("                                console.log(idMain);");
        hiWindow.document.writeln("                                for (let idTask in foundTasksForCurrent) {");
        hiWindow.document.writeln("                                    let subTask = foundTasksForCurrent[idTask];");
        hiWindow.document.writeln("                                    console.log(\"--- add subtask: \" + subTask);");
        hiWindow.document.writeln("                                    resultsFound.task[idMain].sub.push(");
        hiWindow.document.writeln("                                        {");
        hiWindow.document.writeln("                                            \"name\": subTask,");
        hiWindow.document.writeln("                                            \"hours\": []");
        hiWindow.document.writeln("                                        }");
        hiWindow.document.writeln("                                    );");
        hiWindow.document.writeln("                                }");
        hiWindow.document.writeln("                                updateHoursInMainOrInSubtask(currentDescriptionInDetails, idMain, resultsFound, foundTasksForCurrent);");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                            } else {");
        hiWindow.document.writeln("                                //hasResultsTask");
        hiWindow.document.writeln("                                console.log(\"-->  update foundTask for \" + currentPPMMainTaskInDetails);");
        hiWindow.document.writeln("                                //find task id in resultsFound");
        hiWindow.document.writeln("                                let idMain = null;");
        hiWindow.document.writeln("                                for (let i in resultsFound.task) {");
        hiWindow.document.writeln("                                    console.log(resultsFound.task[i].main.name);");
        hiWindow.document.writeln("                                    if (resultsFound.task[i].main.name === currentPPMMainTaskInDetails) {");
        hiWindow.document.writeln("                                        idMain = i;");
        hiWindow.document.writeln("                                        break");
        hiWindow.document.writeln("                                    }");
        hiWindow.document.writeln("                                }");
        hiWindow.document.writeln("                                if (idMain == null) {");
        hiWindow.document.writeln("                                    console.log(\"ERROR - task not found in resultsFound.\");");
        hiWindow.document.writeln("                                    continue;");
        hiWindow.document.writeln("                                }");
        hiWindow.document.writeln("                                updateHoursInMainOrInSubtask(currentDescriptionInDetails, idMain, resultsFound, foundTasksForCurrent);");
        hiWindow.document.writeln("                            }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                            console.log(resultsFound);");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                        } else {");
        hiWindow.document.writeln("                            console.log(\"--> BAD: it was not found in foundTask\");");
        hiWindow.document.writeln("                            //const resultsNotFound = {\"task\": []};");
        hiWindow.document.writeln("                            let hasResultsTask = false;");
        hiWindow.document.writeln("                            for (let i in resultsNotFound.task) {");
        hiWindow.document.writeln("                                if (resultsNotFound.task[i].name === currentPPMMainTaskInDetails) {");
        hiWindow.document.writeln("                                    hasResultsTask = true;");
        hiWindow.document.writeln("                                    break;");
        hiWindow.document.writeln("                                }");
        hiWindow.document.writeln("                            }");
        hiWindow.document.writeln("                            if (!hasResultsTask) {");
        hiWindow.document.writeln("                                console.log(\"-->  create new notFoundTask for \" + currentPPMMainTaskInDetails);");
        hiWindow.document.writeln("                                resultsNotFound.task.push({");
        hiWindow.document.writeln("                                    \"name\": currentPPMMainTaskInDetails,");
        hiWindow.document.writeln("                                    \"hours\": []");
        hiWindow.document.writeln("                                });");
        hiWindow.document.writeln("                                let idTask = resultsNotFound.task.length - 1;");
        hiWindow.document.writeln("                                let timeSize = (currentTimeReportedInDetails + \"\").length;");
        hiWindow.document.writeln("                                let offset = commentOffset + 1 - timeSize > 0 ? commentOffset + 1 - timeSize : 1;");
        hiWindow.document.writeln("                                let content = currentTimeReportedInDetails");
        hiWindow.document.writeln("                                    + \" \".repeat(offset)");
        hiWindow.document.writeln("                                    + \" # \" + currentIssueInDetails");
        hiWindow.document.writeln("                                    + \" : \" + currentDescriptionInDetails.replaceAll(\"\\n\", \"\").replaceAll(\"\\t\", \"\");");
        hiWindow.document.writeln("                                resultsNotFound.task[idTask].hours.push(content);");
        hiWindow.document.writeln("                                console.log(\"  added to resultsNotFound:\");");
        hiWindow.document.writeln("                                console.log(resultsNotFound);");
        hiWindow.document.writeln("                            } else {");
        hiWindow.document.writeln("                                //hasResultsTask");
        hiWindow.document.writeln("                                console.log(\"-->  update notFoundTask for \" + currentPPMMainTaskInDetails);");
        hiWindow.document.writeln("                                //find task id in resultsFound");
        hiWindow.document.writeln("                                let idTask = null;");
        hiWindow.document.writeln("                                for (let i in resultsNotFound.task) {");
        hiWindow.document.writeln("                                    console.log(resultsNotFound.task[i].name);");
        hiWindow.document.writeln("                                    if (resultsNotFound.task[i].name === currentPPMMainTaskInDetails) {");
        hiWindow.document.writeln("                                        idTask = i;");
        hiWindow.document.writeln("                                        break");
        hiWindow.document.writeln("                                    }");
        hiWindow.document.writeln("                                }");
        hiWindow.document.writeln("                                if (idTask == null) {");
        hiWindow.document.writeln("                                    console.log(\"ERROR - task not found in resultsFound.\");");
        hiWindow.document.writeln("                                    continue;");
        hiWindow.document.writeln("                                }");
        hiWindow.document.writeln("                                let timeSize = (currentTimeReportedInDetails + \"\").length;");
        hiWindow.document.writeln("                                let offset = commentOffset + 1 - timeSize > 0 ? commentOffset + 1 - timeSize : 1;");
        hiWindow.document.writeln("                                let content = currentTimeReportedInDetails");
        hiWindow.document.writeln("                                    + \" \".repeat(offset)");
        hiWindow.document.writeln("                                    + \"# \" + currentIssueInDetails");
        hiWindow.document.writeln("                                    + \" : \" + currentDescriptionInDetails.replaceAll(\"\\n\", \"\").replaceAll(\"\\t\", \"\");");
        hiWindow.document.writeln("                                resultsNotFound.task[idTask].hours.push(content);");
        hiWindow.document.writeln("                                console.log(\"  added to resultsNotFound:\");");
        hiWindow.document.writeln("                                console.log(resultsNotFound);");
        hiWindow.document.writeln("                            }");
        hiWindow.document.writeln("                        }");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    console.log(resultsFound);");
        hiWindow.document.writeln("                    console.log(resultsNotFound);");
        hiWindow.document.writeln("                    let resultOfParsing = \"\";");
        hiWindow.document.writeln("                    console.log(\"#-----------------------------------------------------------------------------------\");");
        hiWindow.document.writeln("                    console.log(\"################################### resultsFound ###################################\");");
        hiWindow.document.writeln("                    resultOfParsing = resultOfParsing + \"################################### resultsFound ###################################\\n\";");
        hiWindow.document.writeln("                    for (let i in resultsFound.task) {");
        hiWindow.document.writeln("                        for (let j in resultsFound.task[i].sub) {");
        hiWindow.document.writeln("                            console.log(\"====\" + resultsFound.task[i].sub[j].name);");
        hiWindow.document.writeln("                            resultOfParsing = resultOfParsing + \"====\" + resultsFound.task[i].sub[j].name + \"\\n\";");
        hiWindow.document.writeln("                            for (let k in resultsFound.task[i].sub[j].hours) {");
        hiWindow.document.writeln("                                console.log(resultsFound.task[i].sub[j].hours[k]);");
        hiWindow.document.writeln("                                resultOfParsing = resultOfParsing + resultsFound.task[i].sub[j].hours[k] + \"\\n\";");
        hiWindow.document.writeln("                            }");
        hiWindow.document.writeln("                        }");
        hiWindow.document.writeln("                        console.log(\"#-----------------------------------------------------------------------------------\");");
        hiWindow.document.writeln("                        resultOfParsing = resultOfParsing + \"#-----------------------------------------------------------------------------------\\n\";");
        hiWindow.document.writeln("                        for (let j in resultsFound.task[i].main.hours) {");
        hiWindow.document.writeln("                            console.log(resultsFound.task[i].main.hours[j]);");
        hiWindow.document.writeln("                            resultOfParsing = resultOfParsing + resultsFound.task[i].main.hours[j] + \"\\n\";");
        hiWindow.document.writeln("                        }");
        hiWindow.document.writeln("                        console.log(\"#-----------------------------------------------------------------------------------\");");
        hiWindow.document.writeln("                        resultOfParsing = resultOfParsing + \"#-----------------------------------------------------------------------------------\\n\";");
        hiWindow.document.writeln("                        console.log(\"\");");
        hiWindow.document.writeln("                        console.log(\"\");");
        hiWindow.document.writeln("                        resultOfParsing = resultOfParsing + \"\\n\";");
        hiWindow.document.writeln("                        resultOfParsing = resultOfParsing + \"\\n\";");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln(" ");
        hiWindow.document.writeln("                    console.log(\"################################### resultsNotFound ################################\");");
        hiWindow.document.writeln("                    resultOfParsing = resultOfParsing + \"################################### resultsNotFound ################################\\n\";");
        hiWindow.document.writeln("                    for (let i in resultsNotFound.task) {");
        hiWindow.document.writeln("                        console.log(\"#===\" + resultsNotFound.task[i].name);");
        hiWindow.document.writeln("                        resultOfParsing = resultOfParsing + \"#===\" + resultsNotFound.task[i].name + \"\\n\";");
        hiWindow.document.writeln("                        for (let j in resultsNotFound.task[i].hours) {");
        hiWindow.document.writeln("                            console.log(resultsNotFound.task[i].hours[j]);");
        hiWindow.document.writeln("                            resultOfParsing = resultOfParsing + resultsNotFound.task[i].hours[j] + \"\\n\";");
        hiWindow.document.writeln("                        }");
        hiWindow.document.writeln("                        console.log(\"\");");
        hiWindow.document.writeln("                        console.log(\"\");");
        hiWindow.document.writeln("                        resultOfParsing = resultOfParsing + \"\\n\";");
        hiWindow.document.writeln("                        resultOfParsing = resultOfParsing + \"\\n\";");
        hiWindow.document.writeln("                    }");
        hiWindow.document.writeln("                    console.log(\"#-----------------------------------------------------------------------------------\");");
        hiWindow.document.writeln("                    resultOfParsing = resultOfParsing + \"#-----------------------------------------------------------------------------------\\n\";");
        hiWindow.document.writeln("                    // (3) write to a file");
        hiWindow.document.writeln("                    console.log(\"===============\");");
        hiWindow.document.writeln("                    console.log(\"=== part 3 ====\");");
        hiWindow.document.writeln("                    console.log(\"===============\");");
        hiWindow.document.writeln("                    //let resultOfParsing = \"\";");
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
        hiWindow.document.writeln("                        await writable.write(\"# Converted from detailed Jira report file\\n\");");
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


        try {
            window.opener.document.querySelectorAll('input[id=filterTasks]')[0].onkeyup();
        } catch (error) {
            console.log("Upps: some strange error with line 1527:window.opener.document.querySelectorAll('input[id=filterTasks]')[0].onkeyup();  Verify this later.");
        }
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

            if (isZero(allInputs[i].value.replace(",", "."))) {
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
        if (isZero(this.value.replace(",", "."))) {
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

        if (object.parentNode.style.backgroundColor === bgColorSaturdayRGB
            || object.parentNode.style.backgroundColor === bgColorSundayRGB) {
            return;
        } else if (!isNaN(nodeValue) && (object.value.length > 4 || nodeValue > maxHoursDaily)) {
            object.parentNode.style.backgroundColor = bgColorWarning;
        } else if (nodeValue == maxHoursDaily) {
            object.parentNode.style.backgroundColor = bgColorCorrect;
        } else if ((nodeValue >= 0.01) && (nodeValue < maxHoursDaily) && (nodeValue % 0.5 !== 0)) {
            //M.Rys - color for partial hours
            object.parentNode.style.backgroundColor = bgColorPartialHoursWarning;
        } else if ((nodeValue >= 0.5) && (nodeValue < maxHoursDaily) && (nodeValue % 0.5 === 0)) {
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

            if (resultNodes[i].parentNode.style.backgroundColor === bgColorSaturdayRGB
                || resultNodes[i].parentNode.style.backgroundColor === bgColorSundayRGB) {
                continue;
            } else if (nodeValue == maxHoursDaily) {
                resultNodes[i].parentNode.style.backgroundColor = bgColorCorrect;
            } else if ((nodeValue >= 0.01) && (nodeValue < maxHoursDaily) && (nodeValue % 0.5 !== 0)) {
                //M.Rys - color for total hours not equals to max
                resultNodes[i].parentNode.style.backgroundColor = bgColorPartialHoursWarning;
            } else if ((nodeValue >= 0.5) && (nodeValue < maxHoursDaily) && (nodeValue % 0.5 === 0)) {
                //M.Rys - color for total hours not equals to max
                resultNodes[i].parentNode.style.backgroundColor = bgColorPartialHours;
            } else if (nodeValue > 9999 || nodeValue > maxHoursDaily) {
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

            if (headerNodes[i].innerHTML.includes("N<br>") || headerNodes[i].innerHTML.includes("Sun<br>") || new RegExp(publicHolidays.join("|")).test(headerNodes[i].innerHTML.trim())) {
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
            if (!span.title.toLowerCase().includes("asset")) {
                span.textContent = span.title.split("&gt; ")[1]
            }
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
