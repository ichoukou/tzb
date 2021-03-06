﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MatchSchedule.aspx.cs" Inherits="Enow.TZB.Web.WX.Member.MatchSchedule" %>
<%@ Register src="../UserControls/UserHome.ascx" tagname="UserHome" tagprefix="uc1" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>赛事详情</title>
<link rel="stylesheet" href="/wx/css/style.css" type="text/css" media="screen">
</head>
<body>
    <form id="form1" runat="server">
    <uc1:UserHome ID="UserHome1" Userhometitle="赛事详情" runat="server" />
<div class="warp">
  <div class="msg_tab"  id="n4Tab">
     
        <div class="TabTitle">
           <ul class="fixed">
              <li id="n4Tab_Title0"><a href="MatchDetail.aspx?Id=<%=Request.QueryString["Id"] %>">主办方</a></li>
              <li id="n4Tab_Title1"><a href="MatchDetail.aspx?Id=<%=Request.QueryString["Id"] %>">赛事规程</a></li>
              <li class="active"><a href="MatchTeamBallotResult.aspx?Id=<%=Request.QueryString["Id"] %>">赛事赛程</a></li>
           </ul>
        </div>

        <div class="TabContent">          
              <div class="MatchSchedule">
                 <div class="cent" style="font-size:16px; font-weight:bold;"><asp:Literal ID="ltrMatchName" runat="server"></asp:Literal></div>
                  <asp:Repeater ID="rptGameList" runat="server" 
                      onitemdatabound="InitMatchSchedule">
                  <ItemTemplate>
                  &nbsp;&nbsp;&nbsp;&nbsp;<%#Eval("GameName") %>
                  <ul>
                  <asp:Repeater ID="rptScheduleList" runat="server">
                  <ItemTemplate><li style="width:100%; background-color:#ffffff;">
                  <%#Eval("OrdinalNumber")%>场 <%#Eval("GameStartTime","{0:yyyy年MM月dd日 HH:mm}") %>-<%#Eval("GameEndTime", "{0:HH:mm}")%><br />&nbsp;&nbsp;&nbsp;&nbsp;<%#Eval("HomeMatchCode")%>&nbsp;&nbsp;VS&nbsp;&nbsp;<%#Eval("AwayMatchCode")%>&nbsp;&nbsp;【<%#Eval("FieldName")%>】</li>
                  </ItemTemplate>
                  </asp:Repeater>
                  </ul>
                  </ItemTemplate>
                  </asp:Repeater>
            </div>

			
           
    </div><asp:PlaceHolder ID="phIsBallot" runat="server" Visible="false">
    <div id="QuickLink">
        <asp:Button ID="btnSave" CssClass="basic_btn" runat="server" Text="赛程抽签"  onclick="linkBtnBallot_Click" /></div>
  </div>
    </asp:PlaceHolder>
</div>
    </form>
</body>
</html>
