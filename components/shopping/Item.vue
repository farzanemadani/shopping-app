<template>
  <li>
    <NuxtImg class="rounded w-25 h-25" :src="product.img" :alt="product.name" />
    <div class="pe-2">
      <span class="d-block">سبد خرید شما</span>
      <div class="d-flex">
        <span class="d-block text-danger">{{ formattedPrice }}</span>
        <span class="fs-14 px-2 text-muted">تومان</span>
        <div class="d-flex align-items-center px-1">
          <BaseIcon
            @click="incrementQuantity"
            className="iconaddCircle pointer"
          />
          <span class="px-1">{{ product.quantity }}</span>
          <BaseIcon
            @click="decrementQuantity"
            className="iconminusCirlce pointer"
          />
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
  import { useCartStore } from "@/stores/cart";
  import { useFormattedPrice } from "@/composables/useFormattedPrice";
  const cartStore = useCartStore();
  const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  });
  const price = ref(props.product.price);
  const { formattedPrice } = useFormattedPrice(price);

  const incrementQuantity = () => {
    cartStore.updateQuantity(props.product.id, props.product.quantity + 1);
  };

  const decrementQuantity = () => {
    cartStore.updateQuantity(props.product.id, props.product.quantity - 1);
  };
</script>

<style lang="scss" scoped></style>
