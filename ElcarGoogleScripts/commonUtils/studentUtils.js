function test() {
    ss = SpreadsheetApp.openById("11tom-20ZCu50E5-Gcu7TkpB-q-rOTTlexOxUmvp4CEE").getSheetName("Kursanci");
}




function getStudentsSheet() {

    var sheetId = "10vs0QjYCn8_jQ4pZNc7oMb4eX-_ZJkNCaUaGIdColUQ";
    var sheetName = "Kursanci";
    return courseSheet = getSheetByIdAndName(sheetId, sheetName);

}

function getStudents() {
    var studentsSheet = getStudentsSheet();
    return students = studentsSheet.getRange(2, 1, studentsSheet.getLastRow(), studentsSheet.getLastColumn()).getValues();


}



function getStudentsSheetTmp() {

    var sheetId = "10vs0QjYCn8_jQ4pZNc7oMb4eX-_ZJkNCaUaGIdColUQ";
    var sheetName = "AnalizaDuplikatow";
    return courseSheet = getSheetByIdAndName(sheetId, sheetName);

}

function getDuplicatedStudents() {
    var allStudentsSheet = getStudentsSheetTmp();
    var students = allStudentsSheet.getRange(2, 1, allStudentsSheet.getLastRow(), allStudentsSheet.getLastColumn()).getValues();
    var studentsWithoutDuplicates = []

    tempIndex = 0;
    for (i = 0; i < students.length; i++) {

        //  Logger.log(students[i][0].includes("–"))
        if ((students[i][0].includes("–"))) {
            tempIndex = 0;
            //    Logger.log("tu jestem")
        } else {
            //  Logger.log("tu jestem else")
            if (students[i][0].trim().length > 0 && tempIndex == 0) {
                studentsWithoutDuplicates.push(students[i]);
                //   Logger.log("tu jestem else if true")
            }
            else {
                //  Logger.log("tu jestem else if false")
                studentsWithoutDuplicates[studentsWithoutDuplicates.length - 1].push(students[i][1]);
                tempIndex = tempIndex + 1;

            }


        }
        //Logger.log(i);
        //Logger.log(students[i])
        //Logger.log(studentsWithoutDuplicates);
    }
    return studentsWithoutDuplicates
}

function migrateDuplicateIds() {

    students = getDuplicatedStudents();
    Logger.log(students.length);



    for (i = 1230; i < students.length; i++) {
        Logger.log("i=" + i)
        studentConcatName = students[i][0]
        studentId = students[i][1]
        numberOfDuplicates = students.length - 2;
        students[i].shift();
        students[i].shift();
        if (numberOfDuplicates > 0) {
            Logger.log(students[i].length);
            for (y = 0; y < students[i].length; y++) {
                Logger.log("y=" + y)
                Logger.log("Migrating " + students[i][y] + ". Will update to:" + studentId);
                findAndUpdateStudentByNameAndSurname(studentConcatName, students[i][y], studentId);
                findAndUpdateStudentCoursesById(students[i][y], studentId);
                findAndUpdateStudentInstructorsById(students[i][y], studentId);
                findAndUpdateStudentLessonsById(students[i][y], studentId);
            }

        }


    }


}



function getStudentsForm() {

    var formId = "1psgv4MgZHAyRhpi3nYL17_SeW-r2AgAyc9MbffV1TbM";

    return studentsForm = getFormById(formId);

}

function updateStudents() {
    var students = getStudents()
    updateCoursesStudentsFormStudents(students);
    updateInstuctorsStudentsFormStudents(students);
    updatePaymentsFormStudents(students);


}

function updateStudentsFormInstructors(instructors) {
    var coursesItemIndex = 6;
    var formItems = getStudentsForm().getItems();
    var _instructors = mapArrayToNewArray(instructors, 1, 3, 4);
    updateFormDropdown(getStudentsForm(), formItems[coursesItemIndex].getId().toString(), _instructors)
}

function createStudent(e) {
    var data = prepareSheetRow(e, "STD", 'NOWY');
    var studentsSheet = getStudentsSheet()
    addRowToSheet(studentsSheet, data);
    updateStudents();
}


function getStudentNameById(studentId) {
    var students = getStudents();
    var student = filterArrayByValAndIndex(students, 1, studentId)[0];

    return studentData = student[3] + " " + student[4]
}

function getStudentById(studentId) {
    var students = getStudents();
    var student = filterArrayByValAndIndex(students, 1, studentId)[0];

    return student
}

function getCopyStudentsSheet() {

    var sheetId = "11tom-20ZCu50E5-Gcu7TkpB-q-rOTTlexOxUmvp4CEE";
    var sheetName = "Kursanci";
    return courseSheet = getSheetByIdAndName(sheetId, sheetName);
}


function getCopyStudentNameById(studentId) {
    var studentsSheet = getCopyStudentsSheet();
    var students = studentsSheet.getRange(2, 1, studentsSheet.getLastRow(), 7).getValues();
    var student = filterArrayByValAndIndex(students, 1, studentId)[0];

    return studentData = student[3] + " " + student[4]
}

function getStudentIdByNameAndSurname(namesurname) {
    var studentsSheet = getStudentsSheet();
    var students = studentsSheet.getRange(2, 1, studentsSheet.getLastRow(), 7).getValues();

    var studentTmp = students.map(function (item) {

        item[0] = item[3] + item[4]

        return item;
    });
    var student = filterArrayByValAndIndex(studentTmp, 0, namesurname)
    if (student.length > 1) {
        return "NoUniqueValueFound"
    }
    return studentData = student[0]
}


function getCourseIdFromStudentCourse(course) {

    return courseId = course.split('|')[1].trim();

}

function getCourseNameFromStudentCourse(course) {
    return courseName = course.split('|')[0].trim();
}


function getInstructorIdFromStudentInstructor(instructor) {
    return instructorId = instructor.split('|')[1].trim();

}

function getInstructorNameFromStudentInstructor(instructor) {
    return instructorName = instructor.split('|')[0].trim();
}


function updateStudentStatusById(studentId, status) {
    Logger.log("Updating student:" + studentId + " to status:" + status);
    var students = getStudents();
    var studentRow = getIndexForUpdate(students, 1, studentId) + 2;
    studentsSheet = getStudentsSheet();
    studentsSheet.getRange(studentRow, 10).setValue(status);
}