// stores/productStore.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [],
  }),
  actions: {
    addToCart(product, quantity = 1) {
      const existingProductIndex = this.products.findIndex(p => p.id === product.id);
      if (existingProductIndex !== -1) {
      
        this.products[existingProductIndex].quantity += quantity;
        // remove the product if the quantity is less than or equal to zero
        if (this.products[existingProductIndex].quantity <= 0) {
          this.products.splice(existingProductIndex, 1);
        }
      } else if (quantity > 0) {
        
        this.products.push({ ...product, quantity });
      }

    },
    setProducts(products) {
      this.products = products;
    },
    updateQuantity(productId, quantity) {
      const product = this.products.find((item) => item.id === productId);
      if (product) {
        product.quantity = quantity;
      }
    },
    remove(){
      this.products = this.products.map(item => {
        return {
          ...item,
          quantity: 0
        }
      })
    }   
      
      
  },
  getters: {
    getProductQuantity: (state) => {
      return (productId) => {
        const product = state.products.find(p => p.id === productId);
        return product ? product.quantity : 0;
      };
    }
  },
});
