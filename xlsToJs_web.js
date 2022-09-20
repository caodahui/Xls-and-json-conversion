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
    if (item[1]) zhcn[item[1]] = item[2] ? item[2] : ''
    if (item[1]) enww[item[1]] = item[3] ? item[3] : ''
    if (item[1]) kokr[item[1]] = item[4] ? item[4] : ''
    if (item[1]) Filipino[item[1]] = item[5] ? item[5] : ''
    if (item[1]) tai_land[item[1]] = item[6] ? item[6] : ''
    if (item[1]) Spanish[item[1]] = item[7] ? item[7] : ''
    if (item[1]) Japanese[item[1]] = item[8] ? item[8] : ''
    if (item[1]) Vietnamese[item[1]] = item[9] ? item[9] : ''
    if (item[1]) Turkish[item[1]] = item[10] ? item[10] : ''
    if (item[1]) Portuguese[item[1]] = item[11] ? item[11] : ''
    if (item[1]) FRENCH[item[1]] = item[12] ? item[12] : ''
    // if (item[1]) Arabic[item[1]] = item[13] ? item[13] : ''
})

fs.writeFileSync('./dist/zh-CN.js', 'let json = ' + JSON.stringify(zhcn, null, '\t') + '\n' +'export default json')
fs.writeFileSync('./dist/en-US.js', 'let json = ' + JSON.stringify(enww, null, '\t') + '\n' +'export default json')
fs.writeFileSync('./dist/ko-KR.js', 'let json = ' + JSON.stringify(kokr, null, '\t') + '\n' +'export default json')
fs.writeFileSync('./dist/fil_PH.js', 'let json = ' + JSON.stringify(Filipino, null, '\t') + '\n' +'export default json')
fs.writeFileSync('./dist/th_TH.js', 'let json = ' + JSON.stringify(tai_land, null, '\t') + '\n' +'export default json')
fs.writeFileSync('./dist/es_ES.js', 'let json = ' + JSON.stringify(Spanish, null, '\t') + '\n' +'export default json')
fs.writeFileSync('./dist/ja_JP.js', 'let json = ' + JSON.stringify(Japanese, null, '\t') + '\n' +'export default json')
fs.writeFileSync('./dist/vi_VN.js', 'let json = ' + JSON.stringify(Vietnamese, null, '\t') + '\n' +'export default json')
fs.writeFileSync('./dist/tr_TR.js', 'let json = ' + JSON.stringify(Turkish, null, '\t') + '\n' +'export default json')
fs.writeFileSync('./dist/pt_PT.js', 'let json = ' + JSON.stringify(Portuguese, null, '\t') + '\n' +'export default json')
fs.writeFileSync('./dist/fr_FR.js', 'let json = ' + JSON.stringify(FRENCH, null, '\t') + '\n' +'export default json')
// fs.writeFileSync('./dist/Arabic.json', 'let json = ' + JSON.stringify(Arabic, null, '\t') + '\n' +'export default json')

