let utils = {};

function getNodeIdx(nodes, id) {
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node.id == id) {
      return i;
    }
  }
  return null;
}

function linesGroup(edges) {
  let tempArr = [];
  var newArr = [];
  edges.forEach((i, index) => {
    let key = i.sourceNode + '_' + i.targetNode;
    if (tempArr.indexOf(key) === -1) {
      newArr.push({
        key: key,
        datas: [i]
      });
      tempArr.push(key);
    } else {
      newArr[tempArr.indexOf(key)].datas.push(i);
    }
  });
  return newArr;
}

// test gra4
utils.dataFormat = function (data) {
  if (!data) {
    console.error('data format error!');
    return;
  }

  // 排序
  let nodes = data.nodes;
  nodes.sort(function (a, b) {
    return a.index - b.index;
  });

  let tempData = {};
  tempData.Model = {};
  let nodeCount = nodes.length;
  tempData.Model.UnitGroup = { '$': { Count: nodeCount }, Unit: [] };
  for (let i = 0; i < nodes.length; i++) {
    const item = nodes[i];
    let unit = {
      '$': { id: i, mid: "5402", identifier: "22811", GroupId: "-1" },
      'Title': { '$': { name: item.name, fontname: "", fontsize: "15", weight: "400" } },
      'UserFct': { '$': { Dllfile: item.dllFile, Fctname: item.fctName } }
    };
    tempData.Model.UnitGroup.Unit.push(unit);
  }

  let groups = linesGroup(data.edges);
  let lineCount = groups.length;
  tempData.Model.LineGroup = { '$': { Count: lineCount }, Line: [] };
  for (let i = 0; i < lineCount; i++) {
    let line = {'$': { id: i }};
    const group  = groups[i].datas;
    for (let j = 0; j < group.length; j++) {
      const edge = group[j];
      if (j == 0) {
        line.Data = {
          '$': {
            in: getNodeIdx(nodes, edge.sourceNode),
            out: getNodeIdx(nodes, edge.targetNode),
            inport: edge.source.split('-')[1],
            export: edge.target.split('-')[1],
            dim: '1'
          }
        }
        if (group.length > 1) {
          line.SubLine = {'$': {Count: group.length-1}};
        }
      } else {
        let flag = 'line' + (j - 1);
        line.SubLine[flag] = {
          '$': {
            in: getNodeIdx(nodes, edge.sourceNode),
            out: getNodeIdx(nodes, edge.targetNode),
            inport: edge.source.split('-')[1],
            export: edge.target.split('-')[1],
            dim: '1'
          }
        }
      }
    }
    tempData.Model.LineGroup.Line.push(line);
  }

  tempData.Model.Simucfg = {
    '$': { bInherit: '0' },
    Simu: { '$': { SimuType: "0", Method: "4", Interp: "2", MonteCalo: "0", StartTime: "5", EndTime: "7" } },
    Step: { '$': { bBigStep: "0", MinStep: "0.001", MaxStep: "0.1", NormStep: "0.01" } }
  };
  return tempData;
}

utils.saveMock = function (data) {
  if (!data) {
    console.error('Console.save: No data')
    return;
  }

  let content = JSON.stringify(data);
  // TODO:访问node环境fs写数据(web环境不支持)
  // 暂时用html5提供的localStorage, 注意一般浏览器存储上限5M
  localStorage.setItem('mockData', content);
  // let get = JSON.parse(localStorage.getItem('mockData'));
  // localStorage.removeItem('mockData');
  // get = JSON.parse(localStorage.getItem('mockData'));
};

export default utils;