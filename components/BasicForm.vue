<template>
  <div class="form-container">
    <div class="brand-logo">
      <Logo />
    </div>
    <div class="inputs">
      <label>PIN</label>
      <input
        type="search"
        placeholder="Insert art PIN code"
        :value="pin"
        @keyup="changeInput"
      />
      <button class="search-box" type="submit" @click="$emit('submitClick')">SEARCH</button>
    </div>
  </div>
</template>
<script setup lang="ts">
  const props = defineProps({
    pin: String
  })
  const pin = ref(props.pin); // Create a local ref for pin

  const emit = defineEmits(['updatePin', 'submitClick'])
  // Emit an event to update pin in the ParentComponent
  function emitUpdatePIN(newPINValue: string) {
    emit('updatePin', newPINValue);
  };

  // Function to change the pin state and emit the update
  function changeInput(event: KeyboardEvent) {
    if (!event || !event.target) {
      return
    }
    pin.value = event.target.value;
    emitUpdatePIN(pin.value);
  };
</script>


<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  position: relative;
  width: fit-content;
  height: auto;
  border-radius: 1.25rem;
  padding: 3rem;
  box-sizing: border-box;
  background: #262626;
  box-shadow: 14px 14px 20px #1c2126, -5px -5px 22px #565676;
}

.brand-logo {
  display: flex;
  justify-content: center;

  height: 120px;
  width: 120px;
  margin: auto;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 7px 7px 10px #1c1a12, -5px -6px 11px #4a463a;
}

.brand-title {
  margin-top: 10px;
  font-weight: 900;
  font-size: 1.8rem;
  color: #1DA1F2;
  letter-spacing: 1px;
}

.inputs {
  text-align: left;
  margin-top: 1.5rem;
}

label,
input,
button {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}

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
  background: #262626;
  padding: 10px;
  padding-left: 20px;
  height: 50px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #1a1a1a, inset -6px -6px 6px #31363a;
}

button {
  color: white;
  margin-top: 1.875rem;
  background: #1DA1F2;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 900;
  box-shadow: 6px 6px 6px #1c2126, -6px -5px 7px #30404a;
  transition: 0.5s;
}

.search-box:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 5px 0px #16b8ca,
    0 5px 25px 0px #16b8ca,
    0 3px 40px 2px #16b8ca,
    0 0px 30px 5px #16b8ca;
}

img {
  width: 5rem;
  margin-right: 2rem;
}
</style>
