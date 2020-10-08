function getInstructorAddLessonFormByFormId(formId) {
    
    return addLessonFormForInstructor = getFormById(formId);

}

function updateInstructorLessonAddForm(instructorsId){
   
  var instructorForm = getInstructorAddLessonFormByFormId(getInstructorFormId(instructorsId));
  var instructorStudents = getStudentsByInstuctorId(instructorsId);
  updateInstructorAddLessonStudents(instructorForm,instructorStudents);
  //var activeCourses = getCoursesByInstructorId(instructorStudents, instructorsId)
  //updateInstructorAddLessonCourses(instructorForm,activeCourses);
  
};

function getInstructorFormId(instructorId){

  var sheet = getInstructorsSheet();
  var instructors = sheet.getRange(2,1,sheet.getLastRow(), sheet.getLastColumn()).getValues();
  var instructorsFiltered = filterArrayByValAndIndex(instructors, 1, instructorId)
  var instructor = instructorsFiltered[0]
  
  return formId = instructor[10];
}

function refreshInstuctorsForms(){
  
  var instructorsSheet = getInstructorsSheet();
  var instructors = instructorsSheet.getRange(2,1,courseSheet.getLastRow(),courseSheet.getLastColumn()).getValues();
  Logger.log("Updating Instructors: " +instructors.length);
  for (i=0;i<instructors.length-1;i++){
     instructorId = instructors[i][1]
     Logger.log("Updating Add Lesson Form for: "  + instructorId);
     updateInstructorLessonAddForm(instructorId)
  }
}

function updateInstructorAddLessonStudents(form,students){
  Logger.log("updating students list on instructor add lesson form. Students number is: " +students.length);
   var studentsItemIndex=3;
   var formItems = form.getItems();

  if (students.length >0 ){
    var _students = mapArrayToNewArray(students, 1,3,4); //zmieniłem przy grześku
    updateFormDropdown (form,formItems[studentsItemIndex].getId().toString(),_students)
  } else {
    Logger.log("No students to update");
    updateFormDropdown (form,formItems[studentsItemIndex].getId().toString(),[[""]])
  }
}

function updateInstructorAddLessonCourses(form,courses){
  
  Logger.log("updating courses list on instructor add lesson form. Courses number is: " +courses.length);
   var courseItemIndex=4;
    var formItems = form.getItems();
  if (courses.length >0 ){
   
    var _courses = mapArrayToNewArray(courses, 1,2,4);
    updateFormDropdown (form,formItems[courseItemIndex].getId().toString(),_courses)
} else {
    Logger.log("No courses to update");
    updateFormDropdown (form,formItems[courseItemIndex].getId().toString(),[[""]])
  }
}




