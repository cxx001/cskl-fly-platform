export default {
    disLinkable: true, // 可删除连线
    linkable: true, // 可连线
    draggable: true, // 可拖动
    zoomable: true, // 可放大
    moveable: true, // 可平移
    theme: {
        edge: {
            arrow: true,
            type: 'endpoint',
            shapeType: 'Manhattan',
            arrowPosition: 1,
            defaultAnimate: true
        },
        endpoint: {
            position: [],        //限制锚点位置['Top', 'Bottom', 'Left', 'Right'],
            linkableHighlight: true,//连线时会触发point.linkable的方法，可做高亮
            limitNum: 10,        //限制锚点的连接数目
            expandArea: {        //锚点过小时，可扩大连线热区
                left: 10,
                right: 10,
                top: 10,
                botton: 10
            }
        },
    }
}