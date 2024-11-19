<template>
  <div class="border-2 rounded-md py-4 px-6 border-[#011418] cursor-pointer">
    <div class="flex items-center justify-between text-[#011418]">
      <div class="flex items-center justify-between text-[#011418] space-x-4">
        <slot name="icon"></slot>
        <div class="uppercase text-2xl font-bold text-[#011418]">
          <slot></slot>
        </div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-10 w-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>