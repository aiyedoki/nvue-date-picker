<template>
  <view class="date-picker-container">
    <picker mode=multiSelector @change="bindPickerChange" :value="index" :range="range">
      <slot />
    </picker>
  </view>
</template>

<script>
import { ref } from 'vue'
import dayjs from 'dayjs'

// 定义生成 range 的值的方法
const getRange = () => {
  const dateArr = [[], []]
  for (var i = 2000; i <= 2099; i++) { dateArr[0].push(`${i}年`) }
  for (var i = 1; i <= 12; i++) { dateArr[1].push(`${i}月`) }
  return { dateArr }
}

export default {
  name: 'date-picker',
  setup(props) {
    // range: 长度表示多少列，数组的每项表示每列的数据
    const { dateArr } = getRange()
    const range = ref(dateArr)

    // index: 索引数组, 每一项的值表示选择了对应项中的第几个。
    // date 获取时间
    // 【[year, month]】 year、month 为选中的年月，例如选中2022年3月就是 year = 22、month = 2
    const date = dayjs(props.date).format("YYYY-MM")
    const year = Number(date.slice(2, 4))
    const month = Number(date.slice(5, 7))
    const index = ref([year, month - 1])
    console.log(index.value)

    // bindPickerChange: index 改变时触发该事件
    const bindPickerChange = (e) => {
      index.value = e.detail.value
      console.log(`用户选中20${index.value[0]}年${index.value[1] + 1}月`)
    }

    return { index, range, bindPickerChange }
  }
}
</script>

<style scoped>
.date-picker-container {
}
</style>