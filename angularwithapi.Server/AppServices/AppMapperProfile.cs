using AutoMapper;
using angularwithapi.Server.AppServices.Products;
using angularwithapi.Server.Entities;

namespace angularwithapi.Server.AppServices
{
    public class AppMapperProfile :Profile
    {

        public AppMapperProfile()
        {
            CreateMap<Product, ProductDto>()
                .ForMember(src => src.CategoryName, 
                des => des.MapFrom(s => s.Category.Name));

            CreateMap<CreateProductDto, Product>().ReverseMap();
        }
    }
}
