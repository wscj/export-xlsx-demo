## 导出Excel的例子

> 该例子是先写好模版（写好样式），在模版的基础上写入数据，最后保存为导出文件（仅支持`.xlsx`格式）

#### 配置以及运行起来

```
$ git clone https://github.com/tadashi-chen/export-xlsx-demo.git
$ cd export-xlsx-demo
$ npm install # master分支需要此步骤，dev分支已经上传依赖，可跳过此步骤
$ node test.js
```

`template.xlsx`是模版，如需修改样式则改这个文件即可，`output.xlsx`是导出的文件。