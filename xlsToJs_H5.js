const fs = require("fs");

const xlsx = require('node-xlsx');

/** 解析excel文档 */
const sheets = xlsx.parse('./lib/name.xlsx');
const sheet = sheets[0]

const zhcn = {}
const enww = {}
const kokr = {}
const zhhk = {}
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
    if (item[1]) zhhk[item[1]] = item[5] ? item[5] : ''
    if (item[1]) Filipino[item[1]] = item[6] ? item[6] : ''
    if (item[1]) tai_land[item[1]] = item[7] ? item[7] : ''
    if (item[1]) Spanish[item[1]] = item[8] ? item[8] : ''
    if (item[1]) Japanese[item[1]] = item[9] ? item[9] : ''
    if (item[1]) Vietnamese[item[1]] = item[10] ? item[10] : ''
    if (item[1]) Turkish[item[1]] = item[11] ? item[11] : ''
    if (item[1]) Portuguese[item[1]] = item[12] ? item[12] : ''
    if (item[1]) FRENCH[item[1]] = item[13] ? item[13] : ''
    // if (item[1]) Arabic[item[1]] = item[14] ? item[14] : ''
})

fs.writeFileSync('./dist/zh.js', 'let zh = ' + JSON.stringify(zhcn, null, '\t') + '\n' +'export default zh')
fs.writeFileSync('./dist/en.js', 'let en = ' + JSON.stringify(enww, null, '\t') + '\n' +'export default en')
fs.writeFileSync('./dist/ko.js', 'let ko = ' + JSON.stringify(kokr, null, '\t') + '\n' +'export default ko')
fs.writeFileSync('./dist/hk.js', 'let hk = ' + JSON.stringify(zhhk, null, '\t') + '\n' +'export default hk')
fs.writeFileSync('./dist/fil.js', 'let fil = ' + JSON.stringify(Filipino, null, '\t') + '\n' +'export default fil')
fs.writeFileSync('./dist/th.js', 'let th = ' + JSON.stringify(tai_land, null, '\t') + '\n' +'export default th')
fs.writeFileSync('./dist/es.js', 'let es = ' + JSON.stringify(Spanish, null, '\t') + '\n' +'export default es')
fs.writeFileSync('./dist/ja.js', 'let ja = ' + JSON.stringify(Japanese, null, '\t') + '\n' +'export default ja')
fs.writeFileSync('./dist/vi.js', 'let vi = ' + JSON.stringify(Vietnamese, null, '\t') + '\n' +'export default vi')
fs.writeFileSync('./dist/tr.js', 'let tr = ' + JSON.stringify(Turkish, null, '\t') + '\n' +'export default tr')
fs.writeFileSync('./dist/pt.js', 'let pt = ' + JSON.stringify(Portuguese, null, '\t') + '\n' +'export default pt')
fs.writeFileSync('./dist/fr.js', 'let fr = ' + JSON.stringify(FRENCH, null, '\t') + '\n' +'export default fr')
// fs.writeFileSync('./dist/Arabic.json', 'let json = ' + JSON.stringify(Arabic, null, '\t') + '\n' +'export default json')

