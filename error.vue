<template>
    <div class="flex h-screen flex-col items-center justify-center">
      <h1 class="text-9xl">{{ error?.statusCode }}</h1>
      <p class="mt-7 text-4xl">{{ error?.message }}</p>
      <button
        @click="handleError"
        class="mt-7 rounded bg-blue-400 px-7 py-4 text-2xl text-white"
      >
        Go Back
      </button>
    </div>
  </template>
  <script setup>
  const error = useError();
  const handleError = () => {
    clearError({
      redirect: "/",
    });
  };
  </script>
  