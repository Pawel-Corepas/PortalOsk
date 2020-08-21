
function getStudentsSheet() {

    var sheetId = "10vs0QjYCn8_jQ4pZNc7oMb4eX-_ZJkNCaUaGIdColUQ-jkMVU";
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


