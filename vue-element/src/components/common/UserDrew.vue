<template>
  <div class="userDrew">
    <div class="userDrewBox">
      <div class="userDrewTitle">用户画像</div>
      <div class="container">
        <div class="userDrewLeftBox">
          <h5>性别分布</h5> 
          <div id="userDrewLeft"></div>
        </div>
        <div class="userDrewLeftBox">
          <h5>年龄分布</h5>   
          <div id="userDrewRight"></div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'userDrew',
  data () {
    return {

    }
  },
  mounted(){
    this.drawLine();
    this.drawAge();
  },
  methods: {
    drawLine(){
      let myChart = this.$echarts.init(document.getElementById('userDrewLeft'));
      myChart.setOption({ 
      tooltip: {
        trigger: 'item',
      },
      series : [
        {
            name: '性别',
            type: 'pie',
            radius: '55%',
            data:[
                {value:45, name:'男'},
                {value:55, name:'女'}
            ]
        }
        ]
      })
    },
    drawAge(){
      let myChart = this.$echarts.init(document.getElementById('userDrewRight'));
      app.title = '坐标轴刻度与标签对齐';

       myChart.setOption({
          color: ['#3398DB'],
          tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis : [
              {
                  type : 'category',
                  data : ['19岁以下', '20-29岁', '30-39岁', '40-49岁', '50-59岁', '60岁'],
                  axisTick: {
                      alignWithLabel: true
                  }
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  name:'人数',
                  type:'bar',
                  barWidth: '60%',
                  data:[20, 32, 22, 18, 6, 2]
              }
          ]
      });
    }
  }
}
</script>
<style scoped>
.userDrew{
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  line-height: 1.2;
}
.userDrewBox{
  padding: 50px 30px;
}
.userDrewTitle{
  font-size: 24px;
  font-weight: 500;
  color: rgba(0, 0, 0, .85);
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #f0f0f0;
  line-height: 60px;
}
.title{
  display: flex;
}
.title span{
  flex: 1;
  text-align: left;
  font-size: 20px;
}
.container{
  display: flex;
  flex-flow: row wrap;

}
.userDrewLeftBox{
  width: 50%;
  text-align: left;
}
.userDrewLeftBox h5{
  display: block;
  font-size: 20px;
}
 #userDrewLeft{
  flex: 1;
  height: 500px;
 }
 #userDrewRight{
  flex: 1;
  height: 500px;
 }
</style>