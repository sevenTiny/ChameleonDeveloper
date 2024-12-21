using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Chameleon.Common;
using Chameleon.Common.Context;
using Chameleon.Common.Exceptions;
using Chameleon.Common.Models;
using Chameleon.Database;

public class ChameleonCSharpScript
{
    public object Execute(ComponentContext context, IChameleonDbContext dbContext, ILogger logger)
    {
        //logger.LogDebug($"this is a log");
        //JsonConvert.SerializeObject();
        //JsonConvert.DeserializeObject<>();
        //dbContext.GetById(ChameleonContext.Current.TenantId, "system.UserInformation", "xxx", new[] { "Name" });

        var res = new List<XYZ>();
        var random = new Random();

        for (int i = 0; i < 10; i++)
        {
            res.Add(new XYZ
            {
                X = (2020+i).ToString(),
                Y = random.Next(1, 10000),
                Type = (2020 + i).ToString()
            });
        }

        return res;
    }
}