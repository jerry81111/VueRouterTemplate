<template>
  <div>
    <h1>PEOPLE Detail</h1>
    <v-table
      :width="1000"
      :columns="tableConfig.columns"
      :table-data="tableConfig.tableData"
      :show-vertical-border="false"
      :paging-index="(pageIndex-1)*pageSize"
    ></v-table>
    <v-pagination
      @page-change="pageChange"
      @page-size-change="pageSizeChange"
      :total="total"
      :page-size="pageSize"
      :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: "Peopledetail",
  data() {
    return {
      data: {},
      pageIndex: 1,
      pageSize: 10,
      total: 0,
      tableConfig: {
        tableData: [],
        columns: [
          {
            field: "id",
            title: "編號",
            width: 100,
            titleAlign: "center",
            columnAlign: "center"
          },
          {
            field: "name",
            title: "姓名",
            width: 260,
            titleAlign: "center",
            columnAlign: "center"
          },
          {
            field: "age",
            title: "年齡",
            width: 330,
            titleAlign: "center",
            columnAlign: "left"
          }
        ]
      }
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      this.axios
        .get("http://localhost:8080/getDetail", {
          params: { id: this.$route.params.id }
        })
        .then(body => {
          this.data = body.data;
          this.getTableData();
        });
    },
    getTableData() {
      this.tableConfig.tableData = this.data.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
      this.total = this.data.length;
    },
    pageChange(pageIndex) {
      this.pageIndex = pageIndex;
      this.getTableData();
    },
    pageSizeChange(pageSize) {
      this.pageIndex = 1;
      this.pageSize = pageSize;
      this.getTableData();
    }
  }
};
</script>

<style>
</style>