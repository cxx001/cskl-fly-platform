import request from '@/utils/request'
// import storage from 'store'

const mainApi = {
  openDir: '/api/v1/example/openLocalDir',
  uploadFile: '/api/v1/example/uploadFile',
  executeJS: '/api/v1/example/executeJS',
  setShortcut: '/api/v1/example/setShortcut',
  autoLaunchEnable: '/api/v1/example/autoLaunchEnable',
  autoLaunchDisable: '/api/v1/example/autoLaunchDisable',
  autoLaunchIsEnabled: '/api/v1/example/autoLaunchIsEnabled',
  selectFileDir: '/api/v1/example/selectFileDir',
  messageShow: '/api/v1/example/messageShow',
  messageShowConfirm: '/api/v1/example/messageShowConfirm',
  dbOperation: '/api/v1/example/dbOperation',
  testElectronApi: '/api/v1/example/testElectronApi',

  openSoftware: '/api/v1/example/openSoftware',
  json2xml: '/api/v1/example/json2xml',
  sendMsgToEngine: '/api/v1/example/sendMsgToEngine',
}

/**
 * local api
 */
export function localApi (uri, parameter) {
  return request({
    url: mainApi[uri],
    method: 'post',
    data: parameter
  })
}