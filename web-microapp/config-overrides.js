const { override, overrideDevServer } = require('customize-cra');

module.exports = {
    // 用于配置React应用的编译，本处的配置不在测试中起效
    webpack: function (config, env) {
        return config;
    },
    // 用于配置Jest的运行，本处的配置不在项目编译时起效
    jest: function (config) {
        return config;
    },
    // 当使用npm run start或者yarn start时启动的Dev Server的配置
    devServer: function (configFunction) {
        return function (proxy, allowHost) {
            const config = configFunction(proxy, allowHost);
            config.headers = {
                'Access-Control-Allow-Origin': '*',
            };
            return config;
        };
    },
    // 为编译React应用或测试应用时提供路径覆盖
    paths: function (paths, env) {
        return paths;
    }
}