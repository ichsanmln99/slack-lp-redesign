<script setup lang="ts">
interface Props {
  category: string;
  title: string;
  img: string;
}

defineProps<Props>();
</script>

<template>
  <div
    class="card card-hover-animation cursor-pointer article-card py-[18px] px-[12px] w-fit flex flex-col gap-3"
  >
    <img :src="img" width="182" height="112" :alt="title" />
    <div class="flex flex-col gap-1 w-[182px] pb-[16px] flex-1">
      <span class="text-[12px] font-medium">{{ category }}</span>
      <h4 class="font-bold tracking-[-0.07px] text-[14px]">
        {{ title }}
      </h4>
    </div>
    <div class="text-right">
      <a href="#" class="text-[14px] font-bold">Read More ></a>
    </div>
  </div>
</template>
