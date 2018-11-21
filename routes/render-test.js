const router = require('koa-router')()

router.prefix('/render-test');

router.get('/', async (ctx, next) => {
    await ctx.render('render-test', {
        title: 'Render test!'
    })
})

router.get('/js', async (ctx, next) => {
    const sleep = new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 3000)
    });
    await sleep;

    ctx.body = 'const renderTest = 1;';
    ctx.set('Content-Type', 'application/javascript');
})

module.exports = router
