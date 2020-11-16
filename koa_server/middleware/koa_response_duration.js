// 计算服务器总耗时的中间件
module.exports = async (ctx, next) => {
  // 记录开始时间
  const start = Date.now()
  // 让内层中间件执行
  await next()
  // 记录结束时间
  const end = Date.now()
  // 计算耗时
  const duration = end - start
  // 设置响应头 X-Response-Time
  ctx.set('X-Response-Time', duration + 'ms')
}
