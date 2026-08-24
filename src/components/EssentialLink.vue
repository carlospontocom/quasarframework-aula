<template>
  <q-item
    clickable
    :tag="link ? 'a' : 'div'"
    :target="link ? '_blank' : undefined"
    :href="link || undefined"
    :to="to || undefined"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption v-if="caption">{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  },
  to: {
    type: [String, Object],
    default: ''
  },
  icon: {
    type: String,
    default: ''
  }
})
</script>