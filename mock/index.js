// 导入mockjs
import MockJs from 'mockjs'
// 配置mockjs
MockJs.setup({
  // 超时时间
  timeout: 400
})
// 使用mock
// 半自动化导入 require.context()方法
const files = require.context('.', true, /\.js$/)
const currentArray = []
// console.log(files)
files.keys().forEach(key => {
  if (key === './index.js') return
  currentArray.push(files(key).default)
})

currentArray.forEach(item => {
  for (const [path, target] of Object.entries(item)) {
    const protocal = path.split('|')
    console.log(protocal[0], protocal[1])
    MockJs.mock(new RegExp(`^${protocal[0]}`), protocal[1], target)
  }
})
