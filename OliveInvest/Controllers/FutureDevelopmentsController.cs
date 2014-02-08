using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OliveInvest.Controllers
{
    public class FutureDevelopmentsController : Controller
    {
        //
        // GET: /FutureDevelopments/
        public ActionResult Index()
        {
            ViewBag.Title = "Future Developments - Olive Invest";
            return View();
        }
	}
}