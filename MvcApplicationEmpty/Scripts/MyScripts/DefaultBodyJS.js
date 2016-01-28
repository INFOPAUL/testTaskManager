
 function getCookie(cname) {

  var ca = document.cookie.split(';');
     for (var i = 0; i < ca.length; i++) {
           var c = ca[i];
            var splitCookie = c.split('=');           
                      
              c = splitCookie[0].replace(" ", "");
              cname = cname.replace(" ","" );
                     for (var j = 0; j < c.length; j++) {
                               
                         if (c.charAt(j) == cname.charAt(j)) {
                             return splitCookie[1];
                                }
                           else break;
                     
                      }
                 }
          
            return "";
       }
function SetTaskValue(cookieName) {                       
    var splitValue = getCookie(cookieName).split('?');
    var result = "";

    if (splitValue[0]!="")
        for (var k = 0; k < splitValue.length; k++)
            result = result + (result != "" ? "<br>" + (k + 1) + "." +splitValue[k] : (k + 1) + "." + splitValue[k]);
    document.getElementById("tasks").innerHTML = result;
   
}


function setCookie(cname) {
 
    var cvalue = document.getElementById('txtBoxNote').value;
    cvalue = cvalue.split('\n').join(' ');

    var d = new Date(new Date().getTime());
    d.setHours(23, 59, 59, 999);
    

    var expires = "expires=" + d.toUTCString();

  

   document.cookie = cname + "=" + (document.getElementById("tasks").innerHTML != "" ? getCookie(cname) + "?" : "") + cvalue +"; "+" path=/"+ "; " + expires;

   SetTaskValue(cname);
}
SetTaskValue('Task');