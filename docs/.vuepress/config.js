module.exports = {
  title: "Hello zkd",
  description: "今天也要加油哦",
  head: [["link", { rel: "icon", href: "/logo.jpg" }]],
  themeConfig: {
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    nav: [{ text: "主页", link: "/" }],
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
        // {
        //   title: "JavaScript篇",
        //   collapsable: false,
        //   children: ["JavaScript/data"]
        // }
      ]
    }
  },
  markdown: {
    // markdown 插入代码时展示对应行数
    lineNumbers: true
  }
};
