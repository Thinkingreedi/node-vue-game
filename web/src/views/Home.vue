<template>
  <div>
    <!-- 幻灯片部分-->
    <swiper :options="swiperOption">
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/image/1a4b3eb4a82d5656ed5d949630cc7ec5.jpeg"
          alt
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/image/1a4b3eb4a82d5656ed5d949630cc7ec5.jpeg"
          alt
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/image/1a4b3eb4a82d5656ed5d949630cc7ec5.jpeg"
          alt
        />
      </swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right px-3 pb-1"
        slot="pagination"
      ></div>
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
        <div class="py-2" v-for="(news, i) in category.newsList" :key="i">
          <span>[{{ news.categoryName }}]</span>
          <span>|</span>
          <span>{{ news.title }}</span>
          <span>{{ news.date }}</span>
        </div>
      </template>
    </m-list-card>

    <m-card icon="cc-menu-circle" title="英雄列表"></m-card>
    <m-card icon="cc-menu-circle" title="精彩视频"></m-card>
    <m-card icon="cc-menu-circle" title="新闻资讯"></m-card>
  </div>
</template>

<script>
export default {
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
      newsCats: [
        {
          name: "热门",
          newsList: new Array(5).fill(1).map((v) => ({
            categoryName: "公告",
            title: "6月2日全服不停机更新公告",
            date: "06/01",
          })),
        },
        {
          name: "新闻",
          newsList: new Array(5).fill(1).map((v) => ({
            categoryName: "新闻",
            title: "王者荣耀夏日直播节福利 虎牙专属回城免费领！",
            date: "06/01",
          })),
        },
        {
          name: "热门",
          newsList: new Array(5).fill(1).map((v) => ({
            categoryName: "公告",
            title: "6月2日全服不停机更新公告",
            date: "06/01",
          })),
        },
        {
          name: "热门",
          newsList: new Array(5).fill(1).map((v) => ({
            categoryName: "公告",
            title: "赵云-嘻哈天王海报线稿方案票选结果公布",
            date: "06/01",
          })),
        },
        {
          name: "热门",
          newsList: new Array(5).fill(1).map((v) => ({
            categoryName: "公告",
            title: "6月2日全服不停机更新公告",
            date: "06/01",
          })),
        },
      ],
    };
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