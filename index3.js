const request = require('request')
const fs = require("fs"); //导入模块
const AK = "M78Z5iqYuP7fmPNTzsMVmki4"
const SK = "TN8HbRT7hspp4VyKRkHBaoGcvxCHvrpS"

async function main() {
    var options = {
        'method': 'POST',
        'url': 'https://tsn.baidu.com/text2audio',
        'headers': {
                'Content-Type': 'application/x-www-form-urlencoded',
        },
        form: {
                'tex':'任命阿斯兰的康的飞机',
                'tok': await getAccessToken(),
                'cuid': '9RX4tpONg2PKYZUlxSh6kLdKC6t50TrL',
                'ctp': '1',
                'lan': 'zh',
                'spd': '5',
                'pit': '5',
                'vol': '5',
                'per': '1',
                'aue': '3'
        }
    };

    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(111,response.body);
        fs.writeFileSync("123.MP3", response.body,function(){
            // i++
            // exportfn(arrRandom)
          });
    });
}

/**
 * 使用 AK，SK 生成鉴权签名（Access Token）
 * @return string 鉴权签名信息（Access Token）
 */
function getAccessToken() {

    let options = {
        'method': 'POST',
        'url': 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=' + AK + '&client_secret=' + SK,
    }
    return new Promise((resolve, reject) => {
        request(options, (error, response) => {
            if (error) { reject(error) }
            else {
                console.log('access_token',JSON.parse(response.body).access_token);
                
                 resolve(JSON.parse(response.body).access_token) }
        })
    })
}
main();
