'use strict';

let app = new Vue({
    el: "#app",
    data: {
        message: 'Hello Vue.js!',
        seen: true,
        itemList: [
            { text: 'Learn JavaScript', id: 0 },
            { text: 'Learn Vue', id: 1 },
            { text: 'Build something awesome', id: 2 },
        ],
        dinam_mes: 'Hello Vue.js!',
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    },


});

app.itemList.push({ text: 'New elements', id: 3 });

// app.message = "new messages";
// app.seen = false;


Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

let app2 = new Vue({
  el: '#app-2',
  data: {
    groceryList: [
      { id: 0, text: 'Овощи' },
      { id: 1, text: 'Сыр' },
      { id: 2, text: 'Что там ещё люди едят?' }
    ]
  }
});