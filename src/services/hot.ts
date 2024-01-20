import type { PageParams } from '@/types/home'
import type { HotResult } from '@/types/hot'
import { http } from '@/utils/http'

/** Tab 项的 id，默认查询全部 Tab 项的第 1 页数据 */
type ReqParam = PageParams & { subType?: string }
export const getHotRecommdAPI = (url: string, data?: ReqParam) => {
  return http<HotResult>({
    url: url,
    method: 'GET',
    data,
  })
}
