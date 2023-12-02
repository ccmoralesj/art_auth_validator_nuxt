<template>
  <div class="form-container">
    <!-- <div class="brand-title">MORA CRIS</div> -->
    <div class="inputs">
      <aside class="top-section-margins">
        <h1>Certificate of Authenticity</h1>
        <div class="brand-logo">
          <Logo />
        </div>
      </aside>
      <section>
        <aside class="no-margin">
          <ArticleWithLabels
            class="flex-grow-1" :class="{ isValid: artInfo.isAuthentic, isNotValid: !artInfo.isAuthentic }"
            v-bind:labelContent="{
              message: artInfo.title,
              title: `Title`
            }"
          />
          <ArticleWithLabels
            class="flex-grow-1" :class="{ isValid: !artInfo.isAuthentic, isNotValid: artInfo.isAuthentic }"
            v-bind:labelContent="{
              message: `PIN registered doesn't match`,
              title: `Fake art piece`
            }"
          />
          <img :class="{ isValid: artInfo.isAuthentic, isNotValid: !artInfo.isAuthentic }" src="~/assets/approved.png" />
          <img :class="{ isValid: !artInfo.isAuthentic, isNotValid: artInfo.isAuthentic }" src="~/assets/rejected.png" />
        </aside>
      </section>
      <hr class="solid">
      <aside  :class="{ isValid: artInfo.isAuthentic, isNotValid: !artInfo.isAuthentic }" >
        <span>
          <SectionWithLabels
            v-bind:labelContent="{
                message: artInfo.series,
                title: `Series`
              }"
          />
          <SectionWithLabels
            v-bind:labelContent="{
                message: artInfo.dimensions,
                title: `Dimensions`
              }"
          />
        </span>
        <span>
          <SectionWithLabels
            v-bind:labelContent="{
                message: artInfo.creationYear,
                title: `Year artwork created`
              }"
          />
          <SectionWithLabels
            v-bind:labelContent="{
                message: artInfo.limitedEdition,
                title: `Limited edition`
              }"
          />
        </span>
      </aside>
      <aside  :class="{ isValid: !artInfo.isAuthentic, isNotValid: artInfo.isAuthentic }" >
        <span>
          <SectionWithLabels
            v-bind:labelContent="{
                message: `Please review your PIN and try again`,
                title: `Note`
              }"
          />
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
  border-radius: 1.25rem;
  padding: 3rem;
  box-sizing: border-box;
  background: #262626;
  box-shadow: 14px 14px 20px #1c2126, -5px -5px 22px #565676;

  /* width: fit-content;
  height: auto; */
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
  margin-right: 1em;
  font-size: xx-large;
  width: min-content;
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

input::placeholder {
  color: #a4a4a4;
}
.top-section-margins {
  margin-top: 0;
  margin-bottom: 2rem;
}
.isValid {
  display: flex;
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
