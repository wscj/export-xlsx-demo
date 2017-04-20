var ejsExcel = require("ejsexcel");
var fs = require("fs");

// 获取excel模版
var exlBuf = fs.readFileSync("./template.xlsx");

// 列头部名称，这里注意使用多语言
var fields = [{ "header_1": "日志类型", "header_2": "内容", "header_3": "时间" }];

// 导出excel的内容
var data = [{
    col_1: "报警",
    col_2: "镜头被人遮挡住了",
    col_3: "2017-1-1 22:11:11"
}, {
    col_1: "登录",
    col_2: "admin登录成功",
    col_3: "2017-1-1 22:11:11"
}];

//用数据源(对象)data渲染Excel模板
ejsExcel.renderExcelCb(exlBuf, [fields, data], function(err, exlBuf2) {
    if (err) {
        console.error(err);
        return;
    }
    fs.writeFileSync("./output.xlsx", exlBuf2);
    console.log("Export success!");
});
