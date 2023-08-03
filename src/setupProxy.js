const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://www.pre-onboarding-selection-task.shop',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/',
            },
        })
    );
};
