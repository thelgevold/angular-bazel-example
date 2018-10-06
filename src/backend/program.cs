using System;
using selfHost;

namespace myApp
{
  class Program
  {
    static void Main(string[] args)
    {
      var selfHost = new SelfHost();
      selfHost.Initialize();
    }
  }
}