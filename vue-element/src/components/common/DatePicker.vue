<template>
  <div class="block">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>
 
<script>
export default {
  name: 'DatePicker',
  data() {
      return {
          value1: ''
      }
  }
}
</script>
<style scoped>
 
</style>