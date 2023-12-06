<template>
  <div class="container">
    <section>
      <FullLogo class="home-logo" />
    </section>
    <section>
      <button @click="openWebPage">Web Page</button>
      <button @click="requestCamera">Scan QR</button>
    </section>
    <section :class="{'hide-video': hideVideo}">
      <video ref="video" id="video" playsinline></video>
    </section>
  </div>
</template>
<script setup lang="ts">
import { browser } from 'process';

const video = ref(null)
const hideVideo = ref(true)

function openWebPage() {
  const runtimeConfig = useRuntimeConfig();
  const MORACRIS_WEB_PAGE = runtimeConfig.public.MORACRIS_WEB_PAGE_URI;

  window.open(
    MORACRIS_WEB_PAGE,
    '_blank'
  )
}

function requestCamera() {
  hideVideo.value = !hideVideo.value
  if (hideVideo.value) {
    video.value.pause();
    video.value = null
    // TODO Remove navigator permissions from camera
  } else if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(stream => {
      video.value.srcObject = stream;
      video.value.play();
    });
  }
}
</script>
<style scoped>
video {
  width: 80%;
  height: auto;
}

section {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  width: 100%;
  margin-top: 1.5em;
}

button {
  color: black;
  background: #eaedf6;

  cursor: pointer;
  margin-top: 1.875rem;
  border-radius: 20px;
  height: 3em;
  padding-left: 1.5em;;
  padding-right: 1.5em;;

  font-weight: 900;
  font-size: larger;

  transition: 0.5s;
  box-shadow: 6px 6px 6px #1c1f26, -6px -5px 7px #30374a;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;


  margin: 0 auto;
  min-height: 100vh;
  height: fit-content;
}
.home-logo {
  width: 20em;
  min-width: 15em;
}

button:hover {
  background: #ccc4ed;
  color: #fff;
  border-radius: 20px;
  box-shadow:
  0 0 5px 0px #a38ef6,
  0 5px 25px 0px #a38ef6,
  0 3px 40px 2px #a38ef6,
  0 0px 30px 5px #a38ef6;
}

.hide-video {
  display: none;
}
</style>
