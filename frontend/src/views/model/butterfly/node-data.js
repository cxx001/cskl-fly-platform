export default {
  base: [
    {
      ref: 'output',
      nodeData: {
        name: '初始输出',
        endpoints: [
          {
            id: "right_1",
            orientation: [1, 0],
            pos: [0, 0.1],
          },
          {
            id: "right_2",
            orientation: [1, 0],
            pos: [0, 0.3],
          },
          {
            id: "right_3",
            orientation: [1, 0],
            pos: [0, 0.5],
          },
          {
            id: "right_4",
            orientation: [1, 0],
            pos: [0, 0.7],
          },
          {
            id: "right_5",
            orientation: [1, 0],
            pos: [0, 0.9],
          }
        ],
        params: {
          input: [
            {
              id: "right_1",
              des: '液体流量(kg/s)-0',
            },
            {
              id: "right_2",
              des: '气体流量(kg/s)-1',
            },
            {
              id: "right_3",
              des: '推力(N)-2',
            },
            {
              id: "right_4",
              des: '工作标志位(0,1)-3',
            },
          ],
          output: [
            {
              id: "right_5",
              des: '0-加速度(m/s^2)',
            },
          ]
        }
      }
    },
    {
      ref: 'quality',
      nodeData: {
        name: '质量'
      }
    },
    {
      ref: 'sport',
      nodeData: {
        name: '运动'
      }
    }
  ],
}