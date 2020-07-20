<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/assets/variable.scss";
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: $purple, // The primary color of your brand
  accent: $red // The secondary color of your brand
));

@import "~vue-material/dist/theme/all"; // Apply the theme
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
