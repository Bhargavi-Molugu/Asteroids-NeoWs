/**
 * This method will format the date to yyyy-mm-dd
 */
export function formatDate(date) {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}