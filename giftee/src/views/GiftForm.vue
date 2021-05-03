<template>
  <div class="giftFormC">
    <h1> Giftee </h1>
    <button class="back" @click="goBack"> &lt; Back to your wishlist </button>
    <div class="gift-form">
      <h1> Add an item you want </h1>
      <p class="error" v-if="error">{{error}}</p>
      <input type="text" placeholder="Name" v-model="name"/>
      <input type="url" placeholder="URL" v-model="url"/>
      <select id="category" name="Category" v-model="category">
          <option selected disabled hidden id="choose">Choose category</option>
          <option value="Beauty">Beauty</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Travel">Travel</option>
          <option value="Fashion">Fashion</option>
          <option value="Pets">Pets</option>
          <option value="Tech">Tech</option>
      </select>
      <input type="number" placeholder="Price" v-model="price"/>
      <select id="type" name="Type" v-model="type">
          <option selected disabled hidden id="choose">Choose type</option>
          <option value="Voucher">Voucher</option>
          <option value="Physic">Physic</option>
      </select>
      <p class="meesage" v-if="response"> {{response}} </p>
      <button @click="addItem"> Add </button>
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'GiftForm',
  data() {
    return {
      error:"",
      name:"",
      url:"",
      category:"Choose category",
      price:"",
      type:"Choose type",
      response:""
    }
  },
  methods: {
    goBack: function() {
      window.history.back();
    }, 
    buildItemFromForm() {
      if(!this.name || !this.url || !this.category || this.category==="Choose category" || !this.price || !this.type || this.type==="Choose type") {
        this.error="Fill all fields!"
        return;
      }
      return {
        id:this.name.replaceAll(" ", "") + new Date().toJSON().slice(0,10).replace(/-/g,''),
        name: this.name, 
        url: this.url, 
        category: this.category, 
        price:this.price, 
        type: this.type
      }
    },
    addItem: function() {
      let newItem = this.buildItemFromForm();
      if(newItem) {
        axios.post(`https://giftee-wishes.herokuapp.com/wishlist/add`, {
          newItem
        })
        .then( res => { this.response = res.data})
        .catch( error => console.log(error.response.data))
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

  @mixin font-style($font-family, $font-weight, $font-size, $line-height) {
    line-height: $line-height;
    font-size: $font-size;
    font-weight: $font-weight;
    font-family: $font-family;
  }

  .giftFormC { 
    @include flex-column(center);
    justify-content: center;
    height: 100vh;
  }
  
  .gift-form { 
    @include flex-column(center);
    border: 1px solid var(--input-border);
    border-radius: 0.7rem;
    background-color: rgba(255,255,255, 0.5) ;
    padding: 1rem 2rem;
    margin-top: 3rem;

    h1 {
      @include font-style(inherit, 100, 1.5rem, normal);
      margin: 0.5rem;
    }
  }

  h1 {
    @include font-style(var(--sacramento-font), bold, 5rem, normal);
    color: var( --input-placeholder);
    margin-top: -15vh;
  }

  input, select {
    @include font-style(inherit, bold, 1rem, 1.5rem);
    padding: 0.5rem 1rem;
    margin: 1rem 1rem 0 1rem;
    border: 1px solid var(--input-border);
    border-radius: 0.4rem;
    color: var(--input-color);
    background: var(--input-background);
    transition: border .3s ease;
    &::placeholder {
      color: var(--input-placeholder);
      font-family: 'Montserrat';
      letter-spacing: 0.2rem;
    }
    &:focus {
      outline: none;
      border-color: var(--input-border-focus);
    }
  }

  button {
    @include font-style(inherit, 100, 1rem, normal);
    &:active {
      outline: none;
    }
    color: var(--input-background);
    background-color: var(--input-placeholder);
    border: none; 
    border-radius: 0.2rem;
    padding: 0.5rem 1rem; 
    margin-top: 1rem;
  }

  .meesage{
    color: green;
  }

  .error {
    color:red;
  }

    /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    input, select {
      width: 60vw;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    input, select {
      width: 50vw;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    input, select {
      width: 40vw;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    input, select {
      width: 20vw;
    }
  }
  
</style>
