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