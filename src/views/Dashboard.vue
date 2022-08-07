<script setup>
import SideBar from '../components/AppSideBar.vue'
import AppBar from '../components/AppBar.vue'
import MobileNav from '../components/AppBarMobile.vue'
import ActiveUsersWidget from '../components/ActiveUsersWidget.vue'
import RecentTransactions from '../components/RecentTransactions.vue'
import RadialProgressBar from 'vue-radial-progress'
import { countriesData, subs } from '../db/db'

// Radial Progress Bar data
const totalSteps = 100
const stepOne = 85
const stepTwo = 76


</script>

<template>
  <section class="flex items-start">
    <SideBar class="xl:inline-flex lg:inline-flex md:hidden hidden flex-shrink-0" />
    <main class="w-full h-screen overflow-y-scroll overscroll-contain">
        <MobileNav class="xl:hidden lg:hidden md:flex flex" />
        <AppBar />
        <hr class="xl:mx-8 lg:mx-6 md:mx-6 mx-3 mb-12" />

        <section class="xl:mx-8 lg:mx-6 md:mx-6 mx-3 flex xl:flex-row lg:flex-row md:flex-row flex-col">
            <aside class="xl:w-1/4 lg:w-1/4 md:w-full w-full flex-shrink-0 xl:mr-[64px] lg:mr-[64px] md:mr-[64px] mr-0">
                <ActiveUsersWidget :countriesData="countriesData" />
                <RecentTransactions />
            </aside>
            <main class="w-full">
            <section class="xl:mt-0 lg:mt-0 md:mt-8 mt-8">
                <div class="flex xl:flex-row lg:flex-row md:flex-col flex-col xl:items-center lg:items-center md:items-center items-start justify-between pb-[26px] mb-[24px] border-b border-interaction-color">
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
                <section class="flex xl:flex-row lg:flex-row md:flex-col flex-col xl:items-center lg:items-center md:items-center items-start">
                <div class="w-[224px] h-[224px] flex-shrink-0 rounded-full">
                    <radial-progress-bar 
                      :diameter="224"
                      :completed-steps="stepOne"
                      :total-steps="totalSteps"
                      
                      innerStrokeColor="#F9F5FF"
                      innerStrokeWidth="16"
                      strokeWidth="16"
                       >
                       <div class="inner-graph">
                         <radial-progress-bar 
                           :diameter="184"
                           :completed-steps="stepTwo"
                           :total-steps="totalSteps"
                           startColor="#7F56D9"
                           stopColor="#7F56D9"
                           innerStrokeColor="#F9F5FF"
                           innerStrokeWidth="16"
                           strokeWidth="16"
                           >
                         <p class="text-sm text-[#667085]">Total</p>
                         <p class="font-semibold text-[30px]">$2,280</p>
                         </radial-progress-bar>

                       </div>
                    </radial-progress-bar>
                </div>
                <div class="w-full grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-9 xl:ml-12 lg:ml-12 md:ml-10 ml-4 xl:pr-[180px] lg:pr-0 md:pr-0 pr-[65px] xl:mt-0 lg:mt-0 md:mt-0 mt-6">
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
                <section>
                  <div class="flex xl:flex-row lg:flex-row md:flex-row flex-col xl:items-center lg:items-center md:items-center items-start justify-between pb-[26px] mt-[46px] border-b border-interaction-color mb-8">
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
                  </div>
                  <div class="w-full h-[187px] bg-interaction-color">
                      Line chart
                  </div>
                </section>
                <section>
                  <div class="flex xl:flex-row lg:flex-row md:flex-row flex-col xl:items-center lg:items-center md:items-center items-start justify-between pb-[26px] mt-[46px] border-b border-interaction-color mb-8">
                      <div class="font-medium text-[18px] leading-loose">Spending over time</div>
                      <div class="grid grid-cols-3 text-sm font-medium text-center">
                          <div class="px-4 py-[10px] border border-interaction-color rounded-l-lg">
                              12 months
                          </div>
                          <div class="px-4 py-[10px] border-t border-b border-gray-200">30 days</div>
                          <div class="px-4 py-[10px] border border-interaction-color rounded-r-lg">
                              <span>7 days</span>
                          </div>
                      </div>
                  </div>
                  <div class="w-full h-[187px] bg-interaction-color">
                      Bar chart
                  </div>
                </section>
            </section>
            </main>
      </section>
    </main>
  </section>
</template>
