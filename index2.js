const AipSpeechClient = require('baidu-aip-sdk').speech;
// const fs = require('fs');
const APP_ID = '35468388';
const API_KEY = 'M78Z5iqYuP7fmPNTzsMVmki4';
const SECRET_KEY = 'TN8HbRT7hspp4VyKRkHBaoGcvxCHvrpS';

// var say = require("./say/index.js");
const fs = require("fs"); //导入模块
const getTime = require("./date.js");
let str = require('./text.js')
let time = getTime()
if (!fs.existsSync('./wav/'+time)) fs.mkdirSync('./wav/'+time);
if (!fs.existsSync('./text')) fs.mkdirSync('./text');
let exportfn = (text, random) => {
  console.log(text, random);
  const client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY);
  client.text2audio(text, { spd: 5, per:'5003'  }).then((result) => {
    if (result.data) {
      fs.writeFileSync('./wav/'+time+'/'+random + ".wav", result.data);
      console.log('语音保存成功！');
    } else {
      console.log('语音合成失败：' + JSON.stringify(result));
    }
  }).catch((err) => {
    console.error('语音合成出错：', err);
  });
  // say.export(
  //   text,
  //   "Microsoft Huihui Desktop",
  //   0.5,
  //   './wav/'+time+'/'+random + ".wav",
  //   function (err) {
  //     if (err) {
  //       return console.error(err);
  //     }
  //     console.log(`Text has been saved to ${random}".wav"`);
  //   }
  // );
};
let arr = str.split(" ");
console.log("arr", arr.length);
let random = Math.floor(Math.random() * arr.length).toFixed(0);
let arrRandom = [];
while (arrRandom.length < 20) {
  random = Math.floor(Math.random() * arr.length).toFixed(0);
  if (!arrRandom.includes(random)) {
    arrRandom.push(random);
    fs.writeFile(
        './text/'+time+".js",
      arr[random] + arrRandom.length+'\n',
      {
        flag:'as',
        encoding :'utf8'
      },
      function (err) {}
    );
    exportfn(" 下一个 " +arr[random] + " " + arr[random]+" " + arr[random], arrRandom.length);
  }
}
console.log("arrRandom", arrRandom);

// 获取电脑安装的声音
// function callback(err, data) {
//   console.log("err", err);
//   console.log("data", data);
// }
// say.getInstalledVoices(callback);
