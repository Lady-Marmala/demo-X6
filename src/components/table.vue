<!--
 * @Author: your name
 * @Date: 2021-09-26 16:22:30
 * @LastEditTime: 2021-11-04 15:34:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eVSM-Viewer\src\components\table.vue
-->
<template>
  <div class="container id ">
    <table class="table" border="1">
      <tr>
        <td colspan="5" style="height:50px;background:#183560;">
          <div
            style="width:50px;height:50px;margin-top: 15px;display: block;margin: 0 auto;"
          />
          <div style="color:white;font-weight: 900;margin-bottom: 10px;"></div>
        </td>
      </tr>
      <tr
        class="parameter"
        v-for="(item, index) in [1, 2, 3, 4, 5, 6]"
        :key="index"
      >
        <td style="background: #ffffff;width: 40%;">
          <span>{{ item }}</span>
        </td>
        <td style="background: #ffffff;width: 30%;">
          <span>{{ item }}</span>
        </td>
        <td style="background: #ffffff;width: 30%;">
          <span>{{ item }}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  props: ["isshow", "data", "id"],
  inject: ["getGraph", "getNode"],
  data() {
    return {
      tableData: [],
      tableListObj: {},
      grey: false,
    };
  },
  watch: {},
  created() {},
  methods: {},
  beforeUpdate() {},
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  .table {
    border-collapse: collapse;
    border: 0.5PX solid #183560;
    width: 100%;
    background-color: #fff;
    .parameter {
      height: 30PX;
      font-size: 14PX;
      color: #183560;
    }
  }
}
</style>
