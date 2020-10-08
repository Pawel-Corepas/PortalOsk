
function getInstructorsSheet() {

    var sheetId = "1khLTNOXgWZZ6CS7blYMlWFdegJmvlOp3dsQ8G2NT0Po";
    var sheetName = "Instruktorzy";
    return courseSheet = getSheetByIdAndName(sheetId, sheetName);

}

function getInstructorsForm() {

    var formId = "1vkFW8-feq6urbpHpQo12Cfo9CJASDLvlC3N5tNm_tGU";

    return studentsForm = getFormById(formId);

}


function createInstructor(e) {
    var data = prepareSheetRow(e, "INS");
    var instructorsSheet = getInstructorsSheet()
    createAddLessonForm(data, instructorsSheet);


}

function updateInstructors() {
    var instructorsSheet = getInstructorsSheet();
    var instructors = instructorsSheet.getRange(2, 1, instructorsSheet.getLastRow(), 7).getValues();
    //updateStudentsFormInstructors(instructors);
    updateInstuctorsStudentsFormInstructors(instructors);
}


function updateInstructorFormCars(instructors) {
    var instructorsItemIndex = 6;
    var formItems = getInstructorsForm().getItems();
    updateFormCheckBox(getInstructorsForm(), formItems[instructorsItemIndex].getId().toString(), instructors)
}

function updateCarsUsed() {
    var cars = getCars();
    var _cars = mapArrayToNewArray(cars, 2, 4, 1)
    updateInstructorFormCars(_cars)

}

function createAddLessonForm(instructor, instructorsSheet) {

    var instructorId = instructor[1];
    var instructorName = instructor[3];
    var instructorSurname = instructor[4];

    var formName = "Dodawanie Jazd | " + instructorName + " " + instructorSurname;

    var form = FormApp.create(formName);
    form.setDescription("Ten formularz służy do rejestrowania jazd przez instruktora. W razie błędnego dodania jazdy należy skontaktować się z biurem w celu usuniecia wpisu.")
    form.addDateItem()
        .setTitle('Data')
        .setRequired(true);
    form.addTimeItem()
        .setTitle('Godzina')
        .setRequired(true);
    form.addListItem()
        .setTitle('Długość Jazdy')
        .setRequired(true)
        .setChoiceValues(['00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00']);
    form.addListItem()
        .setTitle('Kursant')
        .setRequired(true);
    form.addListItem()
        .setTitle('Kurs')
        .setRequired(false)
    form.addTextItem()
        .setTitle('Dodatkowe informacje')
        .setRequired(false);

    //GmailApp.sendEmail('skorniewski.pawel@gmail.com', 'Formularz Dodawania Jazd',form.getPublishedUrl() )

    instructor.push(form.getId());
    instructor.push(form.getPublishedUrl());
    instructor.push(form.getEditUrl());
    addRowToSheet(instructorsSheet, instructor);
    updateInstructors();
}


function getInstructorNameById(instructorId) {
    var instructorsSheet = getInstructorsSheet();
    var instructors = instructorsSheet.getRange(2, 1, instructorsSheet.getLastRow(), 7).getValues();
    var instructor = filterArrayByValAndIndex(instructors, 1, instructorId)[0];

    return instructorData = instructor[3] + " " + instructor[4];
}


function getInstructorById(instructorId) {
    var instructorsSheet = getInstructorsSheet();
    var instructors = instructorsSheet.getRange(2, 1, instructorsSheet.getLastRow(), 7).getValues();
    var instructor = filterArrayByValAndIndex(instructors, 1, instructorId)[0];

    return instructor;
}


function getInstructors() {
    var instructorsSheet = getInstructorsSheet();

    return instructors = instructorsSheet.getRange(2, 1, instructorsSheet.getLastRow(), 7).getValues();


}




