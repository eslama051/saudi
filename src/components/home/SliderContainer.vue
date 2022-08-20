<template>
  <section class="hero">
     <div class="social-media-wrapper">
      <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
      <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
      <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
     </div>
      <owl-carousel  class="slider-wrapper" :autoplay="true"
      :nav="false"
      :dots="true"
      :items="1"
      :mouseDrag="true"
      >
      
        <div class="owl-itema" >
          <div class="slider-img-wrapper">
          <img  class="slider_image" src="../../assets/images/home/bck1.png" alt=""></div>
          <div class="slider-content-wrapper">
            <h1>header</h1>
          </div>
          </div>
        <div class="owl-itema">
          <div class="slider-img-wrapper">
          <img  class="slider_image" src="../../assets/images/home/bck2.png" alt="">
          </div>
          <div class="slider-content-wrapper">
            <h1>header</h1>
          </div>
          </div>
       </owl-carousel > 
  </section>
</template>

<script>

export default {
  
}





