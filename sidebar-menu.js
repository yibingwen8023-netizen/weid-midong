/**
 * 侧边栏菜单组件 + 页面内Tab栏渲染
 *
 * 使用方式：
 *   1. HTML 中将 <div class="sidebar">...</div> 替换为 <div id="sidebar"></div>
 *   2. 在 </body> 前引入 <script src="sidebar-menu.js"></script>
 *   3. 自动根据当前 URL 设置 active 状态和展开的子菜单
 *   4. 如果页面需要顶部Tab栏（如门店列表页），在HTML中放 <div id="page-tabs" class="tabs-container"></div> 即可自动渲染
 *
 * 新增页面时，只需在 menuData 数组中添加一项即可，所有页面自动生效。
 * 三级菜单(Tab栏)：在 children 项中添加 tabs 数组即可。
 */

const menuData = [
    {
        icon: 'ri-home-line',
        label: '首页',
        href: 'index.html'
    },
    {
        icon: 'ri-user-line',
        label: '客户',
        children: [
            { label: '客户列表', href: 'customer-list.html' },
            { label: '客户分组' }
        ]
    },
    {
        icon: 'ri-file-list-line',
        label: '订单',
        children: [
            { label: '订单管理' },
            { label: '订单退款' }
        ]
    },
    {
        icon: 'ri-customer-service-line',
        label: '推广',
        children: [
            { label: '推广咨询' },
            { label: '消耗管理' },
            { label: '抖音来客' },
            { label: '推广分析' }
        ]
    },
    {
        icon: 'ri-calendar-line',
        label: '假期人数控制'
    },
    {
        icon: 'ri-bar-chart-line',
        label: '数据',
        children: [
            { label: '加微记录' },
            { label: '前端数据' }
        ]
    },
    {
        icon: 'ri-money-cny-box-line',
        label: '薪酬',
        children: [
            { label: '薪酬管理' }
        ]
    },
    {
        icon: 'ri-calculator-line',
        label: '核算',
        children: [
            { label: '收入核算' },
            { label: '支出核算' }
        ]
    },
    {
        icon: 'ri-store-line',
        label: '门店',
        children: [
            { label: '门店列表', href: 'store-list.html', tabs: [
                { label: '门店列表', href: 'store-list.html' },
                { label: '门店列表(查询)' },
                { label: '门店配置(查询)' },
                { label: '门店配置' },
                { label: '门店接入人' },
                { label: '外部机构' },
                { label: '客户描述' },
                { label: '门店预约项目', href: 'store-appointment.html' },
                { label: '门店推广项目', href: 'store-promotion-config.html' },
                { label: '预约项目快照', href: 'store-appointment-snapshot.html' },
                { label: '推广项目快照', href: 'store-promotion-snapshot.html' }
            ]},
            { label: '老师列表' },
            { label: '老师排班' },
            { label: '门店目标' },
            { label: '数据报表' },
            { label: '智能排客' },
            { label: '接待人列表' }
        ]
    },
    {
        icon: 'ri-archive-line',
        label: '库存',
        children: [
            { label: '库存管理' },
            { label: '出入库记录' }
        ]
    },
    {
        icon: 'ri-checkbox-circle-line',
        label: '审批',
        children: [
            { label: '审批列表' }
        ]
    },
    {
        icon: 'ri-money-cny-circle-line',
        label: '财务',
        children: [
            { label: '收支记录' },
            { label: '财务报表' }
        ]
    },
    {
        icon: 'ri-shopping-bag-line',
        label: '产品',
        children: [
            { label: '基础产品' },
            { label: '多选产品' },
            { label: '产品上架' },
            { label: '产品售价表' },
            { label: '产品售价表(新版)' },
            { label: '预约金' },
            { label: '预约意向上架' },
            { label: '科室分类' }
        ]
    },
    {
        icon: 'ri-file-text-line',
        label: '合同'
    },
    {
        icon: 'ri-smartphone-line',
        label: '小程序'
    },
    {
        icon: 'ri-settings-line',
        label: '系统',
        children: [
            { label: '系统设置' },
            { label: '角色管理' },
            { label: '操作日志' }
        ]
    }
];

/**
 * 渲染侧边栏菜单
 * @param {string} containerId - 容器元素 ID，默认 'sidebar'
 */
function renderSidebar(containerId) {
    const containerId_final = containerId || 'sidebar';
    const container = document.getElementById(containerId_final);
    if (!container) return;

    // 获取当前页面文件名，用于高亮
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // 查找当前页所在的菜单项和父菜单
    let activeParentIndex = -1;
    let activeChildIndex = -1;

    menuData.forEach((item, pIdx) => {
        if (item.href && item.href === currentPage) {
            activeParentIndex = pIdx;
        }
        if (item.children) {
            item.children.forEach((child, cIdx) => {
                // 直接匹配子菜单的 href
                if (child.href && child.href === currentPage) {
                    activeParentIndex = pIdx;
                    activeChildIndex = cIdx;
                }
                // 也搜索子菜单 tabs 中的 href（如门店预约项目等在 tabs 里定义的页面）
                if (child.tabs) {
                    for (const tab of child.tabs) {
                        if (tab.href && tab.href === currentPage) {
                            activeParentIndex = pIdx;
                            activeChildIndex = cIdx;
                            break;
                        }
                    }
                }
            });
        }
    });

    // 生成 HTML
    let html = '';

    menuData.forEach((item, index) => {
        const hasChildren = item.children && item.children.length > 0;
        const isActive = !hasChildren && item.href === currentPage;
        const isExpanded = activeParentIndex === index;
        const showArrow = hasChildren ? 'has-submenu' : '';

        // 一级菜单
        html += '<div class="menu-item ' + showArrow;
        if (isActive) html += ' active';
        if (isExpanded) html += ' expanded';
        html += '">';

        if (item.href) {
            html += '<a href="' + item.href + '" class="menu-link" style="display:flex;align-items:center;width:100%;color:inherit;text-decoration:none;">';
        }

        html += '<i class="' + item.icon + '"></i>';
        html += '<span>' + item.label + '</span>';

        if (hasChildren) {
            html += '<i class="ri-arrow-down-s-line arrow"></i>';
        }

        if (item.href) {
            html += '</a>';
        }

        html += '</div>';

        // 子菜单
        if (hasChildren) {
            html += '<div class="submenu';
            if (isExpanded) html += ' open';
            html += '">';

            item.children.forEach((child, cIndex) => {
                const childActive = activeParentIndex === index && activeChildIndex === cIndex;
                html += '<div class="submenu-item';
                if (childActive) html += ' active';
                html += '">';

                if (child.href) {
                    html += '<a href="' + child.href + '" class="menu-link">' + child.label + '</a>';
                } else {
                    html += child.label;
                }

                html += '</div>';
            });

            html += '</div>';
        }
    });

    container.innerHTML = html;
    container.className = 'sidebar';

    // 绑定菜单交互事件
    initMenuEvents();
}

/**
 * 菜单展开/收起交互
 */
function initMenuEvents() {
    // 有子菜单的一级菜单：点击展开/收起（手风琴）
    const menuItems = document.querySelectorAll('.has-submenu');
    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            if (e.target.closest('.submenu')) return;

            const isExpanded = this.classList.contains('expanded');

            menuItems.forEach(m => {
                m.classList.remove('expanded');
                const sub = m.nextElementSibling;
                if (sub && sub.classList.contains('submenu')) {
                    sub.classList.remove('open');
                }
            });

            if (!isExpanded) {
                this.classList.add('expanded');
                const submenu = this.nextElementSibling;
                if (submenu && submenu.classList.contains('submenu')) {
                    submenu.classList.add('open');
                }
            }
        });
    });

    // 子菜单项点击高亮
    const submenuItems = document.querySelectorAll('.submenu-item');
    submenuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
            submenuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// 页面加载后自动渲染
document.addEventListener('DOMContentLoaded', function () {
    renderSidebar();
    renderPageTabs();
});

/**
 * 渲染页面内顶部Tab栏（三级菜单）
 *
 * 使用方式：在页面HTML中放置 <div id="page-tabs" class="tabs-container"></div>
 * 脚本会根据当前页面对应的菜单项中的 tabs 数据自动渲染Tab。
 * 带有 href 的Tab点击后会跳转到对应页面。
 */
function renderPageTabs() {
    const container = document.getElementById('page-tabs');
    if (!container) return;

    // 获取当前页面
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // 查找当前页对应的菜单项及其tabs数据
    let tabsData = null;

    for (const item of menuData) {
        // 一级菜单直接匹配
        if (item.href && item.href === currentPage && item.tabs) {
            tabsData = item.tabs;
            break;
        }
        // 二级子菜单匹配
        if (item.children) {
            for (const child of item.children) {
                if (child.href && child.href === currentPage && child.tabs) {
                    tabsData = child.tabs;
                    break;
                }
                // 也检查当前页面是否在tabs的href列表中
                if (child.tabs) {
                    for (const tab of child.tabs) {
                        if (tab.href && tab.href === currentPage) {
                            tabsData = child.tabs;
                            break;
                        }
                    }
                }
                if (tabsData) break;
            }
        }
        if (tabsData) break;
    }

    if (!tabsData || tabsData.length === 0) return;

    // 生成Tab HTML
    let html = '<div class="tabs-header">';
    tabsData.forEach(tab => {
        const isActive = tab.href ? tab.href === currentPage : false;
        const hrefAttr = tab.href ? (' data-href="' + tab.href + '"') : '';
        html += '<div class="tab-item' + (isActive ? ' active' : '') + '"' + hrefAttr + '>' + tab.label + '</div>';
    });
    html += '</div>';

    container.innerHTML = html;

    // 绑定Tab点击事件
    container.querySelectorAll('.tab-item').forEach(tab => {
        tab.addEventListener('click', function () {
            container.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const href = this.getAttribute('data-href');
            if (href) {
                window.location.href = href;
            }
        });
    });
}
