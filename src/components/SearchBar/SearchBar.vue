<template>
   <div class="nav">
     <div class="nav-wrapper">
       <div class="logo">
        <img src="../../assets/Stonks.png" alt="Stonks" srcset="">
       </div>
      <div class="search">
        <input v-model="symbol" type="text">
        <md-button @click="search" class="md-raised">Search</md-button>
     </div>
     </div>

    </div>
</template>

<script>
export default {
  name: 'Nav',
  data: () => ({
    symbol: null,
  }),
  methods: {
    search() {
      this.$emit('symbolSearched', this.symbol);
    },
  },
};
</script>

<style lang="scss" src="./SearchBar.scss"></style>
