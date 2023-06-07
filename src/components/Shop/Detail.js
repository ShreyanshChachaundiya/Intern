import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../shared/Data/data";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import "./Detail.css";

const Detail = () => {
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
        modules={[Pagination]}
        pagination={{
          clickable: true,
          //bulletClass: "custom-bullet",
          //bulletActiveClass: "custom-bullet-active",
        }}
        className="overflow-visible"
      >
        {clients.map((client, index) => {
          return (
            <div>
              <div className="">
                <SwiperSlide key={index}>
                  <div className="testimonial h-[25rem] w-[100%]">
                    <img
                      src={client.img}
                      alt=""
                      className="h-[28rem] w-full justify-center"
                    />
                  </div>
                </SwiperSlide>
              </div>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Detail;
