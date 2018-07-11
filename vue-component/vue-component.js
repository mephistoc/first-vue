Vue.component('product-list', {
    props: ['product'],
    template: '<li>{{ product.name }}</li>'
});

var componentContainer = new Vue({
    el: '#vue-component',
    data: {
        myProductList: [
            { id: 0, name: 'AgilePoint NX' },
            { id: 1, name: 'eForm Designer' },
            { id: 2, name: 'Process Designer' }
        ]
    }
});