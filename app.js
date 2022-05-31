var app = Vue.createApp({
    data() { 
        return {
            msg : "Counter App" ,
            count : 0
        };
    },
    methods: {
        increase() {            
           
        },
        decrease() {
            this.count-- ;
        }
    },
  
});


app.mount("#app");