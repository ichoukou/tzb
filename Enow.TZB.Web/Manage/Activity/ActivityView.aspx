﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ActivityView.aspx.cs" Inherits="Enow.TZB.Web.Manage.Activity.ActivityView" %>
<%@ Register Assembly="Enow.TZB.Utility" Namespace="Enow.TZB.Utility.ExportPageSet"
    TagPrefix="cc1" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8" content="IE=EmulateIE8" http-equiv="X-UA-Compatible" />
    <title>报名用户列表</title>
    <link href="/Css/style.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="/Js/jquery-1.4.4.js"></script>
    <link href="/css/boxynew.css" rel="stylesheet" type="text/css" />
    <script src="/Js/jquery.blockUI.js" type="text/javascript"></script>
    <script src="/Js/table-toolbar.js" type="text/javascript"></script>
</head>
<body>
    <form id="form1" runat="server">
       <div class="listbox">
            <div id="tablehead" class="tablehead">
                <ul class="fixed">
                </ul>
                <div class="pages">
                    <cc1:ExportPageInfo ID="ExportPageInfo1" runat="server" />
                </div>
            </div>
            <!--列表表格-->
            <div class="tablelist-box">
                <table width="100%" id="liststyle">
                    <tr>
                        <th align="center">
                            序号
                        </th>
                        <th align="center">
                            姓名
                        </th>
                        <th align="center">
                            手机
                        </th>
                        <th align="center">
                            邮箱
                        </th>
                         <th align="center">
                            住址
                        </th>
                         <th align="center">
                            报名时间
                        </th>
                         <th align="center">
                            状态
                        </th>
                    </tr>
                    <asp:Repeater ID="rptList" runat="server">
                        <ItemTemplate>
                            <tr>
                                <td align="center">
                                    <%#Container.ItemIndex+1%>
                                </td>
                                <td align="center">
                                    <%#Eval("ContactName")%>
                                </td>
                                <td align="center">
                                    <%#Eval("MobilePhone")%>
                                </td>
                                <td align="center">
                                    <%#Eval("Email")%>
                                </td>
                                <td align="center">
                                    <%#Eval("CountryName")%><%#Eval("ProvinceName")%><%#Eval("CityName")%><%#Eval("AreaName")%><%#Eval("Address")%>
                                </td>
                                 <td align="center">
                                   <%#Enow.TZB.Utility.Utils.GetDateTime(Eval("Indatetime").ToString()).ToString("yyyy-MM-dd")%>
                                </td>
                                <td align="center">
                                    <%#(Enow.TZB.Model.EnumType.ApplicantsStartEnum)(Enow.TZB.Utility.Utils.GetInt((Eval("IsState").ToString())))%>
                                </td>
                            </tr>
                        </ItemTemplate>
                    </asp:Repeater>
                    <asp:PlaceHolder ID="phNoData" runat="server" Visible="false">
                        <tr>
                            <td colspan="7" align="center">
                                暂无数据
                            </td>
                        </tr>
                    </asp:PlaceHolder>
                </table>
            </div>
            <!--列表结束-->
            <div class="tablehead botborder">
                <script type="text/javascript">
                    document.write(document.getElementById("tablehead").innerHTML);
                </script>
            </div>
        </div>
    </form>
</body>
</html>
