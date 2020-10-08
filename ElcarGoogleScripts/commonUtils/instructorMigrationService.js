
function testFiles() {
    fileNames = [];

    var files = DriveApp.getFolderById("1yOm467o6M9nnHtmkqkYHUh1IFnJNX1VS").getFiles();
    var processingDir = DriveApp.getFolderById("1yOm467o6M9nnHtmkqkYHUh1IFnJNX1VS");
    var completedDir = DriveApp.getFolderById("17vKkfpW2audP88n7OLAbXDYD8vUSfoiG");
    while (files.hasNext()) {
        var fileData = [];
        var file = files.next();

        if (file.getName().includes('-')) {

            fileData.push(file.getId());
            fileData.push(file.getName());
            fileNames.push(fileData)


        }

        /* 
        }
          
           
          */

    }

    //Logger.log(JSON.stringify(fileNames));
    var instructors = getInstructors();

    for (i = 14; i < 15; i++) {

        var instructor = instructors[i]
        Logger.log(instructor[4])
        var instructorFiles = fileNames.filter(function (file) {

            return file[1].includes(instructor[4].toString());



        })
        Logger.log(instructorFiles)
        if (instructorFiles.length > 0) {
            for (k = 0; k < instructorFiles.length; k++) {
                Logger.log("ProcessingInstructorsFile:" + instructorFiles[k] + " for: " + instructor[1])
                // DriveApp.getFileById(instructorFiles[k][0]).makeCopy(processingDir);
                migrateInstructorSpreadsheet(instructorFiles[k][0], instructor[1], instructorFiles[k][1].replace('Kopia ', ''), "M" + instructor[3].substr(0, 1) + instructor[4].substr(0, 1));
                DriveApp.getFileById(instructorFiles[k][0]).moveTo(completedDir);
                Logger.log("Completed Processing of File:" + instructorFiles[k])

            }
        }

    }
}


function migrateInstructorSpreadsheet(instructorSheetId, instructorId, tag, idPrefix) {
    //migrateInstructorSpreadsheet(instructorSheetId, instructorId, tag) {

    //var courseSheet = getCourseSheet();
    //var studentsSheet = getStudentsSheet();
    //var studentsCourseSheet = getCourseStudentsSheet();
    //var studentsInstructorsSheet = getInstructorsStudentsSheet();
    //var lessonsSheet = getLessonsSheet();
    var sourceStudentsSheet = getSheetByIdAndName(instructorSheetId, "Kursanci");
    var students = getResources(sourceStudentsSheet)
    var instructorId = instructorId;
    var instructorCourses = []
    var courses = getCoursesFromSheetName(tag);

    for (c = 0; c < courses.length; c++) {
        instructorCourses = migrateCourse(tag, courses[c], idPrefix, instructorCourses);
    }
    var instructorStudents = migrateStudents(students, tag, idPrefix, instructorCourses, instructorId);

    //Step 1 - Migrate Course and create name as tagged
    // var instructorCourses =  migrateCourse(courseSheet,tag)
    //var instructorCourses= migrateCourse("Migracja Edek Chrostowski C - 2019", "C", "MEC");
    //var migrateCourse("Migracja Edek Chrostowski CE - 2019", "CE", "MEC");
    //Step 3 - Assign Students to Migrated Courses

    //assignStudentsCourses(students,instructorStudents, instructorCourses, "Migracja Edek Chrostowski C - 2019")

    //Logger.log(instructorCourses);
    //Logger.log(instructorStudents)

}


function getResources(resourcesSheet) {

    return resources = resourcesSheet.getRange(2, 1, resourcesSheet.getLastRow(), resourcesSheet.getLastColumn()).getValues();

}

function getCoursesFromSheetName(name) {
    courses = [];
    var words = name.split(" ");

    for (i = 0; i < words.length; i++) {

        switch (words[i]) {
            case 'A':
                courses.push('A');
                break;
            case 'B':
                courses.push('B');
                break;
            case 'C':
                courses.push('C');
                break;
            case 'C+E':
                courses.push('CE');
                break;
            case 'C,':
                courses.push('C');
                break;
            case 'D':
                courses.push('D');
                break;
            case 'AM':
                courses.push('AM');
                break;
            case 'A1':
                courses.push('A1');
                break;
            case 'A2':
                courses.push('A2');
                break;
            default:

        }

    }

    return courses

}

function testgetCoursesFromSheetName() {
    getCoursesFromSheetName("Migracja Edek Chrostowski C, C+E - 2019")
}
function migrateCourse(tag, category, abrv, instructorCourses) {
    initCourse = buildInitCourseResource(tag, 0, category, 30, new Date(), "", tag);
    enrichedCourse = prepareSheetRowForMigration(initCourse, tag, abrv);
    instructorCourses.push(enrichedCourse);
    addRowToSheet(getCourseSheet(), enrichedCourse);

    return instructorCourses;
}


function buildInitCourseResource(name, price, category, numberOfHours, startDate, endDate, additionalInfo) {
    var course = [];
    course.push(name);
    course.push(price);
    course.push(category);
    course.push(numberOfHours);
    course.push(startDate.toISOString().substr(0, 10));
    course.push(endDate);
    course.push(additionalInfo);

    return course

}



function migrateStudents(students, tag, abrv, courses, instructorId) {
    var studentName = "1";
    var category = "1";
    var studentId = "";
    var instructorStudents = [];
    //Logger.log(courses)

    for (i = 0; i < students.length; i++) {
        testNameCatStr = students[i][0] + students[i][1];
        testcategory = students[i][3];

        if (testNameCatStr == "" || (testNameCatStr == studentName && testcategory != category)) {

        } else {
            initStudent = buildInitStudentResource("", students[i][0], students[i][1], "", "", "", tag)
            enrichedStudent = prepareSheetRowForMigration(initStudent, tag, abrv);
            addRowToSheet(getStudentsSheet(), enrichedStudent);
            instructorStudents.push(enrichedStudent)
            studentId = enrichedStudent[1];
            studentName = testNameCatStr;
            category = testcategory;
            assignInstructor(studentId, instructorId, tag)
        }
        if (testNameCatStr != "") {

            courseId = filterArrayByValAndIndex(courses, 4, students[i][3].replace("+", ""))[0][1]
            assignStudentsCourses(courseId, studentId, tag)

        }

    }
    return instructorStudents
}


function buildInitStudentResource(email, name, surname, pesel, mobile, courseId, additionalInfo) {
    var student = [];
    student.push(email);
    student.push(name);
    student.push(surname);
    student.push(pesel);
    student.push(mobile);
    student.push(courseId);
    student.push(additionalInfo);

    return student

}

function assignStudentsCourses(courseId, studentId, tag) {

    studentCourseInit = buildInitStudentCourseResource(courseId, studentId)
    enrichedstudentCourse = prepareSheetRowForMigration(studentCourseInit, tag, "KRSSTD");
    addRowToSheet(getCourseStudentsSheet(), enrichedstudentCourse);

}

function assignInstructor(studentId, instructorId, tag) {

    studentInstructorInit = buildInitStudentInstructorResource(studentId, instructorId)
    enrichedStudentInstructor = prepareSheetRowForMigration(studentInstructorInit, tag, "INSSTD");
    addRowToSheet(getInstructorsStudentsSheet(), enrichedStudentInstructor);

}

function migrateLessons() {

    var instructorId = "INS1598431183";
    var sourceLessonsSheet = getSheetByIdAndName("18ViafRDTkk0-yDs6K4pbjOJd-Uu202DB5XYfpRjb2Hs", "2020");
    var lessons = getResources(sourceLessonsSheet)

    newLessons = lessons.filter(function (lesson) {

        return lesson[2] == 1;
    });

    newerLessons = newLessons.map(function (item) {
        item[5] = item[3].replace(" ", "").split("-")[0]
        item[6] = item[3].replace(" ", "").split("-")[1].replace("+", "")
        return item
    });
    Logger.log(newerLessons);
    Logger.log(getStudentIdByNameAndSurname(newerLessons[5]));

}

function createLessonForMigration(lesson, instructorId, carId, tag) {
    lessonInit = buildInitLessonResource(lessonDate, startTime, duration, studentId, courseId)
    enrichedLesson = prepareSheetRowForLessonMigration(studentInstructorInit, tag, "LSN", instructorId, carId)
    addRowToSheet(getLessonsSheet(), enrichedLesson);
}


function buildInitStudentInstructorResource(studentId, instructorId) {
    var studentInstructor = [];
    studentInstructor.push(studentId);
    studentInstructor.push(instructorId);

    return studentInstructor

}


function buildInitLessonResource(lessonDate, startTime, duration, studentId, courseId) {
    var lesson = [];
    lesson.push(studentId);
    lesson.push(instructorId);

    return lesson

}




function buildInitStudentCourseResource(courseId, studentId) {
    var studentCourse = [];
    studentCourse.push(courseId);
    studentCourse.push(studentId);

    return studentCourse

}



