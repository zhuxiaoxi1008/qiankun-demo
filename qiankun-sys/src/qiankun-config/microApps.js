//这里一个{} 就表示一个微应用
let subApps = [
    {
      name: "app-vue3",// name 需要唯一
      entry: "//localhost:9001",
      container: "#app-vue3",// 表示承载为应用的容器的id
      activeRule: "/app-vue3",// 匹配的路由
    },
    // {
    //   name: "app-react",
    //   entry: "//localhost:5174/home",
    //   container: "#app-react",
    //   activeRule: "/app-react",
    // },
  ];
  export default subApps
