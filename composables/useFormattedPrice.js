import { ref, computed } from 'vue';

export function useFormattedPrice(price) {
  const formattedPrice = computed(() => {
    if (price && price.value !== undefined) {
      return price.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return '';
  });
  return {
    formattedPrice,
  };
}
