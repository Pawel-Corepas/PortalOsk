function getCourseSheet() {

    var sheetId = "1l8Wx5fAEBOtJEqcKRfkNVaNJN9C80DvNDsFOT-jkMVU";
    var sheetName = "Kursy";
    return courseSheet = getSheetByIdAndName(sheetId, sheetName);

}


function createCourse(e) {
        var dane = prepareSheetRow(e,"KRS");
        var courseSheet = getCourseSheet()
        addRowToSheet(courseSheet,dane);
        updateCourses(courseSheet);
        
}

function updateCourses(courseSheet) {
        var courses = courseSheet.getRange(2,2,ss.getLastRow(),2).getValues();
        updateStudentsCoursesDropdown(courses) 
}


