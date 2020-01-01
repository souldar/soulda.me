import React from 'react'
import { md } from '../../mdParser'

const about = `
# 关于我

2018年毕业于南京航空航天大学。练习时长 1 年半的工作狗，目前在美团点评（魔都）里苦练前端搬砖基本功。魔都这个副本太难了。

# 我接触过的

前端方面：JavaScript 基础尚可。React、Vue 会用，但都还没有吃的很透。周边构建工具 webpack，babel，rollup 都有使用。（在大厂里还是好。

客户端方面：App 上主要是用 RN 来搬砖，企图涉足 native 原生开发。桌面则是玩 Electron，最近打算拜读 vscode 的源码。

后端：

# 足迹

潜水在各个平台，现在准备好好运营这个自建博客以及 [github](https://github.com/souldar)。
`;


export const About: React.FC = () => {
  return (
    <div className="about-container">
      <div dangerouslySetInnerHTML={{ __html: md.render(about) }}></div>
    </div>
  )
}