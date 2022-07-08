<template>
    <div class="about">
        这是第二页
    </div>
</template>

<script setup>
    import {
        ref,
        reactive,
        computed,
        watch
    } from 'vue'

    let count = ref(0)

    let student = reactive({
        name: '',
        age: 0,
        gender: '',
        habit: 'sing1'
    })
</script>

<style>
    .turnGreen {
        color: green;
    }
</style>
