<template>
  <figure class="col-12 col-md-3">
    <div class="product px-4 py-3">
      <span class="py-3 d-block text-center border-bottom">سبد خرید شما</span>
      <ul class="p-0 shoppingItemList">
        <shoppingItem
          class="d-flex p-3 border-bottom"
          v-for="product in cartProducts"
          :key="product.id"
          :product="product"
        />
      </ul>
      <div class="total-price rounded d-flex justify-content-between p-2 mb-4">
        <span>مجموع سبد:</span>
        <div>
          <span>{{ formattedPrice }}</span>
          <span class="fs-14 px-2 text-muted">تومان</span>
        </div>
      </div>
      <div class="d-flex justify-content-between gap-3">
        <BaseButton
          type="button"
          className="add-btn text-white fs-14 w-50 py-3"
        >
          تکمیل خرید
        </BaseButton>
        <BaseButton
          type="button"
          @click="remove"
          className="remove-btn text-white fs-14 w-50 py-3"
        >
          حذف کل سبد
        </BaseButton>
      </div>
    </div>
  </figure>
</template>

<script setup>
  import { computed } from "vue";
  import { useCartStore } from "@/stores/cart";
  import { useFormattedPrice } from "@/composables/useFormattedPrice";

  const cartStore = useCartStore();
  const cartProducts = computed(() => {
    return cartStore.products.filter((product) => product.quantity > 0);
  });

  const totalPrice = computed(() => {
    return cartProducts.value.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
  });

  const price = ref(totalPrice);
  const { formattedPrice } = useFormattedPrice(price);

  const remove = () => {
    cartStore.remove();
  };
</script>

<style lang="scss" scoped>
  .shopping-cart {
    border-radius: 16px;
  }

  .shoppingItemList {
    height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  /* For WebKit browsers */
  .shoppingItemList::-webkit-scrollbar {
    border-radius: 10px;
    width: 12px; /* Width of the scrollbar */
  }

  .shoppingItemList::-webkit-scrollbar-track {
    background: #f1f1f1; /* Color of the scrollbar track */
  }

  .shoppingItemList::-webkit-scrollbar-thumb {
    background: #888; /* Color of the scrollbar thumb */
  }

  .shoppingItemList::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color of the scrollbar thumb on hover */
  }

  /* For Firefox */
  .shoppingItemList {
    scrollbar-width: thin; /* "auto" or "thin" */
    scrollbar-color: #888 #f1f1f1; /* Thumb and track color */
  }
  .product {
    border-radius: 16px;
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.1);
  }
  .total-price {
    background: #f6f8fa;
  }
</style>
