<script setup>
import SideBar from '../components/AppSideBar.vue'
import AppBar from '../components/AppBar.vue'
import MobileNav from '../components/AppBarMobile.vue'
import ActiveUsersWidget from '../components/ActiveUsersWidget.vue'
import RecentTransactions from '../components/RecentTransactions.vue'

const countriesData = [
  {
    country: 'united states',
    percentage: 50,
    flag: 'https://res.cloudinary.com/greeanbrain/image/upload/v1659693016/suburban-sales-automation-assets/us.svg',
  },
  {
    country: 'india',
    percentage: 30,
    flag: 'https://res.cloudinary.com/greeanbrain/image/upload/v1659693016/suburban-sales-automation-assets/india.svg',
  },
  {
    country: 'united kingdom',
    percentage: 20,
    flag: 'https://res.cloudinary.com/greeanbrain/image/upload/v1659693016/suburban-sales-automation-assets/gb.svg',
  },
  {
    country: 'australia',
    percentage: 10,
    flag: 'https://res.cloudinary.com/greeanbrain/image/upload/v1659693016/suburban-sales-automation-assets/australia.svg',
  },
  {
    country: 'canada',
    percentage: 10,
    flag: 'https://res.cloudinary.com/greeanbrain/image/upload/v1659693016/suburban-sales-automation-assets/CA.svg',
  },
];

const subs = [
  {
    name: 'Subscription',
    amount: 148.40,
    label: '#2E90FA',
  },
  {
    name: 'Mortgage',
    amount: 824.28,
    label: '#F79009',
  },
  {
    name: 'Investing',
    amount: 290.00,
    label: '#12B76A',
  },
  {
    name: 'Food and dinning',
    amount: 614.16,
    label: '#EE46BC',
  },
  {
    name: 'Groceries',
    amount: 642.48,
    label: '#6172F3',
  },
  {
    name: 'Others',
    amount: 48.44,
    label: '#4E5BA6',
  },
];


</script>

<template>
  <section class="flex items-start">
    <SideBar class="xl:inline-flex lg:inline-flex md:inline-flex hidden flex-shrink-0" />
    <main class="w-full">
        <MobileNav class="xl:hidden lg:hidden md:hidden block" />
        <AppBar />
        <hr class="xl:mx-8 lg:mx-6 md:mx-6 mx-3 mb-12" />

        <section class="xl:mx-8 lg:mx-6 md:mx-6 mx-3 flex xl:flex-row lg:flex-row md:flex-row flex-col">
            <aside class="xl:w-1/4 lg:w-1/4 md:1/4 w-full flex-shrink-0 xl:mr-[64px] lg:mr-[64px] md:mr-[64px] mr-0">
                <ActiveUsersWidget :countriesData="countriesData" />
                <RecentTransactions />
            </aside>
            <main class="w-full">
            <section class="xl:mt-0 lg:mt-0 md:mt-0 mt-8">
                <div class="flex xl:flex-row lg:flex-row md:flex-row flex-col xl:items-center lg:items-center md:items-center items-start justify-between pb-[26px] mb-[24px] border-b border-interaction-color">
                    <div class="font-medium text-[18px] leading-10">Monthly spending</div>
                    <div class="flex text-sm font-medium text-center">
                        <div class="px-4 py-[10px] border border-interaction-color rounded-l-lg relative flex items-center">
                            <span class="w-[8px] h-[8px] bg-[#12B76A] rounded-full mr-[9px]"></span>
                            <span>This month</span>
                        </div>
                        <div class="px-4 py-[10px] border-t border-b border-interaction-color">Last month</div>
                        <div class="px-4 py-[10px] border border-interaction-color rounded-r-lg">
                            <input type="radio" class="xl:hidden lg:hidden md:hidden inline">
                            <div class="xl:flex lg:flex md:flex hidden">
                                <img src="../assets/images/plus-icon.svg" alt="custom" class="mr-2">
                                <span>Custom</span>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="flex xl:flex-row lg:flex-row md:flex-row flex-col xl:items-center lg:items-center md:items-center items-start">
                <div class="w-[224px] h-[224px] bg-gray-200 flex-shrink-0 rounded-full"></div>
                <div class="w-full grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-8 xl:ml-12 lg:ml-12 md:ml-10 ml-4 xl:pr-[181px] lg:pr-[181px] md:pr-[181px] pr-[65px] xl:mt-0 lg:mt-0 md:mt-0 mt-6">
                    <div v-for="item in subs" class="relative">
                    <div class="text-sm leading-loose text-[#667085] font-medium">{{ item.name }}</div>
                    <div class="text-2xl font-semibold">${{ item.amount }}</div>
                    <div
                        class="w-2 h-2 rounded-full absolute -left-4 top-1"
                        :style="{ backgroundColor: item.label }"
                    ></div>
                    </div>
                </div>
                </section>
                <section class="flex xl:flex-row lg:flex-row md:flex-row flex-col xl:items-center lg:items-center md:items-center items-start justify-between pb-[26px] mt-[46px] border-b border-interaction-color">
                    <div class="font-medium text-[18px] leading-loose">Balance over time</div>
                    <div class="grid grid-cols-3 text-sm font-medium text-center">
                        <div class="px-4 py-[10px] border border-interaction-color rounded-l-lg">
                            12 months
                        </div>
                        <div class="px-4 py-[10px] border-t border-b border-gray-200">30 days</div>
                        <div class="px-4 py-[10px] border border-interaction-color rounded-r-lg">
                            <span>7 days</span>
                        </div>
                    </div>
                </section>
            </section>

            <section>
                chart
            </section>
            </main>
      </section>
    </main>
  </section>
</template>
