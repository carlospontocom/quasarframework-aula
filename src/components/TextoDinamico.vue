<template>
    <h1>{{titulo}}</h1>
    <slot/>
</template>

<script setup>
    const props = defineProps ({
        titulo:String
    })
</script>