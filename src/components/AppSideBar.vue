<script setup>
const navItems = [
  {
    name: "home",
    icon: "https://res.cloudinary.com/greeanbrain/image/upload/v1659690054/suburban-sales-automation-assets/Icon.svg",
  },
  {
    name: "notification",
    icon: "https://res.cloudinary.com/greeanbrain/image/upload/v1659690053/suburban-sales-automation-assets/bell.svg",
  },
  {
    name: "report",
    icon: "https://res.cloudinary.com/greeanbrain/image/upload/v1659690054/suburban-sales-automation-assets/flag.svg",
  },
];

const settings = [
  {
    name: "setting",
    icon: "https://res.cloudinary.com/greeanbrain/image/upload/v1659690054/suburban-sales-automation-assets/gear.svg",
  },
];
</script>

<template>
  <main class="bg-primary-color h-screen flex flex-col justify-between py-20">
    <ul>
      <li v-for="(item, index) in navItems" :key="index" class="py-4 px-4">
        <img :src="item.icon" alt="" />
      </li>
    </ul>
    <ul>
      <li v-for="(item, index) in settings" :key="index" class="py-4 px-4">
        <img :src="item.icon" alt="" />
      </li>
    </ul>
  </main>
</template>
