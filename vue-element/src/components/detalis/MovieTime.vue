<template>
  <div class="movieTime">
    <!-- 表头 -->
   <MovieTimeHeader/>
   <!-- 表内容 -->
   <div class="movieTimeBox">
     <MovieTimeContext />
   </div>
  </div>
</template>
 
<script>
import MovieTimeHeader from '@/components/common/MovieTimeHeader'
import MovieTimeContext from '@/components/common/MovieTimeContext'

export default {
  name: 'MovieTime',
  components:{
    MovieTimeHeader,
    MovieTimeContext
  }
}
</script>
<style scoped>
    .movieTimeBox{
      margin-top: 30px;
      height: 76vh;
    }
</style>