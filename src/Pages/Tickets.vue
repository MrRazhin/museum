<template>
  <AppLayout pageTitle="Билеты и часы работы">
    <div class="">
      <div
        class="p-6 border-2 border-[#011418] rounded-3xl w-full grid grid-cols-[repeat(6,minmax(0,1fr))] lg:grid-cols-12 gap-x-0.5 lg:gap-x-1 gap-y-0.5 lg:gap-y-1 items-center"
      >
        <div class="md:col-span-6 col-span-12">
          <h2 class="uppercase mb-4 font-bold text-[#011418] text-2xl">
            музей кирилла Ражина
          </h2>
          <div class="flex flex-col items-start">
            <p class="text-[#011418] text-xl mb-2">
              ул. Вдохновения, д. 42 г. Санкт-Петербург, Россия индекс 191186
            </p>
            <p class="text-[#011418] text-xl mb-2">
              Открыто со вторника по воскресенье с 11:00 до 17:00.
            </p>
            <p class="text-[#011418] text-xl mb-2">
              <SecondaryButton @click="orderTicket = true"
                >купить билет</SecondaryButton
              >
            </p>
          </div>
        </div>
        <div class="md:col-span-6 col-span-12">
          <div class="-mb-4 lg:mb-0 w-full">
            <div class="w-full">
              <div class="flex flex-col gap-0.5">
                <div class="overflow-hidden w-full border-none rounded-3xl">
                  <div class="relative overflow-hidden aspect-video">
                    <img
                      alt=""
                      :src="`http://localhost:5000/museum.png`"
                      class=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 mt-4">
          <div v-if="orderTicket">
            <h2
              v-if="!payed_ticket"
              class="uppercase text-center mb-4 font-bold text-[#011418] text-2xl"
            >
              {{
                isAuthenticated
                  ? "Выберите тип билета"
                  : "авторизируйтесь или зарегестрируйтесь для покупки билета"
              }}
            </h2>
            <AuthBlock v-if="!isAuthenticated" :darkMode="false" />
            <div v-else-if="!payed_ticket && isAuthenticated">
              <div class="flex-col md:flex-row flex items-center md:space-x-4">
                <div class="w-fit">
                  <LabelVue class="px-2">Количество </LabelVue>
                  <InputNumber
                    v-model="value"
                    showButtons
                    buttonLayout="horizontal"
                    :min="0"
                    :max="10"
                    :disabled="is_loading"
                  >
                  </InputNumber>
                </div>
                <div class="w-full">
                  <LabelVue class="px-2">Тип билета </LabelVue>
                  <Select
                    :disabled="is_loading"
                    class="w-full my-2"
                    :options="ticket_types"
                    v-model="ticket_type"
                    optionLabel="name"
                  />
                </div>
              </div>
              <div>
                <LabelVue class="px-2">Дата посещения </LabelVue>
                <DatePicker
                  :disabled="is_loading"
                  class="w-full my-2"
                  v-model="date"
                />
              </div>

              <div class="flex items-center justify-between mt-2">
                <h2 class="uppercase mb-4 font-bold text-[#011418] text-2xl">
                  к оплате:
                  {{
                    ticket_type?.price ? ticket_type?.price * value + " ₽" : ""
                  }}
                </h2>
                <SecondaryButton @click="buyTicket">Оплатить</SecondaryButton>
              </div>
            </div>
            <div v-if="payed_ticket">
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
                <div class="flex items-center space-x-2 mx-auto w-fit">
                  <div class="text-gray-500">
                    Ваш билет появится в личном кабинете
                  </div>
                  <div
                    class="font-bold underline cursor-pointer"
                    @click="$router.push('/Account')"
                  >
                    Перейти
                  </div>
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
import SecondaryButton from "@/components/SecondaryButton.vue";

import InputNumber from "primevue/inputnumber";

import AppLayout from "@/Layouts/AppLayout.vue";
import { VueSelect } from "vue-select";
import axios from "axios";

import Select from "primevue/select";

import DatePicker from "primevue/datepicker";

import { mapActions, mapGetters, mapState } from "vuex";
import LabelVue from "@/components/Label.vue";

export default {
  components: {
    AppLayout,
    SecondaryButton,
    AuthBlock,
    VueSelect,
    Select,
    DatePicker,
    InputNumber,
    LabelVue,
  },
  data() {
    return {
      orderTicket: false,
      ticket_types: [],
      ticket_type: null,
      date: null,
      value: 1,
      is_loading: false,
      payed_ticket: false,
    };
  },
  methods: {
    buyTicket() {
      this.is_loading = true;
      const requests = [];

      for (let i = 0; i < this.value; i++) {
        requests.push(
          axios.post(process.env.VUE_APP_API_URL + "api/ticket/", {
            userId: this.user.id,
            visitDate: this.date,
            ticketTypeId: this.ticket_type.id,
          })
        );
      }

      Promise.all(requests)
        .then((responses) => {
          responses.forEach((response) => {
            console.log(response.data);
          });
        })
        .catch((error) => {
          console.error("Ошибка при выполнении запросов:", error);
        })
        .finally(() => {
          this.is_loading = false;
          this.payed_ticket = true;
        });
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
    ...mapState(["user"]),
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_API_URL + "api/ticket_type")
      .then((response) => {
        this.ticket_types = response.data;
        console.log(response.data);
      });
  },
};
</script>
<style>
@import "vue-select/dist/vue-select.css";
</style>