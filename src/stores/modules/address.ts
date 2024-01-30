import type { AddressItem } from '@/types/address'
import type { LoginResult } from '@/types/member'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useAddressStore = defineStore(
  'address',
  () => {
    // 会员信息
    const address = ref<AddressItem>()

    const changeSelectAddress = (addr: AddressItem) => {
      address.value = addr
    }
    return {
      address,
      changeSelectAddress,
    }
  },
  // TODO: 持久化
  {
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
