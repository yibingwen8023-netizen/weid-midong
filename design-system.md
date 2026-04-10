# WEID微动 - 前端设计规范

## 📐 设计基础

### 色彩系统

#### 主色调
```css
--color-primary: #1890ff;          /* 品牌主色 */
--color-primary-hover: #40a9ff;     /* 悬停状态 */
--color-active: #e6f7ff;             /* 激活背景色 */
--color-active-border: #91d5ff;     /* 激活边框色 */
```

#### 功能色
```css
--color-success: #52c41a;          /* 成功 */
--color-success-hover: #73d13d;    /* 成功悬停 */
--color-success-bg: #f6ffed;        /* 成功背景 */
--color-success-border: #b7eb8f;   /* 成功边框 */

--color-warning: #fa8c16;          /* 警告 */
--color-warning-hover: #ffa940;    /* 警告悬停 */

--color-error: #f5222d;            /* 错误 */
--color-error-bg: #fff1f0;          /* 错误背景 */
--color-error-border: #ffa39e;      /* 错误边框 */

--color-info: #1890ff;             /* 信息 */
```

#### 中性色
```css
--color-text-primary: #333;        /* 主要文本 */
--color-text-secondary: #666;      /* 次要文本 */
--color-text-tertiary: #999;       /* 辅助文本 */
--color-text-disabled: rgba(0,0,0,0.25); /* 禁用文本 */

--color-border: #e8e8e8;           /* 边框 */
--color-border-hover: #40a9ff;     /* 边框悬停 */
--color-border-light: #d9d9d9;     /* 浅边框 */

--color-bg-dark: #001529;          /* 深色背景 */
--color-bg-light: #f0f2f5;         /* 浅色背景 */
--color-bg-white: #fff;            /* 白色背景 */
--color-bg-gray: #fafafa;          /* 灰色背景 */
```

### 字体系统

#### 字体族
```css
--font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
               'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
```

#### 字号规范
```css
--font-size-xs: 12px;    /* 辅助文字 */
--font-size-sm: 13px;    /* 小号文字、标签 */
--font-size-base: 14px;  /* 正文 */
--font-size-lg: 16px;    /* 重要信息 */
--font-size-xl: 18px;    /* 标题 */
```

#### 字重规范
```css
--font-weight-normal: 400;   /* 普通 */
--font-weight-medium: 500;   /* 中等 */
--font-weight-semibold: 600; /* 半粗 */
```

#### 行高
```css
--line-height-tight: 1.4;    /* 紧凑 */
--line-height-normal: 1.5;   /* 正常 */
--line-height-loose: 1.6;    /* 宽松 */
```

### 间距系统

基于 4px 栅格系统
```css
--space-xs: 4px;     /* 超小间距 */
--space-sm: 8px;     /* 小间距 */
--space-md: 12px;    /* 中间距 */
--space-base: 16px;  /* 基础间距 */
--space-lg: 24px;    /* 大间距 */
--space-xl: 32px;    /* 超大间距 */
```

### 圆角规范
```css
--radius-sm: 2px;    /* 小圆角 - 默认 */
--radius-base: 4px;  /* 基础圆角 */
--radius-lg: 8px;    /* 大圆角 */
--radius-round: 50%; /* 圆形 */
```

### 阴影规范
```css
--shadow-sm: 0 1px 2px 0 rgba(0,0,0,0.03),
            0 1px 6px -1px rgba(0,0,0,0.02),
            0 2px 4px 0 rgba(0,0,0,0.02); /* 小阴影 */

--shadow-md: 0 2px 8px rgba(0,0,0,0.08); /* 中阴影 */
```

---

## 🎨 布局系统

### 整体布局
```css
/* 顶部导航高度 */
--header-height: 48px;

/* 左侧菜单宽度 */
--sidebar-width: 200px;

/* 内容区域内边距 */
--content-padding: 16px;
```

### 容器规范
```css
.container {
    max-width: 100%;
    margin: 0 auto;
    padding: 0 var(--space-base);
}

/* 卡片容器 */
.card {
    background: var(--color-bg-white);
    border-radius: var(--radius-sm);
    padding: var(--space-base);
    box-shadow: var(--shadow-sm);
}
```

---

## 🧱 组件库

### 按钮 (Button)

#### 基础样式
```css
.btn {
    height: 32px;
    padding: 0 12px;
    border-radius: 2px;
    cursor: pointer;
    border: 1px solid var(--color-border-light);
    background: var(--color-bg-white);
    transition: all 0.2s;
    font-size: 13px;
    line-height: 30px;
    color: var(--color-text-secondary);
}

.btn:hover {
    border-color: var(--color-primary-hover);
    color: var(--color-primary-hover);
}
```

#### 变体
```css
/* 主按钮 */
.btn-primary {
    background: var(--color-primary);
    color: #fff;
    border-color: var(--color-primary);
}

.btn-primary:hover {
    background: var(--color-primary-hover);
    border-color: var(--color-primary-hover);
    color: #fff;
}

/* 成功按钮 */
.btn-success {
    background: var(--color-success);
    color: #fff;
    border-color: var(--color-success);
}

.btn-success:hover {
    background: var(--color-success-hover);
    border-color: var(--color-success-hover);
    color: #fff;
}

/* 警告按钮 */
.btn-warning {
    background: var(--color-warning);
    color: #fff;
    border-color: var(--color-warning);
}

.btn-warning:hover {
    background: var(--color-warning-hover);
    border-color: var(--color-warning-hover);
    color: #fff;
}
```

#### 尺寸
```css
/* 小号 */
.btn-sm {
    height: 24px;
    font-size: 12px;
    padding: 0 8px;
    line-height: 22px;
}

/* 大号 */
.btn-lg {
    height: 40px;
    font-size: 16px;
    padding: 0 16px;
    line-height: 38px;
}
```

### 表单元素

#### 输入框 (Input)
```css
.form-input,
.filter-select {
    height: 32px;
    border: 1px solid var(--color-border-light);
    border-radius: 2px;
    padding: 0 12px;
    color: var(--color-text-secondary);
    font-size: 13px;
    background: #fff;
    cursor: pointer;
    transition: all 0.2s;
}

.form-input:hover,
.filter-select:hover {
    border-color: var(--color-primary-hover);
}

.form-input:focus,
.filter-select:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(24,144,255,0.1);
}
```

#### 复选框 (Checkbox)
```css
.checkbox {
    width: 16px;
    height: 16px;
    cursor: pointer;
    vertical-align: middle;
}
```

#### 开关 (Switch)
```css
.switch {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 20px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.switch .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-border-light);
    transition: .3s;
    border-radius: 20px;
}

.switch .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: .3s;
    border-radius: 50%;
}

.switch input:checked + .slider {
    background-color: var(--color-success);
}

.switch input:checked + .slider:before {
    transform: translateX(16px);
}
```

### 筛选标签 (Filter Tag)

```css
.filter-tag {
    padding: 3px 11px;
    border-radius: 2px;
    cursor: pointer;
    color: var(--color-text-secondary);
    transition: all 0.2s;
    font-size: 13px;
    line-height: 1.4;
}

.filter-tag:hover {
    color: var(--color-primary-hover);
}

.filter-tag.active {
    background: var(--color-active);
    color: var(--color-primary);
}

.filter-tag.more {
    color: var(--color-primary);
    border: none;
}

.filter-tag.more:hover {
    color: var(--color-primary-hover);
}
```

### 状态标签 (Status Tag)

```css
.status-tag {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 2px;
    font-size: 12px;
    font-weight: 500;
}

.status-open {
    color: var(--color-success);
    background: var(--color-success-bg);
    border: 1px solid var(--color-success-border);
}

.status-close {
    color: var(--color-error);
    background: var(--color-error-bg);
    border: 1px solid var(--color-error-border);
}
```

### 表格 (Table)

```css
.data-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 13px;
    border: 1px solid var(--color-border);
}

.data-table th,
.data-table td {
    padding: 12px 8px;
    text-align: center;
    border-bottom: 1px solid var(--color-border);
    border-right: 1px solid var(--color-border);
}

.data-table th:last-child,
.data-table td:last-child {
    border-right: none;
}

.data-table th {
    background: var(--color-bg-gray);
    font-weight: 500;
    color: var(--color-text-secondary);
    border-bottom: 2px solid var(--color-border);
    white-space: nowrap;
}

.data-table tbody tr:hover {
    background: #f5f5f5;
}

.data-table tbody tr.selected {
    background-color: var(--color-active);
}
```

### 面包屑 (Breadcrumb)

```css
.breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    color: var(--color-text-secondary);
}

.breadcrumb i {
    font-size: 16px;
}

.breadcrumb span {
    color: var(--color-text-tertiary);
}
```

### 标签页 (Tabs)

```css
.tabs-container {
    background: #fff;
    border-radius: 2px;
    margin-bottom: 16px;
    box-shadow: var(--shadow-sm);
}

.tabs-header {
    display: flex;
    border-bottom: 1px solid var(--color-border);
    padding: 0 16px;
}

.tab-item {
    padding: 12px 16px;
    cursor: pointer;
    color: var(--color-text-secondary);
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    transition: all 0.2s;
}

.tab-item:hover {
    color: var(--color-primary);
}

.tab-item.active {
    color: var(--color-primary);
    border-bottom-color: var(--color-primary);
}
```

### 图标 (Icon)

使用 Remix Icon 图标库
```html
<link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
```

常用图标：
```css
/* 帮助图标 */
.help-icon {
    color: var(--color-text-tertiary);
    font-size: 12px;
    margin-left: 2px;
    cursor: help;
    vertical-align: middle;
}
```

---

## 📱 导航系统

### 顶部导航
```css
.top-header {
    height: 48px;
    background: var(--color-bg-dark);
    display: flex;
    align-items: center;
    padding: 0 24px;
    justify-content: space-between;
}

.logo {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
}
```

### 左侧菜单
```css
.sidebar {
    width: 200px;
    background: var(--color-bg-dark);
    overflow-y: auto;
    flex-shrink: 0;
}

.menu-item {
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    color: rgba(255,255,255,0.65);
    cursor: pointer;
    transition: all 0.3s;
}

.menu-item:hover {
    color: #fff;
}

.menu-item.active {
    background: var(--color-primary);
    color: #fff;
}

.submenu-item {
    height: 36px;
    display: flex;
    align-items: center;
    color: rgba(255,255,255,0.65);
    cursor: pointer;
    font-size: 13px;
    padding-left: 50px;
}

.submenu-item:hover,
.submenu-item.active {
    color: #fff;
}
```

---

## 🌓 主题与交互

### 过渡动画
```css
--transition-fast: 0.2s;
--transition-normal: 0.3s;
--transition-slow: 0.5s;
```

### 滚动条样式
```css
.content::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

.content::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
}

.content::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
}

.content::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
}
```

---

## ✨ 响应式设计

### 断点系统
```css
--breakpoint-sm: 640px;   /* 小型设备 */
--breakpoint-md: 768px;   /* 中型设备 */
--breakpoint-lg: 1024px;  /* 大型设备 */
--breakpoint-xl: 1280px;  /* 超大型设备 */
```

### Flexbox 工具类
```css
.flex { display: flex; }
.flex-col { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.gap-sm { gap: var(--space-sm); }
.gap-base { gap: var(--space-base); }
```

---

## 🎯 使用示例

### 页面结构模板
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面标题 - 微动</title>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <style>
        /* 引入设计规范变量和基础样式 */
    </style>
</head>
<body>
    <!-- 顶部导航 -->
    <div class="top-header">...</div>

    <!-- 主体 -->
    <div class="main-container">
        <!-- 左侧菜单 -->
        <div class="sidebar">...</div>

        <!-- 右侧内容 -->
        <div class="content">
            <!-- 面包屑 -->
            <div class="breadcrumb">...</div>

            <!-- 标签页 -->
            <div class="tabs-container">...</div>

            <!-- 筛选区域 -->
            <div class="filter-section">...</div>

            <!-- 表格区域 -->
            <div class="table-section">...</div>
        </div>
    </div>
</body>
</html>
```

---

## 📋 设计检查清单

在创建新页面时,请确保：

- [ ] 使用正确的色彩系统
- [ ] 遵守字体大小和行高规范
- [ ] 应用正确的圆角(默认2px)
- [ ] 使用标准间距(4px栅格)
- [ ] 实现完整的交互状态(hover/active/focus)
- [ ] 添加适当的阴影
- [ ] 确保表格样式一致
- [ ] 按钮使用正确的变体
- [ ] 响应式设计考虑
- [ ] 可访问性考虑(颜色对比度、键盘导航)

---

## 🚀 快速开始

### CSS 变量导入
将以下代码放在样式表开头:

```css
:root {
    /* 主色调 */
    --color-primary: #1890ff;
    --color-primary-hover: #40a9ff;
    --color-active: #e6f7ff;
    --color-active-border: #91d5ff;

    /* 功能色 */
    --color-success: #52c41a;
    --color-success-hover: #73d13d;
    --color-success-bg: #f6ffed;
    --color-success-border: #b7eb8f;
    --color-warning: #fa8c16;
    --color-warning-hover: #ffa940;
    --color-error: #f5222d;
    --color-error-bg: #fff1f0;
    --color-error-border: #ffa39e;

    /* 中性色 */
    --color-text-primary: #333;
    --color-text-secondary: #666;
    --color-text-tertiary: #999;
    --color-border: #e8e8e8;
    --color-border-light: #d9d9d9;
    --color-bg-dark: #001529;
    --color-bg-light: #f0f2f5;
    --color-bg-white: #fff;
    --color-bg-gray: #fafafa;

    /* 字体 */
    --font-size-xs: 12px;
    --font-size-sm: 13px;
    --font-size-base: 14px;
    --font-size-lg: 16px;
    --font-size-xl: 18px;

    /* 间距 */
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 12px;
    --space-base: 16px;
    --space-lg: 24px;
    --space-xl: 32px;

    /* 圆角 */
    --radius-sm: 2px;
    --radius-base: 4px;
    --radius-lg: 8px;

    /* 阴影 */
    --shadow-sm: 0 1px 2px 0 rgba(0,0,0,0.03),
                  0 1px 6px -1px rgba(0,0,0,0.02),
                  0 2px 4px 0 rgba(0,0,0,0.02);

    /* 过渡 */
    --transition-fast: 0.2s;
    --transition-normal: 0.3s;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
                 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
    background-color: var(--color-bg-light);
    font-size: var(--font-size-base);
    color: var(--color-text-primary);
}
```

---

**版本**: 1.0.0  
**最后更新**: 2026-04-06  
**维护者**: WEID微动设计团队
