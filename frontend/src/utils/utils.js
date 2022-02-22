let utils = {};

import { localApi } from '@/api/main';

// test gra4
function dataFormat(data) {
  let tempData = {};
  tempData.Model = {};
  tempData.Model.UnitGroup = { '$': { Count: '4' }};
  tempData.Model.UnitGroup.Unit = {'$': {id: "0", mid: "5402", identifier: "22811", GroupId: "-1"}};
  tempData.Model.UnitGroup.Unit.Title = {'$': {name: "初始输出", fontname: "", fontsize: "15", weight: "400"}};
  tempData.Model.UnitGroup.Unit.UserFct = {'$': {Dllfile: "Model/libDemo.so", Fctname: "InitFunction"}};

  tempData.Model.LineGroup = {};
  tempData.Model.Simucfg = {};
  return tempData;
}

utils.saveMock = function (data) {
  if (!data) {
    console.error('Console.save: No data')
    return;
  }

  let content = JSON.stringify(data);
  console.log('save mockdata:',content);
  // TODO:访问node环境fs写数据(web环境不支持)
  // 暂时用html5提供的localStorage, 注意一般浏览器存储上限5M
  localStorage.setItem('mockData', content);
  // let get = JSON.parse(localStorage.getItem('mockData'));
  // localStorage.removeItem('mockData');
  // get = JSON.parse(localStorage.getItem('mockData'));

  // json2xml to local 
  let formatData = dataFormat(data);
  localApi('json2xml', formatData).then(res => {
    if (res.code !== 0) {
      return false
    }
    console.log('res:', res)
  }).catch(err => {
    console.error(err);
  })
};

export default utils;