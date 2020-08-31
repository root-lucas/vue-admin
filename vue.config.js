module.exports = {
    // 项目部署的基础路径
    // 我们默认假设你的应用将会部署在域名的根部，
    // 比如 https://www.my-app.com/
    // 如果你的应用时部署在一个子路径下，那么你需要在这里
    // 指定子路径。比如，如果你的应用部署在
    // https://www.foobar.com/my-app/
    // 那么将这个值改为 `/my-app/`
    publicPath: '/vue-admin/onlinePreview/' /*这个是我存放在github在线预览的login项目*/,
    // https://root-lucas.github.io/login/dist/index.html
    // 将构建好的文件输出到哪里（或者说将编译的文件）
    outputDir: 'onlinePreview',
}
