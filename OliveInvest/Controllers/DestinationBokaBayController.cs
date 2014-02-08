using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OliveInvest.Controllers
{
    public class DestinationBokaBayController : Controller
    {
        //
        // GET: /DestinationBokaBay/
        public ActionResult Index()
        {
            ViewBag.Title = "Destination Boka Bay - Olive Invest";
            return View();
        }
	}
}