<script setup>
const transactions = [
    {
        name: 'Spotify',
        amount: 18.99,
        type: 'expense',
        date: 'Wednesday 1:00pm'
    },
    {
        name: 'A Coffee',
        amount: 4.50,
        type: 'expense',
        date: 'Wednesday 7:20am'
    },
    {
        name: 'Strip',
        amount: 88.00,
        type: 'income',
        date: 'Wednesday 2:45am'
    },
    {
        name: 'Figma',
        amount: 15.00,
        type: 'expense',
        date: 'Tuesday 6:10pm'
    },
    {
        name: 'TBF Bakery',
        amount: 12.50,
        type: 'expense',
        date: 'Tuesday 7:52am'
    },
     {
        name: 'Fresh F&V',
        amount: 40.20,
        type: 'expense',
        date: 'Tuesday 12:15pm'
    },
    {
        name: 'Stripe',
        amount: 88.00,
        type: 'income',
        date: 'Tuesday 5:40am'
    },
    {
        name: 'Rosso Antico',
        amount: 80.00,
        type: 'expense',
        date: 'Sunday 8:10pm'
    },
     {
        name: 'P&Vs Wine',
        amount: 32.00,
        type: 'expense',
        date: 'Sunday 7:05pm'
    },
    {
        name: 'Cherry Moon',
        amount: 16.50,
        type: 'expense',
        date: 'Sunday 12:52pm'
    },
]
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