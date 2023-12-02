<template>
  <div class="logo-rotation-container">
    <img class="absolute-center logoTypography rotate-anim" src="~/assets/moraCrisRoundYellowTypography.png"/>
    <img class="absolute-center logoEye" src="~/assets/moraCrisJustEye.png"/>
    <h1>LOADING</h1>
  </div>
</template>
<style scoped>
h1 {
  color: #ece9e0;
  margin-top: 18rem;
}

.absolute-center {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.logo-rotation-container {
  display: flex;
  width: 100%;

  justify-content: center;
  align-items: center;
  text-align: center;
}
.logoTypography {
  height: 12.5rem;
  width: 12.5rem;
  animation: 2s appear;
}
.logoEye {
  height: 7rem;
  width: 7rem;
  animation: 2s appear;
}

.rotate-anim {
  animation: rotation 6s linear infinite;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
