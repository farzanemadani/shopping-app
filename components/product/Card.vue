<template>
  <figure class="col-12 col-md-3">
    <div class="product">
      <NuxtImg class="w-100" :src="product.img" :alt="product.name"></NuxtImg>
      <div class="py-3 px-4">
        <nuxtLink
          class="py-2 d-block text-decoration-none"
          :to="`/product/${product.id}`"
        >
          {{ product.name }}
        </nuxtLink>

        <span class="fs-14 text-danger">{{ formattedPrice }}</span>
        <span class="fs-14 px-2 text-muted">تومان</span>
        <BaseButton
          v-if="!isHover"
          type="button"
          className="add-btn text-white fs-14 w-100 py-3 mt-3"
          @mouseover="mouseoverEvent"
        >
          افزودن به سبد خرید
        </BaseButton>
        <BaseButton
          v-else
          @mouseleave="mouseleaveEvent"
          type="button"
          className="btn hover-btn text-white fs-14 w-100 py-3 mt-3 d-flex justify-content-between align-items-center"
        >
          <BaseIcon
            @click="addToCart(product, 1)"
            className="iconadd fs-16 px-2"
          />

          {{ productQuantity }}
          <BaseIcon
            @click="addToCart(product, -1)"
            className="iconminus fs-16 px-2"
          />
        </BaseButton>
      </div>
    </div>
  </figure>
</template>

<script setup>
  import { useCartStore } from "@/stores/cart";
  import { useFormattedPrice } from "@/composables/useFormattedPrice";

  const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  });

  const productQuantity = computed(() => {
    const product = cartStore.products.find((p) => p.id === props.product.id);
    return product ? product.quantity : 0;
  });

  const price = ref(props.product.price);
  const { formattedPrice } = useFormattedPrice(price);

  const isHover = ref(false);
  const cartStore = useCartStore();

  const addToCart = (product, quantity) => {
    cartStore.addToCart(product, quantity);
  };

  const mouseoverEvent = () => {
    isHover.value = true;
  };

  const mouseleaveEvent = () => {
    isHover.value = false;
  };
</script>

<style lang="scss" scoped>
  .product {
    border-radius: 16px;
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.1);
  }
</style>
