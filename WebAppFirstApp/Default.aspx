<%@ Page Title="Note" Language="C#"  AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebAppFirstApp._Default" %>


    
           
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Note</title>
    
     
    <script src="/Scripts/DefaultHeadJS.js" type="text/javascript"></script>
  
</head>
<body onload="GetTime()">
    <form id="form1" runat="server">
    <div>
                <div id="clock"></div>               
                <asp:TextBox runat="server" ClientIDMode="Static" ID="txtBoxNote" Width="30%"  TextMode="multiline" rows="5"></asp:TextBox><br/>
                <asp:Button runat="server" ClientIDMode="Static" Text="Add" ID="btnSaveNote" Width="10%" OnClientClick="setCookie('Tasks')"></asp:Button>
                <div id="tasks"></div>
                    
        
      <script src="/Scripts/DefaultBodyJS.js" type="text/javascript"></script>

    </div>
    </form>
</body>
</html>
