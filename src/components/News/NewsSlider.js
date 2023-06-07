import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../shared/Data/data";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const NewsSlider = () => {
  
  const clients = [
    {
      img: "https://picsum.photos/600/350",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: "https://picsum.photos/600/350",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: "https://picsum.photos/600/350",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: "https://picsum.photos/600/350",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];

  return (
    <div>
     
      <Swiper
        spaceBetween={10}
        // slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="overflow-visible"
      >
        {clients.map((client, index) => {
          return (
            <div className="">
              <SwiperSlide key={index}>
                <div className="testimonial h-[29rem]">
                  <img src={client.img} alt="" className="rounded-lg" />
                  <div>
                    <span className="text-start inline-block">
                      {client.review}
                    </span>
                  </div>
                  <div className=" flex flex-start gap-10">
                    <span className="text-red-500">Business</span>
                    <span className="inline-block text-center text-gray-500">
                      • 8 min ago
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default NewsSlider;
