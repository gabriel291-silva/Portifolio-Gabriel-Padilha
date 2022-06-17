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
         <h1>title shelf</h1>
        <Swiper
   modules={[Navigation, Pagination,A11y]}
   spaceBetween={50}
   slidesPerView={4}
   navigation
   pagination={{ clickable: true }}   
    >
      <SwiperSlide>
         <div className="card">
            <div className="card-image-contents">
               <img  src="https://png.pngtree.com/png-vector/20191010/ourlarge/pngtree-checkout-cart-add-product-to-cart-icon-png-image_1808300.jpg" alt="" />
            </div>
            <div className="card-infos">
              <p> nome do produto</p>
               <span> R$ 100,000</span>
               <button>Comprar</button>
            </div>
         </div>
      </SwiperSlide>
      <SwiperSlide>
         <div className="card">
            <div className="card-image-contents">
               <img  src="https://png.pngtree.com/png-vector/20191010/ourlarge/pngtree-checkout-cart-add-product-to-cart-icon-png-image_1808300.jpg" alt="" />
            </div>
            <div className="card-infos">
              <p> nome do produto</p>
               <span> R$ 100,000</span>
               <button>Comprar</button>
            </div>
         </div>
      </SwiperSlide>

      <SwiperSlide>
         <div className="card">
            <div className="card-image-contents">
               <img  src="https://png.pngtree.com/png-vector/20191010/ourlarge/pngtree-checkout-cart-add-product-to-cart-icon-png-image_1808300.jpg" alt="" />
            </div>
            <div className="card-infos">
              <p> nome do produto</p>
               <span> R$ 100,000</span>
               <button>Comprar</button>
            </div>
         </div>
      </SwiperSlide>

      <SwiperSlide>
         <div className="card">
            <div className="card-image-contents">
               <img  src="https://png.pngtree.com/png-vector/20191010/ourlarge/pngtree-checkout-cart-add-product-to-cart-icon-png-image_1808300.jpg" alt="" />
            </div>
            <div className="card-infos">
              <p> nome do produto</p>
               <span> R$ 100,000</span>
               <button>Comprar</button>
            </div>
         </div>
      </SwiperSlide>

      <SwiperSlide>
         <div className="card">
            <div className="card-image-contents">
               <img  src="https://png.pngtree.com/png-vector/20191010/ourlarge/pngtree-checkout-cart-add-product-to-cart-icon-png-image_1808300.jpg" alt="" />
            </div>
            <div className="card-infos">
              <p> nome do produto</p>
               <span> R$ 100,000</span>
               <button>Comprar</button>
            </div>
         </div>
      </SwiperSlide>

      <SwiperSlide>
         <div className="card">
            <div className="card-image-contents">
               <img  src="https://png.pngtree.com/png-vector/20191010/ourlarge/pngtree-checkout-cart-add-product-to-cart-icon-png-image_1808300.jpg" alt="" />
            </div>
            <div className="card-infos">
               <p> nome do produto</p>
               <span> R$ 100,000</span>
               <button>Comprar</button>
            </div>
         </div>
      </SwiperSlide>

      <SwiperSlide>
         <div className="card">
            <div className="card-image-contents">
               <img  src="https://png.pngtree.com/png-vector/20191010/ourlarge/pngtree-checkout-cart-add-product-to-cart-icon-png-image_1808300.jpg" alt="" />
            </div>
            <div className="card-infos">
              <p> nome do produto</p>
               <span> R$ 100,000</span>
               <button>Comprar</button>
            </div>
         </div>
      </SwiperSlide>


   
  
    </Swiper>

        </div>
    )
}

export default ShelfHome