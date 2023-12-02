<template>
  <div class="container">
    <div class="art-validator-message" :class="{pending: pending}">
      <ArtInfo v-bind:artInfo="artInfo"/>
    </div>
    <div :class="{pending: !pending, 'no-show': isSendRequestPending }">
      <BasicForm
        v-bind:pin="pin"
        @updatePin="updatePin"
        @submitClick="verifyArtCertificate"
      />
    </div>
    <div class="loader" :class="{'no-show': !isSendRequestPending}">
      <LogoLoader/>
    </div>
  </div>
</template>
<script setup lang="ts">
const pin = ref('')
const pending = ref(true)
const isSendRequestPending = ref(false)
const artInfo = ref({})
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
  isSendRequestPending.value = true
  const { data: response, pending: pendingResponse } = await useLazyFetch('/api/backend/check-authenticity', {
    method: 'POST',
    body: bodyParams,
  })
  const rawPending = toRaw(pendingResponse.value)
  const rawResponse = toRaw(response.value)
  pending.value = rawPending
  artInfo.value =  rawPending ? {} : {
    ...rawResponse
  }
  isSendRequestPending.value = false
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
  width: 100%;
}
.art-validator-message {
  z-index: 100;
}
/* span {
  display: block;
  margin-top: 30px;
} */

.pending {
  display: none;
}
.no-show {
  display: none;
}
</style>
