function getLessonsSourceSheet() {

    var sheetId = "1IQTNy2rAJKON2Oo0mmbZCAn30w4MTDJ04utQ74ckq0A";
    var sheetName = "Jazdy";

    spreadSheetFile = SpreadsheetApp.openById(sheetId)
    var sourceSheet = spreadSheetFile.getSheetByName(sheetName);
    var targetSheet = spreadSheetFile.getSheetByName("Sławomir Markiewicz");
    var sourceData = sourceSheet.getRange(1, 1, sourceSheet.getLastRow(), sourceSheet.getLastColumn());
    targetSheet.setHiddenGridlines(true);
    var pivotTable = targetSheet.getRange('A1').createPivotTable(sourceData);
}



function generateInstructorsReports() {

    var instructors = getInstructors();

    for (i = 0; i < instructors.length - 1; i++) {
        //for (i=0; i<1; i++){
        createReportForInstructor(getInstructorNameById(instructors[i][1]), "12zsmAS5aU0g5ZhfQsQEy4tJgosQ5KuQO2Kc-Vuy-kVw");


    }

}


function createStudentsLessonsSummaryReport() {

    var spreadSheetFile = SpreadsheetApp.openById("1IQTNy2rAJKON2Oo0mmbZCAn30w4MTDJ04utQ74ckq0A");
    var sourceSheet = spreadSheetFile.getSheetByName("Jazdy");
    var targetSheet = spreadSheetFile.getSheetByName("Podsumowanie-Kursanci");
    var sourceData = sourceSheet.getRange(1, 1, sourceSheet.getLastRow(), sourceSheet.getLastColumn());
    targetSheet.setHiddenGridlines(true);
    var pivotTable = targetSheet.getRange('A1').createPivotTable(sourceData);
    var pivotGroup = pivotTable.addRowGroup(11);
    pivotTable.addRowGroup(4);
    pivotTable.addRowGroup(13);
    pivotTable.addPivotValue(9, SpreadsheetApp.PivotTableSummarizeFunction.SUM);



}


function createReportForInstructor(instructorName, instructorFileId) {
    var spreadSheetFile = SpreadsheetApp.openById("1IQTNy2rAJKON2Oo0mmbZCAn30w4MTDJ04utQ74ckq0A");
    var today = new Date();
    var currentMonth = today.getMonth() + 1;
    var previousMonth = today.getMonth();
    var currentYear = today.getFullYear();
    var month1FilterItem = currentYear + "-" + currentMonth;
    var month2FilterItem = currentYear + "-" + previousMonth;
    // Logger.log(month2FilterItem)
    var sheets = spreadSheetFile.getSheets();
    var createNewSheet = sheets.filter(function (item) {
        return item.getName() == instructorName
    }).length > 0;


    if (!createNewSheet) {
        spreadSheetFile.insertSheet(instructorName)
    }
    var sourceSheet = spreadSheetFile.getSheetByName("Jazdy");
    var targetSheet = spreadSheetFile.getSheetByName(instructorName);
    var sourceData = sourceSheet.getRange(1, 1, sourceSheet.getLastRow(), sourceSheet.getLastColumn());
    targetSheet.setHiddenGridlines(true);
    var pivotTable = targetSheet.getRange('A1').createPivotTable(sourceData);
    var pivotGroup = pivotTable.addRowGroup(4);
    pivotTable.addRowGroup(7);
    pivotTable.addRowGroup(11);
    var pivotValue = pivotTable.addPivotValue(9, SpreadsheetApp.PivotTableSummarizeFunction.SUM);
    var criteria1 = SpreadsheetApp.newFilterCriteria()
        .setVisibleValues([instructorName])
        .build();
    pivotTable.addFilter(4, criteria1);
    criteria2 = SpreadsheetApp.newFilterCriteria()
        .setVisibleValues([month1FilterItem, month2FilterItem])
        .build();
    pivotTable.addFilter(15, criteria2);
    var instructorFile = getSpreadsheetbyId(instructorFileId)
    var instructorSheets = instructorFile.getSheets();

    var createNewSheetForInstructor = instructorSheets.filter(function (item) {
        return item.getName() == instructorName
    }).length > 0;

    if (!createNewSheetForInstructor) {
        instructorFile.insertSheet(instructorName)
    }
    var instructorSheet = instructorFile.getSheetByName(instructorName)

    Logger.log(createNewSheetForInstructor);
    instructorSheet.activate();
    instructorSheet.getRange('A1').activate();
    instructorSheet.getActiveRange().getDataRegion().activate();
    instructorSheet.getActiveRange().clearContent()
    var formula = '=IMPORTRANGE("https://docs.google.com/spreadsheets/d/1IQTNy2rAJKON2Oo0mmbZCAn30w4MTDJ04utQ74ckq0A";"' + '\'' + instructorName + '\'!A1:D1400")'
    instructorSheet.getRange('A1').setFormulaR1C1(formula)





}