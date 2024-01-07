<script setup lang="ts">
import Button from "./Button.vue";
</script>

<template>
  <div
    class="grid md:grid-cols-2 lg:h-[646px] md:divide-x-2 divide-theme-black divide-y-2 md:divide-y-0 overflow-hidden"
  >
    <div
      class="bg-theme-purple py-16 md:px-6 px-4 text-center md:text-left md:py-[95px] md:pl-[64px] md:pr-[60px] flex items-center justify-end h-full"
    >
      <div class="max-w-[720px] w-full flex flex-col gap-10 md:gap-[62px]">
        <div class="xl:w-[530px] md:gap-[48px] gap-4 flex flex-col">
          <h2 class="hero-headline">
            Great teamwork starts
            <span class="headline-bold"
              >with a <span class="text-theme-yellow">digital HQ</span></span
            >
          </h2>

          <p class="text-theme-white text-[21px] font-normal md:text-justify">
            With all your people, tools and communication in one place, you can
            work <span class="font-semibold">faster</span> and
            <span class="font-semibold">more flexibility</span> than ever
            before.
          </p>
        </div>

        <div class="flex md:gap-[26px] gap-4 flex-wrap xl:flex-nowrap">
          <Button class="w-full justify-center" color="black"
            >Email Signup</Button
          >
          <Button class="w-full justify-center">
            <img
              class="ml-[6px]"
              src="/icons/google.svg"
              height="18px"
              width="18px"
              alt="chevron-down"
              aria-hidden="true"
            />
            Google Signup</Button
          >
        </div>
      </div>
    </div>
    <div
      class="bg-theme-yellow flex justify-left md:items-center relative h-[300px] md:h-full overflow-hidden"
    >
      <div class="w-[720px] md:absolute mt-8 md:mt-0 md:ml-6">
        <video src="/hero.webm" playsinline autoplay muted loop></video>
      </div>
    </div>
  </div>
</template>

<style>
.hero-headline {
  @apply text-theme-white;

  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  align-self: stretch;
}

.hero-headline .headline-bold {
  font-weight: 800;
  line-height: 120%;
  letter-spacing: 1.76px;
}
</style>
