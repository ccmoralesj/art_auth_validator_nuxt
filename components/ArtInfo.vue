<template>
  <div class="form-container">
    <!-- <div class="brand-title">MORA CRIS</div> -->
    <div class="inputs">
      <aside class="top-margins">
        <h1>Certificate of Authenticity</h1>
        <div class="brand-logo">
          <Logo />
        </div>
      </aside>
      <section>
        <aside class="no-margin">
          <article class="flex-grow-1">
            <label class="content-label">{{ artInfo.title }}</label>
            <label class="content-label-title">Title</label>
          </article>
          <img :class="{ isValid: artInfo.isAuthentic, isNotValid: !artInfo.isAuthentic }" src="~/assets/approved.png" />
          <img :class="{ isValid: !artInfo.isAuthentic, isNotValid: artInfo.isAuthentic }" src="~/assets/rejected.png" />
        </aside>
      </section>
      <hr class="solid">
      <aside>
        <span>
          <section>
              <label class="content-label">{{ artInfo.series }}</label>
              <label class="content-label-title">Series</label>
          </section>
          <section>
              <label class="content-label">{{ artInfo.dimensions }}</label>
              <label class="content-label-title">Dimensions</label>
          </section>
        </span>
        <span>
          <section>
              <label class="content-label">{{ artInfo.creationYear }}</label>
              <label class="content-label-title">Year artwork created</label>
          </section>
          <section>
              <label class="content-label">{{ artInfo.limitedEdition }}</label>
              <label class="content-label-title">Limited edition</label>
          </section>
        </span>
      </aside>
      <LogoMOC class="logoMOC" />
    </div>
  </div>
</template>
<script setup lang="ts">
  type AuthenticityCertificate = {
    isAuthentic: Boolean,
    message: String,
    title?: String,
    series?: String,
    creationYear?: Number,
    dimensions?: String,
    limitedEdition?: String,
    creationDate?: String,
  }
  const artInfoProps = defineProps<{ artInfo: AuthenticityCertificate }>()
</script>


<style scoped>
.no-margin {
  margin: 0;
}
.form-container {
  display: flex;
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

img {
  width: 5rem;
  margin-right: 2rem;
}

h1 {
  color: whitesmoke;
  margin-bottom: 2rem;
  margin-right: 2rem;
  font-size: xx-large;
  width: min-content;
}
.top-margins {
  margin: 0;
}
.inputs {
  display: flex;
  flex-direction: column;
  text-align: left;
}

hr.solid {
  border-top: 0.125rem solid #a4a4a4;
  width: 100%;
  align-self: center;
  margin-top: 1rem;
  border-radius: 5px;
  box-shadow: 4px 6px 4px #1c2126, -2px -3px 6px #565676;
}

aside {
  display: flex;
  flex-direction: row;
  margin-top: 2.5rem;
  margin-bottom: 3rem;
}

span {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

aside span {
  padding-right: 1rem;
}

section {
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
}

section article {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.inputs section:nth-child(1) article label {
  align-self: center;
}

label {
  margin-bottom: 6px;
  color: white;
}

input::placeholder {
  color: #a4a4a4;
}

.content-label {
  font-size: large;
}
.content-label-title {
  align-self: flex-start !important;
  font-style: italic;
  font-size: small;
  color:rgb(184, 184, 184)
}

.isValid {
  display: block;
}

.isNotValid {
  display: none;
}
.flex-grow-1 {
  flex-grow: 1;
}

.logoMOC {
  width: 10rem;
}
</style>
