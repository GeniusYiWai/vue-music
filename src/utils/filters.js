//文字字数过多显示省略号
export const ellipsis = (value, length) => {
    if (value && value.length) {
        if (value.length > length) {
            return value.slice(0, length) + '...'
        }
    }
    return value
}