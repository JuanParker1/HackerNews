<template>
    <div class="bg-green-500">
        <span class="text-yellow-100 font-bold underline ">{{ store.name }}</span>
    </div>
</template>

<script lang='ts' setup>
import { useStore } from '@/composables/store'
const store = useStore()

</script>

<style scoped>
</style>