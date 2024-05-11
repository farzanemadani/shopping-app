<template>
  <i :class="iconClasses"></i>
</template>

<script setup>
  const props = defineProps({
    className: {
      type: String,
      default: "",
    },
  });
  const iconClasses = computed(() => {
    const classes = [props.className];
    return classes.filter(Boolean).join(" ");
  });
</script>

<style lang="scss" scoped>
  .pointer {
    cursor: pointer;
  }
</style>
