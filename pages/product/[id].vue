<template>
  <section class="container py-4">
    <div class="row">
      <ProductCard v-if="singleProduct" :product="singleProduct" />
      <ProductDetail v-if="singleProduct" :product="singleProduct" />
      <shoppingCart />
    </div>
  </section>
</template>

<script setup>
import { fetchData } from "../data/productList.js";

const route = useRoute();
const singleProduct = ref(null);

onMounted(async () => {
  try {
    const products = await fetchData();
    const productId = route.params.id;
    const foundProduct = products.find(
      (product) => product.id === Number(productId)
    );
    if (foundProduct) {
      singleProduct.value = foundProduct;
    } else {
      console.error(`Product with id ${productId} not found.`);
    }
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
});

const pageTitle = computed(() => singleProduct.value ? singleProduct.value.name : "Loading Product...");

useHead({
  title: pageTitle, 
});
</script>


<style lang="scss" scoped></style>
