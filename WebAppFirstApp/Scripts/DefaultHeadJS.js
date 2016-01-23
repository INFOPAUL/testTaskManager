
         function GetTime() {
             CallServer(null, null);
           
         }

     

         
function ReceiveServerData(rValue) {

    objId = document.getElementById("clock");
    objId.innerHTML = rValue;
    setTimeout("GetTime()", 1000);
}
        
         
       
