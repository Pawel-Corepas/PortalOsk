function getCarsSheet() {

    var sheetId = "11jDYoLgKc2e8uSHHhjbXhC7Nh0wBbEdh4c-ME4Ke-J8";
    var sheetName = "Pojazdy";
    return courseSheet = getSheetByIdAndName(sheetId, sheetName);

}

function getCars() {
    var cars = getCarsSheet();
    return cars.getRange(2, 1, cars.getLastRow(), cars.getLastColumn()).getValues();
}

function getCarsByCategory(category){
    var index=1;
    var cars = getCars();
    return filterArrayByValAndIndex(cars,index,category)
}


function getCarsSheet() {

    var sheetId = "11jDYoLgKc2e8uSHHhjbXhC7Nh0wBbEdh4c-ME4Ke-J8";
    var sheetName = "Pojazdy";
    return courseSheet = getSheetByIdAndName(sheetId, sheetName);
  
}



function getCarNameById(carId) {
  
  var cars = getCars()
  var car = filterArrayByValAndIndex(cars,0,carId)[0];  
  Logger.log(cars);
 return carData = car[2] +" - "+ car[4]
}
  



