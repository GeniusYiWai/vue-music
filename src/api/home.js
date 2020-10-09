// 首页相关路由模块

import request from '@/utils/request'





/*
获取首页图标入口列表

*/

export const getIcons = () => {
    return request({
        method: 'GET',
        url: '/homepage/dragon/ball',

    })
}









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
获取热门歌单
limit: 取出数量 , 默认为 30 
*/

export const getHotPlayList = limit => {
    return request({
        method: 'GET',
        url: '/personalized',
        params: {
            limit
        }
    })
}
/*
获取每日推荐歌单
limit: 取出数量 , 默认为 30 
*/

export const getRecPlayList = () => {
    return request({
        method: 'GET',
        url: '/recommend/resource',

    })
}
/*
获取每日推荐歌曲

*/

export const getRecSongs = () => {
    return request({
        method: 'GET',
        url: '/recommend/songs',

    })
}

/*
获取新碟速递

*/

export const getNewAlbums = () => {
    return request({
        method: 'GET',
        url: '/album/newest',

    })
}

/*
获取新歌速递
type: 地区类型 id,对应以下:
全部:0
华语:7
欧美:96
日本:8
韩国:16
*/

export const getNewSongs = type => {
    return request({
        method: 'GET',
        url: '/top/song',
        params: {
            type
        }
    })
}
















/*
音乐日历

*/

export const getCalendar = (startTime, endTime) => {
    return request({
        method: 'GET',
        url: '/calendar',
        params: {
            startTime,
            endTime
        }
    })
}