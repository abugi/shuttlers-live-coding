<script setup>
const navItems = [
  {
    name: 'home',
    icon: 'https://res.cloudinary.com/greeanbrain/image/upload/v1659690054/suburban-sales-automation-assets/Icon.svg',
  },
  {
    name: 'notification',
    icon: 'https://res.cloudinary.com/greeanbrain/image/upload/v1659690053/suburban-sales-automation-assets/bell.svg',
  },
  {
    name: 'dashboard',
    icon: 'https://res.cloudinary.com/greeanbrain/image/upload/v1659765331/suburban-sales-automation-assets/dashboard-icon.svg',
  },
  {
    name: 'checked',
    icon: 'https://res.cloudinary.com/greeanbrain/image/upload/v1659765331/suburban-sales-automation-assets/check-square.svg',
  },
  {
    name: 'report',
    icon: 'https://res.cloudinary.com/greeanbrain/image/upload/v1659690054/suburban-sales-automation-assets/flag.svg',
  },
   {
    name: 'users',
    icon: 'https://res.cloudinary.com/greeanbrain/image/upload/v1659765331/suburban-sales-automation-assets/users.svg',
  },
];

const settings = [
  {
    name: 'profile',
    icon: 'https://res.cloudinary.com/greeanbrain/image/upload/v1659765331/suburban-sales-automation-assets/profile.svg',
  },
  {
    name: 'setting',
    icon: 'https://res.cloudinary.com/greeanbrain/image/upload/v1659690054/suburban-sales-automation-assets/gear.svg',
  },
];
</script>

<template>
  <main class="bg-primary-color h-screen flex flex-col justify-between px-[24px] pt-[32px] pb-[109px]">
    <div>
      <img src="https://res.cloudinary.com/greeanbrain/image/upload/v1659765331/suburban-sales-automation-assets/logo.svg" alt="shuttlers home" class="cursor-pointer">
      <ul class="mt-[38px]">
        <li v-for="(item, index) in navItems" :key="index" class="mb-9 flex flex-col items-center justify-center cursor-pointer" :class="{'bg-white bg-opacity-30 p-3 rounded-md': item.name === 'dashboard'}">
          <img :src="item.icon" alt="" />
        </li>
      </ul>
    </div>
    <ul>
      <li v-for="(item, index) in settings" :key="index" class="mb-9 flex flex-col items-center justify-center cursor-pointer">
        <img :src="item.icon" alt="" />
      </li>
    </ul>
  </main>
</template>
