<template>
  <div class="com-container">
    <div class="com-chart" ref="relation_ref"></div>
  </div>
</template>

<script>
// import axios from 'axios'
import $ from 'jquery'
export default {
  data () {
    return {
      chartInstance: null,
      allData: null
    }
  },
  mounted () {
    this.initChart()
    // this.getData()
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed () {
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods: {
    initChart () {
      // 初始化图表方法
      this.chartInstance = this.$echarts.init(this.$refs.relation_ref)
      this.chartInstance.showLoading()
      // 首先需要引入 jquery 并且要在 index.html 中引入 dataTool.js
      $.get('http://localhost:8999/static/gexf/les-miserables.gexf', xml => {
        this.chartInstance.hideLoading()
        // 解析出来的 graph 是两个数组：nodes[] 和 links[]，分别表示节点和节点之间边的关系
        // nodes和links数组中每个元素又是一个个对象
        // nodes中每个元素对象包含的信息：category, id, name, symbolSize, value, x, y
        // links中每个元素对象包含的信息：id, source, target
        const graph = this.$echarts.dataTool.gexf.parse(xml)
        // console.log(graph)
        // 用于显示图例
        const categories = []
        for (var i = 0; i < 9; i++) {
          categories[i] = {
            name: '类目' + i
          }
        }
        // console.log(categories)
        graph.nodes.forEach(function (node) {
          node.itemStyle = null
          node.value = node.symbolSize
          node.symbolSize /= 2.5
          // node.label = {
          //   normal: {
          //     show: node.symbolSize > 10
          //   }
          // }
          node.category = node.attributes.modularity_class
        })
        const option = {
          title: {
            text: 'Keywords Relation',
            textStyle: {
              fontSize: 12
            },
            top: 15,
            left: 10
          },
          tooltip: {},
          // legend: [{
          //   data: categories.map(function (a) {
          //     return a.name
          //   })
          // }],
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              name: 'Les Miserables',
              type: 'graph',
              layout: 'circular',
              circular: {
                rotateLabel: true
              },
              data: graph.nodes,
              links: graph.links,
              categories: categories,
              roam: true,
              focusNodeAdjacency: true,
              label: {
                position: 'right',
                formatter: '{b}'
              },
              lineStyle: {
                color: 'source',
                curveness: 0.3
              },
              emphasis: {
                lineStyle: {
                  width: 5
                }
              }
            }
          ]
        }
        this.chartInstance.setOption(option)
      }, 'xml')
      // const initOption = {}
      // this.chartInstance.setOption(initOption)
    },
    async getData () {
      // 获取数据
      // const ret = await axios.get('http://localhost:8999/static/map/province/sichuan.json')
      // const ret = await axios.get('http://localhost:8999/static/lib/les-miserables.gexf.xml')
      // console.log(ret)
      this.updateChart()
    },
    updateChart () {
      // 获取数据之后更新图表
      const dataOption = {}
      this.chartInstance.setOption(dataOption)
    },
    screenAdapter () {
      const adapterOption = {}
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    }
  }
}
</script>
<style lang='less' scoped>

</style>
