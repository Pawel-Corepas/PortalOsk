function getSheetByIdAndName(sheetId, sheetName) {

    return courseSheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);

}


function getFormById(formId){
    return form = FormApp.openById(formId);
}

function addRowToSheet(sheet, dane) {

    sheet.appendRow(dane);
}

function prepareSheetRow(formPostedResponses, resource) {

    var sourceId = formPostedResponses.source.getId()
    var data = [];
    var responses = formPostedResponses.response.getItemResponses();
    var data = responses.map(function (response) {
        return response.getResponse().toString()
    });

    var enrichedData = enrichData(data, resource, sourceId);

    return enrichedData;
}

function enrichData(data, resource, sourceId) {

    data.splice(0, 0, getResourceId(resource));
    data.splice(0, 0, new Date());
    data.push(sourceId);

    return data;

};

function getResourceId(resource){

    timastamp = Math. round((new Date()). getTime() / 1000); 
  
  return resource+ timastamp

}


function updateFormDropdown(form, id, listItems){
 

    item =  form.getItemById(id);
   
    item.asListItem().setChoiceValues(listItems);
    
   }