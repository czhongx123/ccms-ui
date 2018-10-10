import ModuleHome from '@/pages/ModuleHome'
import ModulePage1 from '@/pages/ModulePage1'
import ModulePage2 from '@/pages/ModulePage2'
import moduleConfig from '@root/package.json'
import BusinessManagement from '@/pages/businessManagement'
import TenantManagement from '@/pages/tenantManagement'
export default [{
    // 模块主路由通过工程信息自动配置，无需手动更改
    path: '/' + moduleConfig.name,
    component: ModuleHome,
    // 路由元数据，包含路由扩展配置信息
    meta: {
        title: '企业管理', // 页面标题，用于显示在浏览器标题
        inMenu: true // 不记录路由，手动设置成true时，当前路由不会记录在页面标签栏中。
    },
    children: [{
            path: 'page1',
            component: ModulePage1,
            meta: {
                title: '模块页面1'
            }
        },
        {
            path: 'businessManagement',
            component: BusinessManagement,
            meta: {
                title: '企业管理',
                inMenu: true
            }
        },
        {
            path: 'tenantManagement',
            component: TenantManagement,
            meta: {
                title: '租户队列管理',
                inMenu: true
            }
        },
        {
            path: 'page2',
            component: ModulePage2,
            meta: {
                title: '模块页面2'
            }
        }
    ]
}]