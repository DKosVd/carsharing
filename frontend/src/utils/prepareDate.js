export const prepareDate = (date1, date2) => {
    const timeDiff = Math.abs(date1.getTime() - date2.getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24 * 365.5))
}