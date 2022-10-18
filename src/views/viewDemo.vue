
<template>
  <div class="content">
    <div
      class="app-content"
      ref="container"
      id="container"
    ></div>
  </div>
</template>
<script>
import { Graph } from "@antv/x6";
import "@antv/x6-vue-shape";
import vTable from "../components/table";
export default {
  name: "App",
  components: {},
  data() {
    return {
      graph: null,
    };
  },
  methods: {
    init() {
      const container = document.getElementById("container");
      const graph = new Graph({
        container,
        // 自适应大小
        autoResize: true,
        // 自动扩展画布选项
        autoResizeOptions: {
          border: 20, // 距离画布边缘多少位置时触发自动扩展画布
        },
        async: false,
        grid: true,
        sorting: "approx",
        interacting: function (cellView) {
          //禁止 十字标拖拽
          if (cellView.cell.shape === "image") {
            if (cellView.cell.store.data.data.hasOwnProperty("centerEdge")) {
              return {
                nodeMovable: false,
              };
            }
          }
          if (
            cellView.cell.shape === "html" &&
            cellView.cell.data.value === "solid"
          ) {
            return {
              nodeMovable: false,
            };
          }
          return true;
        },

        rotating: {
          // 旋转
          enabled: false,
        },
        history: {
          enabled: true,
          ignoreAdd: true,
          ignoreRemove: true,
          ignoreChange: false,
        },

        // 限制甬道线不能上下拖拽
        translating: {
          restrict: ({ cell }) => {
            if (cell?.lineId) {
              return true;
            }
          },
        },
        // 节点拖拽放大缩小
        //只需爆炸图能放大缩小
        resizing: {
          orthogonal: false,
          restricted: false,
          preserveAspectRatio: false,
        },
        // 配置全局连线规则
        connecting: {
          router: {
            name: "",
            args: {
              offset: "center",
            },
          },
          connector: {
            name: "rounded",
            args: {
              radius: 8,
            },
          },
          anchor: "center",
          // 指定连接点
          connectionPoint: "anchor",
          // 不允许连接到空白位子
          allowBlank: false,
          snap: {
            radius: 50,
          },
          // 不允许自己连接自己
          allowLoop: false,
          createEdge() {},
          // 判断连接是否有效
          validateConnection({ targetMagnet }) {
            return !!targetMagnet;
          },
        },
        clipboard: {
          enabled: true,
          useLocalStorage: true,
        },
        snapline: {
          enabled: true,
          sharp: true,
        },
        scroller: {
          enabled: true,
          pannable: true,
          pageVisible: true,
          pageBreak: false,
        },

        panning: {
          enabled: false,
        },
        mousewheel: {
          enabled: true,
          zoomAtMousePosition: true,
        },
      });
      this.graph = graph;
      Graph.registerVueComponent(
        "v-table",
        {
          template: `<vTable></vTable>`,
          components: {
            vTable,
          },
        },
        true
      );
      this.graph.addNode({
        shape: "vue-shape",
        width: 200,
        height: 100,
        zIndex: 100,
        attrs: {},
        component: "v-table",
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
}
.app-stencil {
  width: 200px;
  // height: 500px;
  position: relative;
  background-color: #ffffff !important;
}

.app-content {
  flex: 1;
  height: 100%;
  box-shadow: 0px 0px 5px #ccc;
}
</style>
