﻿using System.ComponentModel.DataAnnotations;

namespace angularwithapi.Server.AppServices.Products
{
    public class ProductDto
    {

        public int Id { get; set; }

        [StringLength(100)]
        public required string Name { get; set; }

        [StringLength(500)]
        public string? Description { get; set; }

        public int CatId { get; set; }

        public required string CategoryName { get; set; }
    }
}
