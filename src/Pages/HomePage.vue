<template>
  <AppLayout
    bodyClass=""
    mainClass=""
    :actionButton="{ title: 'Посмотреть выставку', route: '/' }"
    pageTitle="Кирилл Ражин"
    pageSubTitle="Первая обзорная выставка работ Кирилла Ражина"
    headerImage="https://sun9-57.userapi.com/impg/KG__q9yJySZPNDlLhzTF4_d-ulAZVpS_M_qpIQ/kdeISMwoZVU.jpg?size=1216x832&quality=95&sign=c56726f86f7795f787d18999ce347dfa&type=album"
  >
    <div class="grid grid-col gap-10">
      <div
        class="py-10 sm:px-6 lg:px-12 max-w-[75rem] mx-auto overflow-hidden px-4 h-full"
      >
        <InfoBlock
          title="Добро пожаловать в музей Кирилла Ражина"
          image="https://sun9-51.userapi.com/impg/hLIOKOosy90mpYMcM9s-Q8sN0QAAXPjsvCtVTw/nSMj_pk9Ug8.jpg?size=1216x832&quality=95&sign=0773b8ead68cbaedd11c10edb0e26fd6&type=album"
          :description="[
            'Добро пожаловать в музей имени Кирилла Ражина — центр изящных искусств в Санкт-Петербурге. Здесь представлена крупнейшая в мире коллекция произведений Кирилла Ражина, а также работы других выдающихся художников, таких как Иван Беляев, Кририлл ван Корнилов и Роман Жеребцов. Вам также будет доступна обширная коллекция произведений искусства с 1880 года по настоящее время, включая работы Исаака Израэля, Чарли Туропа и Даны Ликсенберг.',
            'Откройте для себя современное искусство XVI и XVII веков в двух красивых исторических зданиях в старом центре города.',
          ]"
        />
      </div>

      <div>
        <div
          class="flex flex-col md:flex-row items-center md:justify-between mb-4 sm:px-6 lg:px-12 max-w-[75rem] mx-auto px-4"
        >
          <div class="uppercase text-2xl md:text-4xl font-bold">
            Наши основные моменты
          </div>
          <SecondaryButton> Откройте для себя нашу коллекцию </SecondaryButton>
        </div>

        <ScrollGallery />
      </div>
      <div>
        <div class="py-14 bg-[#011418]">
          <div
            class="py-10 sm:px-6 lg:px-12 max-w-[75rem] mx-auto px-4 h-full overflow-hidden"
          >
            <Banner
              :actionButton="{ title: 'Перейти на страницу', route: '/' }"
              image="https://sun9-62.userapi.com/impg/CNzh8r1_k5qTAZfbWEqFGLxwxz9UToent80NbQ/PwVZdWSG2JA.jpg?size=1216x832&quality=95&sign=a852bce8baf800099e7448ef4fdc715f&type=album"
            >
              <div class="font-bold uppercase text-2xl md:text-4xl text-white">
                О кирилле ражине
              </div>
            </Banner>
          </div>
        </div>
        <div class="py-14 bg-[#c4cb93]">
          <div
            class="flex flex-col md:flex-row items-center md:justify-between mb-4 sm:px-6 lg:px-12 max-w-[75rem] mx-auto px-4"
          >
            <div class="uppercase text-2xl md:text-4xl font-bold">Новости</div>
          </div>
          <ScrollGallery />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import InfoBlock from "@/components/InfoBlock.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";
import ScrollGallery from "@/components/ScrollGallery.vue";
import Banner from "@/components/Banner.vue";
export default {
  components: { AppLayout, InfoBlock, SecondaryButton, ScrollGallery, Banner },
};
</script>