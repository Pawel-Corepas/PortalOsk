function getPaymentSummarySheet(){

    var sheetId = "1AqHIpPsQi0xdJAaFsO5D2DTmHuZlcJFNtgp-kcOHM5Y";
    var sheetName = "Platnosci";
    return courseSheet = getSheetByIdAndName(sheetId, sheetName);
}


function migratePaymentsSheet() {
  
 
  var publicPaymentsSheet = getPaymentSummarySheet();
 
  var paymentsSheet = getPaymentsSheet()
  var payments = paymentsSheet.getRange(2,1,paymentsSheet.getLastRow(), paymentsSheet.getLastColumn()).getValues();
  var enrichedPayments = [];
  var studentId = "" ;
  var studentName = "";
  var courseId = "" ;
  var courseName = "";
  var lastRowIndex = publicPaymentsSheet.getLastRow(); 
  
 for (i=lastRowIndex-1; i < payments.length-1; i++){
    

    
    
   if (payments[i][2] != studentId) {
       
      studentName =  getStudentNameById(payments[i][2])
      studentId = payments[i][2]
    }
    
      if (payments[i][4] != courseId) {
      
      courseName =  getCourseNameById(payments[i][4])
      courseId = payments[i][4]
    }

    publicPayment =  enrichPayment(payments[i],studentName,courseName );

   
    addRowToSheet(publicPaymentsSheet,publicPayment);
    
  }

}


function enrichPayment(payment,studentName,courseName){
 var paymentYear = payment[5].getFullYear();
 var paymentMonth = paymentYear + "-"+ (payment[5].getMonth()+1);
   payment.splice(3,0,studentName);
   payment.splice(6,0,courseName);
   payment.splice(10,0,paymentMonth);
   payment.push(paymentYear);
  
return payment;
}