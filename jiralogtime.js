// ==UserScript==
// @name         Jira log time
// @namespace    https://jira.deltavista.com/jira/browse/*
// @homepage     https://github.com/michalrys/FixPPM
// @homepageURL  https://github.com/michalrys/FixPPM
// @updateURL    https://raw.githubusercontent.com/michalrys/FixPPM/master/jiralogtime.js
// @downloadURL  https://raw.githubusercontent.com/michalrys/FixPPM/master/jiralogtime.js
// @version      1.0.2
// @description  Use subtask when there is only one.
// @author       Michał Ryś
// @match        https://jira.deltavista.com/jira/browse/*
// @icon         data:image/png;base64,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
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
        return ppmTaskSubtasks;
    }

    "use strict";

    const ppmTaskSubtasks = setPPMTaskSubtasks();

    console.log("Jira log time is running");
    const colorRed = "#FFA19E";
    const colorGreen = "#A4FF9E";
    const colorYellow = "#FDFF9E";

    let logButton = document.getElementById("log-work-link");
    logButton.style.background=colorRed;
    logButton.title = "MACRO ACTIVATED FOR: Log Work for this issue";
    logButton.addEventListener('click', updateLogDialogWindow);

    let logButton2 = document.getElementsByClassName("issueaction-log-work")[0];
    logButton2.style.background=colorRed;
    logButton2.title = "MACRO ACTIVATED FOR: Log Work for this issue";
    logButton2.addEventListener('click', updateLogDialogWindow);

    let ppmName;
    let logDialogWindowColor;
    try {
        ppmName = document.getElementById("customfield_17113-val");
        ppmName = ppmName.textContent.trim().replaceAll("\n", "").replaceAll("\t", "");
        ppmName = ppmName.split(" - ").slice(-1)[0];
        logDialogWindowColor = colorGreen;
    } catch (exception) {
        ppmName = "NO PPM TASK";
        logDialogWindowColor = colorRed;
        console.log("ppm task not found !");
    }

    function updateLogDialogWindow() {
        console.log("update log dialog window");

        setTimeout(function() {
            // Whatever you want to do after the wait
            console.log("after some time");
            let logDialogWindow = document.getElementById("log-work-dialog");
            logDialogWindow.children[0].children[0].style.background = logDialogWindowColor;

            let title = logDialogWindow.children[0].children[0].textContent.trim();
            title = title + " (" + ppmName + ")";
            logDialogWindow.children[0].children[0].textContent = title;

            let form = logDialogWindow.children[1].children[1].children[0].children[3];
            let descriptionField = logDialogWindow.children[1].children[1].children[0].children[3].children[5];

            // add select and options
            let subtasks = ppmTaskSubtasks.get(ppmName);
            if(subtasks !== undefined) {
                let subTaskSelectForm = document.createElement("select");
                subTaskSelectForm.id = "subTaskSelectForm";

                let option = document.createElement("option");
                option.id = "optionOnStartUp";
                option.textContent = "Select subtask for ppm...";
                subTaskSelectForm.add(option, undefined);

                for(let i in subtasks) {
                    let option = document.createElement("option");
                    option.id = "option" + i;
                    option.textContent = subtasks[i];
                    subTaskSelectForm.add(option, undefined);
                }
                subTaskSelectForm.style.background = colorYellow;

                // insert select
                form.insertBefore(subTaskSelectForm, descriptionField);

                descriptionField = logDialogWindow.children[1].children[1].children[0].children[3].children[6];
                subTaskSelectForm.addEventListener("change", function() {
                    for(let i in subTaskSelectForm.options) {
                        if(subTaskSelectForm.options[i].id === "optionOnStartUp") {
                            subTaskSelectForm.remove(i);
                            setDescription(subTaskSelectForm, descriptionField);
                            return;
                        }
                    }
                    setDescription(subTaskSelectForm, descriptionField);
                });

                // select subtask if there is only one
                if(subTaskSelectForm.options.length == 2) {
                    subTaskSelectForm.remove(0);
                    setDescription(subTaskSelectForm, descriptionField);
                }


                function setDescription(subTaskSelectForm, descriptionField) {
                    console.log(subTaskSelectForm.value);
                    let subtaskTag = "<" + subTaskSelectForm.value + ">";

                    let currentDescription = descriptionField.children[1].value.split(">");
                    if(currentDescription.length == 1) {
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


})();
