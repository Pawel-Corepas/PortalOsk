function getPaymentsSheet() {

    var sheetId = "1oBBOnCZSoe8Ad_8aKknYY9Ke5iYFV8D2vgT_acBmhTk";
    var sheetName = "Platnosci";
    return courseSheet = getSheetByIdAndName(sheetId, sheetName);

}

function getPaymentsForm() {

    var formId = "1R0O1Z45yM6WfUW0ngr4IFARwWyoUqdiqCDmG7xey9ag";

    return studentsForm = getFormById(formId);

}

function createPayment(e) {
    var data = prepareSheetRow(e, "PYMT");
    var courseIndexInData = 4;
    var studentIndexInData = 2;
    var courseData = data[courseIndexInData];
    var studentData = data[studentIndexInData];
    var paymentCourseId = getCourseIdFromPaymentCourse(courseData)
    data[courseIndexInData] = paymentCourseId;
    var paymentStudentId = getStudentIdFromPaymentCourse(studentData)
    data[studentIndexInData] = paymentStudentId;
    var paymentsSheet = getPaymentsSheet()
    addRowToSheet(getPaymentsSheet(), data);
    addNoteToLastRowCellY(courseIndexInData + 1, getCourseNameFromPaymentCourse(courseData), paymentsSheet);
    addNoteToLastRowCellY(studentIndexInData + 1, getStudentNameFromPaymentCours(studentData), paymentsSheet);

}

function updatePaymentsFormStudents(students) {
    var studentsItemIndex = 0;
    var formItems = getPaymentsForm().getItems();
    var studentsFiltered = filterArrayByValAndIndexMulti(students, 9, ['NA_JAZDACH', 'NOWY', 'NA_KURSIE'])
    var _students = mapArrayToNewArray(studentsFiltered, 1, 3, 4);
    if (_students.length > 0) {
        updateFormDropdown(getPaymentsForm(), formItems[studentsItemIndex].getId().toString(), _students)
    }
}

function updatePaymentsFormCourses(courses) {
    Logger.log("updating courses for create payment form")
    Logger.log(courses.length)
    var couresFiltered = filterArrayByValAndIndexMulti(courses, 10, ['AKTYWNY'])
    var coursesItemIndex = 2;
    var formItems = getPaymentsForm().getItems();
    var _courses = mapArrayToNewArray(couresFiltered, 1, 2, 4);
    updateFormDropdown(getPaymentsForm(), formItems[coursesItemIndex].getId().toString(), _courses)
}



function getCourseIdFromPaymentCourse(course) {

    return courseId = course.split('|')[1].trim();

}

function getCourseNameFromPaymentCourse(course) {
    return courseName = course.split('|')[0].trim();
}


function getStudentIdFromPaymentCourse(student) {
    return instructorId = student.split('|')[1].trim();

}

function getStudentNameFromPaymentCours(student) {
    return instructorName = student.split('|')[0].trim();
}