const fs = require('fs')
const json2xls = require('json2xls');

fs.readFile('./lib/name.json', 'utf8', (err, data) => {
    if (err) throw err;

    const json = JSON.parse(data);
    const jsonArray = [];


    Object.keys(json).forEach(item => {
        const temp = {
            'module': '新ieo模块',
            'key': item,
            'zhcn': json[item],
            'enww': '',
            'kokr': '',
            'Filipino': '',
            'Thai': '',
            'Spanish': '',
            'Japanese': '',
            'Vietnamese': '',
            'Turkish': '',
            'Portuguese': '',
            'FRENCH': '',
            'Arabic': ''
        }
        jsonArray.push(temp);
    });

    const xls = json2xls(jsonArray);
    fs.writeFileSync('./dist/name.xlsx', xls, 'binary');
})
