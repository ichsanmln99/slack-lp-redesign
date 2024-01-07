<script setup lang="ts">
interface Props {
  color?: "black" | "white";
}

const props = withDefaults(defineProps<Props>(), {
  color: "white",
});

const buttonStyle =
  "flex gap-[6px] justify-center items-center px-[24px] py-[14px] rounded-[14px]  font-bold text-[18px]";
</script>

<template>
  <button :class="[`btn-${props.color}`, buttonStyle]" class="leading-[normal]">
    <slot></slot>
  </button>
</template>

<style>
.btn-white {
  @apply bg-theme-white border-2 border-theme-black;
  transition: box-shadow 0.15s ease-in-out;
}

.btn-white:hover {
  box-shadow: 6px 6px 0px 0px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 6px 6px 0px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 6px 6px 0px 0px rgba(0, 0, 0, 1);
}

.btn-black {
  @apply bg-theme-black text-theme-white relative;
  transition: box-shadow 0.15s ease-in-out;
}

.btn-black:hover {
  -webkit-box-shadow: 3px 3px 0px 0px #d26eda,
    3px 3px 0px 2px theme("colors.theme.black"), 6px 6px 0px 0px #96def9,
    6px 6px 0px 2px theme("colors.theme.black");

  box-shadow: 3px 3px 0px 0px #d26eda,
    3px 3px 0px 1px theme("colors.theme.black"), 6px 6px 0px 0px #96def9,
    6px 6px 0px 2px theme("colors.theme.black");
}
</style>
