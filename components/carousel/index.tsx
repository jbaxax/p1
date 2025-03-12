"use client"
import { Navigation, Pagination, Autoplay, EffectFade} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./styles/index.css"
import 'swiper/css/effect-fade';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { imagesCarousel } from "./data";
import Image from "next/image";

export default function Carousel() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination,Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      speed={2500}
      effect="fade"
      /* autoplay={
        {
            delay:1500,
            disableOnInteraction: false,
        }
      } */
      pagination={{ clickable: true }}

      className="carousel"
    >
      
      {imagesCarousel.map((image)=>(
        <SwiperSlide key={image.id}>
            <div className="w-[100%] h-96">
                <Image src={image.url} alt={image.name} fill className="object-cover"/>
            </div>
        </SwiperSlide>
      ))}
      
    </Swiper>
  );
}
