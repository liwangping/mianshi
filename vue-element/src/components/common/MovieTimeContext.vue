<template>
  <div class="movieTable">
    <el-table
        :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)"
        show-header
        border
        fit
        stripe
        style="width: 100%">
        <el-table-column
        prop="ranking"
        label="排名"
        width="180"
        align="center"
        >
        </el-table-column>
        <el-table-column
        prop="produce"
        label="影片出品"
        width="690"
        align="center"
        >
        </el-table-column>
        <el-table-column
        prop="type"
        label="影片类型"
        width="280"
        align="center"
        >
        </el-table-column>
        <el-table-column
        prop="dayticket"
        label="日票房"
        width="316"        
        align="center"
        >
        </el-table-column>
        <el-table-column
        prop="allticket"
        label="累计票房"
        width="280"        
        align="center"
        >
        </el-table-column>
        <el-table-column
        prop="date"
        label="上映日期"
        width="280"
        align="center"
        >
        </el-table-column>
        <el-table-column
        prop="grade"
        label="评分"
        width="280"        
        align="center"
        >
        </el-table-column>
    </el-table>
    <el-pagination
    background
    layout="prev, pager, next"
    :page-size="pagesize"
    :total="tableData.length" 
    @current-change = "handleCurrentChange"
    @size-change = "handleSizeChange"
    >
    </el-pagination>
  </div>
  
</template>

<script>
  export default {
    name: 'MovieTimeContext',
    data() {
      return {
        pagesize: 17,
        currpage: 1,
        tableData: []
      }
    },
    created(){
         this.$api.movieTimeList.getmovieTimeList().then(res => {
              console.log(res)
              const tableData  = res.data.data;
              this.tableData = tableData;
           }).catch( error =>{
           this.$message("网络连接失败")
           console.log(error)
         }    
         );
    },
    methods: {
        
        handleCurrentChange(cpage){
            this.currpage = cpage;
        },
        handleSizeChange(psize){
            this.pagesize = p
        }
    }
  }
</script>
<style scoped>
    .movieTable{
        width: 100%;
    }
    .el-pagination{
        position: fixed;
        right: 80px;
        bottom: 80px;
    }
</style>