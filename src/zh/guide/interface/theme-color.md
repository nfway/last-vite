---
title: 主题色
icon: palette
category:
  - 界面
tag:
  - 界面
  - 主题色
---

这是一个开箱即用的功能，除了你的主题色之外，还提供 “红、蓝、绿、橙、紫” 五种颜色主题。你也可以定制自己的主题色选择列表。

<!-- more -->

## 尝试

<!-- markdownlint-disable-->

<ThemeColorPicker :themeColor="themeColor" />

<!-- markdownlint-restore -->

## 禁用功能

你可以将 `themeConfig` 的 `themeColor` 设置为 `false` 来禁用它。

## 自定义主题色

你需要按照 `{ 颜色名1: 颜色值, 颜色名2: 颜色值, ... }` 的格式来配置 `themeConfig.themeColor`:


