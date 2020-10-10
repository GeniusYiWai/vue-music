// 排行榜相关路由模块
import request from '@/utils/request'

/*
所有榜单内容摘要
*/
export const rankBrief = () => {
    return request({
        method: 'GET',
        url: '/toplist/detail',
    })
}