﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Enow.TZB.Utility;
using Enow.TZB.BLL;
using System.Web.UI.HtmlControls;

namespace Enow.TZB.Web.WX.Team
{
    public partial class GathersDetail : System.Web.UI.Page
    {
        /// <summary>
        /// 会员编号
        /// </summary>
        protected string MemberId = "";
        protected string GatherId = "";
        protected string d = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            string doType = Request.QueryString["doType"];
            switch (doType)
            {
                case "war": AcceptWar(); break;
            }
            if(!IsPostBack)
            {
              
                BMemberAuth.LoginCheck();
                var AuthModel = BMemberAuth.GetUserModel();
                string OpenId = AuthModel.OpenId;
                InitMember(OpenId);
                InitPage();
            }

            d= Utils.GetQueryStringValue("do");
            if (!string.IsNullOrEmpty(d))
            {
                if (d == "response")
                {
                    IsAccept.Visible = true;
                }
                else
                {
                    IsAccept.Visible = false;
                }
            }
        }
        private void AcceptWar()
        {
            string gatherid = Utils.GetQueryStringValue("id");


            int bllRetCode = BGathers.AccepWar(gatherid) == true ? 1 : -99;

            if (bllRetCode == 1)
            {
                //MessageBox.ShowAndRedirect("", "Articles.aspx");
                Utils.RCWE(UtilsCommons.AjaxReturnJson("1", "应战成功！"));
            }
            else
            {
                //MessageBox.ShowAndRedirect("", "Articles.aspx"); 
                Utils.RCWE(UtilsCommons.AjaxReturnJson("-99", "应战失败！"));
            }
        }
        /// <summary>
        /// 加载会员信息
        /// </summary>
        /// <param name="OpenId"></param>
        private void InitMember(string OpenId)
        {
            var model = BMember.GetModelByOpenId(OpenId);
            if (model != null)
            {
                if (String.IsNullOrWhiteSpace(model.ContactName))
                {
                    //您未填写实名信息,\n请补充填写！
                    MessageBox.ShowAndRedirect(CacheSysMsg.GetMsg(35), "/WX/Member/Step2.aspx");
                    return;
                }
                BMember.StateCheck((Model.EnumType.会员状态)model.State);
                MemberId = model.Id;
            }
            else
            {
                //未找到您的用户信息!
                MessageBox.ShowAndRedirect(CacheSysMsg.GetMsg(8), "../Register/RegisterChoose.aspx");
                return;
            }
        }
        /// <summary>
        /// 初始化约战信息
        /// </summary>
        /// <param name="gatherid"></param>
        private void InitPage()
        {
            string gatherid = Utils.GetQueryStringValue("gatherid");
            GatherId = gatherid;
            string TeamId = Model.MCommon.DefaultGuidId;
            var TeamModel = BTeamMember.GetModel(MemberId);
            if (TeamModel != null)
            {
                TeamId = TeamModel.TeamId;
            }
            
            tbl_Gathers model=  BGathers.GetModel(gatherid);
            if (model!=null)
            {
                //发起的约战
                if (model.TeamId == TeamId)
                {
                    litTeamName.Text = model.AcceptTeamName;
                }
                else//收到的约战
                {
                    litTeamName.Text = model.TeamName;
                }
                litTime.Text = model.WarTime.ToString("yyyy-MM-dd");
                litPlace.Text = model.WarPlace;
                litType.Text  = model.MatchType.ToString ();
                litFee.Text =((Enow.TZB.Model.EnumType.GathersEnum.比赛费用)model.MatchFee).ToString();
                litBook.InnerText  = model.MatchTarget;
            }
            
        }
    }
}