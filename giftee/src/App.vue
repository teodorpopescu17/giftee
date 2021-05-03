<template>
  <div id="app" >
    <router-view/>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
// import { computed } from 'vue';
export default {
  name: 'App',
  setup() {
    const route = useRoute();
    const router = useRouter();
    // const uid = computed(()=>route.params.id);
   return {route, router}
  }, 
}
</script>

<style lang="scss">
:root {
  --input-color: #000000;
  --input-border: #b1ada7;
  --input-background: #fff;
  --input-placeholder: #707070;
  --input-border-focus: #DFD8CE;
  --group-color: var(--input-color);
  --group-border: var(--input-border);
  --group-background: #EEF4FF;
  --group-color-focus: #fff;
  --group-border-focus: var(--input-border-focus);
  --group-background-focus: #DFD8CE;

  --accent-light: #422040;
  --shadows-into-light-font: 'Shadows Into Light', cursive;
  --pacifico-font: 'Pacifico', cursive;
  --sacramento-font:'Sacramento', cursive;
  --main-font:'Quicksand', cursive;

}
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
body, html, *, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--main-font);
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
#app {
  height: 100vh;
  background: url("./assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
#log-anchor {    
  position: absolute;
  right: 0;
  margin: 1rem 1rem 0rem 0rem;

  &:visited, &:active, &:focus {
    color: var(--input-placeholder);
  }

  img {
    margin-right: 0.5rem;
    width: 0.875rem;
    height: 0.875rem;
  }
}
</style>
