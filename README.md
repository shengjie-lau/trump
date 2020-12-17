# trump
koa_server是后台，直接用 node app.js 命令启动即可。
trump包含了目前所有视图，但是很多功能仍待完善（如：日历史图的翻页）。通过 npm run serve 运行之后自动打开浏览器，
地址末尾添加 /...page 即可查看对应视图。
（1）trendpage->主视图：发推的数量及热度变化趋势视图
（2）themepage->主题视图
（3）emotionpage->情感分析视图
（4）calendarpage->日历视图
（5）relationpage->关键词的关系视图
（6）wordcloudpage->词云视图
（7）testpage->组合视图。
宽度适配了，高度还未适配，不匹配的话缩放浏览器页面即可。
