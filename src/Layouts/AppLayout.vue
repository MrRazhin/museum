<template>
  <div
    :class="{ 'overflow-hidden': showingNavigationDropdown }"
    class="min-h-screen h-full bg-[#fecd8c]"
  >
    <div
      class="flex-grow max-w-full flex flex-col justify-between h-full min-h-screen"
    >
      <div
        class="bg-[#011418] pb-12 pt-6 rounded-b-[2.5rem] bg-cover bg-center"
        :style="`background-image: url('${headerImage}');`"
        :class="{ '!bg-[#011418] !bg-none': showingNavigationDropdown }"
      >
        <div class="px-8 md:px-12 max-w-[75rem] w-full mx-auto">
          <div class="flex items-center justify-between">
            <div class="flex items-center md:gap-10 w-full">
              <div class="relative">
                <a
                  aria-label="Go to home"
                  class="block z-navigation-header top-0 left-0 relative max-lg:z-over-navigation-menu lg:z-over-navigation-menu h-[--mp-navigation-header--logo-height] lg:h-[--mp-navigation-header--logo-height--desktop] w-[--mp-navigation-header--logo-width] lg:w-[--mp-navigation-header--logo-width--desktop]"
                  href="/en"
                  ><img
                    alt="Vue logo"
                    class="w-[150px] h-[150px]"
                    src="../assets/logo3.png"
                /></a>
              </div>
              <div>
                <ul class="items-center md:flex hidden gap-10">
                  <li
                    class="text-white w-fit text-lg relative font-bold line cursor-pointer"
                  >
                    <router-link to="/Visit"> ПОСЕТИТЬ </router-link>
                  </li>
                  <li
                    class="text-white w-fit text-lg relative font-bold line cursor-pointer"
                  >
                    <router-link to="/Exhibition"> ВЫСТАВКИ </router-link>
                  </li>
                  <li
                    class="text-white w-fit text-lg relative font-bold line cursor-pointer"
                  >
                    <router-link to="/Collection"> КОЛЛЕКЦИЯ </router-link>
                  </li>
                  <li
                    class="text-white w-fit text-lg relative font-bold line cursor-pointer"
                  >
                    О НАС
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="flex items-center space-x-4 max-w-[250px] w-full justify-end"
            >
              <div
                class="text-[#fecd8c] cursor-pointer hover:text-[#FFB655]"
                @click="$router.push('/Account')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-12 w-12"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
              <JetButton
                @click="$router.push('/Tickets')"
                class="hidden md:block"
                >Заказать билеты</JetButton
              >
              <div
                v-if="!showingNavigationDropdown"
                class="md:hidden"
                @click="toggleOverflow"
              >
                <button
                  type="button"
                  class="group text-white transition-all flex justify-center items-center aspect-square duration-short rounded-none hover:rounded-none disabled:rounded-none bg-transparent hover:bg-transparent disabled:bg-transparent text-on-image hover:text-on-image disabled:text-on-image border-transparent hover:border-transparent disabled:border-transparent opacity-[var(--mp-icon-button--opacity--default)] hover:opacity-[var(--mp-icon-button--opacity--hover)] disabled:opacity-[var(--mp-icon-button--opacity--disabled)] border-[length:var(--mp-icon-button--border-width)] w-[var(--mp-icon-button--size)] lg:w-[var(--mp-icon-button--size--desktop)] z-navigation-header"
                  aria-label="Open menu"
                  style="
                    --mp-icon-button--opacity--default: 1;
                    --mp-icon-button--opacity--hover: 1;
                    --mp-icon-button--opacity--disabled: 0.5;
                    --mp-icon-button--border-width: 0rem;
                    --mp-icon-button--size: 2.5rem;
                    --mp-icon-button--size--desktop: 2.5rem;
                    --mp-icon-button--icon-size: 2.5rem;
                    --mp-icon-button--icon-size--desktop: 2.5rem;
                    --mp-icon-button--icon-scale--default: 1;
                    --mp-icon-button--icon-scale--hover: 1.1;
                    --mp-icon-button--icon-scale--disabled: 1;
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 32 32"
                    class="aspect-square text-white w-[var(--mp-icon-button--icon-size)] lg:w-[var(--mp-icon-button--icon-size--desktop)] scale-[var(--mp-icon-button--icon-scale--default)] group-hover:scale-[var(--mp-icon-button--icon-scale--hover)] group-disabled:scale-[var(--mp-icon-button--icon-scale--disabled)] transition-transform ease-out duration-short"
                  >
                    <path
                      fill="currentColor"
                      d="M1.038 29.537a.29.29 0 0 1-.197-.077.266.266 0 0 1-.076-.197v-7.102c0-.08.025-.146.076-.197a.29.29 0 0 1 .197-.076h1.18c.117 0 .204.033.262.098a.452.452 0 0 1 .12.142l1.924 3.453 1.923-3.453c.022-.036.058-.084.11-.142.057-.065.148-.098.272-.098H8c.08 0 .145.025.196.076a.25.25 0 0 1 .088.197v7.102a.25.25 0 0 1-.088.197.266.266 0 0 1-.197.077h-1.3a.305.305 0 0 1-.207-.077.266.266 0 0 1-.077-.197v-4.097L5.179 27.45a.503.503 0 0 1-.13.174.353.353 0 0 1-.241.077H4.24a.353.353 0 0 1-.24-.077.653.653 0 0 1-.143-.174l-1.235-2.284v4.097c0 .08-.025.146-.076.197a.266.266 0 0 1-.197.077H1.038ZM10.076 29.537a.266.266 0 0 1-.197-.077.266.266 0 0 1-.076-.197v-7.102c0-.08.025-.146.076-.197a.266.266 0 0 1 .197-.076h5.103c.08 0 .146.025.197.076a.266.266 0 0 1 .076.197v1.027c0 .08-.025.146-.076.197a.266.266 0 0 1-.197.076h-3.486v1.475h3.246c.08 0 .145.03.196.088a.266.266 0 0 1 .077.197v.95a.29.29 0 0 1-.077.197.266.266 0 0 1-.196.076h-3.246v1.52h3.573c.08 0 .146.025.197.076a.266.266 0 0 1 .077.196v1.027c0 .08-.026.146-.077.197a.266.266 0 0 1-.197.077h-5.19ZM17.055 29.537a.266.266 0 0 1-.197-.077.266.266 0 0 1-.076-.197v-7.102c0-.08.025-.146.076-.197a.266.266 0 0 1 .197-.076h1.158c.124 0 .211.029.262.087a.481.481 0 0 1 .11.12l2.666 4.207v-4.141c0-.08.025-.146.076-.197a.266.266 0 0 1 .197-.076h1.311c.08 0 .146.025.197.076a.266.266 0 0 1 .076.197v7.102a.29.29 0 0 1-.076.197.266.266 0 0 1-.197.077h-1.17c-.116 0-.203-.03-.261-.088a1.466 1.466 0 0 1-.099-.12l-2.666-4.043v3.977c0 .08-.025.146-.076.197a.266.266 0 0 1-.197.077h-1.311ZM27.837 29.646c-.656 0-1.231-.106-1.727-.317a2.481 2.481 0 0 1-1.136-.994c-.27-.452-.404-1.024-.404-1.716v-4.458c0-.08.025-.146.076-.197a.266.266 0 0 1 .197-.076h1.41c.08 0 .145.025.196.076a.266.266 0 0 1 .077.197v4.447c0 .474.113.83.338 1.071.233.233.558.35.973.35.408 0 .725-.117.95-.35.234-.24.35-.597.35-1.07V22.16c0-.08.026-.146.077-.197a.291.291 0 0 1 .196-.076h1.42c.074 0 .136.025.187.076a.25.25 0 0 1 .087.197v4.458c0 .692-.135 1.264-.404 1.716a2.48 2.48 0 0 1-1.137.994c-.488.211-1.063.317-1.726.317Z M0 4.561C0 3.699.699 3 1.561 3h28.878a1.561 1.561 0 1 1 0 3.122H1.561A1.561 1.561 0 0 1 0 4.561Zm0 10.146c0-.862.699-1.56 1.561-1.56h28.878a1.561 1.561 0 0 1 0 3.121H1.561A1.561 1.561 0 0 1 0 14.708Z"
                    />
                  </svg>
                </button>
              </div>
              <div v-else @click="toggleOverflow">
                <div
                  class="svw-[var(--mp-box--width)] lg:svw-[var(--mp-box--width--desktop)]"
                >
                  <button
                    type="button"
                    class="group transition-all flex justify-center items-center aspect-square duration-short rounded-none hover:rounded-none disabled:rounded-none bg-transparent hover:bg-transparent disabled:bg-transparent text-on-image hover:text-on-image disabled:text-on-image border-transparent hover:border-transparent disabled:border-transparent opacity-[var(--mp-icon-button--opacity--default)] hover:opacity-[var(--mp-icon-button--opacity--hover)] disabled:opacity-[var(--mp-icon-button--opacity--disabled)] border-[length:var(--mp-icon-button--border-width)] w-[var(--mp-icon-button--size)] lg:w-[var(--mp-icon-button--size--desktop)]"
                    aria-label="Close menu"
                    style="
                      --mp-icon-button--opacity--default: 1;
                      --mp-icon-button--opacity--hover: 1;
                      --mp-icon-button--opacity--disabled: 0.5;
                      --mp-icon-button--border-width: 0rem;
                      --mp-icon-button--size: 2.5rem;
                      --mp-icon-button--size--desktop: 2.5rem;
                      --mp-icon-button--icon-size: 1.75rem;
                      --mp-icon-button--icon-size--desktop: 1.75rem;
                      --mp-icon-button--icon-scale--default: 1;
                      --mp-icon-button--icon-scale--hover: 1.1;
                      --mp-icon-button--icon-scale--disabled: 1;
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 32 32"
                      class="aspect-square text-white w-[var(--mp-icon-button--icon-size)] lg:w-[var(--mp-icon-button--icon-size--desktop)] scale-[var(--mp-icon-button--icon-scale--default)] group-hover:scale-[var(--mp-icon-button--icon-scale--hover)] group-disabled:scale-[var(--mp-icon-button--icon-scale--disabled)] transition-transform ease-out duration-short"
                    >
                      <path
                        fill="currentColor"
                        d="M.67.67a2.286 2.286 0 0 1 3.232 0L16 12.767 28.098.668a2.286 2.286 0 0 1 3.233 3.233L19.233 16 31.33 28.098a2.286 2.286 0 1 1-3.233 3.233L16 19.233 3.902 31.33a2.286 2.286 0 1 1-3.233-3.233L12.767 16 .67 3.902a2.286 2.286 0 0 1 0-3.233Z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <slot name="headerContent">
            <div class="pl-4 pt-12" :class="{ '!pt-[16rem]': headerImage }">
              <div class="md:text-6xl text-3xl text-white font-bold uppercase">
                {{ pageTitle }}
              </div>
              <div
                class="md:text-lg text-base text-white mt-2"
                :class="{ 'text-2xl font-bold': !actionButton }"
                v-if="pageSubTitle"
              >
                {{ pageSubTitle }}
              </div>
              <JetButton v-if="actionButton" class="mt-4"
                >{{ actionButton.title }}
              </JetButton>
            </div>
          </slot>
        </div>
        <!-- Responsive Navigation Menu -->
        <div
          :class="{
            block: showingNavigationDropdown,
            hidden: !showingNavigationDropdown,
          }"
          class="sm:hidden h-screen overflow-y-scroll pb-16 print:hidden absolute w-full bg-[#011418] top-[170px] z-[51]"
        >
          <!-- Responsive Settings Options -->
          <div class="w-full mx-auto">
            <div>
              <ul class="items-start flex flex-col gap-5 px-12">
                <li
                  class="text-white w-fit text-lg relative font-bold line cursor-pointer"
                >
                  <router-link to="/Visit"> ПОСЕТИТЬ </router-link>
                </li>
                <li
                  class="text-white w-fit text-lg relative font-bold line cursor-pointer"
                >
                  <router-link to="/Exhibition"> ВЫСТАВКИ </router-link>
                </li>
                <li
                  class="text-white w-fit text-lg relative font-bold line cursor-pointer"
                >
                  <router-link to="/Collection"> КОЛЛЕКЦИЯ </router-link>
                </li>
                <li
                  class="text-white w-fit text-lg relative font-bold line cursor-pointer"
                >
                  О НАС
                </li>
                <li
                  class="text-white w-full text-lg relative font-bold line cursor-pointer"
                >
                  <div class="p-4 border-2 border-[#fecd8c] rounded-3xl">
                    <div class="flex flex-col gap-1">
                      <h2 class="uppercase font-bold text-white text-2xl">
                        Музей Кирилла Ражина
                      </h2>
                      <div class="flex flex-col items-start">
                        <p class="text-white text-xl mb-2">
                          ул. Вдохновения, д. 42 г. Санкт-Петербург, Россия
                          индекс 191186
                        </p>
                        <p class="text-white text-xl mb-2">
                          Открыто со вторника по воскресенье с 11:00 до 17:00.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="text-white w-full text-lg relative font-bold line cursor-pointer"
                >
                  <JetButton class="w-full">Заказать билеты</JetButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <main :class="mainClass" class="">
        <div :class="bodyClass" class="">
          <slot />
        </div>
      </main>
      <footer class="bg-[#011418] py-12">
        <div class="py-10 sm:px-6 lg:px-12 max-w-[75rem] mx-auto">
          <div class="flex flex-1 flex-col">
            <div
              class="w-full flex flex-col px-4 md:px-0 md:grid grid-cols-12 gap-5 pb-10"
            >
              <div class="col-span-4">
                <div class="flex flex-col gap-1">
                  <h2 class="uppercase font-bold text-white text-2xl">
                    Музей Кирилла Ражина
                  </h2>
                  <div class="flex flex-col items-start">
                    <p class="text-white text-xl mb-2">
                      ул. Вдохновения, д. 42 г. Санкт-Петербург, Россия индекс
                      191186
                    </p>
                    <p class="text-white text-xl mb-2">
                      Открыто со вторника по воскресенье с 11:00 до 17:00.
                    </p>
                    <p class="text-white text-xl mb-2">
                      Временная выставка современного искусства
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-span-3 col-start-6">
                <div class="flex flex-col gap-1">
                  <div
                    class="uppercase font-bold text-xl w-fit cursor-pointer text-[#FECD8C] mb-2 relative line"
                  >
                    поддержите нас
                  </div>
                  <div
                    class="uppercase font-bold text-xl w-fit cursor-pointer text-white mb-2 relative line"
                  >
                    новости
                  </div>
                  <div
                    class="uppercase font-bold text-xl w-fit cursor-pointer text-white mb-2 relative line"
                  >
                    контакты
                  </div>
                  <div
                    class="uppercase font-bold text-xl w-fit cursor-pointer text-white mb-2 relative line"
                  >
                    вакансии
                  </div>
                </div>
              </div>
              <div class="col-span-4">
                <div class="p-6 border-2 border-white rounded-3xl">
                  <h2 class="uppercase font-bold text-white text-2xl">
                    Оставаться на связи
                  </h2>
                  <p class="text-xl w-fit mb-4 text-white">
                    Подписаться на рассылку
                  </p>
                  <form class="flex flex-col">
                    <div
                      class="bg-white p-3 border-transparent border-none rounded-xl mb-4"
                    >
                      <input
                        aria-label="Email address"
                        type="email"
                        placeholder="example@email.com"
                        required=""
                        class="w-full bg-transparent placeholder:text-gray200 text-body font-body lg:text-desktop-body lg:font-body"
                      />
                    </div>
                    <div
                      class="rounded-xl bg-[#FECD8C] p-3 inline-flex cursor-pointer hover:bg-[#FFB655]"
                    >
                      <div
                        class="uppercase text-[16px] font-bold text-[#011418] mx-auto"
                      >
                        Подписаться
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="py-10 border-t border-white">
              <div class="flex items-center space-x-4">
                <div>
                  <a class="hover:underline text-white" href="#">
                    <span class="text-white text-sm">
                      Условия и положения
                    </span>
                  </a>
                </div>
                <div>
                  <a class="hover:underline text-white" href="#">
                    <span class="text-white text-sm">
                      Политика конфиденциальности
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="dropdown" />
    </div>
  </div>
</template>

<script>
import JetButton from "@/components/JetButton.vue";
export default {
  components: {
    JetButton,
  },
  props: {
    bodyClass: {
      default: "py-10 sm:px-6 lg:px-12 max-w-[75rem] mx-auto overflow-hidden",
    },
    mainClass: {
      default: "px-4 sm:px-0 h-full",
    },
    pageTitle: {
      default: "",
    },
    pageSubTitle: {
      default: "",
    },
    headerImage: {
      default: "",
    },
    actionButton: {
      default: "",
    },
  },
  data() {
    return {
      showingNavigationDropdown: false,
    };
  },
  methods: {
    toggleOverflow() {
      this.showingNavigationDropdown = !this.showingNavigationDropdown;
      if (this.showingNavigationDropdown) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    },
  },
};
</script>

<style>
.line::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s;
  position: absolute;
  left: 0;
  bottom: -2px;
}

.this_page {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: white;
  transition: width 0.3s;
  position: absolute;
  left: 0;
  bottom: -2px;
}

.line:hover::after {
  width: 100%;
}
input {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  box-shadow: none;
  background: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
  -webkit-appearance: none;
}

input[type="search"] {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>