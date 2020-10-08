
function sendStudentInstructorAssignedHtmlEmail(student, instructor, addMessage) {
    var templForInstructor = HtmlService
        .createTemplateFromFile('emailToInstructorForAssignedStudent');
    Logger.log(student);
    Logger.log(addMessage);
    templForInstructor.student = student;
    templForInstructor.additionalMessage = addMessage;
    templForInstructor.instructor = instructor;

    var message = templForInstructor.evaluate().getContent();

    MailApp.sendEmail({
        to: instructor[2],
        subject: "Masz nowego kursanta!",
        htmlBody: message
    });


}