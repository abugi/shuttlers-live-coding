<script setup>
const props = defineProps({
    countriesData: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div
          class="w-full py-5 px-4 rounded-md border border-[#EAECF0]"
        >
          <h2 class="text-[18px] font-medium">Active users right now</h2>
          <div class="text-[36px] font-semibold">10.8k</div>
          <div class="mt-5 text-secondary-color">
            <div
              v-for="item in countriesData"
              class="flex items-center w-full pb-5"
            >
              <img :src="item.flag" :alt="item.country" />
              <div class="flex-grow-[1]">
                <div class="capitalize mx-4 text-sm">
                  {{ item.country }}
                </div>
                <div class="flex items-center text-xs leading-none">
                  <div class="bg-[#EAECF0] h-2 rounded-full w-full ml-4 mr-3">
                    <div
                      class="bg-primary-color h-full rounded-full"
                      :style="{ width: item.percentage + '%' }"
                    ></div>
                  </div>
                  <div class="flex-shrink-0 text-sm font-medium">
                    {{ item.percentage }}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>