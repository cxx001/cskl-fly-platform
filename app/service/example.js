'use strict';

const BaseService = require('./base');
const xml2js = require('xml2js');
const fse = require('fs-extra');
const { exec } = require('child_process');

var latest_xml = '';

class ExampleService extends BaseService {
  async openLocalDir(dir) {
    const self = this;

    await self.ipcCall('example.openDir', dir);

    return true;
  }

  async executeJS(str) {
    const self = this;
    let result = await self.ipcCall('example.executeJS', str);
    return result;
  }

  async setShortcut(shortcutStr) {
    const self = this;
    let result = await self.ipcCall('example.setShortcut', shortcutStr);
    return result;
  }

  async uploadFileToSMMS(tmpFile) {
    const res = {
      code: 1000,
      message: 'unknown error',
    };

    try {
      //throw new Error('Sync Error');
      const headersObj = {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'pHVaIfVX8kgxsEL2THTYMVzJDYY3MMZU'
      };
      const url = 'https://sm.ms/api/v2/upload';
      const response = await this.app.curl(url, {
        method: 'POST',
        headers: headersObj,
        files: {
          smfile: tmpFile,
        },
        dataType: 'json',
        timeout: 15000,
      });
      const result = response.data;
      if (this.app.config.env === 'local') {
        this.app.logger.info('[ExampleService] [uploadFileToSMMS]: info result:%j', result);
      }
      if (result.code !== 'success') {
        this.app.logger.error('[ExampleService] [uploadFileToSMMS]: res error result:%j', result);
      }
      return result;
    } catch (e) {
      this.app.logger.error('[ExampleService] [uploadFileToSMMS]:  ERROR ', e);
    }

    return res;
  }

  async autoLaunchEnable() {
    const callResult = await this.ipcCall('example.autoLaunchEnable');

    return callResult.data;
  }

  async autoLaunchDisable() {
    const callResult = await this.ipcCall('example.autoLaunchDisable');

    return callResult.data;
  }

  async autoLaunchIsEnabled() {
    const callResult = await this.ipcCall('example.autoLaunchIsEnabled');

    return callResult.data;
  }

  async openSoftware() {
    let softwarePath = 'C:/Users/Admin/Desktop/test/electron-egg-master/out/win-unpacked/electron-egg.exe';

    // 检查程序是否存在
    if (!fse.existsSync(softwarePath)) {
      return false;
    }

    // 命令行字符串 并 执行
    let cmdStr = 'start ' + softwarePath + ' ../../mockData.gra4';
    exec(cmdStr, (err, stdout, stderr) => {
      console.log(err, stdout, stderr)
    });

    return true;
  }

  async selectDir() {
    const result = await this.ipcCall('example.selectDir');
    if (!result.data) {
      return '';
    }

    return result.data;
  }

  async testElectronApi(id = 0) {
    await this.ipcCall('example.testElectronApi');

    return null;
  }

  async messageShow() {
    await this.ipcCall('example.messageShow');

    return true;
  }

  async messageShowConfirm() {
    await this.ipcCall('example.messageShowConfirm');

    return true;
  }

  async loadExtension(filePath) {
    const self = this;

    await self.ipcCall('example.loadExtension', filePath);

    return true;
  }

  async json2xml(json) {
    if (!json) {
      console.error('json data null!');
      return false;
    }

    var builder = new xml2js.Builder();
    latest_xml = builder.buildObject(json);
    console.log('xml update success.');
    // TODO: 当前做法是启动时直接传最新的xml对象给引擎, 因此前端不需要持久化保存。如果确定这种做法，这里还可以优化，不需要到egg这边，直接在vue端完成。
    // fse.writeFile('./mockData.gra4', latest_xml, function (error) {
    //   if (error) {
    //     console.log('write file error!');
    //   } else {
    //     console.log('write file success.');
    //   }
    // })
    return true;
  }

  async sendMsgToEngine(command, data, cb) {
    let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == xhr.DONE) {
        if (xhr.status == 200) {
          cb(xhr.responseText);
        } else { 
          console.log('send msg fail, status=', xhr.status);
          cb(xhr.status);
        }
      }
    }

    let url = 'http://192.168.10.251:9988/' + command;
    if (command == 'start') {
      data = latest_xml;
    }
    xhr.open('POST', url);
    xhr.send(data);
    console.log('send msg command: ', command);
    console.log('send msg data: ', data);
  }
}

module.exports = ExampleService;