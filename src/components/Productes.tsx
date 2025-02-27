import * as React from "react";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    id: 1,
    name: "Boiled IR",
    image: "product-1.png", // Replace with actual image path
    link: "/products/organic-rice", // Product page link
  },
  {
    id: 2,
    name: "Boiled Swarna Rice",
    image: "product-2.png",
    link: "/products/fresh-vegetables",
  },
  {
    id: 3,
    name: "White Broken Rice",
    image: "product-3.png",
    link: "/products/premium-wheat",
  },
  {
    id: 4,
    name: "White Rice",
    image: "product-4.png",
    link: "/products/dairy-products",
  },
  //   {
  //     id: 5,
  //     name: "Natural Spices",
  //     image: "/images/spices.jpg",
  //     link: "/products/natural-spices",
  //   },
];

export function Productes() {
  return (
    <div>
      <h2
        className="text-[#2E7D32] text-center text-2xl md:text-2xl lg:text-5xl p-8 font-semibold"
        data-aos="fade-up"
      >
        A Range of Our Rice Varieties
      </h2>

      <Carousel className="w-full max-w-7xl mx-auto items-center ">
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-2">
                <Card className="relative group overflow-hidden rounded-lg shadow-lg">
                  <CardContent className="p-4 flex flex-col items-center">
                    {/* Product Image */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Product Name */}
                    <h3 className="text-lg font-semibold text-gray-900 mt-3">
                      {product.name}
                    </h3>

                    {/* "Know More" Button */}
                    <a
                      href={product.link}
                      className="mt-3 px-4 py-2 bg-green-600 text-white rounded-md text-sm flex items-center gap-2 transition-all hover:bg-green-700"
                    >
                      Know More →
                    </a>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
