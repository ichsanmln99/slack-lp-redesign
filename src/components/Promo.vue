<script setup lang="ts">
import Button from "./Button.vue";
</script>

<template>
  <div class="container-section border-t-2 border-theme-black overflow-hidden">
    <div class="container-content py-[70px] flex flex-col gap-[60px]">
      <div class="text-center flex flex-col items-center gap-[12px]">
        <div class="relative">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            class="absolute -left-28 -top-6 font-karla hidden md:block"
          >
            <div
              class="flex gap-2 border border-theme-black px-[12px] py-[6px] rounded-[14px]"
            >
              <img src="/emojis/locked.svg" aria-hidden="true" /> 12
            </div>
            <div
              class="-translate-x-10 my-5 flex gap-2 scale-75 border border-theme-black px-[12px] py-[6px] rounded-[14px]"
            >
              <img src="/emojis/briefcase.svg" aria-hidden="true" /> 30
            </div>
            <div
              class="-translate-x-3 flex gap-2 scale-90 border border-theme-black px-[12px] py-[6px] rounded-[14px]"
            >
              <img src="/emojis/chart.svg" aria-hidden="true" /> 27
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            class="absolute -right-36 -top-6 font-karla hidden md:block"
          >
            <div
              class="flex gap-2 border border-theme-black scale-75 px-[12px] py-[6px] rounded-[14px]"
            >
              <img src="/emojis/biceps.svg" aria-hidden="true" /> 27
            </div>
            <div
              class="-translate-x-10 my-5 flex gap-2 border border-theme-black px-[12px] py-[6px] rounded-[14px]"
            >
              <img src="/emojis/heart.svg" aria-hidden="true" /> 42
            </div>
            <div
              class="translate-x-3 flex gap-2 scale-75 border border-theme-black px-[12px] py-[6px] rounded-[14px]"
            >
              <img src="/emojis/love-you.svg" aria-hidden="true" /> 18
            </div>
          </div>

          <div
            class="text-[28px] font-semibold flex items-center justify-center"
          >
            <h3>
              Teams <span class="font-extrabold">Large</span> and
              <span class="font-medium">small</span> rely on
              <span class="md:hidden">Slack</span>
            </h3>
            <div class="ml-3 relative md:inline-block hidden">
              <img
                class="absolute -top-5 -left-6"
                src="/icons/FX.svg"
                aria-hidden="true"
              />
              <img src="/brand-2.svg" alt="slack" />
            </div>
          </div>
          <p class="text-[18px] font-semibold lg:w-[600px]">
            Slack securely scales up to support collaboration at the world’s
            biggest companies.
          </p>
        </div>
      </div>
      <div class="flex justify-center flex-col sm:flex-row gap-[10px]">
        <Button color="black">Meet Slack For Enterprise</Button>
        <Button>Talk to Sales</Button>
      </div>
      <div
        class="flex sm:justify-between gap-10 sm:gap-0 flex-col items-center text-center sm:text-left sm:flex-row w-full md:w-[718px] self-center"
      >
        <div class="sm:w-[180px]">
          <h3
            class="text-shadow-10 text-theme-yellow font-karla font-extrabold text-5xl mb-3"
          >
            85%
          </h3>
          <p class="font-medium sm:text-sm leading-[14px] w-52 sm:w-full">
            of users say Slack has improved communication*
          </p>
        </div>
        <div class="sm:w-[180px]">
          <h3
            class="text-shadow-10 text-theme-light-green font-karla font-extrabold text-5xl mb-3"
          >
            86%
          </h3>
          <p class="font-medium sm:text-sm leading-[14px] w-52 sm:w-full">
            feel their ability to work remotely has improved*
          </p>
        </div>
        <div class="sm:w-[180px]">
          <h3
            class="text-shadow-10 text-theme-light-blue font-karla font-extrabold text-5xl mb-3"
          >
            88%
          </h3>
          <p class="font-medium sm:text-sm leading-[14px] w-52 sm:w-full">
            feel more connected to their teams*
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
