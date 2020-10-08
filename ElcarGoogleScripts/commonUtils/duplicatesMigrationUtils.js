
function findAndUpdateStudentByNameAndSurname(name, idFrom, idTo) {
    studentSheetCopy = getSheetByIdAndName("11tom-20ZCu50E5-Gcu7TkpB-q-rOTTlexOxUmvp4CEE", "Kursanci");
    studentsArray = studentSheetCopy.getRange(2, 1, studentSheetCopy.getLastRow(), studentSheetCopy.getLastColumn()).getValues();

    for (s = 0; s < studentsArray.length; s++) {
        if (name == studentsArray[s][4] + studentsArray[s][3]) {
            if (studentsArray[s][1] != idTo) {
                Logger.log("Students - found matching name: " + name + ". Migrating id:" + idFrom + " to:" + idTo)
                studentSheetCopy.getRange(s + 2, 2).setValue(idTo);
                studentSheetCopy.getRange(s + 2, 12).setValue(idFrom);
            }

        }
    }
}

function findAndUpdateStudentCoursesById(idFrom, idTo) {
    studentCoursesSheetCopy = getSheetByIdAndName("1c8KCwl4fTV4NGBZ-UJJpytFGhaYknDnhMnpBrjVAgG4", "ListaKursowKursanta");
    studentCoursesArray = studentCoursesSheetCopy.getRange(2, 1, studentCoursesSheetCopy.getLastRow(), studentCoursesSheetCopy.getLastColumn()).getValues();

    for (k = 0; k < studentCoursesArray.length; k++) {

        if (studentCoursesArray[k][3] == idFrom) {
            Logger.log("Courses - found matching id: " + idFrom + ". Migrating id:" + idFrom + " to:" + idTo)
            studentCoursesSheetCopy.getRange(k + 2, 4).setValue(idTo);
            studentCoursesSheetCopy.getRange(k + 2, 7).setValue(idFrom);
        }
    }
}

function findAndUpdateStudentInstructorsById(idFrom, idTo) {
    studentInstructorsSheetCopy = getSheetByIdAndName("1VMdm5M7Me6G6YQT5cy1YJujhy0pT2d7y3Obpox1yp3g", "InstruktorzyKursanci");
    studentInstructorsArray = studentInstructorsSheetCopy.getRange(2, 1, studentInstructorsSheetCopy.getLastRow(), studentInstructorsSheetCopy.getLastColumn()).getValues();



    for (r = 0; r < studentInstructorsArray.length; r++) {

        if (studentInstructorsArray[r][2] == idFrom) {
            Logger.log("Instructors - found matching id: " + idFrom + ". Migrating id:" + idFrom + " to:" + idTo)
            studentInstructorsSheetCopy.getRange(r + 2, 3).setValue(idTo);
            studentInstructorsSheetCopy.getRange(r + 2, 7).setValue(idFrom);
        }
    }
}

function findAndUpdateStudentLessonsById(idFrom, idTo) {
    studentLessonsSheetCopy = getSheetByIdAndName("1uhZLwxJ1Fbi0t4s8Oz9FS6gorozv1DNLUamzSexXhkA", "Jazdy");
    studentLessonsArray = studentLessonsSheetCopy.getRange(2, 1, studentLessonsSheetCopy.getLastRow(), studentLessonsSheetCopy.getLastColumn()).getValues();


    Logger.log("Migrating Lessons");
    for (r = 0; r < studentLessonsArray.length; r++) {

        if (studentLessonsArray[r][7] == idFrom) {
            Logger.log("Lesson - found matching id: " + idFrom + ". Migrating id:" + idFrom + " to:" + idTo)
            studentLessonsSheetCopy.getRange(r + 2, 8).setValue(idTo);
            studentLessonsSheetCopy.getRange(r + 2, 13).setValue(idFrom);
        }
    }
}