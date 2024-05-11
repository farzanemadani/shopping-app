<template>
  <section class="container py-4">
    <div class="row">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
      <shoppingCart />
    </div>
  </section>
</template>

<script setup>
  import { useCartStore } from "@/stores/cart";
  import { fetchData } from "../data/productList.js";
  const cartStore = useCartStore();

  // Define the async function before using it
  async function useFetchData() {
    try {
      const products = await fetchData();
      return { data: products, error: null };
    } catch (error) {
      return { data: null, error: error.message };
    }
  }

  const { data: products, error } = await useFetchData();

  if (products) {
    products.forEach((product) => {
      product.quantity = 0;
    });
    cartStore.setProducts(products);
  }
</script>

<style lang="scss" scoped></style>
