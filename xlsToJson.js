const fs = require("fs");

const xlsx = require('node-xlsx');

/** 解析excel文档 */
const sheets = xlsx.parse('./dist/name.xlsx');
const sheet = sheets[0]
const cn = {}
const en = {}
const kor = {}
sheet.data.forEach((item, index) => {
    cn[item[1]] = item[2]
    en[item[1]] = item[3]
    kor[item[1]] = item[4]
})

fs.writeFileSync('./dist/en.json', JSON.stringify(en))
fs.writeFileSync('./dist/kor.json', JSON.stringify(kor))
fs.writeFileSync('./dist/cn.json', JSON.stringify(cn))