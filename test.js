const { exec } = require('child_process');
const iconv = require('iconv-lite');
exec(`powershell.exe Add-Type -AssemblyName System.speech; $speak = New-Object System.Speech.Synthesis.SpeechSynthesizer; $speak.Rate = 3; $speak.Speak([Console]::In.ReadLine()); exit`).stdin.end(iconv.encode('其实根本没有什么和平分手，在那之前总会经历“争吵、冷战、无视、陌生”所谓的和平只是表象，伏尔泰说,在雪崩的时候，没有一片雪花想要承认,自己是雪崩的罪魁祸首。就像海水慢慢退潮，像月亮落下山头，像一种症状的逐渐消退，都是一样的', 'gbk'));


// var say = require("say");
// const iconv = require('iconv-lite')
// let random=Math.floor(Math.random()*(32451234)).toFixed(0)
// console.log('random',random);

//     say.export(iconv.encode('其实根本没有，消退，都是一样的', 'gbk'), 'Microsoft Huihui Desktop', 0.75, random+ ".wav", function(err) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log(`Text has been saved to ${random}".wav"`);
//     });

// // 获取电脑安装的声音
// function callback(err,data){
//    console.log('err',err);
//    console.log('data',data);  
// }
say.getInstalledVoices(callback)








