<template>
  <div class="authC">
    <h1> Giftee </h1>
    <Authentication  v-if="isMember" @clicked = "changeForm"/>
    <Register v-if="!isMember" @clicked = "changeForm"/>
  </div>
</template>
<script>
import Authentication from '../components/Authentication.vue';
import Register from '../components/Register';

export default {
    name:"Landing page", 
    data() {
        return {
            isMember: true
        }
    },
    components: {
        Authentication,
        Register
    }, 
    methods: {
        changeForm: function(isMember) {
            this.isMember = isMember;
        }
    }
}

</script>
<style scoped lang="scss">

  @mixin font-style($font-family, $font-weight, $font-size, $line-height) {
    line-height: $line-height;
    font-size: $font-size;
    font-weight: $font-weight;
    font-family: $font-family;
  }

  h1 {
    @include font-style(var(--sacramento-font), bold, 5rem, normal);
    color: var( --input-placeholder);
    display: inline-block;
    text-align: center;
    position: relative;
    top: 25vh;
    left: 50vw;
    transform: translate(-75%, -50%);
  }

  

</style>