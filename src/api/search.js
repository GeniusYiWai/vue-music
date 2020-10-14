// 搜索相关路由模块



import request from '@/utils/request'


/*
手机号登录

*/

export const hotSearch = () => {
    return request({
        method: 'GET',
        url: '/search/hot/detail',

    })
}
/*
默认搜索关键词


*/
export const searchDefault = () => {
    return request({
        method: 'GET',
        url: '/search/default',

    })
}
/*
搜索
keywords 搜索关键字
type 搜索类型
默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
limit 返回数量
offset 偏移量
*/
export const Search = (keywords, type, limit, offset) => {
    return request({
        method: 'GET',
        url: '/cloudsearch',
        params: {
            keywords,
            type,
            limit,
            offset
        }
    })
}