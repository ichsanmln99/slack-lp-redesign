<script setup lang="ts">
import { ref } from "vue";

interface Props {
  title: string;
  menus: {
    label: string;
    url: string;
  }[];
}

const isToggled = ref(false);

function toggle() {
  isToggled.value = !isToggled.value;
}

defineProps<Props>();
</script>

<template>
  <div>
    <div class="justify-between items-center flex" @click="toggle()">
      <h5 class="font-bold text-[14px] md:mb-[18px] uppercase">
        {{ title }}
      </h5>
      <img
        class="invert self-center md:hidden transition duration-300"
        :class="isToggled ? 'rotate-0' : ' -rotate-90'"
        width="20"
        height="20"
        src="/icons/chevron-down.svg"
        aria-hidden="true"
      />
    </div>
    <ul
      :class="
        isToggled ? 'h-auto opacity-100' : 'h-0 overflow-hidden opacity-0'
      "
      class="list-none flex flex-col gap-4 md:h-auto md:opacity-100 md:gap-[18px] py-[12px] text-[14px] transition ease-in-out"
    >
      <li v-for="(menu, index) in menus" :key="index">
        <a class="opacity-80" :href="menu.url">{{ menu.label }}</a>
      </li>
    </ul>
  </div>
</template>
