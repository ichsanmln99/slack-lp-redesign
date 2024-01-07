<script setup lang="ts">
import FooterMenu from "./FooterMenu.vue";
</script>

<template>
  <footer class="border-y-2 divide-y-2 divide-theme-black border-theme-black">
    <div class="container-section bg-theme-purple py-[42px]">
      <div
        class="container-content flex flex-col md:flex-row gap-y-2 text-theme-white justify-between"
      >
        <div class="lg:py-[12px] pb-10">
          <img src="/brand-logo.svg" alt="Slack" />
        </div>
        <div>
          <FooterMenu
            title="Why Slacks?"
            :menus="[
              {
                label: 'Slack vs. Email',
                url: '#',
              },
              {
                label: 'Engagement',
                url: '#',
              },
              {
                label: 'Scale',
                url: '#',
              },
              {
                label: 'Watch the Demo',
                url: '#',
              },
            ]"
          ></FooterMenu>
        </div>
        <div>
          <FooterMenu
            title="Product"
            :menus="[
              {
                label: 'Features',
                url: '#',
              },
              {
                label: 'Integrations',
                url: '#',
              },
              {
                label: 'Enterprise',
                url: '#',
              },
              {
                label: 'Solutions',
                url: '#',
              },
            ]"
          ></FooterMenu>
        </div>
        <div>
          <FooterMenu
            title="Pricing"
            :menus="[
              {
                label: 'Plans',
                url: '#',
              },
              {
                label: 'Paid vs. Free',
                url: '#',
              },
            ]"
          ></FooterMenu>
        </div>
        <div>
          <FooterMenu
            title="Resources"
            :menus="[
              {
                label: 'Partners',
                url: '#',
              },
              {
                label: 'Developers',
                url: '#',
              },
              {
                label: 'Community',
                url: '#',
              },
              {
                label: 'Apps',
                url: '#',
              },
              {
                label: 'Blog',
                url: '#',
              },

              {
                label: 'Help Center',
                url: '#',
              },
              {
                label: 'Events',
                url: '#',
              },
            ]"
          ></FooterMenu>
        </div>
        <div>
          <FooterMenu
            title="Company"
            :menus="[
              {
                label: 'About Us',
                url: '#',
              },
              {
                label: 'Leadership',
                url: '#',
              },
              {
                label: 'News',
                url: '#',
              },
              {
                label: 'Media Kit',
                url: '#',
              },
              {
                label: 'Careers',
                url: '#',
              },

              {
                label: 'Swags Store',
                url: '#',
              },
            ]"
          ></FooterMenu>
        </div>
      </div>
    </div>
    <div class="container-section bg-theme-yellow py-[24px]">
      <div
        class="container-content flex flex-col md:flex-row justify-between md:items-center gap-y-10"
      >
        <ul class="flex flex-col md:flex-row list-none gap-[18px] text-[12px]">
          <li><a href="#">Status</a></li>

          <li><a href="#">Privacy</a></li>

          <li><a href="#">Terms</a></li>

          <li><a href="#">Cookie Preferences</a></li>

          <li><a href="#">Contact Us</a></li>
        </ul>
        <div
          class="flex gap-[18px] items-center flex-row-reverse md:flex-row justify-between"
        >
          <button
            class="shadow-solid-sm bg-theme-white font-semibold text-[12px] border-2 border-theme-black rounded-full py-[4px] px-[8px] flex gap-[2px]"
          >
            <img
              width="18"
              height="18"
              src="/icons/download-cloud.svg"
              aria-hidden="true"
            />
            Download Slack
          </button>
          <div class="flex gap-[18px]">
            <a href="#">
              <img
                class="svg-shadow-solid"
                src="/icons/twitter.svg"
                alt="Twitter"
              />
            </a>
            <a href="#">
              <img
                class="svg-shadow-solid"
                src="/icons/facebook.svg"
                alt="Facebook"
              />
            </a>
            <a href="#">
              <img
                class="svg-shadow-solid"
                src="/icons/youtube.svg"
                alt="Youtube"
              />
            </a>
            <a href="#">
              <img
                class="svg-shadow-solid"
                src="/icons/linkedin.svg"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
