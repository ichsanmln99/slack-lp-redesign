<script setup lang="ts">
import { onMounted } from "vue";
import Button from "./Button.vue";
import AOS from "aos";

interface Props {
  title: string;
  description: string;
  video: string;
  textPosition: "right" | "left";
  buttonLabel: string;
}

defineProps<Props>();

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <div
    data-aos="fade-up"
    data-aos-duration="800"
    class="my-[20px] lg:my-[28px] lg:mx-[120px] mx-4 max-w-[1200px] card p-[10px] relative divide-y-2 md:divide-y-0"
    :class="
      textPosition === 'right'
        ? 'flex flex-col md:flex-row md:divide-x-2 pl-0'
        : 'flex flex-col md:flex-row-reverse  divide-x-reverse divide-x-2 pr-0'
    "
  >
    <div
      class="md:w-1/2 flex items-center py-8"
      :class="textPosition === 'right' ? '' : 'justify-end'"
    >
      <video
        :src="video"
        playsinline
        autoplay
        muted
        loop
        class="w-full md:max-w-[500px]"
      />
    </div>
    <div
      class="md:w-1/2 lg:py-[28px] lg:px-[64px] p-6 flex flex-col gap-[24px] justify-center"
    >
      <div class="flex flex-col gap-[18px]">
        <h4 class="font-bold text-[21px]">{{ title }}</h4>
        <p class="tracking-[0.024px] text-justify">
          {{ description }}
        </p>
      </div>

      <div>
        <Button class="font-normal text-[16px]"
          >{{ buttonLabel }}
          <img
            aria-hidden="true"
            width="18"
            height="18"
            src="/icons/external-link.svg"
          />
        </Button>
      </div>
    </div>
  </div>
</template>
