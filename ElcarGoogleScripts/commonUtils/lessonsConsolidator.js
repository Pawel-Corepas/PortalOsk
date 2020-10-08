function getLessonsSourceSheet() {

    var sheetId = "1PGUVUTwNtdgC2RfRAxqFwu_C2Yrh0XC9EnG_VusiF6M";
    var sheetName = "Jazdy2";
    return courseSheet = getSheetByIdAndName(sheetId, sheetName);

}


function getLessonsTargetSheet() {

    var sheetId = "1PGUVUTwNtdgC2RfRAxqFwu_C2Yrh0XC9EnG_VusiF6M";
    var sheetName = "JazdyConsolidated";
    return courseSheet = getSheetByIdAndName(sheetId, sheetName);
}


function consolidate() {
    var sourceSheet = getLessonsSourceSheet();
    var targetSheet = getLessonsTargetSheet();

    srcLnss = sourceSheet.getRange(2, 1, sourceSheet.getLastRow(), sourceSheet.getLastColumn()).getValues();

    var instructorId = "";
    var lessonDate = "";
    var studentId = "";
    var courseId = "";
    var duration = 0;

    lessons = [];

    for (i = 0; i < 20; i++) {


        //Logger.log(srcLnss[i][2] == instructorId)
        //Logger.log(srcLnss[i][6].getDate() == lessonDate)
        //Logger.log(srcLnss[i][9] == studentId)
        //Logger.log(srcLnss[i][11] == courseId)
        if (srcLnss[i][2] == instructorId && srcLnss[i][6].getDate() == lessonDate && srcLnss[i][9] == studentId && srcLnss[i][11] == courseId) {

            duration = duration + getDuration(srcLnss[i][8])
            // Logger.log("dodaj")
            instructorId = srcLnss[i][2];
            lessonDate = srcLnss[i][6].getDate();
            studentId = srcLnss[i][9];
            courseId = srcLnss[i][11];
            Logger.log(duration)

        } else {
            if (instructorId != "") {
                y = i - 1
                data = srcLnss[y];
                data[8] = duration;
                addRowToSheet(targetSheet, data);
                lessons.push(data)
                // Logger.log("dodajLinie")
                instructorId = srcLnss[i][2];
                lessonDate = srcLnss[i][6].getDate();
                studentId = srcLnss[i][9];
                courseId = srcLnss[i][11];
                duration = getDuration(srcLnss[i][8]);

            } else {

                duration = duration + getDuration(srcLnss[i][8])
                // Logger.log("dodaj")
                instructorId = srcLnss[i][2];
                lessonDate = srcLnss[i][6].getDate();
                studentId = srcLnss[i][9];
                courseId = srcLnss[i][11];


            }
        }


    }

}

function getDuration(time) {

    switch (time) {
        case '0:30:00':
            return 0.5;
        case '1:00:00':
            return 1;
        case '1:30:00':
            return 1.5;
        case '2:00:00':
            return 2;
        case '2:30:00':
            return 2.5;
        case '3:00:00':
            return 3;
        case '3:30:00':
            return 3.5;
        case '4:00:00':
            return 4;
        case '4:30:00':
            return 4.5;
        case '5:00:00':
            return 5;
        default:
            console.log(time.getTime());
    }
}