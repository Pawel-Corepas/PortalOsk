function getSheetByIdAndName(sheetId, sheetName) {

    return courseSheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);

}

function getSpreadsheetbyId(id) {

    return sheet = SpreadsheetApp.openById(id)
}

function getFormById(formId) {
    return form = FormApp.openById(formId);
}

function addRowToSheet(sheet, dane) {
    sheet.appendRow(dane);

}

function prepareSheetRow(formPostedResponses, resource, status) {

    var sourceId = formPostedResponses.source.getId()
    var data = [];
    var responses = formPostedResponses.response.getItemResponses();
    var data = responses.map(function (response) {
        return response.getResponse().toString()
    });
    Logger.log(data);
    var enrichedData = enrichData(data, resource, sourceId, status);

    return enrichedData;
}

function prepareSheetRowForMigration(data, tag, resource) {

    var sourceId = tag;
    var data = data
    //Logger.log(data);
    var enrichedData = enrichData(data, resource, sourceId);

    return enrichedData;
}

function prepareSheetRowForLessonMigration(data, tag, resource, instructorId, carId) {

    var enrichedData = enrichDataForLessonMigration(data, resource, tag, instructorId, carId);

    return enrichedData;
}


function prepareSheetRowForLesson(formPostedResponses, resource, instructorId) {

    var sourceId = formPostedResponses.source.getId()
    var data = [];
    var responses = formPostedResponses.response.getItemResponses();
    var data = responses.map(function (response) {
        return response.getResponse().toString()
    });

    var enrichedData = enrichDataForLesson(data, resource, sourceId, instructorId);
    Logger.log(enrichedData);
    return enrichedData;
}


function enrichData(data, resource, sourceId, status) {

    data.splice(0, 0, getResourceId(resource));
    data.splice(0, 0, new Date());
    data.push(sourceId);
    data.push(status);
    return data;

};

function enrichDataForLesson(data, resource, sourceId, instructorId) {

    data.splice(0, 0, "");
    data.splice(0, 0, instructorId);
    data.splice(0, 0, getResourceId(resource));
    data.splice(0, 0, new Date());
    data.push(sourceId);

    return data;

};

function enrichDataForLessonMigration(data, resource, tag, instructorId, carId) {

    data.splice(0, 0, carId);
    data.splice(0, 0, instructorId);
    data.splice(0, 0, getResourceId(resource));
    data.splice(0, 0, new Date());
    data.push(tag);

    return data;

};

function getResourceId(resource) {

    timastamp = new Date().getTime() + new Date().getMilliseconds();

    return resource + timastamp

}


function updateFormDropdown(form, id, listItems) {


    item = form.getItemById(id);

    item.asListItem().setChoiceValues(listItems);

}

function updateFormCheckBox(form, id, listItems) {
    item = form.getItemById(id);
    item.asCheckboxItem().setChoiceValues(listItems)
}


function addNoteToLastRowCellY(columnIndex, noteText, sheet) {
    var lastRow = sheet.getLastRow();
    var cell = sheet.getRange(lastRow, columnIndex)
    cell.setNote(noteText)
}

function filterArrayByValAndIndex(arrayObject, index, value) {

    return arrayObject.filter(function (objectVal) {
        return objectVal[index] == value;
    });
}

function filterArrayByValAndIndexArray(arrayObject, index, value) {

    tempArray = arrayObject.map(function (thisObject) {

        testArray = Array.isArray(thisObject[index]);
        if (testArray) {
        } else {

            tmpVal = thisObject[index].split(',');
            thisObject[index] = tmpVal;
        }

        return thisObject;
    })
    Logger.log(tempArray)
    newArrayObject = []

    for (d = 0; d < tempArray.length; d++) {

        if (tempArray[d][index].length < 2) {
            return tempArray.filter(function (objectVal) {
                return objectVal[index] == value;
                Logger.log('tutaj <2')
            });

        }

        else {
            Logger.log('tutaj >2')
            newArr = tempArray[d][index];
            Logger.log(newArr);
            for (f = 0; f < newArr.length; f++) {
                tempArray[d][index] = newArr[f]
                newArrayObject.push(tempArray[d])
                if (tempArray[d][index] == value) {

                    return newArrayObject;
                }

            }
            Logger.log(newArrayObject)
            return newArrayObject.filter(function (objectVal) {
                return objectVal[index] == value;

            });

        }


    }

};


function filterArrayByValAndIndexMulti(arrayObject, index, values) {

    return arrayObject.filter(function (objectVal) {
        return values.indexOf(objectVal[index]) != -1;
    });
}

function mapArrayToNewArray(arrayObject, idIndex, nameIndex, surnameIndex) {

    newArrayObject = arrayObject.map(function (objectItem) {
        return processObjectItem(objectItem, idIndex, nameIndex, surnameIndex)
    });
    return newArrayObject.sort()
}

function processObjectItem(objectItem, idIndex, nameIndex, surnameIndex) {
    itemId = objectItem[idIndex];
    itemName = objectItem[nameIndex];
    itemSurname = objectItem[surnameIndex];

    return itemSurname + " " + itemName + " | " + itemId; //zmieniłem przy grześku


}

function spliceArrayData(arrayObject, index, value) {
    return arrayObject.splice(0, 0, value);

}

function getIndexForUpdate(arrayObject, index, value) {

    return arrayObject.findIndex(function (item) {
        return item[index] == value
    })
}