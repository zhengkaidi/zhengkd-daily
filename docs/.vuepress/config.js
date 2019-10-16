module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  themeConfig: {
    sidebar: {
      "/guide/": [
        {
          title: "入门",
          collapsable: false,
          children: [
            // 子菜单
            "install/test" // 可在docs目录下创建install目录，此路径表示读取install目录下的README.md文件
          ]
        }
      ]
    }
  },
  markdown: {
    // markdown 插入代码时展示对应行数
    lineNumbers: true
  }
};
