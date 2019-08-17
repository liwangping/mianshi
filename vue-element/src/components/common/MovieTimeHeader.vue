<template>
  <div class="MovieTimeHeader">
    <h3 class="MovieTimeHeaderTitle">2018年10月01日票房</h3>
    <div class="updateTime">更新时间：2018年10月01日 12：00</div>
    <div class="allCountryOne">全国单日总票房：100 亿</div>
  </div>
</template>
 
<script>
export default {
  name: 'MovieTimeHeader'
}
</script>
<style scoped>
  .MovieTimeHeader{
    text-align: left;
   line-height: 1;
  }
 .MovieTimeHeaderTitle{
   font-size: 20px;
   color: rgba(0, 0, 0, 0.85);
 }
 .updateTime{
   color: #999;
   font-size: 12px;
   padding-bottom: 30px;
   border-bottom: 1px solid #e6e7eb;
 }
 .allCountryOne{
   text-align: right;
   margin-top: 20px;
   color: rgba(0, 0, 0, 0.85);
   font-size: 20px;
 }
</style>