import "./index.scss"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//props
//numberOfSlide

//Carousel => numberOfSlide = 1 => hien thi 1 thang
//Carousel => numberOfSlide = 6 => hien thi 6 thang


export default function Carousel({numberOfSlide, category, isUseNavigation = false,
  title,
}) {
  const[movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get("https://662b9b40de35f91de158d81b.mockapi.io/Movie");
    console.log(response.data);
    setMovies(response.data)
  };

  useEffect(()=> {
    fetchMovies();
  }, []);

  return (
    <div className={`carousel ${numberOfSlide > 1 ?? "multi-item" }`}>
      {title && <h1>{title}</h1>}
      <Swiper
      
      slidesPerView={numberOfSlide}
      spaceBetween={10}
      autoplay={numberOfSlide === 1 ?? {
        delay: 2500,
        disableOnInteraction: false,
        
      }} pagination={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper ">
        {/* movie => SwiperSlide */}
        {/* cu moi movie trong movies => SwiperSlide */}
        {movies
        .filter(movie => movie.category === category)
        .map((movie) => <SwiperSlide key={movie.id}><img src={movie.poster_path} alt="" />
        </SwiperSlide> 
      )}
        
      </Swiper>
    </div>
  );
}