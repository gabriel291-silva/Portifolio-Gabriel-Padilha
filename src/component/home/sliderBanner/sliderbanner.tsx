import "./sliderBanner.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

function SliderBanner(){
    return(<Swiper
   modules={[Navigation, Pagination,A11y]}
   spaceBetween={50}
   slidesPerView={1}
   navigation
   pagination={{ clickable: true }}   
    >
      <SwiperSlide>
          <img src="https://s2.glbimg.com/zO0uI5mfMeZDAmCzFxbhoJnHZ18=/smart/e.glbimg.com/og/ed/f/original/2022/02/10/plantas-ornamentais-sala12.jpg"/>
          <div className="text-banner">
            <h1>title teste</h1>
            <p> 
                teste teste teste teste teste teste
                teste teste teste teste teste teste
                teste teste teste teste teste teste
                teste teste teste teste teste teste
                teste teste teste teste teste teste
            </p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <img src="https://s2.glbimg.com/zO0uI5mfMeZDAmCzFxbhoJnHZ18=/smart/e.glbimg.com/og/ed/f/original/2022/02/10/plantas-ornamentais-sala12.jpg"/>
          <div className="text-banner">
            <h1>title teste</h1>
            <p> 
                teste teste teste teste teste teste
                teste teste teste teste teste teste
                teste teste teste teste teste teste
                teste teste teste teste teste teste
                teste teste teste teste teste teste
            </p>
          </div>
      </SwiperSlide>
      
    </Swiper>
)
}
export default SliderBanner