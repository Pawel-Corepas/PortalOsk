function getCourseSheet() {

        var sheetId = "1l8Wx5fAEBOtJEqcKRfkNVaNJN9C80DvNDsFOT-jkMVU";
        var sheetName = "Kursy";
       
        return courseSheet = getSheetByIdAndName(sheetId, sheetName);
    
    }
    
    
    function createCourse(e) {
            var dane = prepareSheetRow(e,"KRS");
            var courseSheet = getCourseSheet()
            dane[2] = "'" + dane[2];
            addRowToSheet(courseSheet,dane);
            updateCourses();
            
    }
    
    function updateCourses() {
            var courseSheet = getCourseSheet();
            var courses = courseSheet.getRange(2,1,courseSheet.getLastRow(),courseSheet.getLastColumn()).getValues();
            //updateStudentsFormCourses(courses);
            updatePaymentsFormCourses(courses);
            updateCoursesStudentsFormCourses(courses)
    }
    
    
    function getCourseNameById(courseId) {
      var courseSheet = getCourseSheet();
      var courses = courseSheet.getRange(2,1,courseSheet.getLastRow(),7).getValues();
      var course = filterArrayByValAndIndex(courses,1,courseId)[0];  
      
     return courseData = course[2] +" - "+ course[4]
    }
    
    function getCourseByIdAndCategory(coursesIds,category) {
      var courseSheet = getCourseSheet();
      var courses = courseSheet.getRange(2,1,courseSheet.getLastRow(),7).getValues();
    
      var coursesFiltered = coursesIds.map(
        function (courseId) {
          return filterArrayByValAndIndex(courses,1,courseId)[0]
        }
      );
      Logger.log("coursesFiltered");
      Logger.log(coursesFiltered);
     return coursesToSet = filterArrayByValAndIndexArray(coursesFiltered,4,category)[0]
    }