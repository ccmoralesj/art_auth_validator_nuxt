<template>
  <div class="container">
    <div>{{ pin }} inside page</div>
    <BasicForm
      v-bind:pin="pin"
      @updatePin="updatePin"
      @submitClick="verifyArtCertificate"
    />
  </div>
</template>
<script setup lang="ts">
const pin = ref('')
const route = useRoute();
const { secret } = route.query

function updatePin(newPin: string) {
  pin.value = newPin
}

async function verifyArtCertificate() {
  const bodyParams = {
    secret,
    pin: pin.value,
  }
  console.log({ bodyParams })
  await useLazyFetch('/api/backend/check-authenticity', {
    method: 'POST',
    body: bodyParams
  })
}
</script>
