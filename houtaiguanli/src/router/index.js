import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import login from '../components/pages/login'
import index from '../components/pages/index'


import manager from '../components/pages/manager'
import user from '../components/pages/user'
import publish from '../components/pages/publish'
import welcome from '../components/pages/welcome'
import managerList from '../components/pages/managerList'
import managerCreate from '../components/pages/managerCreate'

import userList from '../components/pages/userList'
import userCreate from '../components/pages/userCreate'
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      component: login
    },
    {
      path: "/index",
      component: index,
      children:[
        {path:"",component:welcome},
        {
          path:"manager",
          component:manager,
          children:[
            {
              path:"",
              component:managerList,
              name:"管理员列表"
            },
            {
              path:"create",
              component:managerCreate,
              name:"新建|修改管理员"
            }
          ]
        },
        {
          path: "user",
          component: user,
          children:[
            {
              path:"",
              component:userList,
              name:"用户列表"
            },
            {
              path:"create",
              component:userCreate,
              name:"新建|修改用户"
            }
          ]
        },
        {
          path: "publish",
          component: publish
        },

          ]
        },

    //     
    //    
    //   ]
    // }
    //  {
    //    path:'*',
    //    redirect:'/login'
    //  }

  ]
})
