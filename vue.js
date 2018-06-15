'use strict';

let app = new Vue({
    el: "#app",
    data: {
        message: 'Hello Vue.js!',
        seen: true,
        itemList: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ],
    },


});

// app.message = "new messages";
// app.seen = false;