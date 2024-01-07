<script setup lang="ts">
import Button from "./Button.vue";
</script>

<template>
  <div class="container-section border-b-2 border-theme-black">
    <div
      class="container-content flex flex-col-reverse md:flex-row gap-10 md:gap-0"
    >
      <div class="lg:w-[412px] relative flex justify-center">
        <img
          class="absolute top-0 -left-16"
          src="/triangle-up.svg"
          aria-hidden="true"
        />
        <div class="video-thumbnail relative">
          <div
            class="card hover:bg-red-600 cursor-pointer group absolute px-[32px] py-[14px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <img
              src="/icons/play.svg"
              class="group-hover:invert"
              aria-hidden="true"
              width="32"
              height="32"
            />
          </div>
        </div>
      </div>
      <div class="flex-1 py-[24px] flex flex-col gap-[12px] px-4">
        <p class="font-medium text-[24px] leading-[36px] text-justify">
          “We were able to create a large virtual network of employees that can
          communicate as though they are together. There was a lot of disruption
          in terms of where we worked, but in terms of how we worked—very little
          disruption.”
        </p>
        <div>
          <div class="font-bold text-[21px]">Mark Smith</div>
          <div class="text-[18px]">
            Senior Technical Product Manager, T-Mobile
          </div>
        </div>
        <div>
          <Button class="w-full md:w-auto">See more Customer Stories</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.video-thumbnail {
  @apply border-2 border-theme-black;

  background: url("/images/video-thumbnail.jpeg") 50% 50%;
  width: 333px;
  height: 414px;
  border-radius: 50% 50% 0 0;
  object-fit: cover;
}
</style>
