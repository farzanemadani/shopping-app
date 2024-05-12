<template>
  <div class="col-12 col-md-6">
    <div class="bg-white product-detail p-4">
      <h1 class="fs-24 heading">{{ product.name }}</h1>
      <span class="fs-14 text-muted"
        >{{ product.nameEn }} - {{ product.type }}
      </span>

      <p class="fs-14 mt-2 discription pb-2">
        {{ product.discription }}
      </p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  });
</script>

<style lang="scss" scoped>
  .product-detail {
    border-radius: 16px;
  }
  .discription {
    font-style: normal;
    font-weight: 150;
    line-height: 31px; 
  }
  .heading {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
  }
</style>
