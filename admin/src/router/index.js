import Vue from 'vue'
import Router from 'vue-router'
// 登录
import Login from '../views/Login.vue'
// 主界面
import Main from '../views/Main.vue'
// 分类
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'
// 装备
import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'
// 英雄
import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'
// 文章
import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'
// 广告
import AdEdit from '../views/AdEdit.vue'
import AdList from '../views/AdList.vue'
// 用户
import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    // 登录界面路由设置 登录页不需要校验 -- meta: { isPublic: true }
    { path: '/login', name: 'login', component: Login, meta: { isPublic: true } },
    // 主界面路由设置
    {
      path: '/',
      name: 'main',
      component: Main,
      // 主界面各个子界面路由设置
      children: [
        // 分类
        { path: '/categories/create', component: CategoryEdit },
        { path: '/categories/edit/:id', component: CategoryEdit, props: true },
        { path: '/categories/list', component: CategoryList },
        // 装备
        { path: '/items/create', component: ItemEdit },
        { path: '/items/edit/:id', component: ItemEdit, props: true },
        { path: '/items/list', component: ItemList },
        // 英雄
        { path: '/heroes/create', component: HeroEdit },
        { path: '/heroes/edit/:id', component: HeroEdit, props: true },
        { path: '/heroes/list', component: HeroList },
        // 文章
        { path: '/articles/create', component: ArticleEdit },
        { path: '/articles/edit/:id', component: ArticleEdit, props: true },
        { path: '/articles/list', component: ArticleList },
        // 广告
        { path: '/ads/create', component: AdEdit },
        { path: '/ads/edit/:id', component: AdEdit, props: true },
        { path: '/ads/list', component: AdList },
        // 用户
        { path: '/admin_users/create', component: AdminUserEdit },
        { path: '/admin_users/edit/:id', component: AdminUserEdit, props: true },
        { path: '/admin_users/list', component: AdminUserList },
      ]
    },
  ]
})
// 页面限制
router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})
// 默认暴露
export default router