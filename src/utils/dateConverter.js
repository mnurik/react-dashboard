import moment from 'moment'

export default {
  utcToLocal(date) {
    return moment.utc(date).format('DD.MM.YYYY HH:mm:ss')
  }
}
