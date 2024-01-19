<script setup lang="ts">
import { getHomeBannerAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'

const getHomeBanner = async () => {
  const res = await getHomeBannerAPI()
  console.log("结果：",res.result)
}
onLoad(() => getHomeBanner())
</script>

<template>
  <CustomNavbar></CustomNavbar>
  <XtxSwiper></XtxSwiper>
  <view class="index">index2</view>
</template>

<style lang="scss">
//
</style>
