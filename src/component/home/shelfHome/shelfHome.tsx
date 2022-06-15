import "./shelfHome.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

function ShelfHome(){
    return(
        <div className="shelf-contents">
        <Swiper
   modules={[Navigation, Pagination,A11y]}
   spaceBetween={50}
   slidesPerView={3}
   navigation
   pagination={{ clickable: true }}   
    >
      <SwiperSlide>
         <div className="card"></div>
      </SwiperSlide>
      <SwiperSlide>
         <div className="card"></div>
      </SwiperSlide>
      <SwiperSlide>
         <div className="card"></div>
      </SwiperSlide>
      <SwiperSlide>
         <div className="card"></div>
      </SwiperSlide>
      <SwiperSlide>
         <div className="card"></div>
      </SwiperSlide>
      <SwiperSlide>
         <div className="card"></div>
      </SwiperSlide>
  
    </Swiper>

        </div>
    )
}

export default ShelfHome