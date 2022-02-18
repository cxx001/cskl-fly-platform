export default {
  base: [
    {
      ref: 'output',
      nodeData: {
        uid: 'base-1',
        name: '初始输出',
        endpoints: [
          {
            id: "1",
            orientation: [1, 0],
            pos: [0, 0.1],
            des: '液体流量(kg/s)-0',
          },
          {
            id: "2",
            orientation: [1, 0],
            pos: [0, 0.3],
            des: '气体流量(kg/s)-1',
          },
          {
            id: "3",
            orientation: [1, 0],
            pos: [0, 0.5],
            des: '推力(N)-2',
          },
          {
            id: "4",
            orientation: [1, 0],
            pos: [0, 0.7],
            des: '工作标志位(0,1)-3',
          },
          {
            id: "5",
            orientation: [1, 0],
            pos: [0, 0.9],
            des: '0-加速度(m/s^2)',
          }
        ],
      }
    },
    {
      ref: 'quality',
      nodeData: {
        uid: 'base-2',
        name: '质量',
        endpoints: [
          {
            id: "1",
            orientation: [-1, 0],
            pos: [0, 0.2],
            des: '0-液体流量(kg/s)',
          },
          {
            id: "2",
            orientation: [-1, 0],
            pos: [0, 0.5],
            des: '1-气体流量(kg/s)',
          },
          {
            id: "3",
            orientation: [-1, 0],
            pos: [0, 0.8],
            des: '2-工作标志位(0,1)',
          },
          {
            id: "4",
            orientation: [1, 0],
            pos: [0, 0.2],
            des: '总质量-0',
          },
          {
            id: "5",
            orientation: [1, 0],
            pos: [0, 0.5],
            des: '液体剩余质量(kg)-1',
          },
          {
            id: "6",
            orientation: [1, 0],
            pos: [0, 0.8],
            des: '气体剩余质量(kg)-2',
          }
        ],
      }
    },
    {
      ref: 'sport',
      nodeData: {
        uid: 'base-3',
        name: '运动',
        endpoints: [
          {
            id: "1",
            orientation: [-1, 0],
            pos: [0, 0.05],
            des: '0-质量1(kg)',
          },
          {
            id: "2",
            orientation: [-1, 0],
            pos: [0, 0.2],
            des: '1-质量2(kg)',
          },
          {
            id: "3",
            orientation: [-1, 0],
            pos: [0, 0.35],
            des: '2-推力(N)',
          },
          {
            id: "4",
            orientation: [-1, 0],
            pos: [0, 0.6],
            des: '加速度(m/s^2)-0',
          },
          {
            id: "5",
            orientation: [-1, 0],
            pos: [0, 0.75],
            des: '速度(m/s)-1',
          },
          {
            id: "6",
            orientation: [-1, 0],
            pos: [0, 0.9],
            des: '位置(m)-2',
          }
        ],
      }
    }
  ],
}