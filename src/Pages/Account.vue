<template>
  <AppLayout pageTitle="Личный кабинет">
    <div class="md:px-28">
      <AuthBlock v-if="!isAuthenticated" />
      <div v-else>
        <div class="uppercase text-2xl md:text-4xl font-bold mb-4">
          Данные аккаунта
        </div>
        <form class="flex flex-col">
          <div
            class="bg-white p-3 border-transparent border-none rounded-xl mb-4"
          >
            <input
              disabled
              :value="user.email"
              aria-label="Email address"
              type="email"
              placeholder="example@email.com"
              required=""
              class="w-full bg-transparent placeholder:text-gray200 text-body font-body lg:text-desktop-body lg:font-body"
            />
          </div>
          <!-- <div
            class="bg-white p-3 border-transparent border-none rounded-xl mb-4"
          >
            <input
              disabled
              v-model="password"
              aria-label="Email address"
              type="password"
              placeholder="12345"
              required=""
              class="w-full bg-transparent placeholder:text-gray200 text-body font-body lg:text-desktop-body lg:font-body"
            />
          </div> -->
          <div
            class="bg-white p-1 border-transparent border-none rounded-xl mb-4"
          >
            <InputMask
              disabled
              id="phone"
              :modelValue="user.phone"
              mask="9(999) 999-9999"
              placeholder="9(999) 999-9999"
              fluid
              class="w-full bg-transparent !shadow-none placeholder:text-gray200 !border-none text-body font-body lg:text-desktop-body lg:font-body"
            />
          </div>
          <div
            class="bg-white p-3 border-transparent border-none rounded-xl mb-4"
          >
            <input
              disabled
              :value="user.firstName"
              type="text"
              placeholder="Имя"
              required=""
              class="w-full bg-transparent !placeholder:text-gray200 text-body font-body lg:text-desktop-body lg:font-body"
            />
          </div>
          <div
            class="bg-white p-3 border-transparent border-none rounded-xl mb-4"
          >
            <input
              disabled
              :value="user.lastName"
              type="text"
              placeholder="Фамилия"
              required=""
              class="w-full bg-transparent placeholder:text-gray200 text-body font-body lg:text-desktop-body lg:font-body"
            />
          </div>
        </form>
        <div class="my-4 flex items-center justify-end">
          <secondary-button @click="exit">Выйти из аккаунта</secondary-button>
        </div>

        <div class="uppercase text-2xl md:text-4xl font-bold mb-4">
          Мои Билеты
        </div>
        <div v-if="tickets.length == 0">
          <div>
            <div class="text-center py-4 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-16 w-16 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                />
              </svg>

              <div class="text-gray-500">Тут появятся ваши билеты</div>
            </div>
          </div>
        </div>
        <div v-else>
          <div
            v-for="ticket in tickets"
            :key="ticket.id"
            class="p-6 border-2 my-4 border-[#011418] rounded-3xl w-full grid grid-cols-[repeat(6,minmax(0,1fr))] lg:grid-cols-12 gap-x-0.5 lg:gap-x-1 gap-y-0.5 lg:gap-y-1 items-center"
          >
            <div class="md:col-span-6 col-span-12">
              <h2 class="uppercase mb-4 font-bold text-[#011418] text-2xl">
                билет
              </h2>
              <div class="flex flex-col items-start">
                <p class="text-[#011418] text-xl mb-2">
                  <span class="font-bold">Номер:</span>
                  {{ ticket.ticketNumber }}
                </p>
                <p class="text-[#011418] text-xl mb-2">
                  <span class="font-bold">Имя владельца:</span>
                  {{ user.firstName + " " + user.lastName }}
                </p>
                <p class="text-[#011418] text-xl mb-2">
                  <span class="font-bold"> Действителен до:</span>
                  {{ formatDate(ticket.visitDate) }}
                </p>
                <p class="text-[#011418] text-xl mb-2">
                  <SecondaryButton @click="orderTicket = true"
                    >купить еще</SecondaryButton
                  >
                </p>
              </div>
            </div>
            <div class="md:col-span-6 col-span-12 justify-end">
              <div class="w-full flex md:justify-end">
                <div class="w-[200px] h-[200px]">
                  <div class="flex flex-col gap-0.5">
                    <div class="overflow-hidden w-full border-none">
                      <div class="">
                        <img
                          alt=""
                          :src="`http://localhost:5000/QR_code.png`"
                          class=""
                        />
                      </div>
                    </div>
                  </div>
                  <div>Ваш билет</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AuthBlock from "@/components/AuthBlock.vue";
import JetButton from "@/components/JetButton.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import { mapActions, mapGetters, mapState } from "vuex";
import InputMask from "primevue/inputmask";
import axios from "axios";
import moment from "moment";

export default {
  components: { AppLayout, SecondaryButton, JetButton, AuthBlock, InputMask },
  data() {
    return {
      isLogin: false,
      email: null,
      password: null,
      data: null,
      isLoading: false,
      tickets: [],
    };
  },
  methods: {
    formatDate(date) {
      return moment(date).format("L");
    },
    ...mapActions(["logout"]),
    exit() {
      (this.tickets = []), this.logout();
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
    ...mapState(["user"]),
  },
  watch: {
    isAuthenticated() {
      if (this.isAuthenticated) {
        axios
          .get(process.env.VUE_APP_API_URL + "api/ticket/user/" + this.user.id)
          .then((response) => {
            this.tickets = response.data;
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  mounted() {
    if (this.isAuthenticated) {
      axios
        .get(process.env.VUE_APP_API_URL + "api/ticket/user/" + this.user.id)
        .then((response) => {
          this.tickets = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>