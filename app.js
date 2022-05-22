var app = Vue.createApp({
    data() {
        return {
            show:false
        };
    },
    
    methods: {
       toggle(){
           this.show = ! this.show ; 
       }
    },

});

app.mount("#app");