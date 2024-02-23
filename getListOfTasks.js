// author: M.Ryś
// date: 2024-02-23
// version: 1.0.0
// info: https://confluence.deltavista.com/confluence/pages/editpage.action?pageId=363533254

var table = document.getElementById("table3")
var spans = table.getElementsByTagName("span");
for (var span of spans) {
    let title = span.title;
    if (!title.toLowerCase().includes("asset")) {
        if (title != '') {
            span.textContent = title.split("&gt; ")[1]
        } else {
            let size = span.childNodes.length;
            span.textContent = span.childNodes[size - 1].text;
        }
    }
}


var rows = table.getElementsByTagName("tr");

let isFirstRow = false
let isMiddleRow = false
let firstRowContent = ""
let middleRowContent = ""
let fullName = ""
let i = 1;

let separator = "$"

for (rowId = 1; rowId < rows.length; rowId++) {
    let row = rows[rowId];
    let className = row.getElementsByTagName("td")[1].getAttribute("class")
    isFirstRow = className.search(/subgroupings/) !== -1

    let contentDiv = row.getElementsByTagName("div")[0]
    let contentTxt = ""
    if (contentDiv !== undefined) {
        contentTxt = contentDiv.textContent;
    } else {
        contentTxt = row.childNodes[2].textContent.replace("\t", "").replace("\n", "");
    }
    contentTxt = contentTxt.replace(/Project.*/, "")

    if (isFirstRow) {
        isMiddleRow = false;
        firstRowContent = contentTxt;
        middleRowContent = ""
    } else {
        isFirstRow = false;
        isMiddleRow = true;

        middleRowContent = contentTxt;
        if (middleRowContent.search("Task: ") !== -1) {
            let tempTask = middleRowContent.split("Task: ")[1];
            let tempTaskMainTask = tempTask.split(" (");
            let taskName = tempTaskMainTask[0];
            let mainTaskName = tempTask.split(taskName)[1];
            mainTaskName = mainTaskName.replace(" (", "");
            mainTaskName = mainTaskName.replace(")", "");

            //fullName = firstRowContent + " - " +middleRowContent
            fullName = firstRowContent + separator + mainTaskName + separator + taskName;
            console.log(i++ + ")" + fullName);
        } else {
            fullName = firstRowContent + separator + middleRowContent + "<<< UNTYPICAL CHECK IT";
            console.log(i++ + ")" + fullName);
        }

    }
}