const AipSpeechClient = require('baidu-aip-sdk').speech;
// const fs = require('fs');
const APP_ID = '35468388';
const API_KEY = 'M78Z5iqYuP7fmPNTzsMVmki4';
const SECRET_KEY = 'TN8HbRT7hspp4VyKRkHBaoGcvxCHvrpS';
const path = require("path");

// var say = require("./say/index.js");
const fs = require("fs"); //导入模块
const getTime = require("./date.js");
// const filePath = './text.js'
const filePath = './english.js'
// const filePath = './text-English.js'
let str = require(filePath)
const fileName = path.basename(filePath).replace('.js', '');
console.log('fileName',fileName);

let time = getTime()
if (!fs.existsSync('./wav/' + time)) fs.mkdirSync('./wav/' + time);
if (!fs.existsSync('./text')) fs.mkdirSync('./text');
let i = 0;
let count = 10
const client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY);
let exportfn = async (arrRandom) => {
  console.log('arrRandom', arrRandom, arr[arrRandom[i]], i);
  // console.log(text, random);

  // await client.text2audio(' ' + arr[arrRandom[i]] + ' ' + arr[arrRandom[i]] + ' ' + arr[arrRandom[i]], { spd: 3, per: '1', aue: '6' }).then((result) => {
  //   if (result.data) {
  //     fs.writeFileSync('./wav/' +fileName+ time + '/' + i + ".wav", result.data,)
  //     i++
  //     if (count > i) {
  //       exportfn(arrRandom)
  //     }
  //     console.log('语音保存成功！');
  //   } else {
  //     console.log('语音合成失败：' + JSON.stringify(result));
  //   }
  // }).catch((err) => {
  //   console.error('语音合成出错：', err);
  // });
};
let arr = str.split(" ");
console.log("arr", arr.length);

let random = Math.floor(Math.random() * arr.length).toFixed(0);
let arrRandom = [];
while (arrRandom.length < count) {
  random = Math.floor(Math.random() * arr.length).toFixed(0);
  if (!arrRandom.includes(random)) {
    arrRandom.push(random);
    fs.writeFile(
      './text/' + fileName + time + ".txt",
      arr[random] + ' ' + arr[random] + ' ' + '\n',
      {
        flag: 'as',
        encoding: 'utf8'
      },
      function (err) { }
    );
    if (arrRandom.length === count) {
      exportfn(arrRandom);
    }

  }
}
