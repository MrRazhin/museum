<template>
  <div class="min-h-screen bg-[#fecd8c]">
    <div class="flex-grow max-w-full flex flex-col">
      <div class="bg-[#011418] pb-12 rounded-b-lg">
        <div
          class="flex h-16 px-12 sm:pr-12 sm:pl-8 items-center max-w-[75rem] w-full mx-auto"
        >
          <div
            class="svw-[var(--mp-box--width)] lg:svw-[var(--mp-box--width--desktop)]"
          >
            <div class="relative">
              <a
                aria-label="Go to home"
                class="block z-navigation-header top-0 left-0 relative max-lg:z-over-navigation-menu lg:z-over-navigation-menu h-[--mp-navigation-header--logo-height] lg:h-[--mp-navigation-header--logo-height--desktop] w-[--mp-navigation-header--logo-width] lg:w-[--mp-navigation-header--logo-width--desktop]"
                href="/en"
                ><img
                  alt="Vue logo"
                  class="w-[150px] h-[150px]"
                  src="../assets/logo2.png"
              /></a>
            </div>
          </div>
          <div
            class="svw-[var(--mp-box--width)] lg:svw-[var(--mp-box--width--desktop)]"
          >
            <ul
              class="items-center hidden lg:flex relative z-navigation-header gap-md"
            >
              <li
                class="w-fit text-on-image"
                style="
                  --mp-navigation-links-icon-size: 0rem;
                  --mp-navigation-links-icon-size--desktop: 0rem;
                  --mp-navigation-links-between-nav-links-icon-size: 0rem;
                  --mp-navigation-links-between-nav-links-icon-size--desktop: 0rem;
                "
              >
                <a class="relative group whitespace-nowrap" href="/en/visit-us"
                  ><span class="relative flex items-center gap-xs"
                    ><span
                      ><span
                        class="text-navigation-header-link font-navigation-header-link lg:text-desktop-navigation-header-link lg:font-navigation-header-link uppercase"
                        >Visit</span
                      ><span
                        class="block bg-current absolute mt-4xs transition-all duration-short w-0 group-hover:w-[100%] mt-[--mp-navigation-header-link-underline-offset] lg:mt-[--mp-navigation-header-link-underline-offset--desktop] h-[--mp-navigation-header-link-underline-height] lg:h-[--mp-navigation-header-link-underline-height--desktop]"
                        style="
                          --mp-navigation-header-link-underline-height: 0.125rem;
                          --mp-navigation-header-link-underline-height--desktop: 0.125rem;
                          --mp-navigation-header-link-underline-offset: 0rem;
                          --mp-navigation-header-link-underline-offset--desktop: 0rem;
                          --mp-navigation-header-link-underline-percentage: 100%;
                          --mp-navigation-header-link-underline-percentage--desktop: 100%;
                        "
                      ></span></span></span
                ></a>
              </li>
              <li
                class="w-fit text-on-image"
                style="
                  --mp-navigation-links-icon-size: 0rem;
                  --mp-navigation-links-icon-size--desktop: 0rem;
                  --mp-navigation-links-between-nav-links-icon-size: 0rem;
                  --mp-navigation-links-between-nav-links-icon-size--desktop: 0rem;
                "
              >
                <a
                  class="relative group whitespace-nowrap"
                  href="/en/see-and-do"
                  ><span class="relative flex items-center gap-xs"
                    ><span
                      ><span
                        class="text-navigation-header-link font-navigation-header-link lg:text-desktop-navigation-header-link lg:font-navigation-header-link uppercase"
                        >See &amp; Do</span
                      ><span
                        class="block bg-current absolute mt-4xs transition-all duration-short w-0 group-hover:w-[100%] mt-[--mp-navigation-header-link-underline-offset] lg:mt-[--mp-navigation-header-link-underline-offset--desktop] h-[--mp-navigation-header-link-underline-height] lg:h-[--mp-navigation-header-link-underline-height--desktop]"
                        style="
                          --mp-navigation-header-link-underline-height: 0.125rem;
                          --mp-navigation-header-link-underline-height--desktop: 0.125rem;
                          --mp-navigation-header-link-underline-offset: 0rem;
                          --mp-navigation-header-link-underline-offset--desktop: 0rem;
                          --mp-navigation-header-link-underline-percentage: 100%;
                          --mp-navigation-header-link-underline-percentage--desktop: 100%;
                        "
                      ></span></span></span
                ></a>
              </li>
              <li
                class="w-fit text-on-image"
                style="
                  --mp-navigation-links-icon-size: 0rem;
                  --mp-navigation-links-icon-size--desktop: 0rem;
                  --mp-navigation-links-between-nav-links-icon-size: 0rem;
                  --mp-navigation-links-between-nav-links-icon-size--desktop: 0rem;
                "
              >
                <a
                  class="relative group whitespace-nowrap"
                  href="/en/collection"
                  ><span class="relative flex items-center gap-xs"
                    ><span
                      ><span
                        class="text-navigation-header-link font-navigation-header-link lg:text-desktop-navigation-header-link lg:font-navigation-header-link uppercase"
                        >Collection</span
                      ><span
                        class="block bg-current absolute mt-4xs transition-all duration-short w-0 group-hover:w-[100%] mt-[--mp-navigation-header-link-underline-offset] lg:mt-[--mp-navigation-header-link-underline-offset--desktop] h-[--mp-navigation-header-link-underline-height] lg:h-[--mp-navigation-header-link-underline-height--desktop]"
                        style="
                          --mp-navigation-header-link-underline-height: 0.125rem;
                          --mp-navigation-header-link-underline-height--desktop: 0.125rem;
                          --mp-navigation-header-link-underline-offset: 0rem;
                          --mp-navigation-header-link-underline-offset--desktop: 0rem;
                          --mp-navigation-header-link-underline-percentage: 100%;
                          --mp-navigation-header-link-underline-percentage--desktop: 100%;
                        "
                      ></span></span></span
                ></a>
              </li>
              <li
                class="w-fit text-on-image"
                style="
                  --mp-navigation-links-icon-size: 0rem;
                  --mp-navigation-links-icon-size--desktop: 0rem;
                  --mp-navigation-links-between-nav-links-icon-size: 0rem;
                  --mp-navigation-links-between-nav-links-icon-size--desktop: 0rem;
                "
              >
                <a class="relative group whitespace-nowrap" href="/en/about-us"
                  ><span class="relative flex items-center gap-xs"
                    ><span
                      ><span
                        class="text-navigation-header-link font-navigation-header-link lg:text-desktop-navigation-header-link lg:font-navigation-header-link uppercase"
                        >About us</span
                      ><span
                        class="block bg-current absolute mt-4xs transition-all duration-short w-0 group-hover:w-[100%] mt-[--mp-navigation-header-link-underline-offset] lg:mt-[--mp-navigation-header-link-underline-offset--desktop] h-[--mp-navigation-header-link-underline-height] lg:h-[--mp-navigation-header-link-underline-height--desktop]"
                        style="
                          --mp-navigation-header-link-underline-height: 0.125rem;
                          --mp-navigation-header-link-underline-height--desktop: 0.125rem;
                          --mp-navigation-header-link-underline-offset: 0rem;
                          --mp-navigation-header-link-underline-offset--desktop: 0rem;
                          --mp-navigation-header-link-underline-percentage: 100%;
                          --mp-navigation-header-link-underline-percentage--desktop: 100%;
                        "
                      ></span></span></span
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <main :class="mainClass" class="px-4 sm:px-0 h-full">
        <div
          :class="bodyClass"
          class="py-10 sm:px-6 lg:px-12 max-w-[75rem] mx-auto"
        >
          <slot></slot>
        </div>
      </main>
      <div id="dropdown"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>