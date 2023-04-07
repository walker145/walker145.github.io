import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Java",
      description: "vuepress-theme-hope 的文档演示",
    },
  },
  
  theme,

  plugins: [
    searchProPlugin({
      appId: "8FRYEU6KK8",
      apiKey: "84f513df1e83406ba42179da778d87b4",
      indexName: "dromara-fast-request",
      locales: {
        "/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
            },
          },
        },
        "/en": {
          placeholder: "Search Documentation",
          translations: {
            button: {
              buttonText: "Search Documentation",
            },
          },
        },
      },
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
