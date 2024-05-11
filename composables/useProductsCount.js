import { computed } from 'vue';
import { useCartStore } from '@/stores/cart';

export default function useProductsCount() {
  const cartStore = useCartStore();

  const productsCount = computed(() => {
    return cartStore.products.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
  });

  return {
    productsCount,
  };
}
