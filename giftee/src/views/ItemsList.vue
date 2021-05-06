<template>
  <div class="ItemsListC">
    <h2> Items </h2>
    <button class="back" @click="back"> &lt; Back to your wishlist </button>

    <div class="table">
        <div class="add-section">
            <span> Don't like the suggestions? </span>
            <router-link to="/add-item" id="add-button">
              <button> <span>+</span> Add your item! </button>
            </router-link>
        </div>
        <div>
          <input placeholder="Search..." v-model="searchInput"/>
          <button class="back" @click="sortItems"> {{ `Sort ${sort}` }} </button>
        </div>
        <div class="items">
          <template v-for="item of filteredItems" :key="item.id">
            <Item :item="item" :uid="id" parent="itemsList" />
          </template>
        </div>
        <p v-if="filteredItems.length <= 0"> Your item couldn't be found... You should add it! </p>
    </div>
  </div>

</template>

<script>

import Item from '@/components/Item.vue';
const axios = require('axios');
import { useRoute } from 'vue-router';
import { computed } from 'vue';
const faker = require('faker');

export default {
  name: 'Authentication',
  data() {
    return {
      modalVisible: false,
      showLink: false,
      isLinkCopied: false,
      searchInput: "",
      id: "",
      items: [],
      sort: "asc."
    }
  },
  components: {
    Item
  },
  props: {
    msg: String
  }, 
  mounted() {
    const route = useRoute();
    const userId = computed(()=>route.params.id);
    this.id = userId.value;

    this.items.push({
      id: faker.commerce.productName().replaceAll(" ", "") + new Date().toJSON().slice(0,10).replace(/-/g,''),
      name: faker.commerce.productName(), 
      url: faker.internet.url(), 
      category: faker.commerce.department() / 5, 
      price:faker.commerce.price(), 
      type: "Physic"
    });

    axios.get(`https://random-data-api.com/api/address/random_address`)
    .then( res => {
      this.items.push({
        id: res.data.city.replaceAll(" ", "") +res.data.id,
        name: `City break ${res.data.city}, ${res.data.country}`, 
        url: faker.image.nature(), 
        category: "Travel", 
        price: faker.commerce.price()*10, 
        type: "Voucher"
      });
    })
    .catch( error => console.log(error.response.data));

  
    if(this.items.length > 0 ) {
      this.items.forEach(item => {
        axios
        .post(`https://giftee-cards.herokuapp.com/wishlist/add`, {item})
        .then( res => {console.log(res)})
        .catch( error => console.log(error.response.data))
      });
    }

    axios.get(`https://giftee-cards.herokuapp.com/wishlist`)
    .then( res => this.items.push( ...res.data ))
    .catch( error => console.log(error.response.data));

  },
  methods: {
    copyURL() {
      const copyTextarea = this.$refs.copyThisLink;
      copyTextarea.select();
      document.execCommand('copy');
      this.isLinkCopied = true;
      console.log(this.isLinkCopied)
    },
    back() {
      window.history.back();
    }, 
    sortItems() { 
      if(this.sort==="asc.") {
        this.sort = "desc.";
        this.items.sort((a,b) => a.price -b.price)
      }else {
        this.sort = "asc.";
        this.items.sort((a,b) => b.price - a.price )
      }
    }
  },
  computed: {
    filteredItems: function () {
      return this.items.filter(item => item.name.toLowerCase().includes(this.searchInput.toLowerCase()))
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

  .ItemsListC { 
    @include flex-column(center);
  }
  
  .table { 
    @include flex-column(center);
    width: 50rem;
    max-height: 65vh;
    border: 1px solid var(--input-border);
    border-radius: 0.7rem;
    background-color: rgba(255,255,255, 0.7) ;
    padding: 0rem 0rem 1rem 1rem;
    margin-top: 2rem;
  }
  
  input {
    @include font-style(inherit, bold, 1rem, 1.5rem);
    width: 10rem;
    padding: 0.5rem 1rem;
    margin: 1rem;
    border: 1px solid var(--input-border);
    border-radius: 0.4rem;
    color: var(--input-color);
    background: var(--input-background);
    transition: border .3s ease;
    &::placeholder {
      color: var(--input-placeholder);
      font-family: 'Montserrat';
      letter-spacing: 0.1rem;
    }
    &:focus {
      outline: none;
      border-color: var(--input-border-focus);
    }
  }

  .items { 
    overflow: auto;
    max-height: 50vh;
    @include flex-row(center);
    flex-wrap: wrap;
  }

  h2 {
    @include font-style(var(--pacifico-font), normal, 3.5rem, 1);
    color: var(--accent-light);
    margin-top: 5rem;
  }

  .add-section {
    margin-top: 1rem;
  }

  button {
    @include font-style(inherit, 100, 1rem, normal);
    &:focus {
      outline: none;
    }
    cursor: pointer;
    color: var(--input-background);
    border: none; 
  }

  #add-button {
    button {
      padding: 0.2rem 0.5rem;
      float: right;
      margin-left: 1rem;
      border-radius: 1rem 0rem 0.8rem 0rem ;
      color: var(--accent-light);
      background-color: var(--group-background-focus);

    }
    &:visited, &:active, &:focus {
      color: var(--accent-light);
    }
  }

  .back {
    color: var(--accent-light);
    background-color: var(--group-background-focus);
    padding: .75rem;
    margin-top: 1rem;
    border-radius: .25rem;
  }
  
    /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .table { 
      width: 90vw;
    }
    .items { 
      max-height: 40vh;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .table { 
      width: 80vw;
    }
    .items { 
      max-height: 60vh;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .table { 
      width: 70vw;
    }
    .items { 
      max-height: 60vh;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .table { 
      width: 60vw;
    }

    .items { 
      max-height: 50vh;
    }
  }
</style>
