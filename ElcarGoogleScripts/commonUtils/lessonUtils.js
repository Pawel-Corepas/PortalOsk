function getLessonsSheet() {

    var sheetId = "1v_xHVSRTA5WYJXwOM-HTBWhyxGbqhHTBEaNbdaUF1zQ";
    var sheetName = "Jazdy";
    return courseSheet = getSheetByIdAndName(sheetId, sheetName);

}

function getInstructorIdByFormId(formId) {
    var sheet = getInstructorsSheet();
    var instructors = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();
    var instructorsFiltered = filterArrayByValAndIndex(instructors, 10, formId)
    var instructor = instructorsFiltered[0]

    return instructorId = instructor[1];
}

function createLesson(e, formId) {
    var instructorId = getInstructorIdByFormId(formId)
    var data = prepareSheetRowForLesson(e, "LSN", instructorId);
    var courseIndexInData = 8;
    var studentIndexInData = 7;
    var courseData = data[courseIndexInData];
    var studentData = data[studentIndexInData];
    //var lessonCourseId = getResourceIdFromResourceData(courseData)
    //data[courseIndexInData]=lessonCourseId;
    var lessonStudentId = getResourceIdFromResourceData(studentData)
    data[studentIndexInData] = lessonStudentId;
    var lessonCourseId = getCourseIdByStudentIdAndCategory(lessonStudentId, courseData)
    data[courseIndexInData] = lessonCourseId;
    var lessonsSheet = getLessonsSheet()
    addRowToSheet(lessonsSheet, data);
    addNoteToLastRowCellY(courseIndexInData + 1, getResourceNameFromResourceData(courseData), lessonsSheet);
    addNoteToLastRowCellY(studentIndexInData + 1, getResourceNameFromResourceData(studentData), lessonsSheet);

}

function getResourceIdFromResourceData(resource) {

    return resourceId = resource.split('|')[1].trim();

}

function getResourceNameFromResourceData(resource) {
    return resourceName = resource.split('|')[0].trim();
}