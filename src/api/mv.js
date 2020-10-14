// mv相关路由模块
import request from '@/utils/request'

/*
所有榜单内容摘要
*/
export const mvUrl = id => {
    return request({
        method: 'GET',
        url: '/mv/url',
        params: {
            id
        }
    })
}