
var form = FormApp.openById("14KybRPqkLjmPXlLUctSyATrw6XLSPZJMzt9cG3uSeFY")
var ss  = SpreadsheetApp.openById("1l8Wx5fAEBOtJEqcKRfkNVaNJN9C80DvNDsFOT-jkMVU").getSheetByName("Kursy")
var dodajKursantaForm = FormApp.openById("1psgv4MgZHAyRhpi3nYL17_SeW-r2AgAyc9MbffV1TbM")

function onPost(e){
var dane = [];
var responses = e.response.getItemResponses();
  var dane = responses.map(function (response){
      return response.getResponse().toString()
  });
 
  
 kursId = getKursId();
 dane.splice(0,0,kursId);
 dane.splice(0,0,new Date()); 
 dane.push(e.source.getId());
 
  ss.appendRow(dane);
  listaKursow = ss.getRange(2,2,ss.getLastRow(),2).getValues();
  var items = dodajKursantaForm.getItems();
   dropdownItemId = items[5].getId().toString();
   updateDropdown(dropdownItemId,listaKursow)


}


function getKursId(){

  ts = Math. round((new Date()). getTime() / 1000); 
  
  return "KURS"+ ts
  

}

function updateDropdown(id, kursy){
 

 item =  dodajKursantaForm.getItemById(id);

 item.asListItem().setChoiceValues(kursy);
 
}