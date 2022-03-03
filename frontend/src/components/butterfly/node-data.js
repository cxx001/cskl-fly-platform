export default {
  base: [
    {
      ref: 'output',
      nodeData: {
        name: '初始输出',
        index: 0,
        dllFile: 'Model/libDemo.so',
        fctName: 'InitFunction',
        endpoints: [
          {
            id: "in-0",
            orientation: [1, 0],
            pos: [0, 0.1],
            des: '液体流量(kg/s)-0',
          },
          {
            id: "in-1",
            orientation: [1, 0],
            pos: [0, 0.3],
            des: '气体流量(kg/s)-1',
          },
          {
            id: "in-2",
            orientation: [1, 0],
            pos: [0, 0.5],
            des: '推力(N)-2',
          },
          {
            id: "in-3",
            orientation: [1, 0],
            pos: [0, 0.7],
            des: '工作标志位(0,1)-3',
          },
          {
            id: "out-0",
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
        name: '质量',
        index: 1,
        dllFile: 'Model/libDemo.so',
        fctName: 'demoFunction',
        endpoints: [
          {
            id: "in-0",
            orientation: [-1, 0],
            pos: [0, 0.2],
            des: '0-液体流量(kg/s)',
          },
          {
            id: "in-1",
            orientation: [-1, 0],
            pos: [0, 0.5],
            des: '1-气体流量(kg/s)',
          },
          {
            id: "in-2",
            orientation: [-1, 0],
            pos: [0, 0.8],
            des: '2-工作标志位(0,1)',
          },
          {
            id: "out-0",
            orientation: [1, 0],
            pos: [0, 0.2],
            des: '总质量-0',
          },
          {
            id: "out-1",
            orientation: [1, 0],
            pos: [0, 0.5],
            des: '液体剩余质量(kg)-1',
          },
          {
            id: "out-2",
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
        name: '运动',
        index: 2,
        dllFile: 'Model/libDemo.so',
        fctName: 'movementFunction',
        endpoints: [
          {
            id: "in-0",
            orientation: [-1, 0],
            pos: [0, 0.05],
            des: '0-质量1(kg)',
          },
          {
            id: "in-1",
            orientation: [-1, 0],
            pos: [0, 0.2],
            des: '1-质量2(kg)',
          },
          {
            id: "in-2",
            orientation: [-1, 0],
            pos: [0, 0.35],
            des: '2-推力(N)',
          },
          {
            id: "out-0",
            orientation: [-1, 0],
            pos: [0, 0.6],
            des: '加速度(m/s^2)-0',
          },
          {
            id: "out-1",
            orientation: [-1, 0],
            pos: [0, 0.75],
            des: '速度(m/s)-1',
          },
          {
            id: "out-2",
            orientation: [-1, 0],
            pos: [0, 0.9],
            des: '位置(m)-2',
          }
        ],
      },
    },
    {
      ref: 'add',
      nodeData: {
        name: '加法器',
        index: 3,
        dllFile: 'Model/libdadd.so',
        fctName: 'demoFunction',
        endpoints: [
          {
            id: "in-0",
            orientation: [-1, 0],
            pos: [0, 0.5],
            des: '0-输入',
          },
          {
            id: "out-0",
            orientation: [1, 0],
            pos: [0, 0.5],
            des: '输出-0',
          }
        ],
      }
    }
  ],
}