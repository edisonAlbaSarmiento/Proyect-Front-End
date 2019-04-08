
export default {
  save: function (key, value, expirationSec) {
    if (typeof (Storage) === 'undefined') { return false }
    let expirationMS = expirationSec * 1000
    let record = { value: value, timestamp: new Date().getTime() + expirationMS }
    localStorage.setItem(key, JSON.stringify(record))
    return value
  },
  load: function (key) {
    if (typeof (Storage) === 'undefined') { return false }
    try {
      let record = JSON.parse(localStorage.getItem(key))
      if (!record) {
        return false
      }
      return (new Date().getTime() < record.timestamp && record.value)
    } catch (e) {
      return false
    }
  },
  remove: function (key) {
    if (typeof (Storage) === 'undefined') { return false }
    localStorage.removeItem(key)
  }
}
