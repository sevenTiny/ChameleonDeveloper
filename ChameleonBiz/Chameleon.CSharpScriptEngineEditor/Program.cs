using Chameleon.Common.Context;
using Chameleon.Common.Models;

namespace Chameleon.CSharpScriptEngineEditor
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // set parameters
            ChameleonContext.Current.TenantId = "xxxtenantId";
            ChameleonContext.Current.UserId = "xxxuserid";
            ChameleonContext.Current.SetRequestContext(new ChameleonRequestContext
            {
                QueryString = "?id=123",
                Body = @"{""name"":""zhangsan""}"
            });

            // run
            var context = new ComponentContext
            {

            };

            new ChameleonCSharpScript().Execute(context);

            Console.WriteLine("Hello, World!");
        }
    }
}
