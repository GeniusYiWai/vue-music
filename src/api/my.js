// 我的相关路由模块

import request from '@/utils/request'


/*
手机号登录

*/

export const login = data => {
    return request({
        method: 'POST',
        url: '/login/cellphone',
        data
    })
}