<script setup lang="ts">
import ArticleCard from "./ArticleCard.vue";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { ref, watch } from "vue";
const breakpoints = useBreakpoints(breakpointsTailwind);
const lgAndLarger = breakpoints.greaterOrEqual("lg");
const carousel = ref();
const disableOnInit = ref(lgAndLarger.value);

watch(lgAndLarger, (lgAndLarger) => {
  if (lgAndLarger) {
    carousel.value.disableInput();
    carousel.value.moveTo(0);
  } else {
    carousel.value.enableInput();
    carousel.value.moveTo(0);
  }
});
</script>

<template>
  <div
    class="py-[70px] !px-0 container-section line-background-2 overflow-hidden"
  >
    <div
      class="container-content !px-0 flex flex-col gap-[70px] mx-auto relative"
    >
      <h3
        class="text-shadow-10 text-theme-white text-[24px] font-bold text-center"
      >
        Take a
        <span class="font-extrabold text-theme-yellow">deeper dive</span> into a
        new way to work
      </h3>

      <Flicking
        ref="carousel"
        :options="{
          align: 'prev',
          bounce: '10%',
          disableOnInit: disableOnInit,
        }"
      >
        <div
          :key="1"
          data-aos="fade-up"
          data-aos-duration="500"
          class="!bg-theme-yellow card card-hover-animation cursor-pointer py-[18px] px-[12px] w-fit flex flex-col justify-between"
        >
          <div class="flex flex-col gap-1 w-[182px]">
            <span class="text-[12px] font-medium">Collection</span>
            <h4 class="font-bold tracking-[-0.07px] text-[14px]">
              Slack as you Digital HQ
            </h4>
          </div>
          <img
            src="/illustrations/meditate.svg"
            width="182"
            height="112"
            aria-hidden="true"
          />

          <div class="text-right">
            <a href="#" class="text-[14px] font-bold">Read More ></a>
          </div>
        </div>
        <ArticleCard
          :key="2"
          data-aos="fade-up"
          data-aos-duration="700"
          img="/images/article.png"
          title="See how others are building their digital HQ"
          category="Resource"
        ></ArticleCard>
        <ArticleCard
          :key="3"
          data-aos="fade-up"
          data-aos-duration="900"
          img="/images/article-2.png"
          title="Win the battle for talent with a digital HQ"
          category="Webinar"
        ></ArticleCard>
        <ArticleCard
          :key="4"
          data-aos="fade-up"
          data-aos-duration="1100"
          img="/images/article-3.png"
          title="Reinventing work: New imperatives for the future of working"
          category="E-Book"
        ></ArticleCard>
      </Flicking>
    </div>
  </div>
</template>

<style>
.flicking-camera {
  @apply gap-6 py-5 px-3 lg:justify-center;
}
</style>
