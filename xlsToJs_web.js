const fs = require("fs")
const xlsx = require('node-xlsx')
const stringify = require('json-stringify-safe')

/** 解析excel文档 */
const sheets = xlsx.parse('./lib/name.xlsx')
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
  if (item[0]) zhcn[item[0]] = item[1] ? item[1] : ''
  if (item[0]) enww[item[0]] = item[2] ? item[2] : ''
  if (item[0]) kokr[item[0]] = item[3] ? item[3] : ''
  if (item[0]) Filipino[item[0]] = item[4] ? item[4] : ''
  if (item[0]) tai_land[item[0]] = item[5] ? item[5] : ''
  if (item[0]) Spanish[item[0]] = item[6] ? item[6] : ''
  if (item[0]) Japanese[item[0]] = item[7] ? item[7] : ''
  if (item[0]) Vietnamese[item[0]] = item[8] ? item[8] : ''
  if (item[0]) Turkish[item[0]] = item[9] ? item[9] : ''
  if (item[0]) Portuguese[item[0]] = item[10] ? item[10] : ''
  if (item[0]) FRENCH[item[0]] = item[11] ? item[11] : ''
  // if (item[1]) Arabic[item[1]] = item[12] ? item[12] : ''
})

fs.writeFileSync('./dist/zh-CN.js', 'let json = ' + stringify(zhcn, null, '\t') + '\n' + 'export default json')
fs.writeFileSync('./dist/en-US.js', 'let json = ' +  stringify(enww, null, '\t') + '\n' + 'export default json')
fs.writeFileSync('./dist/ko-KR.js', 'let json = ' + stringify(kokr, null, '\t') + '\n' + 'export default json')
fs.writeFileSync('./dist/fil_PH.js', 'let json = ' + stringify(Filipino, null, '\t') + '\n' + 'export default json')
fs.writeFileSync('./dist/th_TH.js', 'let json = ' + stringify(tai_land, null, '\t') + '\n' + 'export default json')
fs.writeFileSync('./dist/es_ES.js', 'let json = ' + stringify(Spanish, null, '\t') + '\n' + 'export default json')
fs.writeFileSync('./dist/ja_JP.js', 'let json = ' + stringify(Japanese, null, '\t') + '\n' + 'export default json')
fs.writeFileSync('./dist/vi_VN.js', 'let json = ' + stringify(Vietnamese, null, '\t') + '\n' + 'export default json')
fs.writeFileSync('./dist/tr_TR.js', 'let json = ' + stringify(Turkish, null, '\t') + '\n' + 'export default json')
fs.writeFileSync('./dist/pt_PT.js', 'let json = ' + stringify(Portuguese, null, '\t') + '\n' + 'export default json')
fs.writeFileSync('./dist/fr_FR.js', 'let json = ' + stringify(FRENCH, null, '\t') + '\n' + 'export default json')
// fs.writeFileSync('./dist/Arabic.json', 'let json = ' + stringify(Arabic, null, '\t') + '\n' +'export default json')

