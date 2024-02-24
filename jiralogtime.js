// ==UserScript==
// @name         Jira log time
// @namespace    https://jira.deltavista.com/jira/browse/*
// @homepage     https://github.com/michalrys/FixPPM
// @homepageURL  https://github.com/michalrys/FixPPM
// @updateURL    https://raw.githubusercontent.com/michalrys/FixPPM/master/jiralogtime.js
// @downloadURL  https://raw.githubusercontent.com/michalrys/FixPPM/master/jiralogtime.js
// @version      1.0.9
// @description  2024 fix
// @author       Michał Ryś
// @match        https://jira.deltavista.com/jira/browse/*
// @icon         data:image/png;base64,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
// @grant        none
// ==/UserScript==

// REMARKS:  all console.log's starts with >>>
(function () {

    function setPPMTaskSubtasks() {
        const ppmTaskSubtasks = new Map();
        // STEP 1/3 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        // define PPM TASK and SUBTASKS
        // valid for 2023 → customfield_17113
        // valid for 2024 → customfield_18590
// valid for OC-team PPM2024
// last update: 2024-02-24 M.Ryś
        ppmTaskSubtasks.set("Keep running (OPEX)",
            ["Task: 3rd level support",
                "Task: Analysis and Review",
                "Task: Build and Release",
                "Task: Implementation",
                "Task: Pre-Prod Bug Fixing",
                "Task: Testing"]);

//add other tasks id needed
//ppmTaskSubtasks.set("",[]);

        //add other tasks id needed
        return ppmTaskSubtasks;
    }
    const ppmTaskSubtasks = setPPMTaskSubtasks();

    "use strict";

    // STEP 2/3 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    // define prefixes:                                                                        (old way - go to line 193)
    const prefix = [];
    //2024
    prefix.push("XYZ 2024");

    // STEP 3/3 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    // define by hand: name in Jira ---> ppm subtask
    const jiraNamePPMTaskName = new Map();
    //jiraNamePPMTaskName.set("XYZ - 123456 - ABC - Business initiatives (CAPEX)","Business initiatives (CAPEX)")
    //jiraNamePPMTaskName.set("XYZ - 123456 - ABC - Biznes initiatives (CAPEX)","Business initiatives (CAPEX)")
    //
    //2024
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //-------- default mapping name in Jira -> ppm subtask
    let jiraNames = []
    let ppmTaskNames = Array.from(ppmTaskSubtasks.keys())
    ppmTaskNames.forEach(function(ppmTaskName) {
        prefix.forEach(function(pref) {
            let ppmName = pref + " - " + ppmTaskName
            jiraNames.push(ppmName)


            if(jiraNamePPMTaskName.get(ppmName) === undefined) {
                //console.log(">>>1)ppmName=" + ppmName + ",jiraNamePPMTaskName.get(ppmName)=" + jiraNamePPMTaskName.get(ppmName))
                //console.log(">>>1)ppmTaskName=" + ppmTaskName)
                jiraNamePPMTaskName.set(ppmName, ppmTaskName)
            } else {
                //FIXME: what is it for ?
                //console.log(">>>2)jiraNamePPMTaskName.get(ppmName) = " + jiraNamePPMTaskName.get(ppmName))
                let tempValue = []
                //tempValue = jiraNamePPMTaskName.get(ppmName)
                //console.log(">>>2)ppmName=" + ppmName + ", jiraNamePPMTaskName.get(ppmName)=" + jiraNamePPMTaskName.get(ppmName))
                //console.log(">>>2)ppmTaskName= " + ppmTaskName)
                //tempValue.push(ppmTaskName)
            }
        })
    })
    // just print all mapped values
//     let jiraNamesPrint = Array.from(jiraNamePPMTaskName.keys())
//     jiraNamesPrint.forEach(function(jiraNamePrint) {
//         console.log(">>> " + jiraNamePrint + "-->" + jiraNamePPMTaskName.get(jiraNamePrint))
//     })

    console.log(">>> Jira log time is running");
    console.log(">>> Jira<->PPM mapped: " + jiraNamePPMTaskName.size)
    const colorRed = "#FFA19E";
    const colorGreen = "#A4FF9E";
    const colorYellow = "#FDFF9E";

    try{
        let logButton = document.getElementById("log-work-link");
        logButton.style.background = colorRed;
        logButton.title = "MACRO ACTIVATED FOR: Log Work for this issue";
        logButton.addEventListener('click', updateLogDialogWindow);
    } catch(exception){
        console.log(">>> No button + for log time.");
    }

    let logButton2 = document.getElementsByClassName("issueaction-log-work")[0];
    logButton2.style.background = colorRed;
    logButton2.title = "MACRO ACTIVATED FOR: Log Work for this issue";
    logButton2.addEventListener('click', updateLogDialogWindow);

    let ppmName;
    let logDialogWindowColor;
    try {
        //PPM Project 2023 = customfield_17113
        //PPM Projeckt 2024 = customfield_18590

        //previous way of extracting Jira name --> PPM Task
//         ppmName = document.getElementById("customfield_17113-val");
//         ppmName = ppmName.textContent.trim().replaceAll("\n", "").replaceAll("\t", "");
//         //ppmName = ppmName.split(" - ").slice(-1)[0];
// 		let ppmOriginal = ppmName
//         ppmName = ppmName.split("             - ").slice(-1)[0];
//         if (ppmOriginal === ppmName){
//             ppmName = ppmName.split(" - ").slice(-1)[0];
//         }
//         console.log("PPM: " + ppmName);
//         logDialogWindowColor = colorGreen;
        ppmName = document.getElementById("customfield_18590-val");
        ppmName = ppmName.textContent.trim().replaceAll("\n", "").replaceAll("\t", "");
        ppmName = ppmName.replace(/[ ]{2,}/, " ")
        console.log(">>> jiraName = '" + ppmName + "'")
        ppmName = jiraNamePPMTaskName.get(ppmName); // <<<<<<<< replace
        console.log(">>> ppmName = '" + ppmName + "'")
    } catch (exception) {
        ppmName = "NO PPM TASK";
        logDialogWindowColor = colorRed;
        console.log(">>> ppm task not found !");
    }

    function updateLogDialogWindow() {
        console.log(">>> update log dialog window");

        setTimeout(function () {
            // Whatever you want to do after the wait
            console.log(">>> after some time");
            let logDialogWindow = document.getElementById("log-work-dialog");
            logDialogWindow.children[0].children[0].style.background = logDialogWindowColor;

            let title = logDialogWindow.children[0].children[0].textContent.trim();
            title = title + " (" + ppmName + ")";
            logDialogWindow.children[0].children[0].textContent = title;

            let form = logDialogWindow.children[1].children[1].children[0].children[3];
            let descriptionField = logDialogWindow.children[1].children[1].children[0].children[3].children[5];

            // add select and options
            let subtasks = ppmTaskSubtasks.get(ppmName);
            if (subtasks !== undefined) {
                let subTaskSelectForm = document.createElement("select");
                subTaskSelectForm.id = "subTaskSelectForm";

                let option = document.createElement("option");
                option.id = "optionOnStartUp";
                option.textContent = "Select subtask for ppm...";
                subTaskSelectForm.add(option, undefined);

                for (let i in subtasks) {
                    let option = document.createElement("option");
                    option.id = "option" + i;
                    option.textContent = subtasks[i];
                    subTaskSelectForm.add(option, undefined);
                }
                subTaskSelectForm.style.background = colorYellow;

                // insert select
                form.insertBefore(subTaskSelectForm, descriptionField);

                descriptionField = logDialogWindow.children[1].children[1].children[0].children[3].children[6];
                subTaskSelectForm.addEventListener("change", function () {
                    for (let i in subTaskSelectForm.options) {
                        if (subTaskSelectForm.options[i].id === "optionOnStartUp") {
                            subTaskSelectForm.remove(i);
                            setDescription(subTaskSelectForm, descriptionField);
                            return;
                        }
                    }
                    setDescription(subTaskSelectForm, descriptionField);
                });

                // select subtask if there is only one
                if (subTaskSelectForm.options.length == 2) {
                    subTaskSelectForm.remove(0);
                    setDescription(subTaskSelectForm, descriptionField);
                }


                function setDescription(subTaskSelectForm, descriptionField) {
                    console.log(">>> " + subTaskSelectForm.value);
                    let subtaskTag = "<" + subTaskSelectForm.value + ">";

                    let currentDescription = descriptionField.children[1].value.split(">");
                    if (currentDescription.length == 1) {
                        currentDescription = currentDescription[0];
                    } else {
                        currentDescription = currentDescription[1];
                    }

                    descriptionField.children[1].value = subtaskTag + currentDescription;
                    subTaskSelectForm.style.background = colorGreen;
                }

                //let logDialogWindow = document.getElementById("log-work-dialog");
                //let subTaskSelectForm = logDialogWindow.children[1].children[1].children[0].children[3].children[5];
                //descriptionField.children[1].textContent

            }

        }, 1000);
    };

    // pseudo-batch   let a = document.getElementById("pseudoBatchDiv")  //details-module
    let documentIssueHeader = document.getElementsByClassName("issue-header-content");

    let pseudoBatchDiv = document.createElement('div');
    pseudoBatchDiv.id = "pseudoBatchDiv";
    pseudoBatchDiv.style = "padding-left: 40px; margin-top: -10px; margin-bottom: 5px; font-size: 12px; color: #6B778C;";

    let mySubTaskLabel = document.createElement('label');
    mySubTaskLabel.id = "mySubTaskLabel";
    mySubTaskLabel.for = "mySubTaskSelect";
    mySubTaskLabel.textContent = "Log:"

    let mySubTaskSelect = document.createElement('select');
    mySubTaskSelect.id = "mySubTaskSelect";
    mySubTaskSelect.style = "height: 18px; width: 220px; font-size: 10px; color: #6B778C; margin-left: 10px; margin-right: 10px; outline: 0px SOLID #6B778C; border: unset; background: #fafafa";

//     let optionMySubTaskSelect0 = document.createElement("option");
//     optionMySubTaskSelect0.id = "optionMySubTaskSelect0";
//     optionMySubTaskSelect0.textContent = "...";
//     optionMySubTaskSelect0.value = "nothing_selected";
//     mySubTaskSelect.add(optionMySubTaskSelect0, undefined);

// add select and options
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
    pseudoBatchDiv.appendChild(mySubTaskSelect, undefined);

    let myHoursInput = document.createElement('input');
    myHoursInput.id = "myHoursInput";
    myHoursInput.title = "Hours in h, eg.: 0.5, 2, 0.25";
    myHoursInput.style = "height: 15px; width: 20px; font-size: 10px; color: #6B778C; margin-right: 3px; text-align:center; border: unset; background: #fafafa";
    pseudoBatchDiv.appendChild(myHoursInput, undefined);

    let myHoursLabel = document.createElement('label');
    myHoursLabel.id = "myHoursLabel";
    myHoursLabel.for = "myHoursInput";
    myHoursLabel.textContent = "h";
    pseudoBatchDiv.appendChild(myHoursLabel, undefined);

    let myHoursButton = document.createElement('button');
    myHoursButton.id = "myHoursButton";
    myHoursButton.title = "Log given hours for given subtask.";
    myHoursButton.innerText = "LOG";
    myHoursButton.style = "height: 18px; width: 40px; font-size: 10px; color: #6B778C; margin-left: 10px; border: 1px solid #9a9a9a; cursor: hand; border-radius: 5px;";
    myHoursButton.onclick = logMyHours;
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

    let calendarDateTime = document.createElement('input');
    calendarDateTime.id = "calendarDateTime";
    calendarDateTime.style = "height: 15px; width: 100px; font-size: 10px; color: #6B778C; margin-left: 10px; padding-left: 5px; border: unset; background: #fafafa";
    calendarDateTime.title = "Date time - leave blank for current time.";
    pseudoBatchDiv.appendChild(calendarDateTime, undefined);

    let calendarHref = document.createElement('a');
    calendarHref.href = "#";
    calendarHref.id = "calendarHref";
    calendarHref.title = "Select a date and time stamp.";
    //calendarHref.textContent="<<<";

    let calendarImg = document.createElement('img');
    calendarImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAADFHpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjarZVrsuQmDEb/s4osAb2QWA7Pquwgy88H7u7cO5OpSlUGmraNhV5H4LT++nOnP06rOSc1j1JLyWhatXLDTeSnKUbH4Pu7TVZ+N7rv6XlIeX2mv714zxNjRr7Mv672el9W2WUWSkVcOPNk+HMmihfD/SjbDUL3SYSXkJT775KlHtfu+BhJj9qPNf7qVbxD5O/z2z6RPs97Rtp7PeE2LchReQWJJR7PuILIlMrNXkF3DMO9317RI+WWB2meeSCtHfeVmCRvUprUaNO610EDbikvdlyZB8udC3GuPCQnRK2n02aXKlNCWAayIZjljy907dZrblDA8CRIMkEZYQWn8/c7+i8V7T1OuujW1LoDfvFJMtw4tM4/pACB9kONkDj60n9sh6WAmt00BwJsuT8qutFDlRJE5MIVCBqu+iz2+VKAFMG2wRkSEMiFxKhQdmYnQh4DfBoUBYtyBwIy4wkvWQW15xx8bGON05Vl42ca2wggTE4tBwA1sFLsNdSPa6CGmompmRVzC6vWihQtVgrq++zH5uLq5sXdw6u3kNCwKOERKWq0ylWwX62W6jVqra3BaIPmhtUNAq117tK1Wy/de/Ta20D5DB02yvARadTRJk+ZOm2W6TNmnW3RQiktXbbK8hWrrrZRalu2btvYiDt23e1DjdJr6/3Y/zs1elPjS+oI+ocalrq/VdA5XuwwAzFWAnE/BFDQfJjlIFVOB91hlitjVxjDSztwJh1iIKiL2DZ92P1D7hu3pPq/uPGbXDrofge5dND9gtzP3P6F2jxn/MiSLqGzDU9Ss2D7rTpwDJlN27ZW67SjldxFa9NKOMMLog5Wp7Em8aauOOISI0EBw16hAEFEYZvedWzi0ctssTpUVHxtOunGccY49nghh4tjRh4BCluSKw3Pun1UC+hQJCGW9+y2e3WSaicjkyO3rqvYOWdFogyaDdZD9yxtrVSNEHOri0u0DbmoefbZ5mAfG4sUpQDfqAe+aYoDx5Tp5KDNuQ0lgzydD+Tf9TmsGoCeKxIAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAHPSURBVCiRhZI7aFNRAIa/c2+CqNWog4Ng8YWCumnBwVEoDuLmog7i4uBjUcRFEUUEdREVBKeijhYRshSNYsC+DBFTqUbbEvtKDKXNTW5uem/v7xBJ0xd+cJYffvj+cw76h1utKdmd1qzvazHTpbKSPV8WZEjS9ExZnfEPYs0xfexOKzuUmz+/cnr15p2gXelMVuVKVZJkCn+mdO3WE4ZHC5ScChtiLdiWTTOzvo9Tdtm0cT2H2/Zx+fwpTF9qQG0nbnBwe4z/IYFnorx9cZsIAC2rOH7kALZtr1gyxlByXF6+/1YPelMD2n/0oqperTE8XHI9dXJjBbHntCbzRVkAYSgitkW8K8m9hx0Y4OrNR7yOJ6h6Nc5cusPP4d9YZt7Aavgv3rNkIKg57U0NaG/7BVU9bwXBJtXRyYWqALZlk0j286yjE4AHj5/TlfiEV6tx/e5TRnLjmCbXRhEDjuMymp8CIDuSZ8ZxUQj9g2P4frBQvedzRqsPndXYREF+MKe5UHIqrkJJfjCnslv/KbN+oPTX72LXSU3ki4rE1q2l2p3i3JX77GzdTBiGy76jbdsk+n6AEdFoBBMEgTKDQ4xPFpctNGNZht07trKtdQt/AQZOaTEEjH3MAAAAAElFTkSuQmCC";
    calendarImg.id = "calendarImg";
    calendarImg.style = "margin-left: 5px;";

    calendarHref.appendChild(calendarImg, undefined);
    pseudoBatchDiv.appendChild(calendarHref, undefined);

    function logMyHours() {
        //"https://jira.deltavista.com/jira/secure/CreateWorklog!default.jspa?myhours=777&mydescription=AlaMaKota&id=790548";

        //let a = document.getElementById("mySubTaskSelect");
        let subTask = "<" + mySubTaskSelect[mySubTaskSelect.selectedIndex].text + ">";
        console.log(">>> " + subTask);

        //let b = document.getElementById("myHoursInput");
        let hours = myHoursInput.value;
        console.log(">>> " + hours);

        let additionalDescription = myHoursAddDescription.value;
        console.log(">>> " + additionalDescription);

        if (hours === "") {
            console.log(">>> Wrong hours - must be a number");
            return;
        }
        if (subTask.includes("Select subtask for ppm...")) {
            console.log(">>> Wrong ! select subtask.");
            return;
        }
        //set date time - take from calendarDateTime
        let dateTimeStampOptional = "";
        if (calendarDateTime.value !== "") {
            dateTimeStampOptional = "&datetimestamp=" + calendarDateTime.value;
        }

        //window.open('https://jira.deltavista.com/jira/secure/CreateWorklog!default.jspa?myhours=777&mydescription=AlaMaKota&id=790548', '_blank');
        let jiraId = document.getElementById("key-val").rel;
        let batchPath = "https://jira.deltavista.com/jira/secure/CreateWorklog!default.jspa?";
        batchPath += "myhours=";
        batchPath += hours;
        batchPath += "&mydescription=";
        batchPath += subTask;//.replaceAll("%3C","<").replaceAll("%3E",">").replaceAll("%20"," ");
        batchPath += additionalDescription;
        batchPath += dateTimeStampOptional;
        batchPath += "&id=";
        batchPath += jiraId;

        window.open(batchPath, '_blank');

        console.log(">>> For " + subTask + " hours " + hours + " were added.");
        //window.open('https://jira.deltavista.com/jira/secure/CreateWorklog!default.jspa?myhours=777&mydescription=AlaMaKota&id=790548', '_blank');
    }

    function goToJiraSummaryReportPage() {
        //PPM Project 2023 = customfield_17113
        //PPM Projeckt 2024 = customfield_18590
        //"https://jira.deltavista.com/jira/plugins/servlet/com.gebsun.plugins.jira.startwork/team-reports#/
        // ?datem=useFromTo&efields=
        // &from=2023-03-01&groupBy=customfield_17113%2Cissuekey&jgroups=&jusers=JIRAUSER18100&projects=";

        let avatarSpan = document.getElementsByClassName("aui-avatar-inner");
        let avatarImageSrc = avatarSpan[0].childNodes[1].src;
        let jiraUserId = avatarImageSrc.split("ownerId=")[1].split("&")[0];
        let groupBy = "customfield_18590%2Cissuekey";
        let firstDayOfCurrentMonth = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-01";
        // let currentDate = new Date().toISOString().split('T')[0];

        let webPage = "https://jira.deltavista.com/jira/plugins/servlet/com.gebsun.plugins.jira.startwork/"
            + "team-reports#/?datem=useFromTo&efields="
            + "&from=" + firstDayOfCurrentMonth
            + "&groupBy=" + groupBy
            + "&jgroups=&jusers=" + jiraUserId
            + "&projects=";

        window.open(webPage, '_blank');
        console.log(">>> New web page was opened: " + webPage);

    }

    documentIssueHeader[0].insertBefore(pseudoBatchDiv, documentIssueHeader.nextSibling);



    // calendar scripts from Jira:
    Calendar.setup({
        firstDay     : 0,       // first day of the week
        inputField   : "calendarDateTime",     // id of the input field
        button       : "calendarHref",  // trigger for the calendar (button ID)
        align        : "Br",                                                            // alignment (defaults to "Bl")
        singleClick  : true,
        useISO8601WeekNumbers   : true, // use ISO8601 date/time standard

        showsTime    : "true",
        ifFormat     : "%e/%b/%y %I:%M %p",
        date         : "2024/02/22 11:15:32",
        todayDate    : "2024/02/22 11:15:32",
        timeFormat   : "12"
    });

    try {
        /* module-key = 'jira.webresources:calendar-en', location = '/includes/lib/calendar/lang/calendar-en.js' */
// ** I18N

// Calendar EN language
// Author: Mihai Bazon, <mihai_bazon@yahoo.com>
// Encoding: any
// Distributed under the same terms as the calendar itself.

// For translators: please use UTF-8 if possible.  We strongly believe that
// Unicode is the answer to a real internationalized world.  Also please
// include your contact information in the header, as can be seen above.

// full day names
        Calendar._DN = new Array
        ("Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday");

// Please note that the following array of short day names (and the same goes
// for short month names, _SMN) isn't absolutely necessary.  We give it here
// for exemplification on how one can customize the short day names, but if
// they are simply the first N letters of the full name you can simply say:
//
//   Calendar._SDN_len = N; // short day name length
//   Calendar._SMN_len = N; // short month name length
//
// If N = 3 then this is not needed either since we assume a value of 3 if not
// present, to be compatible with translation files that were written before
// this feature.

// short day names
        Calendar._SDN = new Array
        ("Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun");

// First day of the week. "0" means display Sunday first, "1" means display
// Monday first, etc.
        Calendar._FD = 0;

// full month names
        Calendar._MN = new Array
        ("January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December");

// short month names
        Calendar._SMN = new Array
        ("Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec");

// tooltips
        Calendar._TT = {};
        Calendar._TT["INFO"] = "About the calendar";

        Calendar._TT["ABOUT"] =
            "DHTML Date/Time Selector\n" +
            "(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n" + // don't translate this this ;-)
            "For latest version visit: http://www.dynarch.com/projects/calendar/\n" +
            "Distributed under GNU LGPL.  See http://gnu.org/licenses/lgpl.html for details." +
            "\n\n" +
            "Date selection:\n" +
            "- Use the \xab, \xbb buttons to select year\n" +
            "- Use the " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " buttons to select month\n" +
            "- Hold mouse button on any of the above buttons for faster selection.";
        Calendar._TT["ABOUT_TIME"] = "\n\n" +
            "Time selection:\n" +
            "- Click on any of the time parts to increase it\n" +
            "- or Shift-click to decrease it\n" +
            "- or click and drag for faster selection.";

        Calendar._TT["PREV_YEAR"] = "Prev. year (hold for menu)";
        Calendar._TT["PREV_MONTH"] = "Prev. month (hold for menu)";
        Calendar._TT["GO_TODAY"] = "Go Today";
        Calendar._TT["NEXT_MONTH"] = "Next month (hold for menu)";
        Calendar._TT["NEXT_YEAR"] = "Next year (hold for menu)";
        Calendar._TT["SEL_DATE"] = "Select date";
        Calendar._TT["DRAG_TO_MOVE"] = "Drag to move";
        Calendar._TT["PART_TODAY"] = " (today)";

// the following is to inform that "%s" is to be the first day of week
// %s will be replaced with the day name.
        Calendar._TT["DAY_FIRST"] = "Display %s first";

// This may be locale-dependent.  It specifies the week-end days, as an array
// of comma-separated numbers.  The numbers are from 0 to 6: 0 means Sunday, 1
// means Monday, etc.
        Calendar._TT["WEEKEND"] = "0,6";

        Calendar._TT["CLOSE"] = "Close";
        Calendar._TT["TODAY"] = "Today";
        Calendar._TT["TIME_PART"] = "(Shift-)Click or drag to change value";

// date formats
        Calendar._TT["DEF_DATE_FORMAT"] = "%Y-%m-%d";
        Calendar._TT["TT_DATE_FORMAT"] = "%a, %b %e";

        Calendar._TT["WK"] = "wk";
        Calendar._TT["TIME"] = "Time:";

// local AM/PM designators
        Calendar._TT["AM"] = "AM";
        Calendar._TT["PM"] = "PM";
        Calendar._TT["am"] = "am";
        Calendar._TT["pm"] = "pm";


    }catch(e){"some error with Jiras calendar"};

    // other
    try {
        /* module-key = 'jira.webresources:calendar-localisation-moment', location = '/includes/lib/calendar/Calendar-localisation-moment.js' */
        define("jira/calendar/localisation-moment",["require"],function(a){"use strict";var e=a("jira/moment"),o=a("jira/libs/calendar"),t=e.localeData("jira");null!==t&&"object"==typeof t&&"function"==typeof o&&(o._DN=t._weekdays.concat(t._weekdays[0]),o._SDN=t._weekdaysShort.concat(t._weekdaysShort[0]),o._MN=[].concat(t._months),o._SMN=[].concat(t._monthsShort))}),require("jira/calendar/localisation-moment");
    }catch(e){"other"};
})();
