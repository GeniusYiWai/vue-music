
//文字字数过多显示省略号
export const ellipsis = (value) => {
    if (value && value.length) {
        if (value.length > 20) {
            return value.slice(0, 20) + '...'
        }
    }
    return value
}