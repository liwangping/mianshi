<template>
  <div class="userVisitingTime">
    <div class="userVisitingTimeBox">
      <div class="userVisitingTimeTitle">
          <div class="title">客流到访时间</div>          
          <div class="datePicker"><DatePicker /></div>
      </div> 
      <div class="container">
          <div id="VisitingTime"></div>
      </div>
    </div>
  </div>
</template>
 
<script>
import DatePicker from '@/components/common/DatePicker';
export default {
  name: 'userVisitingTime',
  components:{
    DatePicker
  },
  data () {
    return {

    }
  },
  mounted(){
    this.drawVisitingTime();
  },
  methods: {
    // drawLine(){
    //   let myChart = this.$echarts.init(document.getElementById('userDrewLeft'));
    //   myChart.setOption({ 
    //   tooltip: {
    //     trigger: 'item',
    //   },
    //   series : [
    //     {
    //         name: '性别',
    //         type: 'pie',
    //         radius: '55%',
    //         data:[
    //             {value:45, name:'男'},
    //             {value:55, name:'女'}
    //         ]
    //     }
    //     ]
    //   })
    // }
    drawVisitingTime(){
      let myChart = this.$echarts.init(document.getElementById('VisitingTime'));
      myChart.setOption({ 
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2018-10-01', '2018-10-03', '2018-10-05', '2018-10-07', '2018-10-09']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [25468, 25900, 27000, 31982, 33233],
            type: 'line',
            areaStyle: {}
        }]
      })
    }

  }
}
</script>
<style scoped>
.userVisitingTime{

  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  line-height: 1.2;
}
.userVisitingTimeBox{
  padding: 50px 30px;
}
.userVisitingTimeTitle{
  font-size: 24px;
  font-weight: 500;
  color: rgba(0, 0, 0, .85);
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
  line-height: 60px;
}
#VisitingTime{
    height: 800px;
}
</style>