// 音乐播放相关路由模块


import request from '@/utils/request'

/*
获取歌曲url
*/
export const musicUrl = id => {
    return request({
        method: 'GET',
        url: '/song/url',
        params: {
            id
        }

    })
}

/*
获取歌曲详情
*/
export const musicDetail = ids => {
    return request({
        method: 'GET',
        url: '/song/detail',
        params: {
            ids
        }

    })
}
/*
获取歌曲歌词
*/
export const musicLyric = id => {
    return request({
        method: 'GET',
        url: '/lyric',
        params: {
            id
        }

    })
}
/*
检测音乐是否可以播放
*/
export const checkMusicStatus = id => {
    return request({
        method: 'GET',
        url: '/check/music',
        params: {
            id
        }

    })
}