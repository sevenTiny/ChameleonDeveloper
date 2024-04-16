
using Chameleon.Common.Middlewares;

namespace Chameleon.Api.Biz
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            //添加jwt验证
            builder.Services.AddChameleonJwt();

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            //自定义异常
            app.UseExceptionMiddleware();

            ///添加jwt验证
            app.UseAuthentication();
            //Chameleon请求上下文中间件
            app.UseChameleonContextMiddleware();
            //身份检验
            app.UseAuthorization();

            //全局鉴权
            app.MapControllers().RequireAuthorization();

            app.Run();
        }
    }
}
