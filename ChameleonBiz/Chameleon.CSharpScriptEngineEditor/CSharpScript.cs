using System;
using System.Linq;
using System.Collections.Generic;
using Newtonsoft.Json;
using Chameleon.Common;
using Chameleon.Common.Context;
using Chameleon.Common.Exceptions;
using Chameleon.Common.Models;
using Chameleon.Database;
using MongoDB.Driver;

public class ChameleonCSharpScript
{
    public object Execute(ComponentContext context)
    {
        //Logger.Debug("this is a log");
        //JsonConvert.SerializeObject();
        //JsonConvert.DeserializeObject<>();
        //new ChameleonDbContext().GetById(ChameleonContext.Current.TenantId, "ChameleonSys.UserInformation", "xxx", new[] { "Name" });

        var dbContext = new ChameleonDbContext();

        var data = ChameleonContext.Current.GetBody<List<ObjectData>>();
        var id = data.First()._id;
        var record = dbContext.GetById(ChameleonContext.Current.TenantId, "BookManagement.BorrowRecord", id, new[] { "Book", "IsReturn" });

        if (Convert.ToBoolean(record["IsReturn"]))
        {
            throw new ChameleonException("该书已经归还");
        }

        record["IsReturn"] = true;
        record["ReturnDate"] = DateTime.Now;
        dbContext.Update(ChameleonContext.Current.TenantId, "BookManagement.BorrowRecord", record);

        var bookId = Convert.ToString(record["Book"]);
        var book = new ChameleonDbContext().GetById(ChameleonContext.Current.TenantId, "BookManagement.Book", bookId, new[] { "Count" });
        var count = Convert.ToInt32(book["Count"]);

        book["Count"] = count + 1;
        dbContext.Update(ChameleonContext.Current.TenantId, "BookManagement.Book", book);

        return null;
    }
}