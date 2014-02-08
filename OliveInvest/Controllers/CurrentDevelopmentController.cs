using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OliveInvest.Controllers
{
    public class CurrentDevelopmentController : Controller
    {
        //
        // GET: /CurrentDevelopment/
        public ActionResult Index()
        {
            ViewBag.Title = "Current Development - Olive Invest";
            return View();
        }
	}
}