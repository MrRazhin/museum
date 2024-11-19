<template>
  <AppLayout
    pageTitle="Посетите нас"
    page-sub-title="Здесь вы найдете все необходимое для посещения нашего музея."
    body-class=""
    main-class=""
    headerImage="https://nadezhda.me/images/content/April_2019/%D1%8D%D0%BA%D1%81%D0%BA%D1%83%D1%80%D1%81%D0%B8%D1%8F%202.jpg"
  >
    <div class="grid grid-col gap-10">
      <div
        class="py-10 sm:px-6 lg:px-12 max-w-[75rem] mx-auto overflow-hidden px-4 h-full grid grid-col gap-10"
      >
        <div class="grid md:grid-cols-2 gap-5">
          <ActionButton>
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-14 w-14"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </template>
            <span>Билеты и часы работы</span>
          </ActionButton>
          <ActionButton>
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-14 w-14"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
                />
              </svg>
            </template>
            <span>Аудио туры</span>
          </ActionButton>
          <ActionButton>
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-14 w-14"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
            </template>
            <span>Как добраться сюда</span>
          </ActionButton>
          <ActionButton>
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-14 w-14"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </template>
            <span>Музейный магазин</span>
          </ActionButton>
        </div>
        <InfoBlock
          image="https://family.by/uploads/posts/2020-02/1580799666_muzey.jpg"
          title="НАША ГОСТЕВАЯ КНИГА"
          :description="[
            '«Великолепный музей», Келли, 11 лет.',
            '«Было замечательно узнать о голландском художнике и увидеть его работы вблизи. Прекрасное дополнение к дню в Харлеме!» Антон, обзор Google',
            '«Невероятно красивый музей, обязательный к посещению для всех, кто любит искусство и красоту», — Артур.',
          ]"
        />
        <div>
          <HidingBlock>
            <template #title="{ isOpen }">
              <div
                class="items-center flex justify-between w-full text-2xl font-bold text-[#011418]"
              >
                <div>Нужно ли покупать билет онлайн заранее?</div>
                <div v-if="!isOpen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                <div v-else>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </div>
              </div>
            </template>
            <div class="text-lg text-[#011418]">
              Это на ваше усмотрение. Вы можете посетить музей даже без
              бронирования.
            </div>
          </HidingBlock>
          <div class="my-4 border border-[#011418] w-full"></div>
          <HidingBlock>
            <template #title="{ isOpen }">
              <div
                class="items-center flex justify-between w-full text-2xl font-bold text-[#011418]"
              >
                <div>Разрешено ли фотографировать в музее?</div>
                <div v-if="!isOpen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                <div v-else>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </div>
              </div>
            </template>
            <div class="text-lg text-[#011418]">
              Это на ваше усмотрение. Вы можете посетить музей даже без
              бронирования.
            </div>
          </HidingBlock>
          <div class="my-4 border border-[#011418] w-full"></div>
          <HidingBlock>
            <template #title="{ isOpen }">
              <div
                class="items-center flex justify-between w-full text-2xl font-bold text-[#011418]"
              >
                <div>Есть ли в музее гардероб и шкафчики?</div>
                <div v-if="!isOpen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                <div v-else>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </div>
              </div>
            </template>
            <div class="text-lg text-[#011418]">
              Это на ваше усмотрение. Вы можете посетить музей даже без
              бронирования.
            </div>
          </HidingBlock>
          <div class="my-4 border border-[#011418] w-full"></div>
          <HidingBlock>
            <template #title="{ isOpen }">
              <div
                class="items-center flex justify-between w-full text-2xl font-bold text-[#011418]"
              >
                <div>Могу ли я купить в билет по Пушкинской карте?</div>
                <div v-if="!isOpen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                <div v-else>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </div>
              </div>
            </template>
            <div class="text-lg text-[#011418]">
              Это на ваше усмотрение. Вы можете посетить музей даже без
              бронирования.
            </div>
          </HidingBlock>
          <div class="my-4 border border-[#011418] w-full"></div>
        </div>
      </div>

      <div class="py-14 bg-[#c4cb93]">
        <div
          class="py-10 sm:px-6 lg:px-12 max-w-[75rem] mx-auto px-4 h-full overflow-hidden"
        >
          <Banner
            :actionButton="{ title: 'Перейти на страницу', route: '/' }"
            type="exhibition"
            image="https://sun9-57.userapi.com/impg/KG__q9yJySZPNDlLhzTF4_d-ulAZVpS_M_qpIQ/kdeISMwoZVU.jpg?size=1216x832&quality=95&sign=c56726f86f7795f787d18999ce347dfa&type=album"
          >
            <div class="font-bold uppercase text-2xl md:text-4xl text-white">
              О кирилле ражине
            </div>
          </Banner>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import ActionButton from "@/components/ActionButton.vue";
import InfoBlock from "@/components/InfoBlock.vue";
import HidingBlock from "@/components/HidingBlock.vue";
import Banner from "@/components/Banner.vue";
export default {
  components: { AppLayout, ActionButton, InfoBlock, HidingBlock, Banner },
};
</script>