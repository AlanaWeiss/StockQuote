<template>
   <div class="nav">
     <div class="nav-wrapper">
       <div class="logo">
        <img src="../../assets/Stonks.png" alt="Stonks" srcset="">
       </div>
      <div class="search">
        <input type="text">
        <md-button class="md-raised">Search</md-button>
     </div>
     </div>

    </div>
</template>

<script>
export default {
  name: 'Nav',
  data: () => ({
    initial: null,
  }),
};
</script>

<style lang="scss" src="./SearchBar.scss"></style>
