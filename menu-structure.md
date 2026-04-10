# 微动后台管理系统 - 菜单功能结构图

## 📊 菜单层级结构

```
微动后台管理系统
├── 🏠 首页
│
├── 👥 客户
│   ├── 客户列表
│   │   └── 客户详情
│   ├── 客户分组
│   └── 客户标签
│
├── 📋 订单
│
├── 🎧 推广咨询
│
├── 📊 数据
│   ├── 加微记录
│   └── 前端数据
│
├── 💰 核算
│
├── 🏪 门店列表
│
├── ✅ 审批
│
├── 💵 收支记录
│
└── 🛍️ 产品
    ├── 预约意向上架
    └── 门店预约项目
```

---

## 📋 菜单详情表

| 一级菜单 | 图标 | 二级菜单 | 功能说明 | 页面文件 |
|---------|------|---------|---------|---------|
| 🏠 首页 | ri-home-line | - | 系统首页，数据概览 | - |
| 👥 客户 | ri-user-line | 客户列表 | 客户列表，支持搜索、筛选、导出 | customer-list.html |
| | | - 客户详情 | 客户详细信息，包括消费记录、订单列表 | customer-detail.html |
| | | 客户分组 | 客户分组管理（待开发） | - |
| | | 客户标签 | 客户标签管理（待开发） | - |
| 📋 订单 | ri-file-list-line | - | 订单管理（待扩展子菜单） | - |
| 🎧 推广咨询 | ri-customer-service-line | - | 推广活动咨询管理 | - |
| 📊 数据 | ri-bar-chart-line | 加微记录 | 客户加微信记录追踪 | - |
| | | 前端数据 | 前端业务数据统计 | index.html |
| 💰 核算 | ri-calculator-line | - | 财务核算（待扩展子菜单） | - |
| 🏪 门店列表 | ri-store-line | - | 门店信息管理 | store-list.html |
| ✅ 审批 | ri-checkbox-circle-line | - | 审批流程（待扩展子菜单） | - |
| 💵 收支记录 | ri-money-cny-circle-line | - | 收支明细记录 | - |
| 🛍️ 产品 | ri-shopping-bag-line | 预约意向上架 | 预约意向产品上架管理（待开发） | - |
| | | 门店预约项目 | 门店预约项目管理 | store-appointment.html |

---

## 🎨 菜单交互特性

### 展开/收起功能
- **一级菜单**: 点击可展开/收起子菜单
- **箭头动画**: 展开时箭头旋转 180°
- **平滑过渡**: 子菜单使用 max-height 动画

### 激活状态
- **一级菜单激活**: 蓝色背景 (#1890ff)
- **子菜单激活**: 白色文字
- **标签页激活**: 蓝色文字 + 底部 2px 指示条

### 样式类说明
```css
.has-submenu    /* 有子菜单的一级菜单 */
.expanded       /* 展开状态 */
.open           /* 子菜单显示状态 */
.active         /* 激活状态 */
```

---

## 📱 页面标签页结构

标签页位于页面顶部，以横向排列：

```
页面顶部标签栏
└── 激活标签 (底部蓝色指示条)
```

**特点:**
- 白色背景
- 激活状态: 蓝色文字 + 底部 2px 指示条
- 悬停效果: 蓝色文字
- 过渡动画: 0.3s 平滑过渡

---

## 🔧 技术实现

### HTML 结构
```html
<div class="sidebar">
    <!-- 一级菜单 -->
    <div class="menu-item has-submenu expanded">
        <i class="ri-user-line"></i>
        <span>客户</span>
        <i class="ri-arrow-down-s-line arrow"></i>
    </div>
    
    <!-- 二级菜单 -->
    <div class="submenu open">
        <div class="submenu-item">客户列表</div>
        <div class="submenu-item active">客户分组</div>
    </div>
</div>

<!-- 页面标签页 -->
<div class="tabs-container">
    <div class="tabs-header">
        <div class="tab-item active">门店预约项目</div>
    </div>
</div>
```

### JavaScript 交互
```javascript
// 菜单展开/收起
document.querySelectorAll('.has-submenu').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('expanded');
        const submenu = this.nextElementSibling;
        if (submenu && submenu.classList.contains('submenu')) {
            submenu.classList.toggle('open');
        }
    });
});

// 子菜单激活
document.querySelectorAll('.submenu-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelectorAll('.submenu-item').forEach(i => {
            i.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// 标签页切换
document.querySelectorAll('.tab-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.tab-item').forEach(i => {
            i.classList.remove('active');
        });
        this.classList.add('active');
    });
});
```

---

## 📚 使用说明

1. **创建新页面**: 复制 `master-template.html` 母版文件
2. **修改菜单激活状态**: 
   - 一级菜单: 添加 `active` 和 `expanded` 类
   - 二级菜单: 添加 `active` 类
   - 标签页: 添加 `active` 类
3. **配置标签页**: 在 `.tabs-header` 容器中添加标签页
4. **添加页面内容**: 在 `.page-content` 容器中放置具体内容

---

## ⚠️ 重要说明

**当前菜单结构基于原始 `store-appointment.html` 页面:**
- 只有"数据"和"产品"两个一级菜单有展开的子菜单
- "客户"、"订单"、"核算"、"审批"等一级菜单有箭头，但子菜单未展开
- 页面标签页目前只有单个标签"门店预约项目"

**如需扩展菜单结构:**
1. 在对应一级菜单后添加 `<div class="submenu">` 容器
2. 添加子菜单项 `<div class="submenu-item">`
3. 在标签页区域添加更多标签页

---

**文档版本**: 1.0
**最后更新**: 2026-04-06
**维护者**: 阿文
