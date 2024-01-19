<script setup lang="ts">
import { getHomeBannerAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'

const list = ref<BannerItem[]>([])
const getHomeBanner = async () => {
  const res = await getHomeBannerAPI()
  console.log('结果：', res.result)
  list.value = res.result
}
onLoad(() => getHomeBanner())
</script>

<template>
  <CustomNavbar></CustomNavbar>
  <XtxSwiper :list="list"></XtxSwiper>
  <view class="index">index2</view>
</template>

<style lang="scss">
//
</style>
