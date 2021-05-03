<template>
  <div class="wishlistC">
    <h2> {{user.name}}'s wishlist </h2>

    <div class="wishlist">
      <div class="items">
        <template v-for="item of user.wishlist" :key="item.id">
          <Item :item="item" :uid="id" parent="share" @remove="remove"/>
        </template>
      </div>
      <p v-if="!user.wishlist || user.wishlist.length <= 0"> {{`${user.name} has no items in wishlist...`}} </p>
    </div>
  </div>

</template>

<script>
const axios = require('axios');
import Item from "../components/Item";
import { useRoute } from 'vue-router';
import { computed } from 'vue';


export default {
  name: 'Wishlist',
  components: {
    Item
  },
  data() {
    return {
      id: "",
      url: `` ,
      user: {}
    }
  },
  mounted() {
    const route = useRoute();
    const userId = computed(()=>route.params.id);
    this.id = userId.value;
    axios.get(`https://giftee-cards.herokuapp.com/user/${userId.value}`)
    .then( res => {
      this.user = res.data;
    })
    .catch( error => console.log(error.response.data))
  },
  props: {
    msg: String
  }, 
  methods: {
    copyURL() {
      const copyTextarea = this.$refs.copyThisLink;
      copyTextarea.select();
      document.execCommand('copy');
      this.isLinkCopied = true;
    }, 
    rerouteToAdd() {
      this.$router.push({ path: "/all-items/" + this.id});
    }, 
    remove(item) {
      const index = this.user.wishlist.indexOf(item);
      if (index > -1) {
        this.user.wishlist.splice(index, 1);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @mixin flex-column($alignment) {
    display: flex;
    align-items: $alignment;
    flex-direction: column;
  }

  @mixin flex-row($alignment) {
    display: flex;
    justify-content: $alignment;
  }

  @mixin font-style($font-family, $font-weight, $font-size, $line-height) {
    line-height: $line-height;
    font-size: $font-size;
    font-weight: $font-weight;
    font-family: $font-family;
  }

  .wishlistC { 
    @include flex-column(center);
    margin: 0;
  }
  
  .wishlist { 
    @include flex-column(center);
    border: 1px solid var(--input-border);
    border-radius: 0.7rem;
    background-color: rgba(255,255,255, 0.7) ;
    padding: 0rem 0rem 1rem 1rem;
    margin-top: 3rem;
  }

  .items { 
    @include flex-row(center);
    overflow: auto;
    flex-wrap: wrap;
  }

  h2 {
    @include font-style(inherit, bold, 3.5rem, normal);
    color: var( --input-placeholder);
    margin-top: 5rem;
  }

  input {
    @include font-style(inherit, bold, 1rem, 1.5rem);
    padding: 0rem 1rem;
    border: none;
    color: var(--placeholder-color);
    background: transparent;
    &:focus {
      outline: none;
    }
  }

  button {
    @include font-style(inherit, 100, 1rem, normal);
    &:focus {
      outline: none;
    }
    cursor: pointer;
    color: var(--input-background);
    background-color: var(--input-border-focus);
    border: none; 
    border-radius: 0.2rem;
    padding: 0.5rem 1rem; 
    margin-top: 1rem;
  }


  #share-button {
    border-radius: 0rem 0.6rem 0rem 0.6rem;
    img {
      margin-right: 0.25rem;
    }
  }
  
  #add-button {
    align-self: flex-end;
    margin: 0;
    padding: 0.75rem;
    line-height: 0;
    border-radius: 0rem 0.6rem 0rem 0.6rem;
    background-color: var(--input-placeholder);
  }  

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .wishlist { 
      width: 90vw;
    }
    .items { 
      max-height: 50vh;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .wishlist { 
      width: 80vw;
    }
    .items { 
      max-height: 60vh;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .wishlist { 
      width: 70vw;
    }
    .items { 
      max-height: 60vh;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .wishlist { 
      width: 50vw;
    }

    .items { 
      max-height: 50vh;
    }
  }
</style>
