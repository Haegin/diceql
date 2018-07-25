module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = {
      error: err.message || 'Server error',
    }

    ctx.app.emit('error', err, ctx)
  }
}
