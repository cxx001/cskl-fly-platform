let utils = {};

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
};

export default utils;