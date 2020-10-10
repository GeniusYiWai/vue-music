// 视频相关路由模块
import request from '@/utils/request'

/*
获取视频分类列表
*/
export const videoCategory = () => {
    return request({
        method: 'GET',
        url: '/video/category/list',
    })
}
/*
获取视频分类下的详情
*/
export const videoCateDetail = (id, offset, timestamp) => {

    return request({
        method: 'GET',
        url: '/video/group',
        params: {
            id,
            offset,
            timestamp
        }
    })
}
/*
获取视频播放地址
*/
export const videoUrl = id => {

    return request({
        method: 'GET',
        url: '/video/url',
        params: {
            id

        }
    })
}