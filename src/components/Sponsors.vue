<template>
  <div class="container-section bg-theme-white border-y-2 border-theme-black">
    <div
      class="container-content py-[70px] flex flex-col justify-center items-center gap-[64px] px-2"
    >
      <div class="relative">
        <h3
          class="sm:text-[34px] text-[24px] sm:w-[500px] leading-9 text-center font-bold"
        >
          <span class="ornament-1">TRUSTED </span>
          BY COMPANIES
          <span class="font-extrabold sm:text-[24px] text-[20px]"
            >ALL OVER THE <span class="ornament-2">WORLD</span></span
          >
        </h3>
      </div>
      <div class="flex sm:gap-[82px] gap-10 flex-wrap justify-center">
        <img width="74" height="74" src="/icons/Airbnb.svg" alt="Airbnb" />
        <img width="74" height="74" src="/icons/Nasa.svg" alt="Nasa" />
        <img width="74" height="74" src="/icons/Uber.svg" alt="Uber" />
        <img width="74" height="74" src="/icons/NYT.svg" alt="NYT" />
        <img width="74" height="74" src="/icons/Etsy.svg" alt="Etsy" />
      </div>
    </div>
  </div>
</template>

<style>
.ornament-1 {
  position: relative;
}

.ornament-1::after {
  @apply -top-9 -left-8 hidden sm:inline-block;
  position: absolute;
  content: "";
  width: 69px;
  height: 67px;
  background-image: url("/half-circle.svg");
}

.ornament-2 {
  position: relative;
}

.ornament-2::after {
  @apply sm:right-0 -bottom-4 -right-3;
  position: absolute;
  content: "";
  width: 162px;
  height: 12px;
  background-image: url("/line.svg");
}
</style>
