<template>
  <div>
    <!-- 幻灯片部分-->
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/image/1a4b3eb4a82d5656ed5d949630cc7ec5.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/image/52e6e1a7c5f1b98584b40658951e0a19.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/image/8b0573b547e224283861790c57b593a7.jpeg" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>
    <!-- 图标部分 -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- 新闻卡片部分 -->
    <m-list-card icon="cc-menu-circle" title="新闻资讯" :categories="newsCats">
      <template #items="{ category }">
        <router-link tag="div" :to="`/articles/${news._id}`" class="py-2 fs-lg d-flex"
          v-for="(news, i) in category.newsList" :key="i">
          <span class="text-info">[{{ news.categoryName }}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{
              news.title
          }}</span>
          <span class="text-grey-1 fs-sm">{{ news.createdAt | date }}</span>
        </router-link>
      </template>
    </m-list-card>
    <!-- 英雄卡片部分 -->
    <m-list-card icon="Boxing-Helmet" title="英雄列表" :categories="heroCats">
      <template #items="{ category }">
        <div class="d-flex flex-wrap" style="margin: 0 -0.4rem">
          <router-link tag="div" :to="`/heroes/${hero._id}`" class="p-2 text-center" style="width: 20%"
            v-for="(hero, i) in category.heroList" :key="i">
            <img :src="hero.avatar" class="w-100" />
            <div>{{ hero.name }}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>
    <!-- 视频卡片部分  -->
    <m-card icon="cc-menu-circle" title="精彩视频"></m-card>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    },
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home",
        },
        // 轮播图自动播放
        // autoplay: {
        //   delay: 2500,
        // },
      },
      newsCats: [],
      heroCats: [],
    };
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      this.newsCats = res.data;
    },
    async fetchHeroCats() {
      const res = await this.$http.get("heroes/list");
      this.heroCats = res.data;
    },
  },
  created() {
    this.fetchNewsCats();
    this.fetchHeroCats();
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");

    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;

  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;

    &:nth-child(4n + 1) {
      border-left: none;
    }
  }
}
</style>