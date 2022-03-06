export const formatCurrency = value => {
    if (!value) return
    return value.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
}
