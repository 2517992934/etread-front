import { createRouter, createWebHistory } from 'vue-router'
import Bookshelf from '@/views/Bookshelf.vue'
import UnifiedReaderView from '@/views/UnifiedReaderView.vue'
import Auth from '@/views/Auth.vue'
import StoreUpload from '@/views/StoreUpload.vue'
import StoreDetail from '@/views/StoreDetail.vue'
import OnlineReaderView from '@/views/OnlineReaderView.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'bookshelf',
      component: Bookshelf
    },
    {
      path: '/reader/:bookId',
      name: 'reader',
      component: UnifiedReaderView,
      props: true
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/store/upload',
      name: 'store-upload',
      component: StoreUpload
    },
    {
      path: '/store/detail/:id',
      name: 'store-detail',
      component: StoreDetail,
      props: true
    },
    {
      path: '/online/:bookId',
      name: 'online-reader',
      component: OnlineReaderView,
      props: true
    }
  ]
})

export default router
