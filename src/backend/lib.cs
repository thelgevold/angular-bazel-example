using System;
using System.Collections.Generic;
using System.Net;
using System.Web.Http;
using System.Web.Http.SelfHost;

namespace selfHost
{
  public class SelfHost
  {
    public void Initialize()
    {
      var config = new HttpSelfHostConfiguration("http://localhost:8080");
      config.Routes.MapHttpRoute("API Default", "api/{controller}");

      using (HttpSelfHostServer server = new HttpSelfHostServer(config))
      {
        server.OpenAsync().Wait();
        Console.WriteLine("Press Enter to quit.");
        Console.ReadLine();
      }
    }
  }

  public class FriendsController: ApiController
  {
    public List<string> GetFriends()
    {
      return new List<string>
      {
        "Joe",
        "Mary",
        "Peter",
        "Lisa"
      };
    }
  }
}