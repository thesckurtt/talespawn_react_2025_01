import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Register = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }, []);

  return (
    <main className="main-site-register vh-100 vw-100">
      <div className="main-site-register-top d-flex align-items-center justify-content-center">
        <div className="logo-xl top-20">
          <img src="./img/logo-xl.png" alt="Logo" />
        </div>
      </div>

      <div className="main-site-register-middle">
        <div className="right-border d-flex justify-content-center align-items-center">
          <form action="#" className="rpg-form">
            <div className="d-flex flex-column justify-content-start align-items-start mb-3">
              <label htmlFor="name" className="label-rpg fs-3">Nome</label>
              <input type="text" id="name" name="name" className="inpt-rpg" />
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start mb-3">
              <label htmlFor="email" className="label-rpg fs-3">E-mail</label>
              <input type="text" id="email" name="email" className="inpt-rpg" />
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start mb-3">
              <label htmlFor="password" className="label-rpg fs-3">Senha</label>
              <input type="password" id="password" name="password" className="inpt-rpg" />
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start mb-3">
              <label htmlFor="nickname" className="label-rpg fs-3">Nick</label>
              <input type="text" id="nickname" name="nickname" className="inpt-rpg" />
            </div>
          </form>
        </div>

        <div className="main-site-register-middle-characters d-flex justify-content-center align-items-center">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            spaceBetween={30}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            className="mySwiper"
          >
            <SwiperSlide><img src="./img/character_1.png" alt="Personagem 1" /></SwiperSlide>
            <SwiperSlide><img src="./img/character_2.png" alt="Personagem 2" /></SwiperSlide>
            <SwiperSlide><img src="./img/character_3.png" alt="Personagem 3" /></SwiperSlide>
            <SwiperSlide><img src="./img/character_4.png" alt="Personagem 4" /></SwiperSlide>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </Swiper>
        </div>

        <div className="left-border d-flex px-4 justify-content-start align-items-center">
          <div>
            <h1 className="rpg-text-title mb-4">Atributos</h1>
            <div class="mb-3">
              <span class="rpg-text-title fs-2">Magia</span>
              <div class="progress-container">
                <div class="pc-dot full"></div>
                <div class="pc-dot"></div>
                <div class="pc-dot"></div>
                <div class="pc-dot"></div>
                <div class="pc-dot"></div>
              </div>
            </div>
            <div class="mb-3">
              <span class="rpg-text-title fs-2">Ataque</span>
              <div class="progress-container">
                <div class="pc-dot full"></div>
                <div class="pc-dot full"></div>
                <div class="pc-dot full"></div>
                <div class="pc-dot"></div>
                <div class="pc-dot"></div>
              </div>
            </div>
            <div class="mb-3">
              <span class="rpg-text-title fs-2">Cura</span>
              <div class="progress-container">
                <div class="pc-dot full"></div>
                <div class="pc-dot full"></div>
                <div class="pc-dot "></div>
                <div class="pc-dot"></div>
                <div class="pc-dot"></div>
              </div>
            </div>
            <div class="mb-3">
              <span class="rpg-text-title fs-2">Percepção</span>
              <div class="progress-container">
                <div class="pc-dot full"></div>
                <div class="pc-dot full"></div>
                <div class="pc-dot full"></div>
                <div class="pc-dot full"></div>
                <div class="pc-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-site-register-bottom d-flex justify-content-center align-items-center p-3">
        <a className="btn-rpg" href="#">Registrar</a>
      </div>
    </main>
  );
};

export default Register;
