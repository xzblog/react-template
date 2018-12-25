// 常用配置

module.exports ={
    server: {
        host: 'localhost',
        port: '3000',
        proxy: {
            "/api": "http://localhost:9000",
        }
    }
};
