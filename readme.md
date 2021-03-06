# Star manager 0.0.7
超轻量级的 GitHub Star 管理插件

## 使用方法
1. 进入 Chrome 插件市场[下载插件](https://chrome.google.com/webstore/detail/star-manager/klajgkhhnnipjkilfgkkjofidahjfobh)
2. 进入 `chrome://extensions/shortcuts` 为 Star Manager 设置 popup 的快捷键
3. 打开 插件的设置界面(`chrome-extension://klajgkhhnnipjkilfgkkjofidahjfobh/options.html`)，输入用户名和 Github Access Token，提交修改
4. 等待插件拉取用户 star 即可开始使用

## 关键字搜索
插件支持渐进式的关键字搜索，即下一个关键字会在上一个关键字的基础上做筛选。

例如，搜索 `python web async` 插件会先筛选出带有 `python` 关键字的 star 列表，再基础上再筛选 `web` 关键字，最后筛选 `async`。

关键字作用范围有：
- repo 名称 E.G. `rust-lang/rust` `psf/black`
- repo 的描述
- repo 在 GitHub 标记的语言
- repo 在 GitHub 登记的主页
- repo 的 关键字


## TODO
- [ ] 搜索框的方向键支持
- [x] options 页面的日志支持和界面优化
- [ ] 英文说明

## Changelog
### 0.0.7
 - 修复了 popup 页面跳转至 options 页面时没有采用新窗口打开的方式
### 0.0.6
 - 修复了旧版本更新上来（只存在`username` 没有 `token`）时，不显示设置 tips 的问题
### 0.0.5
 - 新增了 `options.html` 页面的友好提示和日志支持
