function getCourseStudentsSheet() {

    var sheetId = "1pRhg67f3kydVEr8kaX9Eem2YqWliRL4GJFm1rMYXFGY";
    var sheetName = "ListaKursowKursanta";
    return courseSheet = getSheetByIdAndName(sheetId, sheetName);

}


function getStudentCoursesForm() {

    var formId = "1nJq2HsqPfNoNJGYluFHImKwWRmqQwiWIKaS00tdlXwA";

    return studentCoursesForm = getFormById(formId);

}

function createStudentsCourse(e) {
    var courseIndexInData = 2;
    var studentsIndexInData = 3;
    var data = prepareSheetRow(e, "KRSSTD");
    var courseData = data[courseIndexInData];
    var courseId = getResourceIdFromData(courseData)
    var studentsData = data[studentsIndexInData];
    var studentsId = getResourceIdFromData(studentsData)
    data[courseIndexInData] = courseId;
    data[studentsIndexInData] = studentsId;
    var courseStudentsSheet = getCourseStudentsSheet()
    addRowToSheet(courseStudentsSheet, data);
    addNoteToLastRowCellY(courseIndexInData + 1, getNameFromData(courseData), courseStudentsSheet);
    addNoteToLastRowCellY(studentsIndexInData + 1, getNameFromData(studentsData), courseStudentsSheet);
    updateStudentStatusById(studentsId, 'NA_KURSIE');
    updateStudents()

    //refreshInstuctorsForms()
};

function getResourceIdFromData(resourceObject) {
    return resourceId = resourceObject.split('|')[1].trim();

}

function getNameFromData(resourceObject) {
    return resourceName = resourceObject.split('|')[0].trim();

}

function updateCoursesStudentsFormCourses(courses) {
    var courseItemIndex = 0;
    var formItems = getStudentCoursesForm().getItems();
    var _coursesFiltered = filterArrayByValAndIndex(courses, 10, 'AKTYWNY')
    var _courses = mapArrayToNewArray(_coursesFiltered, 1, 2, 4);
    if (_courses.length > 0) {
        updateFormDropdown(getStudentCoursesForm(), formItems[courseItemIndex].getId().toString(), _courses)
    }
}

function updateCoursesStudentsFormStudents(students) {
    var studentsItemIndex = 1;
    var formItems = getStudentCoursesForm().getItems();
    var _studentsFiltered = filterArrayByValAndIndex(students, 9, 'NOWY')
    var _students = mapArrayToNewArray(_studentsFiltered, 1, 3, 4);
    if (_students.length > 0) {
        Logger.log("updating students on assignStudentsCOurse:" + _students.length)
        updateFormDropdown(getStudentCoursesForm(), formItems[studentsItemIndex].getId().toString(), _students)
    }

}

function getCoursesByStudentId(instructorsId) {
    var sheet = getCourseStudentsSheet();
    var studentsCourses = sheet.getRange(2, 1, courseSheet.getLastRow(), courseSheet.getLastColumn()).getValues();
    var studentsCoursesFiltered = filterArrayByValAndIndex(studentsCourses, 3, studentId);
    //Logger.log(studentsCoursesFiltered);
    var coursesSheet = getCourseSheet();
    var courses = coursesSheet.getRange(2, 1, courseSheet.getLastRow(), courseSheet.getLastColumn()).getValues();
    var coursesList = studentsCoursesFiltered.map(
        function (course) {
            return filterArrayByValAndIndex(courses, 1, course[2])[0]
        }
    );
    // var thisInstructorStudentsIds = filterArrayByValAndIndex(instructorsStudents, 2, instructorId)

    return filterArrayByValAndIndex(coursesList, 10, 'AKTYWNY')


}

function getCoursesByInstructorId(instuctorStudents, instructorId) {

    var studentIds = instuctorStudents.map(function (student) {

        return student[1]

    })
    var sheet = getCourseStudentsSheet();
    var studentsCourses = sheet.getRange(2, 1, courseSheet.getLastRow(), courseSheet.getLastColumn()).getValues();

    coursesFiltered = studentsCourses.filter(item => studentIds.includes(item[3]));

    newCoursesFiltered = coursesFiltered.map(
        function (course) {

            return course[2];

        }

    );


    var coursesFilteredDuplicatesRemoved = newCoursesFiltered.filter((c, index) => {

        return newCoursesFiltered.indexOf(c) == index;
    });

    var coursesSheet = getCourseSheet();
    var courses = coursesSheet.getRange(2, 1, courseSheet.getLastRow(), courseSheet.getLastColumn()).getValues();
    var coursesList = coursesFilteredDuplicatesRemoved.map(
        function (course) {
            return filterArrayByValAndIndex(courses, 1, course)[0]
        }
    );

    return activeCourses = filterArrayByValAndIndex(coursesList, 10, 'AKTYWNY');

}



function getActiveCourses() {
    var coursesSheet = getCourseSheet();
    var courses = coursesSheet.getRange(2, 1, courseSheet.getLastRow(), courseSheet.getLastColumn()).getValues();
    return filterArrayByValAndIndex(courses, 10, 'AKTYWNY')
}


function getCourseIdByStudentIdAndCategory(studentId, category) {
    var courseIds = [];
    var studentsCoursesSheet = getCourseStudentsSheet()
    var studentsCourses = studentsCoursesSheet.getRange(2, 1, courseSheet.getLastRow(), courseSheet.getLastColumn()).getValues();
    var studentCourses = filterArrayByValAndIndex(studentsCourses, 3, studentId)
    for (c = 0; c < studentCourses.length; c++) {

        courseIds.push(studentCourses[c][2])

    }
    Logger.log(courseIds)
    Logger.log(category)
    var theCourse = getCourseByIdAndCategory(courseIds, category)
    Logger.log(theCourse)
    if (theCourse != null) {
        theCourseId = theCourse[1]
    } else {
        theCourseId = "BRAK_KURSU"

    }
    return theCourseId;
}

function test3() {
    Logger.log(getCourseIdByStudentIdAndCategory("MKD1599504387666", "B"));
}