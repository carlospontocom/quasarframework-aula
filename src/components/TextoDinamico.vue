<template>
   
   <component :is="as">
        {{texto}}
   </component>

</template>

<script setup>

    import '@/css/textos.scss';

    const props = defineProps ({
        texto:String,
        as: {
            type:String
        }
    })
</script>
