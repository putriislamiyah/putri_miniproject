<template>
  <div>
    <hero-section id="home" class="py-16 px-4 xl:px-32" />
    <reason-board class="py-16 px-4 xl:px-32" />
    <div class="mt-16 mb-24 grid grid-cols-3 gap-16 px-4 xl:px-32">
      <template v-for="feature in features">
        <feature-card :key="feature.title" :feature="feature" />
      </template>
    </div>
    <testimonials-board id="testi" />
    <div id="menu" class="text-center py-16 px-4 xl:px-32">
      <p class="text-orange-800 text-xl font-semibold">MENU YANG MEMBUATMU JATUH CINTA</p>
      <p class="my-8 leading-snug font-semibold text-4xl">ENJOY THE BEST MENU AND GET<br>THE BEST TASTE</p>
      <div class="grid grid-cols-3 gap-16 mt-16">
        <div class="relative">
          <img src="../assets/sop.jpeg" alt="salad" class="w-full object-cover rounded-3xl">
          <div class="absolute bottom-8 left-8 text-left">
            <router-link to='/soup' class="text-white text-xl font-semibold shadow">Soup Sayur</router-link> <br/>
            <router-link to='/soup' class="text-white shadow">BREAKFAST MENU </router-link>
          </div>
        </div>
        <div class="relative">
          <img src="../assets/steak.jpeg" alt="salad" class="w-full object-cover rounded-3xl">
          <div class="absolute bottom-8 left-8 text-left">
            <router-link to='/steak' class="text-white text-xl font-semibold shadow"> Beef Steak </router-link> <br/>
            <router-link to='/steak' class="text-white shadow">LUNCH MENU </router-link>
          </div>
        </div>
        <div class="relative">
          <img src="../assets/tahu.jpeg" alt="salad" class="w-full object-cover rounded-3xl">
          <div class="absolute bottom-8 left-8 text-left">
            <router-link to='/tofu' class="text-white text-xl font-semibold shadow">Tofu Yummy</router-link> <br/>
            <router-link to='/tofu' class="text-white shadow"> DINNER MENU</router-link>
          </div>
        </div>
      </div>
      <br/>
          <footer class="grid grid-cols-2 px-32 py-16">
      <h1 class="text-4xl font-bold">Contact : </h1>
      <p> Email     : healtyfood.sby@gmail.com </p> <b/>
      <p> Telp      : 089616726301 </p> <b/>
      <p> Instagram : HealtyFood.yeah </p> <b/>
      <p> Twitter   : @healthyfood.id </p> <b/>
      <p> Jl.Kolonel Sugiono, No.32 Surabaya, Jawa Timur, Indonesia. </p>
          </footer>
           <footer>
        <p class="text-center mb-1">
          Copyright, All Right Reserved
        </p>
        <p class="text-center mt-1">
          Designed by Putri Islamiah 
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import HeroSection from '../components/template/HeroSection.vue'
import ReasonBoard from '../components/mollecule/ReasonBoard.vue'
import FeatureCard from '../components/mollecule/FeatureCard.vue'
import TestimonialsBoard from '../components/template/TestimonialsBoard.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    ReasonBoard,
    FeatureCard,
    TestimonialsBoard
  },
  data() {
    return {
      features: [
        {
          title: 'Own Fruit Orchard',
          description: 'Langsung dari Kebun Sendiri yang tersebar di setiap provinsi yang memiliki cabang toko Jez Salad.',
          url: '#'
        },
        {
          title: '#1 Healthy Food',
          description: 'The pioneer of healthy fruit salads that are delicious & suitable for all people with the best quality assurance.',
          url: '#'
        },
        {
          title: '100 Top Brand',
          description: 'We are one of the best brands in the Food and Beverage sector in Indonesia.',
          url: '#'
        }
      ]
    }
  }
}
</script>
