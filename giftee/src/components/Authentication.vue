<template>
  <div class="auth-form">
    <h2> Authentication </h2>
    <p v-if="error" class="error">{{error}}</p>
    <input type="email" id="email" v-model="email" placeholder="Email"/>
    <input type="password" v-model="password" placeholder="Password"/>
      <button @click="login"> Log in </button>
    <span> Not a member? <a @click="handleAnchorChange"> Sign up! </a> </span>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
const axios = require('axios');


export default {
  name: 'Authentication', 
  data() {
    return {
      email:"",
      password: "", 
      error: null
    }
  },
  setup() {
    const router = useRouter();
    return { router }
  },
  methods: {
    handleAnchorChange() {
      this.$emit('clicked', false);
    }, 
    login: function() {
      axios.post('https://giftee-cards.herokuapp.com/login', {
        email: this.email, 
        password: this.password
      })
      .then(res => {
        var id = res.data.uid;
        this.$router.push({ path: "user/"+id });
        localStorage.setItem("isLoggedIn", true);
      })
      .catch(error => {
        console.log(error.response)
        this.error = error.response.data
        });
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
  
  .auth-form { 
    @include flex-column(center);
    position: relative;
    border: 1px solid var(--input-border);
    border-radius: 0.7rem;
    background-color: rgba(255,255,255, 0.5) ;
    padding: 2rem 3rem;
  }

  h1 {
    @include font-style(var(--sacramento-font), bold, 5rem, normal);
    color: var( --input-placeholder);
    display: inline-block;
    text-align: center;
    position: relative;
  }

  h2 {
    @include font-style(inherit, bold, 1.5rem, normal);
    color: var( --input-placeholder);
    margin-bottom: .75rem;
    letter-spacing: 0.2rem;
    font-weight: bold;
  }

  input {
    @include font-style(inherit, bold, 0.75rem, 1.5rem);
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    margin: 1rem 1rem 0 1rem;
    border-radius: 0.4rem;
    color: var(--input-color);
    border: 1px solid var(--input-border);
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
    margin: 1rem;
    cursor: pointer;
  }

  span {
    @include font-style(inherit, normal, 0.875rem, 1.5rem);
    color: rgba(112, 112, 112, 1);

  }

  a {
    cursor: pointer;
    pointer-events: all;
    text-decoration: underline;
    &:active, &:visited { 
      color: var(--input-placeholder);
    }
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    h1 {
      top: 25%;
      left: 50%;
      transform: translate(-50%, -75%);
    }

    .auth-form { 
      width: 80vw;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 50%);
    }
  }

  .error { 
    color: red;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    h1 {
      top: 25%;
      left: 50%;
      transform: translate(-50%, -75%);
    }

    .auth-form { 
      width: 50vw;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 50%);
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .auth-form { 
      width: 40vw;
      top: 50%;
      left: 75%;
      transform: translate(-50%, 50%);
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 1200px) {
    .auth-form { 
      width: 20vw;
      top: 50%;
      left: 75%;
      transform: translate(-50%, 50%);
    }

  }
  
</style>
