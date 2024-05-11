<template>
  <button
    :type="typeBtn"
    :class="buttonClasses"
    @click.stop="emitClickEvent"
    @mouseover="mouseoverEvent"
    @mouseleave="mouseleaveEvent"
  >
    <slot></slot>
  </button>
</template>

<script setup>
  const emit = defineEmits(["click", "mouseover", "mouseleave"]);

  const props = defineProps({
    typeBtn: {
      type: String,
      default: "button",
    },
    className: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  });

  const buttonClasses = computed(() => {
    const classes = ["btn", props.className];
    if (props.disabled) {
      classes.push("cursor-not-allowed");
    }
    return classes.filter(Boolean).join(" ");
  });

  const emitClickEvent = () => {
    emit("click");
  };
  const mouseoverEvent = () => {
    emit("mouseover");
  };

  const mouseleaveEvent = () => {
    emit("mouseleave");
  };
</script>

<style lang="scss" scoped></style>
