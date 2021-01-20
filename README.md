## 版本发布指令

```
// 首次发布版本
npm run release -- -f

// 发布下一个版本
npm run release -- -r [major, minor, patch, x.x.x]

// 发布先行版本
npm run release -- -p [alpha, beta, rc]
// 得到类似 1.1.0-alpha.0

// 设置自动生成tag前缀
npm run release -- -t xxx
// 得到类似 xxx1.1.0
```