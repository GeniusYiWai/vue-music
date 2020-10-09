// 首页相关路由模块

import request from '@/utils/request'


/*
获取轮播图数据
type:数据类型
*/

export const getBanner = type => {
    return request({
        method: 'GET',
        url: '/banner',
        params: {
            type
        }
    })
}

/*
获取每日推荐歌单
limit: 取出数量 , 默认为 30 
*/

export const getRecommendPlayList = limit => {
    return request({
        method: 'GET',
        url: '/personalized',
        params: {
            limit
        }
    })
}
/*
获取每日推荐歌曲

*/

export const getRecommendSongs = () => {
    return request({
        method: 'GET',
        url: '/recommend/songs',

    })
}