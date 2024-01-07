<script setup lang="ts">
import FeatureCard from "./FeatureCard.vue";
</script>

<template>
  <div
    class="py-[42px] flex flex-col line-background items-center overflow-hidden"
  >
    <div class="relative w-fit">
      <FeatureCard
        title="Bring Your Team Toghether"
        description="At the heart of Slack are channels: organized spaces for everyone and everything you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies."
        video="/feature-1.webm"
        button-label="More about channels"
        text-position="right"
      ></FeatureCard>
      <img
        data-aos="fade-up"
        data-aos-duration="1300"
        data-aos-anchor-placement="top-bottom"
        class="absolute lg:bottom-10 lg:right-10 -right-16 bottom-10"
        src="/line-2.svg"
        aria-hidden="true"
      />
    </div>

    <div class="relative w-fit">
      <FeatureCard
        title="Choose how you want to work"
        description="In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live."
        video="/feature-2.webm"
        button-label="Flexible Communication"
        text-position="left"
      ></FeatureCard>
      <img
        data-aos="fade-up"
        data-aos-duration="1300"
        data-aos-anchor-placement="top-bottom"
        class="absolute lg:bottom-10 lg:left-12 bottom-32 -left-14"
        src="/star-2.svg"
        aria-hidden="true"
      />
    </div>

    <div class="relative w-fit">
      <FeatureCard
        title="Move faster with your tools in one place"
        description="With your other work apps connected to Slack, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks."
        video="/feature-3.webm"
        button-label="Learn more about channels"
        text-position="right"
      ></FeatureCard>
      <img
        data-aos="fade-up"
        data-aos-duration="1300"
        data-aos-anchor-placement="top-bottom"
        class="absolute lg:bottom-10 lg:right-12 -right-10 bottom-32"
        src="/star.svg"
        aria-hidden="true"
      />
    </div>
  </div>
</template>
