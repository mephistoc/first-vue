var helloVue = new Vue({
    el: '#helloVue',
    data: {
        welcomeMessage: 'Hello Vue 2018'
    }
});

var messageBoard = new Vue({
    el: '#messageBoard',
    data: {
        welcomeMessage: 'Here is current time: ' + new Date().toLocaleString()
    }
});

var conditionTest = new Vue({
    el: '#conditionTest',
    data: {
        seen: true
    }
});

var repeated = new Vue({
    el: '#repeated',
    data: {
        items: [{
            desc: 'A1'
        }, {
            desc: 'A2'
        }, {
            desc: 'A3'
        }]
    }
});

var inputDemo = new Vue({
    el: '#inputDemo',
    data: {
        message: 'Demo Message'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
});