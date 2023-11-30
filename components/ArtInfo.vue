<template>
  <div class="form-container">
    <!-- <div class="brand-logo">
      <TempLogo />
    </div> -->
    <!-- <div class="brand-title">MORA CRIS</div> -->
    <div class="inputs" v-for="(value, key) in artInfo">
        <label>{{ key }}</label>
        <input
          type="text"
          :value="value"
        />
    </div>
  </div>
</template>
<script setup lang="ts">
  type AuthenticityCertificate = {
    message: String,
    title: String,
    series: String,
    creationYear: Number,
    dimensions: String,
    limitedEdition: String,
    creationDate: String,
  }
  const artInfoProps = defineProps<{ artInfo: AuthenticityCertificate }>()
</script>


<style scoped>
.form-container {
  position: relative;
  width: 21.875rem;
  height: 27rem;
  border-radius: 1.25rem;
  padding: 3rem;
  box-sizing: border-box;
  background: #2d2d2d;
  box-shadow: 14px 14px 20px #1c2126, -5px -5px 22px #565676;
}

/* .brand-logo {
  height: 100px;
  width: 100px;
  margin: auto;
  padding-top: 10px;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 7px 7px 10px #2f455b, -7px -7px 10px #2f455b;
} */

/* .brand-title {
  margin-top: 10px;
  font-weight: 900;
  font-size: 1.8rem;
  color: #1DA1F2;
  letter-spacing: 1px;
} */

.inputs {
  text-align: left;
  margin-top: 1.5rem;
}

/* label,
input,
button {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
} */

label {
  margin-bottom: 6px;
  color: white;
}

input::placeholder {
  color: #a4a4a4;
}

input {
  color: white;
  caret-color: white;
  background: #2d2d2d;
  padding: 10px;
  padding-left: 20px;
  height: 50px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #1a1a1a, inset -6px -6px 6px #31363a;
}

/* button {
  color: white;
  margin-top: 1.875rem;
  background: #1DA1F2;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 900;
  box-shadow: 6px 6px 6px #1c2126, -6px -5px 7px #30404a;
  transition: 0.5s;
} */


h1 {
  position: absolute;
  top: 0;
  left: 0;
}

/* .search-box:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 5px 0px #16b8ca,
    0 5px 25px 0px #16b8ca,
    0 3px 40px 2px #16b8ca,
    0 0px 30px 5px #16b8ca;
} */
</style>
