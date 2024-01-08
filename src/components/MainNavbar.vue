<script setup lang="ts">
import { ref } from "vue";
import { useScrollLock } from "@vueuse/core";

const sidebarToggled = ref(false);
const isScrollLocked = useScrollLock(window);

function toggleSidebar() {
  sidebarToggled.value = !sidebarToggled.value;
  isScrollLocked.value = sidebarToggled.value;
}
</script>

<template>
  <nav
    class="navbar flex h-[72px] w-full border-b-2 border-theme-black bg-theme-white divide-x-2 divide-theme-black"
  >
    <div class="px-6 h-full flex items-center flex-1 lg:flex-none">
      <img src="/brand.svg" width="127" height="34" alt="Slack Logo" />
    </div>
    <div
      class="mobile-sidebar relative flex-1"
      :class="{ open: sidebarToggled }"
    >
      <div class="flex lg:hidden justify-between h-[72px] px-6 items-center">
        <div>
          <img src="/brand.svg" width="127" height="34" alt="Slack Logo" />
        </div>
        <button class="p-2" @click="toggleSidebar">
          <img
            class="ml-[6px]"
            src="/icons/close.svg"
            height="18"
            width="18"
            alt="close"
          />
        </button>
      </div>
      <ul class="list-none inline-block">
        <li>
          <a href="">
            Products
            <img
              class="ml-[6px]"
              src="/icons/chevron-down.svg"
              height="18"
              width="18"
              aria-hidden="true"
            />
          </a>
        </li>
        <li>
          <a href="#">Solutions </a>
        </li>
        <li>
          <a href="#">Enterprise </a>
        </li>
        <li>
          <a href="#">Resource </a>
        </li>
        <li>
          <a href="#">Pricing </a>
        </li>
      </ul>
    </div>
    <div class="flex-0 flex px-6">
      <button class="p-2">
        <img height="18" width="18" src="/icons/search.svg" alt="search" />
      </button>
      <button class="p-2 lg:hidden" @click="toggleSidebar">
        <img height="18" width="18" src="/icons/menu.svg" alt="Menu" />
      </button>
    </div>
    <div class="flex-0 xl:flex items-center hidden">
      <button class="flex gap-[6px] px-6 h-full items-center">
        <img
          height="18"
          width="18"
          src="/icons/headphone.svg"
          aria-hidden="true"
        />
        Talk To Sales
      </button>
    </div>
    <div class="flex-0 hidden lg:flex">
      <button
        class="bg-theme-black hover:bg-theme-black-hover text-theme-white px-6 h-full items-center"
      >
        Login / Register
      </button>
    </div>
  </nav>
</template>

<style>
@media only screen and (max-width: 1024px) {
  .mobile-sidebar {
    @apply bg-white fixed right-0 top-0 h-dvh w-0 transition-all ease-in-out duration-200 delay-200;
  }

  .mobile-sidebar.open {
    @apply w-screen;
  }
}

.navbar ul {
  @apply flex h-full lg:gap-3 gap-6 lg:px-3 p-6 flex-col lg:flex-row;
}

.navbar ul li {
  @apply lg:h-full px-3 relative;
}

.navbar ul li a {
  @apply flex items-center w-fit relative;
}

.navbar ul li a:hover::after {
  width: 60%;
}

.navbar ul li a::after {
  @apply border-b-2 border-theme-black absolute -bottom-2.5;
  -moz-transition: width 100ms ease-in-out;
  -o-transition: width 100ms ease-in-out;
  transition: width 100ms ease-in-out;
  content: "";
  width: 0%;
  height: auto;
}

.navbar {
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.96px;
}
</style>
