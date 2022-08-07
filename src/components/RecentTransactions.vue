<script setup>
import { transactions } from '../db/db'
</script>

<template>
    <header class="flex items-end justify-between border-b border-interaction-color mt-8 pb-8">
        <h1 class="font-medium text-[18px]">Recent transactions</h1>
        <img src="../assets/images/more-vertical.svg" alt="">
    </header>
    <ul>
        <li v-for="transaction in transactions" class="flex items-center justify-between text-sm border-b border-interaction-color py-4">
            <div>
                <div class="font-medium">{{ transaction.name }}</div>
                <div :style="{color: transaction.type === 'income' ? '#039855' : '#667085'}">{{ transaction.type === 'income' ? '+' : '-' }} ${{ transaction.amount.toFixed(2) }}</div>
            </div>
            <div class="text-[#667085]">{{ transaction.date }}</div>
            <img src="../assets/images/edit.svg" alt="edit transaction" class="cursor-pointer">
        </li>
    </ul>
    <router-link to="#" class="block text-primary-color font-medium text-sm text-right my-6">View all transactions</router-link>
</template>