using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Globalization;

namespace WebAppFirstApp
{
    public partial class _Default :  System.Web.UI.Page, System.Web.UI.ICallbackEventHandler
    {
        public string returnValue;


        protected void Page_Load(object sender, EventArgs e)
        {
            String cbReference = Page.ClientScript.GetCallbackEventReference
                    (this, "arg", "ReceiveServerData", "context");
            String callbackScript = "function CallServer(arg, context)" +
                    "{ " + cbReference + "} ;";
            Page.ClientScript.RegisterClientScriptBlock(this.GetType(),
                    "CallServer", callbackScript, true);
        }

        public void RaiseCallbackEvent(String eventArgument)
        {
            returnValue = DateTime.Now.ToString("MMMM dd, yyyy HH:mm:ss");

        }

        public string GetCallbackResult()
        {
            return returnValue;
        }

       
        
    }
}