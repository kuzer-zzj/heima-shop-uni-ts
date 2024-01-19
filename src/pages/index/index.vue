<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'

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

onLoad(() => {
  getHomeBanner()
  getcateGoryList()
})
</script>

<template>
  <CustomNavbar></CustomNavbar>
  <XtxSwiper :list="list"></XtxSwiper>
  <CategoryPanel :list="cateGoryList"></CategoryPanel>
  <view class="index">index3</view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
