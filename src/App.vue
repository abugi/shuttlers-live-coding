<script setup>
import SideBar from "./components/AppSideBar.vue";
import AppBar from "./components/AppBar.vue";

const countriesData = [
  {
    country: "united states",
    percentage: 50,
    flag: "https://res.cloudinary.com/greeanbrain/image/upload/v1659693016/suburban-sales-automation-assets/us.svg",
  },
  {
    country: "india",
    percentage: 35,
    flag: "https://res.cloudinary.com/greeanbrain/image/upload/v1659693016/suburban-sales-automation-assets/india.svg",
  },
  {
    country: "united kingdom",
    percentage: 65,
    flag: "https://res.cloudinary.com/greeanbrain/image/upload/v1659693016/suburban-sales-automation-assets/gb.svg",
  },
  {
    country: "australia",
    percentage: 20,
    flag: "https://res.cloudinary.com/greeanbrain/image/upload/v1659693016/suburban-sales-automation-assets/australia.svg",
  },
];

const subs = [
  {
    name: "subscription",
    amount: 148.4,
    label: "#2E90FA",
  },
  {
    name: "mortgage",
    amount: 824.28,
    label: "#F79009",
  },
  {
    name: "investing",
    amount: 290.0,
    label: "#12B76A",
  },
  {
    name: "food and dinning",
    amount: 616.4,
    label: "#EE46BC",
  },
  {
    name: "groceries",
    amount: 148.4,
    label: "#6172F3",
  },
  {
    name: "others",
    amount: 48.44,
    label: "#4E5BA6",
  },
];
</script>

<template>
  <section class="flex items-start">
    <SideBar class="flex-shrink-0" />
    <main class="w-full">
      <AppBar />

      <section class="ml-[32px] flex">
        <div
          class="w-1/4 p-5 rounded-md border border-[#EAECF0] flex-shrink-0 mr-[64px]"
        >
          <h2 class="text-sm font-medium">Active users right now</h2>
          <div class="text-[36px] font-semibold">10.8k</div>
          <div class="my-3">
            <div v-for="item in countriesData" class="flex items-center w-full">
              <img :src="item.flag" :alt="item.country" />
              <div class="flex-grow-[1] ml-3">
                <div class="text-xs">{{ item.country }}</div>
                <div class="flex items-center text-xs leading-none">
                  <div class="bg-[#EAECF0] h-2 rounded-full w-full">
                    <div
                      class="bg-primary-color h-full rounded-full"
                      :style="{ width: item.percentage + '%' }"
                    ></div>
                  </div>
                  <div class="flex-shrink-0 p-2">{{ item.percentage }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main class="w-full">
          <section>
            <div class="font-medium text-[18px]">Monthly spending</div>
            <section class="flex items-start">
              <div class="w-[224px] h-[224px] bg-gray-200 flex-shrink-0"></div>
              <div class="w-full grid grid-cols-3 gap-12 ml-20">
                <div v-for="item in subs" class="relative">
                  <div class="text-xs capitalize">{{ item.name }}</div>
                  <div class="text-xl font-semibold">${{ item.amount }}</div>
                  <div
                    class="w-2 h-2 rounded-full absolute -left-4 top-1"
                    :style="{ backgroundColor: item.label }"
                  ></div>
                </div>
              </div>
            </section>
            <section class="flex my-8">
              <div class="font-medium">Balance over time</div>
              <div class="flex">
                <div>month</div>
                <div>30 days</div>
                <div>7 days</div>
              </div>
            </section>
          </section>
        </main>
      </section>
    </main>
  </section>
</template>

<style scoped></style>
