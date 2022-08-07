<template>
  <nav class="w-full flex xl:flex-row lg:flex-row md:flex-row flex-col xl:items-center lg:items-center md:items-center items-start justify-between xl:p-[32px] lg:p-[32px] md:p-[32px] p-3">
    <div>
      <h1 class="xl:text-[30px] lg:text-[30px] md:text-[30px] text-2xl font-medium leading-loose">Your cards</h1>
      <p class="text-[#667085]">Welcome back, Olivia!</p>
    </div>
    <div class="flex text-sm font-medium xl:mt-0 lg:mt-0 md:mt-0 mt-6">
      <button
        class="border border-[#EAECF0] py-2 px-4 rounded-[8px] flex items-center mr-[12px] text-secondary-color"
      >
        <img src="../assets/images/sync.svg" alt="Sync accounts" class="mr-2" />
        <span>Sync accounts</span>
      </button>
      <button
        class="bg-primary-color text-white rounded-[8px] py-2 px-4 text-sm"
      >
        Add card
      </button>
    </div>
  </nav>
</template>
