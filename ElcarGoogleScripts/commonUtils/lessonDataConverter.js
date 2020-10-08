
function getLessonsSummarySheet() {

    var sheetId = "1IQTNy2rAJKON2Oo0mmbZCAn30w4MTDJ04utQ74ckq0A";
    var sheetName = "Jazdy";
    return courseSheet = getSheetByIdAndName(sheetId, sheetName);
}

/*function getLessonsSummarySheet(){

    var sheetId = "1PGUVUTwNtdgC2RfRAxqFwu_C2Yrh0XC9EnG_VusiF6M";
    var sheetName = "Jazdy";
    return courseSheet = getSheetByIdAndName(sheetId, sheetName);
}


function getCopyLessonsSheet(){

    var sheetId = "1uhZLwxJ1Fbi0t4s8Oz9FS6gorozv1DNLUamzSexXhkA";
    var sheetName = "Jazdy";
    return courseSheet = getSheetByIdAndName(sheetId, sheetName);
}*/

function migrateLessonsSheet() {

    //var lessonsSheet = getLessonsSheet();
    var publicLessonsSheet = getLessonsSummarySheet();

    var lessonsSheet = getLessonsSheet()
    var lessons = lessonsSheet.getRange(2, 1, lessonsSheet.getLastRow(), lessonsSheet.getLastColumn()).getValues();
    var enrichedLessons = [];
    var instructorId = "";
    var instructorName = "";
    var carId = "";
    var carName = "";
    var studentId = "";
    var studentName = "";
    var courseId = "";
    var courseName = "";
    var lastRowIndex = publicLessonsSheet.getLastRow();

    if (lastRowIndex - 1 < lessons.length - 1) {

        for (i = lastRowIndex - 1; i < lessons.length - 1; i++) {

            if (lessons[i][2] != instructorId) {
                instructorName = getInstructorNameById(lessons[i][2])
                instructorId = lessons[i][2]
            }

            if (lessons[i][3] != carId) {
                carName = getCarNameById(lessons[i][3])
                carId = lessons[i][3]
            }

            if (lessons[i][7] != studentId) {

                studentName = getStudentNameById(lessons[i][7])
                studentId = lessons[i][7]
            }

            if (lessons[i][8] != courseId) {

                if (lessons[i][8] != "BRAK_KURSU") {

                    courseName = getCourseNameById(lessons[i][8])
                } else {

                    courseName = "BRAK_KURSU";
                    MailApp.sendEmail({
                        to: "grupaelcar@gmail.com",
                        subject: "Kursant bez kursu!",
                        body: "Ta lekcja nie ma kursu: " + lessons[i][1] + " Znajdz/Dodaj kurs i popraw w arkuszach jazdy i podsumowaniu jazd."
                    });

                }

                courseId = lessons[i][8]
            }

            publicLesson = enrichLesson(lessons[i], instructorName, carName, studentName, courseName);


            addRowToSheet(publicLessonsSheet, publicLesson);

        }
        createStudentsLessonsSummaryReport();
        generateInstructorsReports();
    } else {

        Logger.log("No new records to be processed!!")

    }
}


function enrichLesson(lesson, instructorName, carName, studentName, courseName) {
    var lessonYear = lesson[4].getFullYear();
    var lessonMonth = lessonYear + "-" + (lesson[4].getMonth() + 1);
    lesson.splice(3, 0, instructorName);
    lesson.splice(5, 0, carName);
    lesson.splice(10, 0, studentName);
    lesson.splice(12, 0, courseName);
    lesson.splice(14, 2, lessonMonth);
    lesson.push(lessonYear);

    return lesson;
}