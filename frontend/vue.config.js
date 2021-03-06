module.exports = {
    //Solution For Issue:You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
    //zhengkai.blog.csdn.net
    runtimeCompiler: true,
    configureWebpack: (config) => {
      config["performance"] = {
        "maxEntrypointSize": 10000000,
        "maxAssetSize": 30000000,
      }
    },
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].title= 'cskl-fly-platform' // 设置title
          return args
        })

      const svgRule = config.module.rule("svg");
      svgRule.uses.clear();
      svgRule.use("vue-svg-loader").loader("vue-svg-loader");
    },
    css: {
      loaderOptions: {
          less: {
              modifyVars: {
                //在此处设置，也可以设置直角、边框色、字体大小等
                'primary-color': '#07C160',
              },
              javascriptEnabled: true
          }
      }
    },  
  }