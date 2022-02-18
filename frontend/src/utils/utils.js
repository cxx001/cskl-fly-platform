let fs = require('fs');

let utils = {};

utils.saveToJson = function (data, filename) {
  if (!data) {
    console.error('Console.save: No data')
    return;
  }

  if (!filename) filename = 'mockData.json'

  if (typeof data === "object") {
    let content = JSON.stringify(data);
    console.log(content);
    // TODO:访问node环境fs写数据
    
  } else {
    console.warn('Console.save: data is null!');
  }
}

export default utils;