using Chameleon.Common.Context;
using Chameleon.Common.Models;
using Chameleon.SDK;
using Microsoft.AspNetCore.Mvc;

namespace Chameleon.Api.Biz.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        [HttpPost("CustomMessage")]
        public IActionResult GetTestInfo()
        {
            return Ok(ResponseResult.Success("this is a thirdparty system test api"));
        }

        [HttpPost("SendMessage")]
        public IActionResult SendMessage()
        {
            var message = new Message
            {
                Receiver = ChameleonContext.Current.UserId,
                Title = "test message",
                Content = "this a test message from biz API",
                Scene = "Test"
            };

            MessageTodoHelper.BatchSendMessage([message]);

            return Ok(ResponseResult.Success());
        }
    }
}
