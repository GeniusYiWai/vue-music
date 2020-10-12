// 歌单相关路由模块
import request from '@/utils/request'

/*
获取歌单详情
*/

export const songSheetDetail = id => {
    return request({
        method: 'GET',
        url: '/playlist/detail',
        params: {
            id
        }

    })
}
/*
获取新碟详情

*/

export const getAlbumDetail = id => {
    return request({
        method: 'GET',
        url: '/album',
        params: {
            id
        }
    })
}