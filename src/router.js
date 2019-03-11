import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BugForm from './components/BugForm.vue'
import BugDetails from './components/BugDetails.vue'
import BugNotes from './components/BugNotes.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/details/:id',
      name: 'bug-details',
      component: BugDetails
    },
    {
      path: '/post-a-bug',
      name: 'bug-form',
      component: BugForm,
    },
  ]
})
