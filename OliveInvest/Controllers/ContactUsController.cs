using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OliveInvest.Models;
using Newtonsoft.Json;
using System.Web.Configuration;
using System.Net.Mail;
using System.Net;

namespace OliveInvest.Controllers
{
    public class ContactUsController : Controller
    {
        //
        // GET: /ContactUs/
        public ActionResult Index()
        {
            ViewBag.Title = "Contact Us - Olive Invest";
            return View();
        }

        public String sendContactForm(String aoModel) {
            String lsReturn = String.Empty;

            ContactModel loFormData = JsonConvert.DeserializeObject<ContactModel>(aoModel);

            var lsHost = WebConfigurationManager.AppSettings["host"].ToString();

            SmtpClient loMailClient = new SmtpClient();
            loMailClient.Host = lsHost;
            loMailClient.Port = Convert.ToInt32(WebConfigurationManager.AppSettings["port"]);
            loMailClient.EnableSsl = Convert.ToBoolean(WebConfigurationManager.AppSettings["useSSL"]);

            if (Convert.ToBoolean(WebConfigurationManager.AppSettings["useCredentials"])) {
                var lsUsername = WebConfigurationManager.AppSettings["username"].ToString();
                var lsPassword = WebConfigurationManager.AppSettings["password"].ToString();
                NetworkCredential loCredentials = new NetworkCredential(lsUsername, lsPassword);
                loMailClient.Credentials = loCredentials;
            }

            MailMessage loMail = new MailMessage();
            loMail.Sender = new MailAddress(String.Format("office@animatic.rs"));
            
            var loRecipients = WebConfigurationManager.AppSettings["recipients"].ToString().Split(';');
            foreach (var toRecipient in loRecipients) {
                loMail.To.Add(toRecipient);
            }
            var loCCs = WebConfigurationManager.AppSettings["ccs"].ToString().Split(';').ToList<String>();
            loCCs.Where(x => String.IsNullOrEmpty(x) == false).ToList().ForEach(x => loMail.CC.Add(x));
            
            loMail.Subject = WebConfigurationManager.AppSettings["subject"].ToString();
            loMail.IsBodyHtml = true;
            loMail.Body = String.Format("<h3>From: </h3>{0}<h3>Phone: </h3>{1}<h3>Message: </h3>{2}", String.Format("{0} - {1}", loFormData.Name, loFormData.Email), loFormData.Phone, loFormData.Message);
            loMail.From = new MailAddress(String.Format("{0} <{1}>", loFormData.Name, loFormData.Email));

            try
            {
                loMailClient.Send(loMail);
                lsReturn = "Email sent!";
            }
            catch (Exception ex)
            {
                //Error, could not send the message
                lsReturn = "Error occured.";
            }

            return lsReturn;
        }
	}
}