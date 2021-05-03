<template>
  <div class="ItemC">
    <div class="item-card">
        <button id="action-button" :disabled="buttonText==='Added' || parent === 'share'" @click="handleAction"> {{buttonText}} </button>
        <a :href="`${item.url}`"> {{item.name}} </a>
        <span class="price"> {{item.price}} lei </span>
        <div class="bottom-card">
            <span> {{item.category}} </span>
            <span class="no-style"> | </span>
            <span> {{item.type}} </span>
        </div>        
    </div>
  </div>
</template>

<script>

const axios = require('axios');
export default {
  name: 'Authentication',
  data() {
    return {
      modalVisible: false,
      showLink: false,
      isLinkCopied: false,
      buttonText: this.parent === 'itemsList'? 'Add' : 'x',
    }
  },
  props: [
    'item',
    'parent',
    'uid'
  ], 
  methods: {
    handleAction: function() {
        this.parent === 'itemsList'
        ? this.addToWishlist() 
        : this.removeFromWishlist();
    },
    addToWishlist: function() {
        this.buttonText="Added";
        axios.put(`https://giftee-cards.herokuapp.com/user/${this.uid}`, {
            id: this.item.id
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(error => this.error = error.response.data);
    },
    removeFromWishlist: function() {
        this.$emit('remove', this.item);
        axios.delete(`https://giftee-cards.herokuapp.com/user`, {
            data: { 
                uid: this.uid,
                id: this.item.id 
            }
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(error => this.error = error.response.data);
    }
  }
}
</script>

<style lang="scss" scoped>
    @mixin flex-column($alignment) {
        display: flex;
        align-items: $alignment;
        flex-direction: column;
    }

    @mixin flex-row($alignment) {
        display: flex;
        align-items: $alignment;
    }

    @mixin font-style($font-family, $font-weight, $font-size, $line-height) {
        line-height: $line-height;
        font-size: $font-size;
        font-weight: $font-weight;
        font-family: $font-family;
    }

    .ItemC { 
        @include flex-column(flex-start);
        overflow: hidden;
        width: auto;
    }
    
    .item-card { 
        @include flex-column(center);
        justify-content: space-between;
        max-width: 15rem;
        height: 10rem;
        margin: .5rem;
        border: 1px solid var(--input-border);
        border-radius: 0.7rem;
        background-color: rgba(255,255,255, 0.7);
        transition: all .3s ease-out;

        &:hover {
            transform: scale(1.1);
        }
    }

    a, a:active, a:visited { 
        @include font-style(var(--pacifico-font), normal, 1.5rem, 1);
        color: var(--accent-light);
        margin: .25rem 0rem;
        text-decoration: none;
        text-align: center;
    }

    .price {
        margin: .25rem 0rem 0.5rem 0rem;
        color: var(--input-placeholder);
    }

    .bottom-card { 
        @include flex-row(center);
        justify-content: center;
        border-top: 1px solid transparent;
        border-radius: 0rem 0rem 0.7rem 0.7rem;
        margin-top: .25rem;
        color: var(--input-background);
        background-color: rgba(66,32,64,0.8);
        width: 100%;

        span:not(.no-style) {
            display: inline-block;
            margin: 1rem;
            line-height: 0;
            border-right: 1px solid rgb(82, 77, 77);
            line-height: 0;
            &:last-child { 
                border: none;
            }
        }
    }

    button {
        @include font-style(inherit, 100, 1rem, normal);
        &:focus {
        outline: none;
        }
        cursor: pointer;
        color: var(--accent-light);
        border: none; 
    }
    
    #action-button {
        margin: 0;
        padding: 0.75rem;
        line-height: 0;
        align-self: flex-end;
        border-radius: 0rem 0.6rem 0rem 0.6rem;
        background-color: var(--group-background-focus);

        &:disabled {
            pointer-events: none;
        }
    }
</style>
