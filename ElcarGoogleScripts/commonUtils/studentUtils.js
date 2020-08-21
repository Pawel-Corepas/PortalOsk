
function getStudentsSheet() {

    var sheetId = "10vs0QjYCn8_jQ4pZNc7oMb4eX-_ZJkNCaUaGIdColUQ";
    var sheetName = "Kursanci";
    return courseSheet = getSheetByIdAndName(sheetId, sheetName);

}

function getStudentsForm() {

    var formId = "1psgv4MgZHAyRhpi3nYL17_SeW-r2AgAyc9MbffV1TbM";
    
    return studentsForm = getFormById(formId);

}
function updateStudentsFormCourses(courses){
    var coursesItemIndex=5;
    var formItems = getStudentsForm().getItems();
    updateFormDropdown (getStudentsForm(),formItems[coursesItemIndex].getId().toString(),courses)
}

function createStudent(e) {
    var courseIndexInData =7;
    var data = prepareSheetRow(e,"STD");
    var courseData = data[courseIndexInData];
    var strudentCourseId = getCourseIdFromStudentCourse(courseData)
    data[courseIndexInData]=strudentCourseId;
    var studentsSheet = getStudentsSheet()
    addRowToSheet(studentsSheet,data);
    addNoteToLastRowCellY(courseIndexInData+1,getCourseNameFromStudentCourse(courseData),studentsSheet )
}

function getCourseIdFromStudentCourse (course){
    return courseId = course.split(',')[0];
    
}

function getCourseNameFromStudentCourse(course) {
    return courseId = course.split(',')[1];
}