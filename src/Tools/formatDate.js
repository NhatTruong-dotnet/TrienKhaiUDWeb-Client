export const formatDate = dateTime => {
    function pad(s) {
        return s < 10 ? '0' + s : s
    }
    var d = new Date(dateTime)
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
}
