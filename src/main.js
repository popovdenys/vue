// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router'
Vue.config.devtools = true

Vue.config.productionTip = false

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

new Vue({
  el: '.sample',
  data: {
    name: 'Denys Popov'
  },
  template: '<p>{{ name }}</p>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Овощи' },
      { id: 1, text: 'Сыр' },
      { id: 2, text: 'Что там ещё люди едят?' }
    ]
  }
})

var app = new Vue({
  el: '#dny',
  data: {
    message: 'Salut'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Вы загрузили эту страницу в: ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

/* eslint-disable no-new
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
*/
