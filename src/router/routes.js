
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
        meta: {
          public: true
        }
      },
      {
        path: '/message',
        component: () => import('pages/Message.vue')
      },
      {
        path: '/userMessage/:id?',
        component: () => import('pages/UserMessage.vue')
      },
      {
        path: '/search/:name?',
        component: () => import('pages/Search.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../pages/Signup.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
    meta: {
      public: true
    }
  }
]

export default routes
