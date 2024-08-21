
using Microsoft.EntityFrameworkCore;
using angularwithapi.Server.AppServices.Products;
using angularwithapi.Server.Entities;
using System.Text.Json.Serialization;

namespace angularwithapi.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers().AddXmlDataContractSerializerFormatters()
                .AddJsonOptions(
          options => options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles
      );

            builder.Services.AddAutoMapper(typeof(Program));
            builder.Services.AddScoped<IProductsAppService, ProductsAppService>();

            builder.Services.AddDbContext<AppDbContext>(options => {

                options.UseSqlServer(builder.Configuration.GetConnectionString("MyConnStr"));
            });

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}
