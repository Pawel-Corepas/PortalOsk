function getInstructorsStudentsSheet() {

    var sheetId = "1ydRqTHO_3qsax15M6obghzKvTwMCNRjRiewuR68VMwc";
    var sheetName = "InstruktorzyKursanci";
    return courseSheet = getSheetByIdAndName(sheetId, sheetName);

}


function getInstructorsStudentsForm() {

    var formId = "1o183GGqMAc3jOkaW9v71wkdY8R40Y1lT-6hQWxbMl8k";
    
    return studentsForm = getFormById(formId);

}

function createInstructorsStudents(e) {
    var instructorsIndexInData=3;
    var studentsIndexInData=2;
    var data = prepareSheetRow(e,"INSSTD","");
    var instructorsData = data[instructorsIndexInData];
    var instructorsId = getResourceIdFromData(instructorsData)
    var studentsData = data[studentsIndexInData];
    var studentsId = getResourceIdFromData(studentsData)
    data[instructorsIndexInData]=instructorsId;
    data[studentsIndexInData]=studentsId;
    var instructorsStudentsSheet = getInstructorsStudentsSheet()
    addRowToSheet(instructorsStudentsSheet,data);
    addNoteToLastRowCellY(instructorsIndexInData+1,getNameFromData(instructorsData),instructorsStudentsSheet );
    addNoteToLastRowCellY(studentsIndexInData+1,getNameFromData(studentsData),instructorsStudentsSheet );
    sendStudentInstructorAssignedEmail(studentsId,instructorsId,data[4]);
    updateStudentStatusById(studentsId, 'NA_JAZDACH');
    updateStudents()
    refreshInstuctorsForms();
    
}

function getResourceIdFromData (resourceObject){
   return resourceId = resourceObject.split('|')[1].trim();

}

function getNameFromData (resourceObject){
    return resourceName = resourceObject.split('|')[0].trim();
    
}

function updateInstuctorsStudentsFormInstructors(instructors){
    var instuctorsItemIndex=1;
    var formItems = getInstructorsStudentsForm().getItems();
    var _instructors = mapArrayToNewArray(instructors, 1,3,4);
    updateFormDropdown (getInstructorsStudentsForm(),formItems[instuctorsItemIndex].getId().toString(),_instructors)
}

function updateInstuctorsStudentsFormStudents(students){
  //var emptyStudents = [["Brak", "Kursantow", "Na", "Kursie"]]
    Logger.log(students);
    var studentsItemIndex=0;
    var formItems = getInstructorsStudentsForm().getItems();
    var filteredStudents = filterArrayByValAndIndex(students, 9, 'NA_KURSIE')
    var _students = mapArrayToNewArray(filteredStudents, 1,3,4);
    
  if (_students.length > 0) {
  updateFormDropdown (getInstructorsStudentsForm(),formItems[studentsItemIndex].getId().toString(),_students)
}else {
   updateFormDropdown (getInstructorsStudentsForm(),formItems[studentsItemIndex].getId().toString(),[[""]])
  }
  
}

function getStudentsByInstuctorId(instructorId){
  var sheet = getInstructorsStudentsSheet();
  var instructorsStudents = sheet.getRange(2,1,courseSheet.getLastRow(),courseSheet.getLastColumn()).getValues();
  var instructorsStudentsFiltered = filterArrayByValAndIndex(instructorsStudents,3,instructorId);
  var studentsSheet = getStudentsSheet();
  var students = studentsSheet.getRange(2,1,courseSheet.getLastRow(),courseSheet.getLastColumn()).getValues();
  var studentsList = instructorsStudentsFiltered.map(
    function (student) {
      return filterArrayByValAndIndex(students,1,student[2])[0]
    }
  );
  if (studentsList.length) {
    
  }
    return filterArrayByValAndIndex(studentsList, 9, 'NA_JAZDACH')

  
}

function test2(){
  sendStudentInstructorAssignedEmail( "STD1600694876076","INS1598287271")
}



function sendStudentInstructorAssignedEmail(studentId,instructorId, message) {

  var studentData = getStudentById(studentId);
  var instructorData = getInstructorById(instructorId);
  
  
  sendStudentInstructorAssignedHtmlEmail(studentData,instructorData, message )
  
}