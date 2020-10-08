


function createNewForm(instructor) {
    var instructorsSheet = SpreadsheetApp.openById('1OjEBYhE5CQr0nbnO6dnHvyiIwwkLB-xqq6uzmGymsG4').getSheetByName('Instruktorzy');
    var instructor = instructorsSheet.getRange(2, 1, instructorsSheet.getLastRow(), instructorsSheet.getLastColumn());
      //[Sat Aug 01 23:01:42 GMT+02:00 2020, INSTR1596315702, skorniewski.pawel@gmail.com, Paweł, Skórniewski, 6.07584698E8, B,C,CE, ERA 31145, 1vkFW8-feq6urbpHpQo12Cfo9CJASDLvlC3N5tNm_tGU]
    instructorObject = instructor.getValues()[0];
      
    var instructorId =   instructorObject[1];  
    var instructorName = instructorObject[3];
    var instructorSurname = instructorObject[4];
      
    var formName = "Dodawanie Jazdy";
      
    
    Logger.log(formName);
      
    var form = FormApp.create(formName);
      form.setDescription(instructorName +" "+instructorSurname+" ("+ instructorId + ")")
      form.addDateItem()
      .setTitle('Data')
      .setRequired(true);
      form.addTimeItem()
      .setTitle('Godzina')
      .setRequired(true);
      form.addListItem()
      .setTitle('Długość Jazdy')
      .setRequired(true)
      .setChoiceValues(['00:30','01:00','01:30','02:00','02:30','03:00','03:30','04:00']);
      form.addListItem()
      .setTitle('Kursant')
      .setRequired(true)
      .setChoiceValues(getStudentsByInstructorId());
      form.addListItem()
      .setTitle('Kurs')
      .setRequired(false)
      .setChoiceValues(getActiveCourses());
      form.addTextItem()
      .setTitle('Dodatkowe informacje')
      .setRequired(false);
      
      ScriptApp.newTrigger('onFormSubmit')
        .forForm(form)
        .onFormSubmit(onPost())
        .create(); 
    
    Logger.log(form.getId())                    
    Logger.log('Published URL: ' + form.getPublishedUrl());
    Logger.log('Editor URL: ' + form.getEditUrl());
      
      GmailApp.sendEmail('skorniewski.pawel@gmail.com', 'Formularz Dodawania Jazd',form.getPublishedUrl() )
    
    }
    
    function getStudentsByInstructorId(){
    var ss = SpreadsheetApp.openById("10vs0QjYCn8_jQ4pZNc7oMb4eX-_ZJkNCaUaGIdColUQ").getSheetByName('Kursanci');
    kursanci = ss.getRange(2,2,ss.getLastRow(),4).getValues();
    nowiKursanci =   kursanci.map(function (kursantObject){
    
      return processKursantObject(kursantObject)
      });
    
    return nowiKursanci;
    };
    
    
    function processKursantObject(kursant){
     kursantId = kursant[0];
     kursantName = kursant[2];
     kursantSurname = kursant[3];
      
      return kursantName + " " + kursantSurname + " - " + kursantId;
     
      
    }
    
    function getActiveCourses(){
    var ss  = SpreadsheetApp.openById("1l8Wx5fAEBOtJEqcKRfkNVaNJN9C80DvNDsFOT-jkMVU").getSheetByName("Kursy")
    listaKursow = ss.getRange(2,2,ss.getLastRow(),2).getValues();
      return listaKursow;
    
    };
    
    