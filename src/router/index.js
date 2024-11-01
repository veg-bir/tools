import { createRouter, createWebHistory } from 'vue-router';  
import Menu from '../views/Menu.vue'
import Ip from '../components/Ip.vue'

const routes = [  
  {  
    path: '/',  
    // redirect: '/firework',
    name: 'Menu',  
    component: Menu,
    meta: { title: 'Menu' },
    children: [
        {
            path: '/ip',
            name: 'Ip',
            component: Ip,
            meta: { title: 'tool IP' }
        }
    ]
  },
  
  
];  

const router = createRouter({  
  history: createWebHashHistory(),  
  routes  
});  

router.beforeEach((to, from, next) => {
    // console.log(to);
    document.title = to.meta.title;
    next();
})

export default router;