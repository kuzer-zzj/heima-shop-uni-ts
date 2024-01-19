<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'

const list = ref<BannerItem[]>([])
const getHomeBanner = async () => {
  const res = await getHomeBannerAPI()
  console.log('banner结果：', res.result)
  list.value = res.result
}

const cateGoryList = ref<CategoryItem[]>([])
const getcateGoryList = async () => {
  const res = await getHomeCategoryAPI()
  console.log('category结果：', res.result)
  cateGoryList.value = res.result
}

const homeHotList = ref<HotItem[]>([])
const gethomeHotList = async () => {
  const res = await getHomeHotAPI()
  console.log('homeHotList结果：', res.result)
  homeHotList.value = res.result
}

onLoad(() => {
  getHomeBanner()
  getcateGoryList()
  gethomeHotList()
})
</script>

<template>
  <CustomNavbar></CustomNavbar>
  <scroll-view scroll-y class="scroll-page">
    <XtxSwiper :list="list"></XtxSwiper>
    <CategoryPanel :list="cateGoryList"></CategoryPanel>
    <HotPanel :list="homeHotList"></HotPanel>
    <XtxGuess></XtxGuess>
    <view class="index">index3</view>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  display: flex;
  //侧轴对齐
  flex-direction: column;
  height: 100%;
}
.scroll-page {
  flex: 1;
}
</style>
