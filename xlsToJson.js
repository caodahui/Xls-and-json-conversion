const fs = require("fs");

const xlsx = require('node-xlsx');

/** 解析excel文档 */
const sheets = xlsx.parse('./lib/name.xlsx');
const sheet = sheets[0]

const zhcn = {}
const enww = {}
const kokr = {}
const Filipino = {}
const tai_land = {}
const Spanish = {}
const Japanese = {}
const Vietnamese = {}
const Turkish = {}
const Portuguese = {}
const FRENCH = {}
const Arabic = {}

sheet.data.forEach((item, index) => {
    zhcn[item[1]] = item[2]
    enww[item[1]] = item[3]
    kokr[item[1]] = item[4]
    Filipino[item[1]] = item[5]
    tai_land[item[1]] = item[6]
    Spanish[item[1]] = item[7]
    Japanese[item[1]] = item[8]
    Vietnamese[item[1]] = item[9]
    Turkish[item[1]] = item[10]
    Portuguese[item[1]] = item[11]
    FRENCH[item[1]] = item[12]
    Arabic[item[1]] = item[13]
})

fs.writeFileSync('./dist/zhcn.json', JSON.stringify(zhcn))
fs.writeFileSync('./dist/enww.json', JSON.stringify(enww))
fs.writeFileSync('./dist/kokr.json', JSON.stringify(kokr))
fs.writeFileSync('./dist/Filipino.json', JSON.stringify(Filipino))
fs.writeFileSync('./dist/tai_land.json', JSON.stringify(tai_land))
fs.writeFileSync('./dist/Spanish.json', JSON.stringify(Spanish))
fs.writeFileSync('./dist/Japanese.json', JSON.stringify(Japanese))
fs.writeFileSync('./dist/Vietnamese.json', JSON.stringify(Vietnamese))
fs.writeFileSync('./dist/Turkish.json', JSON.stringify(Turkish))
fs.writeFileSync('./dist/Portuguese.json', JSON.stringify(Portuguese))
fs.writeFileSync('./dist/FRENCH.json', JSON.stringify(FRENCH))
fs.writeFileSync('./dist/Arabic.json', JSON.stringify(Arabic))

