<template>
  <div class="bg-white">
    <header class="container py-4">
      <div class="row justify-content-between align-items-center">
        <div class="col-6 col-md-5">
          <div class="d-flex gap-5">
            <NuxtLink
              class="text-decoration-none d-flex justify-content-center align-items-center"
              to="/"
            >
              <NuxtImg src="/logo.png" alt="Logo"></NuxtImg>
              <h1 class="primary-txt h6 mb-0 px-2">فروشگاه اینترنتی</h1>
            </NuxtLink>
            <nav class="d-flex gap-3 justify-content-center align-items-center">
              <NuxtLink class="fs-14 text-decoration-none primary-txt" to="/">
                صفحه اصلی
              </NuxtLink>
              <NuxtLink class="fs-14 text-decoration-none primary-txt" to="/">
                صفحه اصلی
              </NuxtLink>
              <NuxtLink class="fs-14 text-decoration-none primary-txt" to="/">
                صفحه اصلی
              </NuxtLink>
            </nav>
          </div>
        </div>

        <div class="col-md-3 d-flex gap-3 justify-content-end">
          <div class="position-relative">
            <NuxtImg
              class="shopping-cart-icon"
              src="/basket.svg"
              alt="shopping cart"
            ></NuxtImg>
            <span
              class="rounded-circle fs-14 text-white cart position-absolute top-0 end-0"
              >{{ useProductsCount().productsCount }}</span
            >
          </div>

          <BaseButton type="button" className="primary-btn text-white fs-14">
            ورود / عضویت
          </BaseButton>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
  import useProductsCount from "../../composables/useProductsCount";
</script>

<style lang="scss" scoped>
  .shopping-cart-icon {
    width: 30px;
    height: 30px;
  }
  .cart {
    width: 16px;
    height: 16px;
    background-color: #ff5722;
    font-size: 10px;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
