/*Manlin Mao */
function jumpToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop - 0;
}

function getMonthName(month) {
    switch (month) {
        case 1: mName = "January"; break;
        case 2: mName = "February"; break;
        case 3: mName = "March"; break;
        case 4: mName = "April"; break;
        case 5: mName = "May"; break;
        case 6: mName = "June"; break;
        case 7: mName = "July"; break;
        case 8: mName = "August"; break;
        case 9: mName = "September"; break;
        case 10: mName = "October"; break;
        case 11: mName = "November"; break;
        case 12: mName = "December"; break;
    }
    return (mName);
}
function todaysDate() {

    var rightNow = new Date();
    var todaysDate = "";
    monthName = getMonthName(12);
    todaysDate = monthName + " " + rightNow.getDate()
        + ',' + rightNow.getFullYear();
    document.getElementById("showDate").innerHTML = todaysDate;
}

function changeTable() {
    document.getElementById("changeTable").style.color = "#78ae87";
    document.getElementById("changeTable").style.borderWidth = "0.3em";
    document.getElementById("changeTable").style.borderStyle = "groove";
    document.getElementById("changeTable").style.borderColor = "#f9b4ab";
}
