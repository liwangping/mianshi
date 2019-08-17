<template>
   <!-- 门店数据 -->
  <div class="shoppingDetail">
      <div class="DetailBox">
          <div class="shopUserNumber">
              <i class="el-icon-s-shop icon"></i>
              <div class="box">
                  <div class="title">到店用户数</div>
                  <div class="number">3,341</div>
                  <div class="sort">累计 232,434周  同比 26%</div>
              </div>
          </div>
          <div class="memberNumber">
              <i class="el-icon-bank-card icon"></i>
              <div class="box">
                  <div class="title">新增会员卡用户数</div>
                  <div class="number">882</div>
                  <div class="sort">累计 32,349周 同比 45%</div>
              </div>
          </div>
          <div class="newPeople">
              <i class="el-icon-user icon"></i>
              <div class="box">
                  <div class="title">新增用户数</div>
                  <div class="number">2,823</div>
                  <div class="sort">累计 483,475周 同比 87%</div>
              </div>
          </div>
      </div>
  </div>
</template>
 
<script> 
export default {
  name: 'shoppingDetail',
}
</script>
<style scoped>
.shoppingDetail{
    background-color: #fff;
     border-radius: 8px;
}
 .DetailBox{
     padding: 60px 0;
     display: flex;
 }
 .shopUserNumber,.memberNumber,.newPeople{
     flex: 1;
     display: flex;
     justify-content: center;
     align-items: center;
     line-height: 1.285;
 }
 .memberNumber{
     flex: 1;
 }
 .newPeople{
     flex: 1;
 }
 .title,.sort{
     font-size: 12px;
     color: #999;
     margin-bottom: 5px;
 }
 .number{
     margin: 10px 0;
     color: #3080fe;
     font-weight: 700;
     font-size: 24px;
 }
 .icon{
     font-size: 60px;
     color: #3080fe;
     padding-right: 30px;
 }
 .box{
     display: flex;
     flex-direction: column;
     align-items: flex-start;
 }
</style>