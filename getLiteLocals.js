const fs = require('fs');
const path = require('path');

// 检查是否在范围内的功能
const isInRange = (key, startKey, endKey) => {
  return key >= startKey && key <= endKey;
};

// 转换 export default 到 module.exports
const convertToCommonJS = (filePath, variableName) => {
  const content = fs.readFileSync(filePath, 'utf8');
  // 替换 export default 语句为 module.exports
  const updatedContent = content.replace(/export\s+default\s+(.*?);?\s*$/gm, `module.exports = $1;`);
  fs.writeFileSync(filePath, updatedContent, 'utf8');
};

// 封装函数
const createTranslationFiles = async (keys) => {
  // 使用相对路径，确保指向 locales 目录
  const localesDir = path.join(__dirname, 'locales');
  const newDir = path.join(__dirname, 'translations'); // 输出到根目录的 translations 文件夹

  // 检查 localesDir 是否存在
  if (!fs.existsSync(localesDir)) {
    console.error(`目录不存在: ${localesDir}`);
    return;
  }

  // 创建新的文件夹
  if (!fs.existsSync(newDir)) {
    fs.mkdirSync(newDir);
  }

  // 读取 localesDir 下的 JavaScript 文件
  const files = fs.readdirSync(localesDir).filter(file =>
      file.endsWith('.js') &&
      file !== 'vuei18n.js' && // 如果有这些文件，过滤掉
      file !== 'longest.js'
  );

  // 处理每个文件
  for (const file of files) {
    const filePath = path.join(localesDir, file);
    const variableName = path.basename(file, '.js'); // 获取不带扩展名的文件名

    // 转换文件中的 export default 语句
    convertToCommonJS(filePath, variableName);

    try {
      // 由于已经转换为 CommonJS，可以直接导入文件
      const fileContent = require(filePath);
      const newContent = {};

      // 支持单个键、多个键和范围
      keys.forEach(key => {
        if (typeof key === 'string' && fileContent[key]) {
          newContent[key] = fileContent[key];
        } else if (Array.isArray(key) && key.length === 2) {
          const [startKey, endKey] = key;
          Object.keys(fileContent).forEach(k => {
            if (isInRange(k, startKey, endKey)) {
              newContent[k] = fileContent[k];
            }
          });
        }
      });

      // 写入新文件到根目录的 translations 目录中，且只写入对象内容
      const newFilePath = path.join(newDir, `${variableName}.json`); // 以 JSON 格式保存
      fs.writeFileSync(newFilePath, JSON.stringify(newContent, null, 2), 'utf8');
    } catch (error) {
      console.error(`处理文件 ${file} 时出错: ${error.message}`);
    }
  }

  console.log(`已在 ${newDir} 创建翻译文件！`);
};

// 用法示例
createTranslationFiles([
  'download_113',
  ['hotcoinApp_v_1_3_121801_HideSuspendRecharge', 'hotcoinApp_v_1_3_121801_TheMarginRatioFor']
]);