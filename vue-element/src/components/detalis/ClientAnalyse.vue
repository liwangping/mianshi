<template>
  <div class="clientAnalyse">
   <!-- 门店数据 -->
    <ShoppingDetail />
    <!-- 用户画像 -->
    <UserDrew />
    <!-- 用户到访时间 -->
    <UserVisitingTime />
  </div>
</template>
  
<script>
import ShoppingDetail from '@/components/common/ShoppingDetail'
import UserDrew from '@/components/common/UserDrew'
import UserVisitingTime from '@/components/common/UserVisitingTime'

export default {
  name: 'ClientAnalyse',
  components:{
    ShoppingDetail,
    UserDrew,
    UserVisitingTime
  }
}
</script>
<style scoped>
 
</style>