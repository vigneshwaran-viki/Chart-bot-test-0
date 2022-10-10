
function getBotResponse(input) {
  
    if (input == "hello") {
        return "Hello there!";
    } 
    else if (input == "hi"){
        return "hi there!";
    }
    else if (input == "how are you" ){
        return "Iam fine how are you";
    }
    else if (input == "hey how are you" ){
        return "iam fine how are you";
    }
    else if (input == "How are you" ){
        return "iam fine how are you";
    }
    else if (input == "Hey how are you" ){
        return "iam fine how are you";
    }
    else if (input == "good" ){
        return "Okay";
    }
    else if(input =="I love you"){
        return "thats so cute";
    }
    else if (input == "fine" ){
        return "Okay";
    }
    else if(input =="What is the daily transaction limit?"){
        return "The daily transaction Default limit for the day is Rs. 5 Lakh. There is no maximum limit for Funds Transfer. You can enhance your daily limit upto 50 lakhs through the Internet Banking. You can place a request for increasing the limit beyond Rs. 50 lacs and the same is processed on case to case basis.";
    }
    else if(input =="what is the daily transaction limit?"){
        return "The daily transaction Default limit for the day is Rs. 5 Lakh. There is no maximum limit for Funds Transfer. You can enhance your daily limit upto 50 lakhs through the Internet Banking. You can place a request for increasing the limit beyond Rs. 50 lacs and the same is processed on case to case basis.";
    }
    else if(input =="daily transaction limit"){
        return "The daily transaction Default limit for the day is Rs. 5 Lakh. There is no maximum limit for Funds Transfer. You can enhance your daily limit upto 50 lakhs through the Internet Banking. You can place a request for increasing the limit beyond Rs. 50 lacs and the same is processed on case to case basis.";
    }
    else if(input =="What is the transaction limit per day?"){
        return "The daily transaction Default limit for the day is Rs. 5 Lakh. There is no maximum limit for Funds Transfer. You can enhance your daily limit upto 50 lakhs through the Internet Banking. You can place a request for increasing the limit beyond Rs. 50 lacs and the same is processed on case to case basis.";
    }
    else if(input =="what is the transaction limit per day?"){
        return "The daily transaction Default limit for the day is Rs. 5 Lakh. There is no maximum limit for Funds Transfer. You can enhance your daily limit upto 50 lakhs through the Internet Banking. You can place a request for increasing the limit beyond Rs. 50 lacs and the same is processed on case to case basis.";
    }
    else if(input =="what are the types of fund transfer I can do?"){
        return "You can do the following types of Fund Transfer:Fund Transfer between your own accounts,Fund Transfer to any Other Axis Bank account,Fund Transfer to Other Bank's Account (NEFT/RTGS/IMPS),Visa Card Payment,Instant Money Transfer";
    }
    
    else if(input =="Types of fund transfer I can do?"){
        return "You can do the following types of Fund Transfer:Fund Transfer between your own accounts,Fund Transfer to any Other Axis Bank account,Fund Transfer to Other Bank's Account (NEFT/RTGS/IMPS),Visa Card Payment,Instant Money Transfer";
    }
    else if(input =="types of fund transfer I can do?"){
        return "You can do the following types of Fund Transfer:Fund Transfer between your own accounts,Fund Transfer to any Other Axis Bank account,Fund Transfer to Other Bank's Account (NEFT/RTGS/IMPS),Visa Card Payment,Instant Money Transfer";
    }
    else if(input =="types of fund transfer"){
        return "You can do the following types of Fund Transfer:Fund Transfer between your own accounts,Fund Transfer to any Other Axis Bank account,Fund Transfer to Other Bank's Account (NEFT/RTGS/IMPS),Visa Card Payment,Instant Money Transfer";
    }
    else if (input == "goodbye") {
        return "Talk to you later!";
    } 
    else if(input=="Are there any charges for fund transfers?"){
        return "Charges are applicable dependent of the type of transfer. You will see the charges applicable prior to submitting the fund transfer request.";
    }
    else if(input=="Is there any charges for fund transfer?"){
         return "Charges are applicable dependent of the type of transfer. You will see the charges applicable prior to submitting the fund transfer request.";
    }
    else if (input=="What is an IFSC?" ){
        return "The Indian Financial System Code (IFSC) is an RBI issued code which is being used in the NEFT system to identify recipient bank branches.";
    }
    else if (input=="what is an IFSC?" ){
        return "The Indian Financial System Code (IFSC) is an RBI issued code which is being used in the NEFT system to identify recipient bank branches.";
    }
  
    else if (input=="ifsc" ){
        return "The Indian Financial System Code (IFSC) is an RBI issued code which is being used in the NEFT system to identify recipient bank branches.";
    }
    else if (input=="daily transaction limit for the indian bank"){
        return "Transfer upto Rs. 1,00,000 per day from your Indian Bank account. This is the maximum limit as set by Indian Bank. Upto 10 transfers per day allowed from your account.";
    }
    else if(input=="Daily transaction limit for the indian bank"){
        return "Transfer upto Rs. 1,00,000 per day from your Indian Bank account. This is the maximum limit as set by Indian Bank. Upto 10 transfers per day allowed from your account.";
    }
    else if(input=="ifsc code for central bank"){
        return "starts with CBIN";
    }
    else if(input=="ifsc code for axis bank"){
        return " Starts with UTIB";
    }
    else {
            return "Try asking something else!";
        }

    // banking responses
}