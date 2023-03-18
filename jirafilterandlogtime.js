// ==UserScript==
// @name         Jira filter and log time massively
// @namespace    https://jira.deltavista.com/jira/issues/?filter=*
// @homepage     https://github.com/michalrys/FixPPM
// @homepageURL  https://github.com/michalrys/FixPPM
// @updateURL    https://raw.githubusercontent.com/michalrys/FixPPM/master/XXXX
// @downloadURL  https://raw.githubusercontent.com/michalrys/FixPPM/master/XXXX
// @version      1.0.1
// @description  Add hours in a massive way.
// @author       Michał Ryś
// @match        https://jira.deltavista.com/jira/issues/?filter=*
// @icon         data:image/png;base64,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ANLU1fINcHAIjBQoe93j3V3tvf17ptnfD6HWcrpFUQipAAANdmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAtRXhpdjIiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDpiNzY4YTJmMC1kODM2LTQ4NTUtODIwNi1kN2E3N2YxOTAzZmMiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MWY1NjE5NDUtZTczYS00YTNjLWJjYmQtMjUzNzVjNmMyYTcyIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjFkZDI4ODUtNWU2YS00Mjk3LWEwZmYtMWZiMWVkNGExNjFmIgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iV2luZG93cyIKICAgR0lNUDpUaW1lU3RhbXA9IjE2NzkxMDAzNjU4NjMzMDUiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4zMiIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjM6MDM6MThUMDE6NDY6MDIrMDE6MDAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDIzOjAzOjE4VDAxOjQ2OjAyKzAxOjAwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MGQ2ZmI2Y2YtMzM2MS00Y2Y0LTkyOWUtZDUzNWZjOTFmY2ZjIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDIzLTAzLTE4VDAxOjQ2OjA1Ii8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PvYHEzYAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAHdElNRQfnAxIALgUBSJn9AAAdJklEQVR42t2dd5xU1fn/3+dO38pWlrJUIZQvGDChKVkVEJUYJaCCBgQBMRBQQCOw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
// @grant        none
// ==/UserScript==

(function () {

    function setPPMTaskSubtasks() {
        const ppmTaskSubtasks = new Map();
        // valid for 2023
        ppmTaskSubtasks.set("Business initiatives (CAPEX)",
            ["Task: Analysis and Review",
                "Task: Bug Fixing and Rework",
                "Task: Build and Release",
                "Task: Implementation",
                "Task: Test Case Specification",
                "Task: Test Execution"]);
        //add other tasks id needed
        return ppmTaskSubtasks;
    }

    "use strict";

    const ppmTaskSubtasks = setPPMTaskSubtasks();

    console.log("Jira log time is running");
    const colorRed = "#FFA19E";
    const colorGreen = "#A4FF9E";
    const colorYellow = "#FDFF9E";

//     let ppmName;
//     let logDialogWindowColor;
//     try {
//         ppmName = document.getElementById("customfield_17113-val");
//         ppmName = ppmName.textContent.trim().replaceAll("\n", "").replaceAll("\t", "");
//         ppmName = ppmName.split(" - ").slice(-1)[0];
//         logDialogWindowColor = colorGreen;
//     } catch (exception) {
//         ppmName = "NO PPM TASK";
//         logDialogWindowColor = colorRed;
//         console.log("ppm task not found !");
//     }

//     //add onclick event listener - generate fields
//     setTimeout(function() {
//     let issueTable = document.getElementById("issuetable");
//     let issuesTr = issueTable.children[1];
//     for(let i in issuesTr.childNodes) {
//         let currentIssueTr = issuesTr.childNodes[i];
//         let currentIssueJiraName = "UNKNOWN JIRA NAME";
//         for(let j in currentIssueTr.childNodes) {
//             let currentIssueTd = currentIssueTr.childNodes[j];
//             if(currentIssueTd.className === "issuekey") {
//                 currentIssueJiraName = currentIssueTd.textContent.trim();
//                 let logTimeButton = document.createElement('button');
//                 logTimeButton.id = "logTimeButton_" + j;
//                 logTimeButton.title = "Log hours for this.";
//                 logTimeButton.innerText = "T";
//                 //logTimeButton.style = "height: 18px; width: 18px; padding-left: 4px; font-size: 10px; color: #6B778C; margin-left: 10px; border: 1px solid #9a9a9a; cursor: hand; border-radius: 18px;";
//                 //logTimeButton.onclick = test(currentIssueJiraName);
//                 currentIssueTd.append(logTimeButton);


//                 //currentIssueTr.addEventListener("click", createLogTimeMenu(currentIssueJiraName));
//                 //currentIssueTr.onclick = test(currentIssueJiraName);
//                 break;
//             }
//         }
//     }
//     }, 5000);

    //other way:
    createLogTimeMenu(setPPMTaskSubtasks(), "Jira ???", " (NO PPM TASK) ");

    function createLogTimeMenu(ppmTaskSubtasks, currentIssueJiraName, currentIssuePPM2023) {
        //get data from issues table
        function getCurrentIssueData() {
            let issueTable = document.getElementById("issuetable");
            let issuesTr = issueTable.children[1];

            let selectedIssueWasFound = false;
            let currentIssueJiraName = "UNKNOWN JIRA NAME";
            let currentIssueJiraId = "NO_JIRA_ID";
            let currentIssuePPM2023 = "NO PPM TASK";
            for(let i in issuesTr.childNodes) {
                let currentIssueTr = issuesTr.childNodes[i];
                if(currentIssueTr.className !== "issuerow focused") {
                    continue;
                }
                currentIssueJiraId = currentIssueTr.id.replaceAll("issuerow","");
                for(let j in currentIssueTr.childNodes) {
                    let currentIssueTd = currentIssueTr.childNodes[j];
                    if(currentIssueTd.className === "issuekey") {
                        currentIssueJiraName = currentIssueTd.textContent.trim();
                    }
                    if(currentIssueTd.className === "customfield_17113") {
                        try {
                            currentIssuePPM2023 = currentIssueTd.textContent.trim().replaceAll("\n", "").replaceAll("\t", "");
                            currentIssuePPM2023 = currentIssuePPM2023.split(" - ").slice(-1)[0];
                        } catch (exception) {
                            currentIssuePPM2023 = "NO PPM TASK";
                        }
                    }
                }
                if(selectedIssueWasFound) {
                    break;
                }

            }
            let mySubTaskLabel = document.getElementById("mySubTaskLabel");
            mySubTaskLabel.textContent = currentIssueJiraName;

            console.log("Jira id = " + currentIssueJiraId);

            let mySubTaskLabelPPM = document.getElementById("mySubTaskLabelPPM");
            if(currentIssuePPM2023 === "") {
                currentIssuePPM2023 = "NO PPM TASK";
            }
            mySubTaskLabelPPM.textContent = " (" + currentIssuePPM2023 + ") ";
            console.log("PPM2023 task = " + currentIssuePPM2023);

            // update select menu
            console.log(ppmTaskSubtasks);
            let mySubTaskSelect = document.getElementById("mySubTaskSelect");
            for (let i in mySubTaskSelect.options) {
                mySubTaskSelect.remove(i);
            }
            mySubTaskSelect.style.background = "#fafafa";
            // add options again
            let subtasksForBatch = ppmTaskSubtasks.get(currentIssuePPM2023);
            if (subtasksForBatch !== undefined) {
                let optionMySubTaskSelect = document.createElement("option");
                optionMySubTaskSelect.id = "optionMySubTaskSelectOptionOnStartUp";
                optionMySubTaskSelect.textContent = "Select subtask for ppm...";
                mySubTaskSelect.add(optionMySubTaskSelect, undefined);

                for (let i in subtasksForBatch) {
                    let option = document.createElement("option");
                    option.id = "option" + i;
                    option.textContent = subtasksForBatch[i];
                    mySubTaskSelect.add(option, undefined);
                }
                //mySubTaskSelect.style.background = colorYellow;
                mySubTaskSelect.addEventListener("change", function () {
                    for (let i in mySubTaskSelect.options) {
                        if (mySubTaskSelect.options[i].id === "optionMySubTaskSelectOptionOnStartUp") {
                            mySubTaskSelect.remove(i);
                            mySubTaskSelect.style.background = colorGreen;
                            return;
                        }
                        mySubTaskSelect.style.background = colorGreen;
                    }
                });
            }

            // set log button
            let myHoursButton = document.getElementById("myHoursButton");
//             myHoursButton.addEventListener("click", function () {
//                 logMyHours(currentIssueJiraId);
//             });
            myHoursButton.onclick = function () {
                logMyHours(currentIssueJiraId);
            };

        }

        // pseudo-batch   let a = document.getElementById("pseudoBatchDiv")  //details-module
        let documentIssueHeader = document.getElementsByClassName("aui navigator-search query-component generic-styled");

        let pseudoBatchDiv = document.createElement('div');
        pseudoBatchDiv.id = "pseudoBatchDiv";
        pseudoBatchDiv.style = "padding-left: 0px; margin-top: 10px; margin-bottom: 5px; font-size: 12px; color: #6B778C;";

        let mySubTaskLabel = document.createElement('label');
        mySubTaskLabel.id = "mySubTaskLabel";
        mySubTaskLabel.for = "mySubTaskSelect";
        mySubTaskLabel.title = "Click here, and selected Jira will be set for log time.";
        mySubTaskLabel.style = "font-size: 12px;";
        mySubTaskLabel.textContent = currentIssueJiraName;
        mySubTaskLabel.onclick = getCurrentIssueData;

        let mySubTaskLabelPPM = document.createElement('label');
        mySubTaskLabelPPM.id = "mySubTaskLabelPPM";
        mySubTaskLabelPPM.title = "PPM 2023 task";
        mySubTaskLabelPPM.style = "font-size: 12px;";
        mySubTaskLabelPPM.textContent = currentIssuePPM2023;
        mySubTaskLabelPPM.onclick = getCurrentIssueData;

        let mySubTaskSelect = document.createElement('select');
        mySubTaskSelect.id = "mySubTaskSelect";
        mySubTaskSelect.style = "height: 18px; width: 220px; font-size: 10px; color: #6B778C; margin-left: 10px; margin-right: 10px; outline: 0px SOLID #6B778C; border: unset; background: #fafafa";

        //     let optionMySubTaskSelect0 = document.createElement("option");
        //     optionMySubTaskSelect0.id = "optionMySubTaskSelect0";
        //     optionMySubTaskSelect0.textContent = "...";
        //     optionMySubTaskSelect0.value = "nothing_selected";
        //     mySubTaskSelect.add(optionMySubTaskSelect0, undefined);

        // add select and options
        //let ppmName = "Small medium features (OPEX)";  //FIXME
        let ppmName = currentIssuePPM2023;

        let subtasksForBatch = ppmTaskSubtasks.get(ppmName);
        if (subtasksForBatch !== undefined) {
            let optionMySubTaskSelect = document.createElement("option");
            optionMySubTaskSelect.id = "optionMySubTaskSelectOptionOnStartUp";
            optionMySubTaskSelect.textContent = "Select subtask for ppm...";
            mySubTaskSelect.add(optionMySubTaskSelect, undefined);

            for (let i in subtasksForBatch) {
                let option = document.createElement("option");
                option.id = "option" + i;
                option.textContent = subtasksForBatch[i];
                mySubTaskSelect.add(option, undefined);
            }
            //mySubTaskSelect.style.background = colorYellow;
            mySubTaskSelect.addEventListener("change", function () {
                for (let i in mySubTaskSelect.options) {
                    if (mySubTaskSelect.options[i].id === "optionMySubTaskSelectOptionOnStartUp") {
                        mySubTaskSelect.remove(i);
                        mySubTaskSelect.style.background = colorGreen;
                        return;
                    }
                    mySubTaskSelect.style.background = colorGreen;
                }
            });
        }
        // add select and options

        pseudoBatchDiv.appendChild(mySubTaskLabel, undefined);
        pseudoBatchDiv.appendChild(mySubTaskLabelPPM, undefined);
        pseudoBatchDiv.appendChild(mySubTaskSelect, undefined);

        let myHoursInput = document.createElement('input');
        myHoursInput.id = "myHoursInput";
        myHoursInput.type = "text";
        myHoursInput.title = "Hours in h, eg.: 0.5, 2, 0.25";
        myHoursInput.style = "height: 15px; width: 20px; font-size: 10px; color: #6B778C; margin-right: 3px; text-align:center; border: unset; background: #fafafa";
        pseudoBatchDiv.appendChild(myHoursInput, undefined);

        let myHoursLabel = document.createElement('label');
        myHoursLabel.id = "myHoursLabel";
        myHoursLabel.for = "myHoursInput";
        myHoursLabel.textContent = "h";
        myHoursLabel.style = "font-size: 12px;";
        pseudoBatchDiv.appendChild(myHoursLabel, undefined);

        let myHoursButton = document.createElement('button');
        myHoursButton.id = "myHoursButton";
        myHoursButton.title = "Log given hours for given subtask.";
        myHoursButton.innerText = "LOG";
        myHoursButton.style = "height: 18px; width: 40px; font-size: 10px; color: #6B778C; margin-left: 10px; border: 1px solid #9a9a9a; cursor: hand; border-radius: 5px;";
        //myHoursButton.onclick = logMyHours;
//         myHoursButton.addEventListener("click", function () {
//             logMyHours("0");
//         });
        myHoursButton.onclick = function () {
            logMyHours("0");
        };

        pseudoBatchDiv.appendChild(myHoursButton, undefined);

        let myHoursAddDescription = document.createElement('input');
        myHoursAddDescription.id = "myHoursAddDescription";
        myHoursAddDescription.style = "height: 15px; width: 220px; font-size: 10px; color: #6B778C; margin-left: 10px; padding-left: 5px; border: unset; background: #fafafa";
        myHoursAddDescription.title = "Additional description";
        pseudoBatchDiv.appendChild(myHoursAddDescription, undefined);

        let myHoursJiraSummaryReport = document.createElement('button');
        myHoursJiraSummaryReport.id = "myHoursButton";
        myHoursJiraSummaryReport.title = "Go to Jira Team Report";
        myHoursJiraSummaryReport.innerText = "R";
        myHoursJiraSummaryReport.style = "height: 18px; width: 18px; padding-left: 4px; font-size: 10px; color: #6B778C; margin-left: 10px; border: 1px solid #9a9a9a; cursor: hand; border-radius: 18px;";
        myHoursJiraSummaryReport.onclick = goToJiraSummaryReportPage;
        pseudoBatchDiv.appendChild(myHoursJiraSummaryReport, undefined);

        function logMyHours(currentIssueJiraId) {
            //"https://jira.deltavista.com/jira/secure/CreateWorklog!default.jspa?myhours=777&mydescription=AlaMaKota&id=790548";

            //let a = document.getElementById("mySubTaskSelect");
            let subTask = "";
            try {
                let subTask = "<" + mySubTaskSelect[mySubTaskSelect.selectedIndex].text + ">";
                console.log(subTask);
            } catch(exception) {
                console.log("No subtask ! empty string will be assumed.");
            }

            //let b = document.getElementById("myHoursInput");
            let hours = myHoursInput.value;
            console.log(hours);

            let additionalDescription = myHoursAddDescription.value;
            console.log(additionalDescription);

            if (hours === "") {
                console.log("Wrong hours - must be a number");
                return;
            }
            if (subTask.includes("Select subtask for ppm...")) {
                console.log("Wrong ! select subtask.");
                return;
            }
            //window.open('https://jira.deltavista.com/jira/secure/CreateWorklog!default.jspa?myhours=777&mydescription=AlaMaKota&id=790548', '_blank');
            //let jiraId = document.getElementById("key-val").rel;
            let batchPath = "https://jira.deltavista.com/jira/secure/CreateWorklog!default.jspa?";
            batchPath += "myhours=";
            batchPath += hours;
            batchPath += "&mydescription=";
            batchPath += subTask;  //.replaceAll("%3C","<").replaceAll("%3E",">").replaceAll("%20"," ");
            batchPath += additionalDescription;
            batchPath += "&id=";
            batchPath += currentIssueJiraId;

            window.open(batchPath, '_blank');

            console.log("For " + subTask + " hours " + hours + " were added.");
            //window.open('https://jira.deltavista.com/jira/secure/CreateWorklog!default.jspa?myhours=777&mydescription=AlaMaKota&id=790548', '_blank');
        }

        function goToJiraSummaryReportPage() {
            //"https://jira.deltavista.com/jira/plugins/servlet/com.gebsun.plugins.jira.startwork/team-reports#/
            // ?datem=useFromTo&efields=
            // &from=2023-03-01&groupBy=customfield_17113%2Cissuekey&jgroups=&jusers=JIRAUSER18100&projects=";

            let avatarSpan = document.getElementsByClassName("aui-avatar-inner");
            let avatarImageSrc = avatarSpan[0].childNodes[1].src;
            let jiraUserId = avatarImageSrc.split("ownerId=")[1].split("&")[0];
            let groupBy = "customfield_17113%2Cissuekey";
            let firstDayOfCurrentMonth = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-01";
            // let currentDate = new Date().toISOString().split('T')[0];

            let webPage = "https://jira.deltavista.com/jira/plugins/servlet/com.gebsun.plugins.jira.startwork/"
                + "team-reports#/?datem=useFromTo&efields="
                + "&from=" + firstDayOfCurrentMonth
                + "&groupBy=" + groupBy
                + "&jgroups=&jusers=" + jiraUserId
                + "&projects=";

            window.open(webPage, '_blank');
            console.log("New web page was opened: " + webPage);

        }

        documentIssueHeader[0].insertBefore(pseudoBatchDiv, documentIssueHeader.nextSibling);
    }

})();