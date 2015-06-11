﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MemberUpdate.aspx.cs" Inherits="Enow.TZB.Web.WX.Team.MemberUpdate" %>
<%@ Register src="../UserControls/UserHome.ascx" tagname="UserHome" tagprefix="uc1" %>
<!DOCTYPE html >

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>信息修改</title>
    <link rel="stylesheet" href="/WX/css/style.css" type="text/css" media="screen" />
    <script type="text/javascript" src="/Js/jquery-1.4.4.js"></script>
    <link href="/css/boxynew.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="/js/jquery.boxy.js"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div class="boxy">
    <div class="boxy_title">信息修改<a href="javascript:parent.Boxy.getIframeDialog('<%=Request.QueryString["iframeId"] %>').hide();" class="close-btn"></a></div>
    <div class="msg_list boxy_form">
       <ul>
                <li><label>球衣号：</label><input id="txtQYHM" name="txtQYHM" type="text" runat="server" maxlength="4" class="formsize50 input_bk" /><asp:RegularExpressionValidator
                        ID="RegularExpressionValidator1" runat="server" ErrorMessage="球衣号码只能为数字" 
                        ControlToValidate="txtQYHM" ValidationExpression="\d{1,4}">*</asp:RegularExpressionValidator><asp:RequiredFieldValidator
                            ID="RequiredFieldValidator2" runat="server" ErrorMessage="请填写球衣号码" 
                        ControlToValidate="txtQYHM">*</asp:RequiredFieldValidator></li>
                <li><label>场上位置：</label><select id="SQWZ" name="SQWZ">
                           <%=Enow.TZB.Utility.Function.UtilsCommons.GetEnumDDL
                    (Enow.TZB.Utility.EnumObj.GetList(typeof(Enow.TZB.Model.EnumType.球员位置),
                                                               new string[] { }), MeberSQWZ.ToString())
                                %>
                       </select></li>
       </ul>
    </div>
    
    <div><input type="hidden" name="hidTMId" id="hidTMId" runat="server" />
        <asp:Button ID="btnCheck" runat="server" CssClass="basic_btn" Text="确  认" 
            onclick="btnCheck_Click" /></div>  

</div><asp:ValidationSummary ID="ValidationSummary1" runat="server" 
        ShowMessageBox="True" ShowSummary="False" />
    </form>
</body>
</html>
