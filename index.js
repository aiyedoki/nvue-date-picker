import DatePicker from './components/date-picker.vue'

// 放置到数组中
const components = [DatePicker]

export default {
  install: (app, options) => {
    components.forEach(item => {
      app.component(item.name, item)
    })
  }
}