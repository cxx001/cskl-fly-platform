export default {
  disLinkable: true, // 可删除连线
  linkable: true, // 可连线
  draggable: true, // 可拖动
  zoomable: true, // 可放大
  moveable: true, // 可平移
  theme: {
    edge: {
      arrow: true,
      type: "endpoint",
      shapeType: "Manhattan",
      arrowPosition: 0.98,
      defaultAnimate: false,
      draggable: true,
    },
    endpoint: {
      position: [], //限制锚点位置['Top', 'Bottom', 'Left', 'Right'],
      linkableHighlight: true, //连线时会触发point.linkable的方法，可做高亮
      limitNum: 10, //限制锚点的连接数目
      isAllowLinkInSameNode: false, //是否允许同一节点中的锚点连接
      expandArea: {
        //锚点过小时，可扩大连线热区
        left: 1,
        right: 1,
        top: 1,
        botton: 1,
      },
    },
  }
}