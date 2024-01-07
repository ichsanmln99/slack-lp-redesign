<script setup lang="ts">
import MainNavbar from "./components/MainNavbar.vue";
import Hero from "./components/Hero.vue";
import Sponsors from "./components/Sponsors.vue";
import Features from "./components/Features.vue";
import Promo from "./components/Promo.vue";
import Article from "./components/Article.vue";
import Testimonial from "./components/Testimonial.vue";
import Footer from "./components/Footer.vue";
// import Button from "./components/Button.vue";
</script>

<template>
  <section class="sticky top-0 z-10" id="navbar">
    <MainNavbar></MainNavbar>
  </section>

  <section id="hero">
    <Hero></Hero>
  </section>

  <section id="sponsors">
    <Sponsors></Sponsors>
  </section>

  <section id="features">
    <Features></Features>
  </section>

  <section id="promo">
    <Promo></Promo>
  </section>

  <section id="testimonial">
    <Testimonial></Testimonial>
  </section>

  <section id="articles">
    <Article></Article>
  </section>

  <section id="footer">
    <Footer></Footer>
  </section>
</template>
