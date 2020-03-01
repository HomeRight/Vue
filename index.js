var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        seen: true,
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    },
    methods: {
        reserveWord: function () {
            this.message = this.message.split('').reverse().join('');
        }

    }
});

var test1 = new Vue({
    el: '#test',
    data: {
        test: 'Hello Test!'
    }
});


var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});



app.message = 'I have change data';
app.seen = false;
app.todos.push({ text: 'earn money' })