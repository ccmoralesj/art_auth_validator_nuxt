<template>
  <section >
    <label class="content-label">{{ labelContent.message }}</label>
    <label class="content-label-title">{{ labelContent.title }}</label>
  </section>
</template>

<script setup lang="ts">
type LabelContent = {
    message: String,
    title: String,
  }
  const labelContentProps = defineProps<{ labelContent: LabelContent }>()
</script>

<style scoped>

label {
  margin-bottom: 6px;
  color: white;
}
.content-label {
  font-size: large;
  width: fit-content;
}
.content-label-title {
  align-self: flex-start !important;
  font-style: italic;
  font-size: small;
  color:rgb(184, 184, 184)
}
</style>
